
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  LoaderCircle,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  User,
  Building2,
  Wallet,
  CalendarDays,
  Code2,
  AlertCircle,
} from "lucide-react";

import { submitLead } from "../../services/lead.service";

const services = [
  "Website Development",
  "UI/UX Design",
  "Mobile App Development",
  "AI & Automation",
  "E-commerce Solutions",
  "Custom Software",
  "Other / Not Sure Yet",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
  "Not decided yet",
];

const timelines = [
  "As soon as possible",
  "Within 2–4 weeks",
  "Within 1–2 months",
  "Within 3 months",
  "Flexible",
];

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (
    data: ContactFormData
  ) => void | Promise<void>;
  className?: string;
}

const initialForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

const labelClass =
  "mb-2 block text-sm font-semibold text-slate-700";

export default function ContactForm({
  onSubmit,
  className = "",
}: ContactFormProps) {
  const [form, setForm] =
    useState<ContactFormData>(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  const updateField = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setStatus(null);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus(null);
    setIsSubmitting(true);

    try {
      const leadData: ContactFormData = { ...form };

      if (onSubmit) {
        // Preserve a parent-provided handler if one exists.
        await onSubmit(leadData);
      } else {
        // Otherwise send the inquiry through the email service.
        await submitLead(
          {
            "Full name": leadData.name,
            "Email address": leadData.email,
            "Company / Brand": leadData.company || "Not provided",
            "Requested service": leadData.service,
            "Estimated budget": leadData.budget || "Not specified",
            "Target timeline": leadData.timeline || "Not specified",
            "Project details": leadData.message,
            "Lead source": "Website Contact Form",
          },
          "New GuruMaatri project inquiry"
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.",
      });

      setForm({ ...initialForm });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't submit your inquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`relative w-full ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/[0.06]">
        {/* Header */}
        <div className="relative overflow-hidden bg-slate-950 px-6 py-8 sm:px-9 sm:py-10">
          <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3.5 py-2 text-xs font-semibold text-indigo-200">
              <Sparkles className="h-4 w-4" />
              LET'S BUILD SOMETHING GREAT
            </div>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tell us about your{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                next big idea.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Share a few details about your project.
              We'll use them to understand your goals and
              plan the right digital solution.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-300 sm:text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                Your details stay private
              </span>

              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-cyan-300" />
                Takes about 2 minutes
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-7 p-6 sm:p-9"
        >
          {/* Contact details */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <User className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Your details
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  How can we reach you?
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className={labelClass}>
                  Full name <span className="text-rose-500">*</span>
                </label>

                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cf-email" className={labelClass}>
                  Email address <span className="text-rose-500">*</span>
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cf-company" className={labelClass}>
                  Company / Brand{" "}
                  <span className="font-normal text-slate-400">
                    (optional)
                  </span>
                </label>

                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="cf-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    placeholder="Your business name"
                    value={form.company}
                    onChange={(e) =>
                      updateField("company", e.target.value)
                    }
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Project details */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <Code2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Your project
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  Let's understand what you're planning.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="cf-service" className={labelClass}>
                  What do you need?{" "}
                  <span className="text-rose-500">*</span>
                </label>

                <div className="relative">
                  <select
                    id="cf-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={(e) =>
                      updateField("service", e.target.value)
                    }
                    className={`${inputClass} appearance-none pr-11 ${
                      form.service ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div>
                <label htmlFor="cf-budget" className={labelClass}>
                  Estimated budget
                </label>

                <div className="relative">
                  <Wallet className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <select
                    id="cf-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(e) =>
                      updateField("budget", e.target.value)
                    }
                    className={`${inputClass} appearance-none pl-10 pr-10 ${
                      form.budget ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    <option value="">Choose a budget</option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div>
                <label htmlFor="cf-timeline" className={labelClass}>
                  Target timeline
                </label>

                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <select
                    id="cf-timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={(e) =>
                      updateField("timeline", e.target.value)
                    }
                    className={`${inputClass} appearance-none pl-10 pr-10 ${
                      form.timeline ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    <option value="">Choose a timeline</option>

                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cf-message" className={labelClass}>
                  Tell us about your idea{" "}
                  <span className="text-rose-500">*</span>
                </label>

                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-slate-400" />

                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    placeholder="What are you looking to build? Share your goals, key features, challenges, or any references you have..."
                    value={form.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    className={`${inputClass} resize-y pl-10 leading-7`}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-400">
                  <span>At least 10 characters</span>
                  <span>{form.message.length}/5000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status message */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                role="status"
                aria-live="polite"
                className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : status.type === "error"
                      ? "border-rose-200 bg-rose-50 text-rose-800"
                      : "border-amber-200 bg-amber-50 text-amber-900"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                )}

                <p>{status.message}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <div className="border-t border-slate-100 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-600 to-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/25 focus:outline-none focus:ring-4 focus:ring-indigo-500/25 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-56"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                  Sending inquiry...
                </>
              ) : (
                <>
                  Send project inquiry
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              Your information is used to respond to your
              project inquiry. Please don't include passwords
              or other sensitive information.
            </p>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
