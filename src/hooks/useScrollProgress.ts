
import { useEffect, useState } from "react";

export interface ScrollProgress {
  /** Vertical scroll position in pixels */
  scrollY: number;

  /** Total document scroll progress from 0 to 100 */
  progress: number;

  /** Whether the page has been scrolled down */
  isScrolled: boolean;

  /** Whether the user has reached the bottom of the page */
  isAtBottom: boolean;
}

interface UseScrollProgressOptions {
  /** Minimum scroll position before isScrolled becomes true */
  threshold?: number;

  /** Distance in pixels from the bottom to count as at-bottom */
  bottomOffset?: number;
}

const DEFAULT_THRESHOLD = 10;
const DEFAULT_BOTTOM_OFFSET = 2;

function getScrollMetrics(
  threshold: number,
  bottomOffset: number
): ScrollProgress {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {
      scrollY: 0,
      progress: 0,
      isScrolled: false,
      isAtBottom: false,
    };
  }

  const scrollY = Math.max(
    0,
    window.scrollY ?? window.pageYOffset ?? 0
  );

  const documentElement = document.documentElement;
  const body = document.body;

  const documentHeight = Math.max(
    documentElement.scrollHeight,
    documentElement.offsetHeight,
    body?.scrollHeight ?? 0,
    body?.offsetHeight ?? 0
  );

  const viewportHeight = window.innerHeight;
  const maxScroll = Math.max(0, documentHeight - viewportHeight);

  const progress =
    maxScroll > 0
      ? Math.min(100, Math.max(0, (scrollY / maxScroll) * 100))
      : 0;

  const distanceFromBottom = maxScroll - scrollY;

  return {
    scrollY,
    progress,
    isScrolled: scrollY > threshold,
    isAtBottom: distanceFromBottom <= bottomOffset,
  };
}

/**
 * Tracks document scroll progress for React components.
 *
 * @param options - Optional scroll threshold and bottom offset.
 * @returns Scroll position, percentage progress, and scroll states.
 */
export function useScrollProgress(
  options: UseScrollProgressOptions = {}
): ScrollProgress {
  const {
    threshold = DEFAULT_THRESHOLD,
    bottomOffset = DEFAULT_BOTTOM_OFFSET,
  } = options;

  const safeThreshold = Number.isFinite(threshold)
    ? Math.max(0, threshold)
    : DEFAULT_THRESHOLD;

  const safeBottomOffset = Number.isFinite(bottomOffset)
    ? Math.max(0, bottomOffset)
    : DEFAULT_BOTTOM_OFFSET;

  const [scrollState, setScrollState] = useState<ScrollProgress>(() =>
    getScrollMetrics(safeThreshold, safeBottomOffset)
  );

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      // Limit layout measurements to one update per animation frame.
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;

        const nextState = getScrollMetrics(
          safeThreshold,
          safeBottomOffset
        );

        setScrollState((previousState) => {
          if (
            previousState.scrollY === nextState.scrollY &&
            previousState.progress === nextState.progress &&
            previousState.isScrolled === nextState.isScrolled &&
            previousState.isAtBottom === nextState.isAtBottom
          ) {
            return previousState;
          }

          return nextState;
        });
      });
    };

    // Initialize after the component mounts.
    updateScrollState();

    window.addEventListener("scroll", updateScrollState, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollState, {
      passive: true,
    });

    // Recalculate if content or viewport dimensions change.
    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateScrollState)
        : null;

    if (resizeObserver) {
      resizeObserver.observe(document.documentElement);

      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);

      resizeObserver?.disconnect();

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [safeThreshold, safeBottomOffset]);

  return scrollState;
}

export default useScrollProgress;
