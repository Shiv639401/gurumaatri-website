
import { useEffect, useState } from "react";

/**
 * Reusable media query hook for React + TypeScript.
 *
 * @param query - A valid CSS media query.
 * @returns Whether the media query currently matches.
 *
 * Examples:
 * useMediaQuery("(max-width: 767px)")
 * useMediaQuery("(min-width: 768px)")
 * useMediaQuery("(prefers-reduced-motion: reduce)")
 */

function getMediaQueryMatch(query: string): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }

  return window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    getMediaQueryMatch(query)
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      setMatches(false);
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Sync with the current viewport or device preference.
    const updateMatch = () => {
      setMatches(mediaQueryList.matches);
    };

    updateMatch();

    // Modern browsers.
    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", updateMatch);

      return () => {
        mediaQueryList.removeEventListener("change", updateMatch);
      };
    }

    // Legacy browser fallback.
    mediaQueryList.addListener(updateMatch);

    return () => {
      mediaQueryList.removeListener(updateMatch);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
