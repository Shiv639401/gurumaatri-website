
import { useCallback, useEffect, useState } from "react";

/**
 * Safely read a value from localStorage.
 * Returns the fallback value when the key is missing,
 * JSON is invalid, or storage is unavailable.
 */
function readStorageValue<T>(key: string, initialValue: T): T {
  if (typeof window === "undefined") {
    return initialValue;
  }

  try {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue === null) {
      return initialValue;
    }

    return JSON.parse(storedValue) as T;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn(
        `[useLocalStorage] Could not read "${key}" from localStorage.`,
        error
      );
    }

    return initialValue;
  }
}

/**
 * React hook for persistent browser storage.
 *
 * Features:
 * - TypeScript generic support
 * - Lazy initialization
 * - Functional state updates
 * - Cross-tab storage synchronization
 * - Safe JSON serialization and parsing
 * - SSR-safe initialization
 * - Reset to the initial value
 *
 * Note: localStorage is not encrypted. Do not store passwords,
 * authentication tokens, payment details, or other sensitive data.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((previousValue: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() =>
    readStorageValue(key, initialValue)
  );

  // Read the latest value when the storage key changes.
  useEffect(() => {
    setStoredValue(readStorageValue(key, initialValue));
  }, [key]);

  // Persist the latest state to localStorage.
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn(
          `[useLocalStorage] Could not save "${key}" to localStorage.`,
          error
        );
      }
    }
  }, [key, storedValue]);

  // Update state using either a value or a functional updater.
  const updateValue = useCallback(
    (value: T | ((previousValue: T) => T)) => {
      setStoredValue((previousValue) =>
        typeof value === "function"
          ? (value as (previousValue: T) => T)(previousValue)
          : value
      );
    },
    []
  );

  // Reset state and storage to the supplied initial value.
  const resetValue = useCallback(() => {
    setStoredValue(initialValue);
  }, [initialValue]);

  // Synchronize changes made in other browser tabs.
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(
          event.newValue === null
            ? initialValue
            : (() => {
                try {
                  return JSON.parse(event.newValue) as T;
                } catch {
                  return initialValue;
                }
              })()
        );
      }

      // Another tab cleared all localStorage.
      if (event.key === null) {
        setStoredValue(initialValue);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [key, initialValue]);

  return [storedValue, updateValue, resetValue];
}

export default useLocalStorage;
