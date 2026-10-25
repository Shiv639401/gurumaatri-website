
import { Suspense, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import Providers from "./providers";
import { router } from "./router";

function AppLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const interval = window.setInterval(() => {
      currentProgress += Math.max(
        1,
        Math.ceil((92 - currentProgress) * 0.09)
      );

      if (currentProgress >= 92) {
        currentProgress = 92;
        window.clearInterval(interval);
      }

      setProgress(currentProgress);
    }, 100);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fbfbff] px-5 py-12 text-slate-900"
      role="status"
      aria-live="polite"
      aria-label="Loading GuruMaatri Innovations"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-[100px]" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-violet-200/40 blur-[110px]" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-indigo-100/70 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#4338ca 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Decorative orbital rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(85vw,560px)] w-[min(85vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(68vw,440px)] w-[min(68vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/40"
      />

      {/* Main loading panel */}
      <section className="relative z-10 w-full max-w-xl">
        <div className="rounded-[32px] border border-white/90 bg-white/75 p-7 shadow-[0_30px_100px_-35px_rgba(79,70,229,0.22)] backdrop-blur-2xl sm:p-12">
          {/* Brand logo */}
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-[gm-orbit_5s_linear_infinite] rounded-[28px] border border-dashed border-indigo-300"
            />

            <div className="absolute inset-2 rounded-[23px] bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-500 shadow-xl shadow-indigo-600/25" />

            <span className="relative text-4xl font-black tracking-tight text-white">
              G<span className="text-violet-200">M</span>
            </span>

            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>

          {/* Brand label */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700 sm:text-xs">
                Digital experiences, reimagined
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl">
              GuruMaatri
              <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Innovations
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
              Thoughtful design. Powerful technology.
              <span className="block">
                Preparing something exceptional for you.
              </span>
            </p>
          </div>

          {/* Progress section */}
          <div className="mt-10">
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                Preparing your experience
              </span>

              <span className="min-w-10 text-right text-sm font-extrabold tabular-nums text-indigo-700">
                {progress}%
              </span>
            </div>

            <div
              className="h-2 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-label="Loading animation progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="relative h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500 transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white/60" />
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-slate-400">
              Please wait while everything gets ready.
            </p>
          </div>

          {/* Brand capabilities */}
          <div className="mt-8 grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 pt-6">
            <div className="px-1 text-center">
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="13"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M8 21h8M12 17v4M7 9h4M7 12h7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="mt-2 text-[10px] font-bold text-slate-600 sm:text-xs">
                Web Design
              </p>
            </div>

            <div className="px-1 text-center">
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-2 text-[10px] font-bold text-slate-600 sm:text-xs">
                Development
              </p>
            </div>

            <div className="px-1 text-center">
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3.5 14.6 9l5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8L12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-2 text-[10px] font-bold text-slate-600 sm:text-xs">
                Innovation
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <span className="text-xs font-medium text-slate-400">
            Crafted with care by
          </span>
          <span className="text-xs font-bold text-indigo-700">
            GuruMaatri Innovations
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
          <span className="text-xs text-slate-400">
            Design meets technology
          </span>
        </div>
      </section>

      <style>{`
        @keyframes gm-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

export default function App() {
  return (
    <Providers>
      <Suspense fallback={<AppLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  );
}
