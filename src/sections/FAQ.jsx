// src/sections/FAQ.jsx
import React, { useState } from "react";

const faqs = [
  {
    q: "What does this platform actually do?",
    a: "It’s your personal trading workshop. You get to create, test, and automate your own strategies no coding required. We provide the tools, the data, and the execution engine. You bring the ideas, the curiosity, and the strategy.",
  },
  {
    q: "Does the platform give trading advice or tips?",
    a: "Nope. And that’s the point. Instead of following someone else’s signals, you get to make your own decisions, run your own strategies, and learn along the way. The platform is your canvas—you paint your own picture.",
  },
  {
    q: "Who controls the results?",
    a: "You do. Every trade, every rule, every strategy outcome is yours. The platform doesn’t make decisions for you—it executes exactly what you design. Wins or losses? That’s part of your journey.",
  },
  {
    q: "Can I run multiple strategies at the same time?",
    a: "Yes. Run several strategies simultaneously. Each one is independent, so you can test different approaches, explore multiple ideas, and manage risk across them.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Absolutely—if you’re curious and willing to learn. You don’t need coding skills. Just a basic understanding of trading concepts and risk awareness, and you can start trading, testing, and learning by doing.",
  },
];


export default function FAQ() {
  const [open, setOpen] = useState(0); // by default first open (like reference)
  const toggle = (i) => setOpen((v) => (v === i ? null : i));

  return (
    <section id="faq" className="bg-transparent py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* ================= Left: Heading + helper card ================= */}
        <div className="self-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black ring-2 ring-[#F6F6F9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
            FAQs
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold  leading-tight tracking-tight text-neutral-900">
            Got Questions?
            <br />
            We’ve Got Answers.
          </h2>

          <p className="mt-4 text-neutral-600 max-w-sm">
            Everything you need to know before you get started quick, clear, and easy to follow.
          </p>

          {/* helper card at bottom left */}
          <div className="mt-10 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-5 ring-[#F6F6F9] p-5 max-w-sm self-end">
            <div className="text-[15px] font-semibold text-neutral-900">
              Still curious?
            </div>
            <p className="mt-1 text-sm text-neutral-500">
              Reach out and we’ll guide you every step of the way.
            </p>

         <a
  href="https://wa.me/917042132888?text=Hi%20team%2C%20I%20want%20to%20know%20more%20about%20the%20Algorooms%20dashboard%20and%20its%20features."
  className="
    mt-5
    inline-flex items-center gap-2
    rounded-2xl
    px-5 py-3
    text-[15px] font-semibold text-white
    bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA]
    shadow-[0_10px_30px_rgba(40,100,223,0.35)]
    border-2 border-[#6C88FF]
    transition-all duration-300
    hover:shadow-[0_14px_36px_rgba(40,100,223,0.45)]
    hover:scale-[1.02]
  "
>
  Chat with Us →
</a>


          </div>
        </div>

        {/* ================= Right: Accordion list ================= */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white ring-5 ring-[#F6F6F9] shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-4 sm:px-5 py-4 sm:py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-[15px] font-medium text-neutral-900">
                    {i + 1}. {item.q}
                  </span>

                  {/* plus / minus button */}
                  <span
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white ring-1 ring-neutral-300"
                    aria-hidden="true"
                  >
                    {/* minus bar */}
                    <span className="block h-[1.5px] w-3.5 bg-neutral-800" />
                    {/* vertical bar (hide when open) */}
                    {!isOpen && (
                      <span className="absolute h-3.5 w-[1.5px] bg-neutral-800" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-panel-${i}`}
                  className={`px-4 sm:px-5 pb-5 overflow-hidden transition-[max-height,opacity] duration-300
                              ${
                                isOpen
                                  ? "max-h-40 opacity-100"
                                  : "max-h-0 opacity-0 pb-0"
                              }`}
                >
                  <p className="text-sm text-neutral-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
