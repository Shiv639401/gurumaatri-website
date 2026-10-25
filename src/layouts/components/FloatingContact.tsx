
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CONTACT = {
  // Launch se pehle apna actual business number set karo.
  // Country code ke saath digits only, jaise 919876543210.
  whatsappNumber: "919792317037",
  // International format mein + aur spaces ke saath phone link use kar sakte ho.
  phoneNumber: "+919792317037",
  // Apne business email se replace karo.
  email: "ssgroup062026@gmail.com",
  // WhatsApp par khulne wala initial message.
  message:
    "Hi GuruMaatri Innovations! I would like to discuss a website or web application project.",
};

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20.1 11.8a8.2 8.2 0 0 1-12.1 7.2L3 20l1.1-4.8a8.2 8.2 0 1 1 16-3.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.5.9 1.3 1.6 2.2 2.1.3.2.5.2.7-.1l.8-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.6-.5.5-1.2.7-1.9.6-1.1-.2-2.3-.8-3.6-1.9-1.1-1-2.1-2.3-2.5-3.4-.4-1.1 0-2.1.5-2.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M7 3.5h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M10 17.5h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.6-4A7.5 7.5 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.5h7M8.5 14.5h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.message)}`;
  const phoneUrl = `tel:${CONTACT.phoneNumber.replace(/[^\d+]/g, "")}`;
  const emailUrl = `mailto:${CONTACT.email}`;

  return (
    <>
      {/* Click-away backdrop */}
      {open && (
        <button
          type="button"
          aria-label="Close contact menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[80] cursor-default bg-slate-900/10 backdrop-blur-[2px]"
        />
      )}

      <div className="pointer-events-none fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
        {/* Expanded contact options */}
        {open && (
          <div
            id="gm-floating-contact-menu"
            className="pointer-events-auto w-[min(340px,calc(100vw-32px))] origin-bottom-right animate-[gmContactIn_180ms_ease-out] overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
          >
            {/* Menu header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 p-5 text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full border border-white/15"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 -top-5 h-24 w-24 rounded-full border border-white/15"
              />

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[1.5px] text-indigo-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Let's connect
                  </span>
                  <h2 className="mt-3 text-xl font-extrabold tracking-tight">
                    How can we help?
                  </h2>
                  <p className="mt-1 max-w-[235px] text-xs leading-5 text-indigo-100">
                    Tell us about your idea. Let’s explore the right digital
                    solution for your business.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close contact options"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/20 focus-visible:outline-white"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/* Contact actions */}
            <div className="space-y-2 p-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3 transition duration-200 hover:border-emerald-200 hover:bg-emerald-50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm transition group-hover:scale-105">
                  <WhatsAppIcon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-slate-800">
                    WhatsApp us
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-5 text-slate-500">
                    Discuss your project directly
                  </span>
                </span>
                <ArrowIcon />
              </a>

              <a
                href={phoneUrl}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 transition duration-200 hover:border-indigo-200 hover:bg-indigo-50/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <PhoneIcon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-slate-800">
                    Call directly
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-5 text-slate-500">
                    Talk through your requirements
                  </span>
                </span>
                <ArrowIcon />
              </a>

              <a
                href={emailUrl}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 transition duration-200 hover:border-violet-200 hover:bg-violet-50/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <MessageIcon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-slate-800">
                    Send an email
                  </span>
                  <span className="mt-0.5 block break-all text-[11px] leading-5 text-slate-500">
                    {CONTACT.email}
                  </span>
                </span>
                <ArrowIcon />
              </a>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3.5 text-white transition hover:bg-indigo-700"
              >
                <span>
                  <span className="block text-sm font-bold">
                    Project enquiry
                  </span>
                  <span className="mt-0.5 block text-[10px] text-slate-300">
                    Visit our contact page
                  </span>
                </span>
                <ArrowIcon />
              </Link>
            </div>

            <div className="border-t border-slate-100 px-4 py-3 text-center">
              <p className="text-[10px] leading-5 text-slate-400">
                GuruMaatri Innovations · Digital experiences, thoughtfully built.
              </p>
            </div>
          </div>
        )}

        {/* Main floating launcher */}
        <div className="pointer-events-auto flex items-center gap-3">
          {!open && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden max-w-[205px] rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 text-left shadow-lg shadow-slate-900/5 backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl sm:block"
            >
              <span className="block text-xs font-extrabold text-slate-800">
                Have a project in mind?
              </span>
              <span className="mt-1 block text-[10px] text-slate-500">
                Let’s talk about it →
              </span>
            </button>
          )}

          <button
            type="button"
            aria-label={open ? "Close contact options" : "Open contact options"}
            aria-expanded={open}
            aria-controls="gm-floating-contact-menu"
            onClick={() => setOpen((current) => !current)}
            className={`group relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[22px] text-white shadow-[0_12px_35px_rgba(79,70,229,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(79,70,229,0.4)] focus-visible:outline-indigo-500 focus-visible:outline-offset-4 sm:h-16 sm:w-16 ${
              open
                ? "rotate-0 bg-slate-900"
                : "bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600"
            }`}
          >
            {!open && (
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-[22px] bg-indigo-500/20 motion-reduce:animate-none"
              />
            )}

            <span className="relative transition-transform duration-300 group-hover:scale-110">
              {open ? (
                <CloseIcon />
              ) : (
                <WhatsAppIcon className="h-7 w-7" />
              )}
            </span>

            {!open && (
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-400"
              />
            )}
          </button>
        </div>
      </div>

      {/* Small entrance animation */}
      <style>
        {`
          @keyframes gmContactIn {
            from {
              opacity: 0;
              transform: translateY(8px) scale(0.97);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            [class*="gmContactIn"] {
              animation: none !important;
            }
          }
        `}
      </style>
    </>
  );
}
