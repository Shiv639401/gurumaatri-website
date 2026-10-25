
import { motion } from "motion/react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  animate?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlightedTitle,
  description,
  align = "center",
  className = "",
  animate = true,
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  const content = (
    <div
      className={`flex max-w-3xl flex-col ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlightedTitle && (
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
            {highlightedTitle}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  );
}
