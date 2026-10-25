/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter, Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../features/home/HomePage";
import ServicesPage from "../features/services/ServicesPage";
import PortfolioPage from "../features/portfolio/PortfolioPage";
import AboutPage from "../features/about/AboutPage";
import ContactPage from "../features/contact/ContactPage";
import PricingPage from "../features/pricing/PricingPage";
import EstimatorPage from "../features/estimator/EstimatorPage";
import AIConsultantPage from "../features/ai-consultant/AIConsultantPage";
import FAQPage from "../features/faq/FAQPage";
import BlogPage from "../features/blog/BlogPage";
import CaseStudiesPage from "../features/case-studies/CaseStudiesPage";

function NotFoundPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
        Error 404
      </p>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "estimator",
        element: <EstimatorPage />,
      },
      {
        path: "ai-consultant",
        element: <AIConsultantPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "case-studies",
        element: <CaseStudiesPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
