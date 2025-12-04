// src/sections/Benefits.jsx
import React from "react";
import {
  BarChart3,      // Real-time Analytics
  Users2,         // Collaboration Tools
  Sparkles,       // AI-Powered Insights
  Plug,           // Custom Integrations
  Layers,         // Scalable Architecture
  MessageCircle,  // 24/7 Support
} from "lucide-react";

const BENEFITS = [
  {
    icon: BarChart3,
    title: "Real-time Market Advantage",
    desc: "View the current status of your rule based workflows and related events in a clear and organised way.",
  },
  {
    icon: Users2,
    title: "Smarter Strategy Building",
    desc: "Build and test trading plans efficiently using a backtesting tool designed for accuracy and ease.",
  },
  {
    icon: Sparkles,
     title: "Connected Broker Integrations",
    desc: "Link your supported broker accounts and manage workflow activity from one unified place.",
  },
  {
    icon: Plug,
    title: "AI-Based Performance Boost",
    desc: "Use AI trading software insights to fine-tune strategies and improve consistency in results.",
  },
  {
    icon: Layers,
    title: "Scalable Automation Setup",
    desc: "Add new workflows and conditions over time without changing the way you manage your automation.",
  },
  {
    icon: MessageCircle,
    title: "Reliable 24/7 Support",
    desc: "Get continuous assistance so your trades stay active without interruptions.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-transparent py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-black font-semibold ring-2 ring-[#F6F6F9]">
            <span className="h-2 w-2 rounded-full bg-[#3B66F6]" />
            Benefits
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold  leading-tight tracking-tight text-neutral-900">
            Benefits to Keep Your <br className="hidden sm:block" />
            Trading in Sync.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-6 sm:p-9 ring-5 ring-[#F6F6F9] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              {/* blue icon pill with glow */}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#3B66F6] text-white shadow-[0_10px_24px_rgba(59,102,246,0.35)] ring-1 ring-black/5">
                <Icon className="h-4 w-4" />
              </span>

              <h3 className="mt-4 text-[15px] sm:text-base font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
