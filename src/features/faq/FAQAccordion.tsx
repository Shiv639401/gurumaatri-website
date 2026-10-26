
import { useId, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQAccordionItem {
  question: string;
  answer: string;
  category?: string;
}

type FAQAccordionProps = {
  items: FAQAccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number | null;
  className?: string;
  emptyMessage?: string;
};

export default function FAQAccordion({
  items,
  allowMultiple = false,
  defaultOpenIndex = null,
  className = "",
  emptyMessage = "No questions found in this category.",
}: FAQAccordionProps) {
  const id = useId();

  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== null &&
      defaultOpenIndex >= 0 &&
      defaultOpenIndex < items.length
      ? [defaultOpenIndex]
      : []
  );

  const toggleItem = (index: number) => {
    setOpenIndexes((current) => {
      const isOpen = current.includes(index);

      if (isOpen) {
        return current.filter((item) => item !== index);
      }

      if (allowMultiple) {
        return [...current, index];
      }

      return [index];
    });
  };

  if (items.length === 0) {
    return (
      <div
        className={[
          "flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center",
          className,
        ].join(" ")}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
          <HelpCircle size={23} aria-hidden="true" />
        </span>

        <p className="mt-4 text-sm font-medium text-slate-700">
          {emptyMessage}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Try selecting another category or changing your search.
        </p>
      </div>
    );
  }

  return (
    <div
      className={[
        "w-full divide-y divide-slate-200 border-y border-slate-200",
        className,
      ].join(" ")}
    >
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const triggerId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;

        return (
          <div
            key={`${item.category ?? "faq"}-${item.question}`}
            className="group"
          >
            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className={[
                  "flex w-full items-center justify-between gap-5 py-5 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500",
                ].join(" ")}
              >
                <span
                  className={[
                    "text-sm font-semibold leading-6 transition-colors sm:text-base",
                    isOpen
                      ? "text-indigo-700"
                      : "text-slate-900 group-hover:text-indigo-700",
                  ].join(" ")}
                >
                  {item.question}
                </span>

                <span
                  className={[
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-180 border-indigo-200 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 bg-white text-slate-500 group-hover:border-indigo-200",
                  ].join(" ")}
                >
                  <ChevronDown size={17} aria-hidden="true" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="pb-5"
            >
              <div className="max-w-3xl pr-3 text-sm leading-7 text-slate-600 sm:pr-12">
                {item.answer}
              </div>

              {item.category && (
                <span className="mt-3 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                  {item.category}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
