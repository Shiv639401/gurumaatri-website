
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface BlogCardPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  icon: LucideIcon;
  gradient: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogCardPost;
  index?: number;
}

function ArticleArtwork({
  post,
}: {
  post: BlogCardPost;
}) {
  const Icon = post.icon;

  return (
    <div
      className={`relative isolate flex min-h-[210px] items-center justify-center overflow-hidden bg-gradient-to-br ${post.gradient}`}
    >
      {/* Decorative circles */}
      <div className="absolute -left-10 -top-12 -z-10 h-48 w-48 rounded-full border border-white/20" />

      <div className="absolute -bottom-20 -right-10 -z-10 h-56 w-56 rounded-full border border-white/20" />

      <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />

      {/* Icon container */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/25 bg-white/10 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
        <Icon
          className="h-12 w-12 text-white"
          strokeWidth={1.35}
          aria-hidden="true"
        />
      </div>

      {/* Branding */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
        <Sparkles className="h-3.5 w-3.5" />
        Insights by GuruMaatri
      </div>
    </div>
  );
}

export default function BlogCard({
  post,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        delay: (index % 3) * 0.07,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
    >
      <ArticleArtwork post={post} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Category and reading time */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
            {post.category}
          </span>

          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-500"
            >
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-700">
              {post.author}
            </p>

            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </p>
          </div>

          <Link
            to="/contact"
            aria-label={`Discuss a project related to ${post.title}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
          >
            Explore
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
