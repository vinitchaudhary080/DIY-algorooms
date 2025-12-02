import React, { useState } from "react";

const faqs = [
  {
    q: "What does this platform actually do?",
    a: "It’s your personal trading workshop. You get to create, test, and automate your own strategies—no coding required. We provide the tools, the data, and the execution engine. You bring the ideas, the curiosity, and the strategy.",
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
  {
    q: "Is my personal and trading data secure?",
    a: "Yes. Everything—from your account info to API keys—is encrypted and protected. Your strategies and data stay safe, so you can focus on trading, not worrying about security.",
  },
  {
    q: "Can I backtest my strategies before using real money?",
    a: "Absolutely. Backtesting lets you simulate your strategies on historical data, so you can tweak, refine, and optimize before putting real money on the line. It’s like a sandbox for your ideas.",
  },
  {
    q: "Can I automate trades with my broker account?",
    a: "Yes. Connect your broker securely through supported APIs. Automation executes your rules exactly as you set them—saving time, reducing mistakes, and keeping you in full control.",
  },
  {
    q: "Is automation guaranteed to work perfectly every time?",
    a: "No system is perfect. Broker glitches, API hiccups, network issues, or sudden market changes can affect execution. But the platform is designed to run your strategies as reliably as possible, so you can focus on what matters—building better strategies.",
  },
  {
    q: "What happens if market conditions change suddenly?",
    a: "Markets move fast—and so should you. Automation applies your rules consistently, but it can’t predict surprises. You stay in control, adjust strategies as needed, and the platform keeps executing your logic seamlessly.",
  },
  {
    q: "Can I do paper trading (forward testing) on the platform?",
    a: "Yes! Algorooms lets you simulate live trades without risking real money. Forward testing helps you see how your strategies perform in real market conditions, refine your rules, and gain confidence before going live.",
  },
];


export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen((v) => (v === i ? null : i));

  return (
    <section id="faqfull" className="bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            Everything you want to know
          </h2>
          <p className="mt-3 text-neutral-500">
            Fast and clear answers to the most common algo trading questions.
          </p>

          <div className="mt-5">
            <a
              href="https://wa.me/917049850866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              Contact support →
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="p-0">
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-4 sm:px-5 py-4 sm:py-5 text-left"
                >
                  <span className="text-sm sm:text-[15px] font-medium text-neutral-900">
                    {item.q}
                  </span>
                  <span
                    className={`relative inline-flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <span className="absolute h-[1px] w-3.5 bg-neutral-700" />
                    <span className="absolute h-3.5 w-[1px] bg-neutral-700" />
                  </span>
                </button>

                <div
                  className={`px-4 sm:px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
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
