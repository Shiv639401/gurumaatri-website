
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe,
  Layers3,
  Palette,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const services: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  color: string;
  href: string;
}[] = [
  {
    number: "01",
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to communicate your brand clearly and turn visitors into enquiries.",
    tags: ["Business websites", "Landing pages"],
    color: "blue",
    href: "/services",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom digital products with intuitive interfaces, practical workflows and scalable foundations.",
    tags: ["React", "API integration"],
    color: "violet",
    href: "/services",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Thoughtful user journeys, polished visual systems and interfaces designed around real people.",
    tags: ["Prototyping", "Design systems"],
    color: "pink",
    href: "/services",
  },
  {
    number: "04",
    icon: Workflow,
    title: "AI & Automation",
    description:
      "Explore smarter workflows, AI-powered assistants and integrations that simplify everyday tasks.",
    tags: ["AI solutions", "Automation"],
    color: "emerald",
    href: "/ai-consultant",
  },
];

const projects = [
  {
    number: "01",
    name: "Business Website",
    category: "Web Development",
    description:
      "A website concept focused on brand credibility, clear navigation and customer enquiries.",
    icon: Globe,
    gradient: "from-blue-100 via-indigo-50 to-white",
    type: "website",
  },
  {
    number: "02",
    name: "Event Experience",
    category: "Event Management",
    description:
      "An event platform concept for presenting experiences and making enquiries.",
    icon: Sparkles,
    gradient: "from-violet-100 via-fuchsia-50 to-white",
    type: "event",
  },
  {
    number: "03",
    name: "E-Commerce Store",
    category: "Online Shopping",
    description:
      "A storefront concept with product discovery and a simpler shopping journey.",
    icon: ShoppingCart,
    gradient: "from-orange-100 via-rose-50 to-white",
    type: "shop",
  },
  {
    number: "04",
    name: "Digital Dashboard",
    category: "Web Application",
    description:
      "A dashboard concept bringing key information and actions into one workspace.",
    icon: Workflow,
    gradient: "from-cyan-100 via-sky-50 to-white",
    type: "dashboard",
  },
];

const benefits = [
  {
    number: "01",
    title: "Purpose before pixels",
    description:
      "We start with your business goals and audience so every design decision has a clear purpose.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Responsive by design",
    description:
      "Experiences designed to adapt across mobile, tablet and desktop screens.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Built with care",
    description:
      "Maintainable code, considered interactions and attention to the user experience.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Clear communication",
    description:
      "Requirements, scope and milestones discussed before implementation begins.",
    icon: Check,
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your goals, audience and the problem your project needs to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Shape the structure, visual direction and user journey around your needs.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build responsive interfaces and implement the agreed functionality.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Review the deliverables and prepare your solution for deployment.",
  },
];

const faqs = [
  {
    question: "What can GuruMaatri Innovations build?",
    answer:
      "We can discuss business websites, landing pages, responsive interfaces, web applications and suitable AI or automation solutions.",
  },
  {
    question: "How does a project get started?",
    answer:
      "Share your idea, business goals, required features and preferred timeline through our contact page. We can then discuss the scope and next steps.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Our layouts are designed to adapt to mobile, tablet and desktop screens. Each project should also be tested against its agreed browsers and devices.",
  },
  {
    question: "Can I get an estimated project cost?",
    answer:
      "Visit the project estimator to outline your requirements. Final pricing and timelines should be confirmed after reviewing your project.",
  },
  {
    question: "Can my website be improved after launch?",
    answer:
      "Additional features, updates and maintenance can be discussed according to your needs and the agreed support arrangement.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-700 shadow-sm sm:text-xs">
      <span className="h-2 w-2 rounded-full bg-indigo-500" />
      {children}
    </span>
  );
}

function SectionHeading({
  label,
  title,
  description,
  dark = false,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <SectionLabel>{label}</SectionLabel>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base sm:leading-8 ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function BrowserHeader() {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-white px-3 py-3 sm:px-4">
      <div className="flex shrink-0 gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      <div className="min-w-0 flex-1 rounded-full bg-slate-100 px-3 py-1 text-center text-[9px] text-slate-500">
        preview.gurumaatri.in
      </div>
      <span className="shrink-0 text-[8px] font-bold text-emerald-600">
        PREVIEW
      </span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="gm-live-scene pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="gm-scene-glow gm-scene-glow-blue" />
      <div className="gm-scene-glow gm-scene-glow-gold" />
      <svg
        className="gm-live-logo"
        viewBox="0 0 1100 720"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gmBlueMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#159ed8" />
            <stop offset=".35" stopColor="#0877bd" />
            <stop offset=".7" stopColor="#063b79" />
            <stop offset="1" stopColor="#061f4a" />
          </linearGradient>
          <linearGradient id="gmGoldMetal" x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="#ffd64b" />
            <stop offset=".38" stopColor="#ffad20" />
            <stop offset=".72" stopColor="#ff8618" />
            <stop offset="1" stopColor="#ffb51d" />
          </linearGradient>
          <linearGradient id="gmSilver" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#173d70" />
            <stop offset="1" stopColor="#061f48" />
          </linearGradient>
          <radialGradient id="gmCoreGlow">
            <stop offset="0" stopColor="#46cfff" stopOpacity=".22" />
            <stop offset="1" stopColor="#46cfff" stopOpacity="0" />
          </radialGradient>
          <filter id="gmGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="gmShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feOffset dy="9" result="offset" />
            <feComponentTransfer><feFuncA type="linear" slope=".2" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse cx="575" cy="350" rx="390" ry="285" fill="url(#gmCoreGlow)" />

        {/* Orbit trails sit behind the official-style GM monogram. */}
        <g className="gm-orbit gm-orbit-one" fill="none" filter="url(#gmGlow)">
          <ellipse cx="575" cy="350" rx="410" ry="105" stroke="#159fff" strokeWidth="3" opacity=".78" transform="rotate(-13 575 350)" />
          <ellipse cx="575" cy="350" rx="420" ry="112" stroke="#ff9f24" strokeWidth="2.5" opacity=".76" strokeDasharray="105 28 20 42" transform="rotate(-13 575 350)" />
        </g>
        <g className="gm-orbit gm-orbit-two" fill="none">
          <ellipse cx="575" cy="350" rx="350" ry="215" stroke="#46caff" strokeWidth="1.4" opacity=".34" transform="rotate(28 575 350)" strokeDasharray="3 17" />
          <ellipse cx="575" cy="350" rx="430" ry="245" stroke="#ffb23a" strokeWidth="1.2" opacity=".22" transform="rotate(-31 575 350)" strokeDasharray="2 21" />
        </g>

        <g className="gm-emblem" filter="url(#gmShadow)">
          {/* Open, rounded G — shaped to match the blue brand mark rather than a font glyph. */}
          <path
            d="M 405 168 C 359 120 296 94 230 106 C 132 123 70 205 76 304 C 82 402 158 467 255 463 C 310 461 355 439 390 401 L 390 326 L 322 326 L 322 365 C 300 384 278 394 251 393 C 194 392 155 351 152 296 C 149 242 184 197 232 187 C 270 179 306 191 335 214 Z"
            fill="url(#gmBlueMetal)"
          />
          {/* Inner negative-space sweep keeps the G crisp and recognisable. */}
          <path
            d="M 348 245 C 323 222 294 211 264 215 C 224 220 197 249 198 290 C 199 329 226 354 263 354 C 287 354 306 344 322 328 L 322 304 L 277 304 L 277 278 L 389 278 L 389 391 C 353 431 306 449 253 448 C 168 447 105 388 101 304 C 97 223 149 157 225 144 C 275 135 322 152 361 183 Z"
            fill="#ffffff"
            opacity=".98"
          />
          {/* Blue lower stroke reconnects the G with the M. */}
          <path d="M 306 354 C 335 319 363 290 397 276 C 419 267 438 272 454 289 L 454 460 L 397 460 L 397 353 C 372 371 354 394 335 418 L 306 418 Z" fill="url(#gmBlueMetal)" />

          {/* Graduation cap and learner icon from the supplied brand. */}
          <path d="M 194 196 L 258 166 L 322 196 L 258 225 Z" fill="#07366c" />
          <path d="M 215 202 L 215 224 Q 258 250 301 224 L 301 202 L 258 224 Z" fill="#0c5c9b" />
          <circle cx="258" cy="249" r="27" fill="url(#gmBlueMetal)" />
          <path d="M 223 274 C 233 293 245 305 258 315 C 272 305 284 293 293 274 C 278 282 269 285 258 285 C 247 285 238 282 223 274 Z" fill="url(#gmBlueMetal)" />
          <path d="M 322 196 L 322 220" stroke="#07366c" strokeWidth="4" strokeLinecap="round" />
          <circle cx="322" cy="225" r="4.5" fill="#07366c" />

          {/* Angular orange M with a clean, tall right stem. */}
          <path
            d="M 374 278 L 437 226 C 463 204 491 207 514 228 L 573 281 L 647 194 L 647 460 L 589 460 L 589 300 L 573 320 L 514 376 L 460 326 L 426 354 Z"
            fill="url(#gmGoldMetal)"
          />
          <path d="M 390 279 L 445 237 C 465 221 486 223 506 241 L 573 302 L 640 219" fill="none" stroke="#ffe69a" strokeWidth="4" strokeLinecap="round" opacity=".72" />

          {/* Lightbulb: its rays pulse independently from the emblem. */}
          <g className="gm-bulb">
            <path d="M 650 131 C 623 131 604 151 604 178 C 604 197 615 209 626 220 L 626 231 L 674 231 L 674 220 C 686 208 696 195 696 178 C 696 151 677 131 650 131 Z" fill="none" stroke="url(#gmGoldMetal)" strokeWidth="10" strokeLinejoin="round" />
            <path d="M 632 241 L 668 241 M 636 252 L 664 252" stroke="#ff9b19" strokeWidth="8" strokeLinecap="round" />
            <path d="M 650 211 C 651 192 660 184 671 181" fill="none" stroke="#ffdc65" strokeWidth="5" strokeLinecap="round" />
          </g>
          <g className="gm-bulb-rays" stroke="#ffad24" strokeWidth="8" strokeLinecap="round" filter="url(#gmGlow)">
            <path d="M 650 99 V 80 M 600 116 L 587 103 M 700 116 L 713 103 M 583 166 H 565 M 717 166 H 735" />
          </g>
        </g>

        <g className="gm-sparks" filter="url(#gmGlow)" fill="#fff">
          <circle cx="143" cy="393" r="4" /><circle cx="738" cy="237" r="3.5" />
          <circle cx="801" cy="401" r="3" /><circle cx="580" cy="120" r="3" />
          <circle cx="697" cy="492" r="3" /><circle cx="348" cy="478" r="2.5" />
        </g>

        {/* Brand wordmark: navy Gurumaatri + orange Innovations. */}
        <g className="gm-wordmark" textAnchor="middle">
          <text x="550" y="535" fontFamily="Manrope, Arial, sans-serif" fontSize="49" fontWeight="800" letterSpacing="-2.2" fill="url(#gmSilver)">gurumaatri<tspan fill="url(#gmGoldMetal)">innovations</tspan><tspan fontSize="15" baselineShift="super">®</tspan></text>
          <text x="550" y="575" fontFamily="Manrope, Arial, sans-serif" fontSize="16" fontWeight="600" letterSpacing="7" fill="#394150">LEARN <tspan fill="#0877bd">•</tspan> GROW <tspan fill="#0877bd">•</tspan> INNOVATE</text>
          <path d="M 258 562 H 326 M 774 562 H 842" stroke="#ff9b22" strokeWidth="2" />
        </g>
        <ellipse cx="550" cy="632" rx="285" ry="23" fill="none" stroke="#16bfff" strokeWidth="4" opacity=".65" className="gm-platform" />
        <ellipse cx="550" cy="638" rx="330" ry="28" fill="none" stroke="#ffae28" strokeWidth="2" opacity=".5" className="gm-platform gm-platform-gold" />
      </svg>
      <div className="gm-code-caption"><span /> LIVE BRAND ANIMATION <span /></div>
      <style>{`
        .gm-live-scene{background:linear-gradient(110deg,rgba(255,255,255,.99) 0%,rgba(255,255,255,.94) 34%,rgba(239,242,255,.38) 61%,rgba(235,230,255,.25) 100%);isolation:isolate}
        .gm-live-logo{position:absolute;width:min(82vw,1120px);height:auto;right:-7%;top:50%;transform:translateY(-50%);overflow:visible;opacity:.98;animation:gmFloat 8s ease-in-out infinite;filter:drop-shadow(0 18px 34px rgba(39,83,180,.12))}
        .gm-scene-glow{position:absolute;border-radius:9999px;filter:blur(70px);pointer-events:none;animation:gmGlowPulse 6s ease-in-out infinite alternate}
        .gm-scene-glow-blue{width:36rem;height:36rem;right:8%;top:6%;background:rgba(50,130,255,.15)}
        .gm-scene-glow-gold{width:24rem;height:24rem;right:0;bottom:0;background:rgba(255,167,35,.12);animation-delay:-3s}
        .gm-orbit{transform-box:fill-box;transform-origin:center}
        .gm-orbit-one{animation:gmOrbit 18s linear infinite}
        .gm-orbit-two{animation:gmOrbitBack 25s linear infinite}
        .gm-emblem{transform-box:fill-box;transform-origin:center;animation:gmEmblem 5s ease-in-out infinite}
        .gm-bulb{transform-box:fill-box;transform-origin:center;animation:gmBulbPop 4s ease-in-out infinite}
        .gm-bulb-rays{animation:gmBulb 2.8s ease-in-out infinite}
        .gm-sparks{animation:gmSpark 3.2s ease-in-out infinite alternate}
        .gm-platform{animation:gmPlatform 3.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
        .gm-platform-gold{animation-delay:-1.9s}
        .gm-code-caption{position:absolute;right:clamp(20px,7vw,110px);bottom:clamp(18px,4vh,42px);display:flex;align-items:center;gap:10px;font:700 9px/1 system-ui,sans-serif;letter-spacing:.24em;color:#6578a3;opacity:.8}
        .gm-code-caption span{width:22px;height:1px;background:linear-gradient(90deg,#159cf3,#ffae28)}
        @keyframes gmFloat{0%,100%{transform:translate3d(0,-50%,0)}50%{transform:translate3d(0,calc(-50% - 10px),0)}}
        @keyframes gmOrbit{to{rotate:360deg}}
        @keyframes gmOrbitBack{to{rotate:-360deg}}
        @keyframes gmEmblem{0%,100%{translate:0 0;scale:1}50%{translate:0 -4px;scale:1.006}}
        @keyframes gmBulbPop{0%,100%{filter:brightness(1)}50%{filter:brightness(1.14)}}
        @keyframes gmBulb{0%,100%{opacity:.68}50%{opacity:1}}
        @keyframes gmSpark{from{opacity:.42}to{opacity:1}}
        @keyframes gmPlatform{0%,100%{opacity:.4;scale:1}50%{opacity:.85;scale:1.012}}
        @keyframes gmGlowPulse{from{opacity:.6;transform:scale(.94)}to{opacity:1;transform:scale(1.06)}}
        @media(min-width:1024px){.gm-live-logo{width:min(73vw,1160px);right:-8%}.gm-live-scene{background:linear-gradient(90deg,rgba(255,255,255,.99) 0%,rgba(255,255,255,.94) 34%,rgba(255,255,255,.52) 52%,rgba(237,239,255,.22) 100%)}}
        @media(max-width:767px){.gm-live-logo{width:145vw;max-width:none;right:-47%;top:47%;opacity:.24}.gm-live-scene{background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(245,246,255,.72))}.gm-code-caption{display:none}}
        @media(prefers-reduced-motion:reduce){.gm-live-logo,.gm-orbit-one,.gm-orbit-two,.gm-emblem,.gm-bulb,.gm-bulb-rays,.gm-sparks,.gm-platform,.gm-scene-glow{animation:none!important}}
      `}</style>
    </div>
  );
}
function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  const iconStyles: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    violet: "bg-violet-50 text-violet-700",
    pink: "bg-pink-50 text-pink-700",
    emerald: "bg-emerald-50 text-emerald-700",
  };

  return (
    <article className="group flex h-full flex-col rounded-[22px] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-7">
      <div className="flex items-center justify-between">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconStyles[service.color]}`}>
          <Icon size={23} />
        </span>
        <span className="text-xs font-bold tracking-widest text-slate-300">
          {service.number}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-bold text-slate-950 sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {service.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[10px] font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={service.href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:gap-3"
      >
        Explore service <ArrowRight size={16} />
      </Link>
    </article>
  );
}

function ProjectPreview({ type }: { type: string }) {
  return (
    <div className="rounded-xl border border-white/80 bg-white p-3 shadow-xl shadow-indigo-950/5 sm:p-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <div className="h-1.5 w-16 rounded-full bg-indigo-200" />
          <div className="mt-2 h-2.5 w-28 rounded-full bg-slate-800" />
        </div>
        <span className="rounded-md bg-indigo-600 px-2 py-1 text-[8px] font-bold text-white">
          EXPLORE
        </span>
      </div>

      {type === "website" && (
        <div className="mt-3 grid grid-cols-[1.1fr_0.9fr] gap-2">
          <div className="rounded-lg bg-blue-50 p-3">
            <div className="h-2 w-4/5 rounded-full bg-slate-800" />
            <div className="mt-2 h-1.5 rounded-full bg-slate-200" />
            <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-slate-200" />
            <div className="mt-4 h-6 w-16 rounded-md bg-blue-600" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-200 to-sky-100">
            <Globe size={35} className="text-indigo-600" />
          </div>
        </div>
      )}

      {type === "event" && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Moments", "Events", "Stories"].map((item, index) => (
            <div
              key={item}
              className={`flex h-24 items-end rounded-lg p-2 ${
                index === 0
                  ? "bg-pink-100"
                  : index === 1
                    ? "bg-violet-200"
                    : "bg-amber-100"
              }`}
            >
              <span className="text-[8px] font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      )}

      {type === "shop" && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["bg-orange-100", "bg-rose-100", "bg-amber-100"].map((color) => (
            <div key={color} className="rounded-lg border border-slate-100 p-2">
              <div className={`flex h-16 items-center justify-center rounded-md ${color}`}>
                <ShoppingCart size={22} className="text-slate-600" />
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-slate-200" />
              <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      )}

      {type === "dashboard" && (
        <div className="mt-3 grid grid-cols-[0.7fr_1.3fr] gap-2">
          <div className="space-y-2 rounded-lg bg-slate-50 p-2">
            <div className="h-2 rounded-full bg-indigo-200" />
            <div className="h-2 rounded-full bg-slate-200" />
            <div className="h-2 rounded-full bg-slate-200" />
            <div className="h-2 w-3/4 rounded-full bg-slate-200" />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-violet-700 p-3">
            <div className="h-2 w-4/5 rounded-full bg-white/90" />
            <div className="mt-2 h-2 w-3/5 rounded-full bg-white/40" />
            <div className="mt-4 flex h-12 items-end gap-1">
              <div className="h-5 flex-1 rounded-t bg-white/30" />
              <div className="h-9 flex-1 rounded-t bg-white/70" />
              <div className="h-7 flex-1 rounded-t bg-white/45" />
              <div className="h-11 flex-1 rounded-t bg-white/80" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;

  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <div className={`bg-gradient-to-br ${project.gradient} p-4 sm:p-6`}>
        <span className="ml-auto block w-fit rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-slate-600">
          Concept preview
        </span>
        <div className="mx-auto mt-5 max-w-md transition duration-500 group-hover:scale-[1.02]">
          <BrowserHeader />
          <ProjectPreview type={project.type} />
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
          {project.category}
        </p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
            {project.name}
          </h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Icon size={19} />
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {project.description}
        </p>
        <Link
          to="/portfolio"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600"
        >
          Explore portfolio <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-28 -z-10 h-[400px] w-[400px] rounded-full bg-violet-200/60 blur-[100px] sm:h-[550px] sm:w-[550px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-72 -z-10 h-[350px] w-[350px] rounded-full bg-blue-100/80 blur-[100px]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="relative z-10">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm sm:text-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Thoughtful digital experiences for ambitious businesses
            </div>

            <h1 className="mt-7 max-w-3xl text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-[4.35rem] xl:text-[5rem]">
              Your vision.
              <span className="block">Our craft.</span>
              <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text pb-2 text-transparent">
                Digital impact.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We create modern websites and custom web applications that bring
              clarity to your brand, make complex ideas easier to use and give
              your business a stronger digital foundation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
              >
                Let's Build Your Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                Explore Our Work <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-600 sm:text-sm">
              {["Responsive design", "Clear project scope", "Modern development"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={16} className="text-emerald-600" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-slate-200/80 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-100 text-lg font-extrabold text-indigo-700">
                GM
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">GuruMaatri Innovations</p>
                <p className="mt-1 text-xs text-slate-500">Thoughtful design. Purposeful technology.</p>
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-slate-100 bg-[#FAFAFF]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 md:text-left">
            From idea to digital experience
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-semibold text-slate-700 sm:text-sm">
            {["Strategy", "Design", "Development", "Growth"].map((item, index) => (
              <span key={item} className="inline-flex items-center gap-4">
                {item}
                {index !== 3 && <span className="text-indigo-400">✳</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="What we do"
            title={<>Digital solutions,<span className="block text-indigo-600">built around you.</span></>}
            description="From your first online presence to a custom digital product, we combine design thinking and development to create a more considered experience."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50">
              Discover all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="relative bg-[#F7F8FF] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-100/60 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Thoughtfully designed.
                <span className="block text-indigo-600">Carefully developed.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Explore selected interface concepts showing how we approach business websites, digital products and customer experiences.
              </p>
            </div>
            <Link to="/portfolio" className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:border-indigo-200 hover:text-indigo-700">
              View portfolio <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-7">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            These previews are illustrative UI concepts and are not presented as verified completed client projects.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>The GuruMaatri approach</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Great digital work starts with
              <span className="block text-indigo-600">understanding.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              The right solution is not just about how a website looks. It is also about the people using it, the problem it solves and how clearly it supports your business goals.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
              Discover our approach <ArrowRight size={16} />
            </Link>
            <div className="mt-8 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-5 sm:p-6">
              <p className="text-sm font-semibold leading-6 text-slate-800">
                “Good technology should make things clearer, simpler and more useful.”
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-indigo-600">Our working philosophy</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.number} className="group rounded-[22px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <p className="mt-5 text-[10px] font-bold tracking-widest text-slate-400">{benefit.number}</p>
                  <h3 className="mt-2 text-base font-bold text-slate-950">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            label="How we work"
            title={<>A clear path<span className="block text-indigo-300">from idea to launch.</span></>}
            description="A considered workflow keeps expectations aligned and gives each stage a clear purpose."
            dark
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.number} className="rounded-[22px] border border-white/10 bg-white/[0.045] p-6 transition hover:border-indigo-400/40 hover:bg-white/[0.08] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold tracking-widest text-indigo-300">{step.number}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-bold text-slate-300">{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI + ESTIMATOR */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-[26px] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-7 sm:p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700"><Sparkles size={24} /></span>
            <p className="mt-7 text-xs font-bold uppercase tracking-widest text-violet-700">Discover new possibilities</p>
            <h3 className="mt-3 max-w-md text-2xl font-extrabold text-slate-950 sm:text-3xl">Curious how AI could help your business?</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">Explore potential AI use cases, discover opportunities and consider smarter ways to work.</p>
            <Link to="/ai-consultant" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700">
              Explore AI solutions <ArrowUpRight size={17} />
            </Link>
          </article>
          <article className="relative overflow-hidden rounded-[26px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-7 sm:p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700"><Zap size={24} /></span>
            <p className="mt-7 text-xs font-bold uppercase tracking-widest text-cyan-800">Plan with clarity</p>
            <h3 className="mt-3 max-w-md text-2xl font-extrabold text-slate-950 sm:text-3xl">Have a project in mind? Start with an estimate.</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">Outline your requirements and take the first step towards understanding your project scope.</p>
            <Link to="/estimator" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-800">
              Explore project estimator <ArrowUpRight size={17} />
            </Link>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAFAFF] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <SectionLabel>Frequently asked questions</SectionLabel>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">A few things worth knowing.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">Clear expectations make for better projects. Here are a few helpful starting points.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800">
              Have another question? <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index}`;
              return (
                <div key={faq.question} className={`rounded-2xl border p-5 transition sm:p-6 ${isOpen ? "border-indigo-200 bg-white shadow-sm" : "border-slate-200 bg-white"}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq((current) => current === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-slate-900 sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={19} className={`shrink-0 text-indigo-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p id={answerId} className="mt-4 pr-3 text-sm leading-7 text-slate-600">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 px-6 py-12 text-white shadow-2xl shadow-indigo-900/15 sm:rounded-[36px] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.07]" />
          <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-indigo-100 sm:text-xs">Let's create something meaningful</span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your next big idea
                <span className="block text-indigo-100">deserves a great start.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base sm:leading-8">
                Tell us what you want to build. We can explore the requirements, discuss the right approach and define the next steps together.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50">
                Start a Conversation <ArrowRight size={17} />
              </Link>
              <Link to="/estimator" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15">
                Explore Project Cost <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
