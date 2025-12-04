// src/sections/Benefits.jsx
import React from "react";
import { BarChart3, Users, Sparkles, MessageCircle } from "lucide-react";

const items = [
  {
    icon: BarChart3,
      title: "Real-time Analytics",
    desc: "Track market movement and strategy activity with instant updates for clearer trade decisions.",
  },
  {
    icon: Users,
    title: "Smarter Strategy Building",
    desc: "Build and test trading plans efficiently using a backtesting tool designed for accuracy and ease.",
  },
  {
    icon: Sparkles,
    title: "Connected Broker Integrations",
    desc: "Link your supported broker accounts and manage workflow activity from one unified place.",
  },
  {
    icon: MessageCircle,
    title: "Reliable 24/7 Support",
    desc: "Get continuous assistance so your trades stay active without interruptions.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#F6F6F8] py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl">
        {/* ===== Heading ===== */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black ring-2 ring-[#F6F6F9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
            Benefits
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
            Benefits to keep your
            <br className="hidden sm:block" />
            team in sync.
          </h2>
        </div>

        {/* ===== Cards (centered layout) ===== */}
        <div className="mt-10 sm:mt-16 max-w-3xl mx-auto space-y-6">
  {items.map(({ icon: Icon, title, desc }) => (
    <article
      key={title}
      className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] ring-5 ring-[#F6F6F9] text-left"
    >
      {/* Icon top-left */}
      <div className="mb-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#3B66F6] text-white shadow-[0_8px_18px_rgba(59,102,246,0.35)] ring-1 ring-black/5">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      {/* Text */}
      <h3 className="text-[16px] font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-neutral-500 max-w-md">
        {desc}
      </p>
    </article>
  ))}
</div>

      </div>
    </section>
  );
}
