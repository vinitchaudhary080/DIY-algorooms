import React from "react";

const SECTIONS = [
  {
    id: "what-this-platform-is",
    n: 1,
    title: "What This Platform Is",
    body: `This platform is a Do-It-Yourself (DIY) algorithmic trading automation tool. It allows you to design, backtest, and deploy proprietary trading strategies using your own parameters. Think of it as your personal laboratory for strategy innovation.

We provide the technology stack, data streams, and execution engine; you provide the strategic logic, rules, and oversight. This platform does not offer financial advice, stock tips, or guaranteed returns.`,
  },
  {
    id: "your-responsibilities",
    n: 2,
    title: "Your Responsibilities",
    body: `By using the platform, you agree to:`,
    bullets: [
      "Develop your strategies with diligence and responsibility.",
      "Understand that all outcomes—gains, losses, or performance metrics—are entirely your own.",
      "Monitor, adjust, and optimize strategies as needed for performance.",
      "Comply with all applicable trading regulations and legal requirements in your jurisdiction.",
    ],
  },
  {
    id: "non-advisory-statement",
    n: 3,
    title: "Non-Advisory Statement",
    body: `The platform is designed to empower you with complete control over your trading logic. While we do not provide financial advice, investment recommendations, or trading signals, you retain the freedom to conceptualize, test, and execute strategies independently.

This ensures a transparent, compliant, and safe environment while allowing you to experiment, learn, and optimize your own decision-making.`,
  },
  {
    id: "how-automation-works",
    n: 4,
    title: "How Automation Works",
    body: `Automated execution relies on multiple factors:`,
    bullets: [
      "Broker API integration and system performance",
      "Market microstructure, liquidity, and volatility",
      "Network stability and latency",
    ],
  },
  {
    id: "acceptable-use",
    n: 5,
    title: "Acceptable Use",
    body: `You agree that you will not:`,
    bullets: [
      "Claim the platform provides financial advice, trading recommendations, or guaranteed returns.",
      "Share your account credentials, API keys, or access with others.",
      "Copy, distribute, sell, or publicly disclose platform-provided templates, strategies, data, or code without authorization.",
      "Reverse-engineer, tamper with, or exploit the software or its features.",
      "Upload malicious software, viruses, or harmful content.",
      "Use the platform to mislead, defraud, or manipulate any party.",
      "Employ unofficial tools, scripts, or bots that interfere with platform functionality.",
    ],
  },
  {
    id: "subscription-billing",
    n: 6,
    title: "Subscription & Billing",
    bullets: [
      "Subscription fees are charged according to the plan you select.",
      "All payments are non-refundable and cannot be canceled once made.",
      "Subscriptions remain active for the purchased period; access continues until the period expires.",
      "Billing is transparent—there are no hidden charges or surprises.",
    ],
  },
  {
    id: "limitation-liability",
    n: 7,
    title: "Limitation of Liability",
    bullets: [
      "The platform is not responsible for financial loss, strategy underperformance, or missed opportunities.",
      "Any loss resulting from strategy execution is solely the user’s responsibility.",
      "We are not liable for technical disruptions, API issues, or unforeseen market events.",
      "This platform is a tool for strategy execution, not a financial solution or advisory service.",
    ],
  },
  {
    id: "account-termination",
    n: 8,
    title: "Account Termination",
    bullets: [
      "Terms of use are violated.",
      "Illegal, manipulative, or unethical activity occurs.",
      "Regulatory compliance is at risk.",
    ],
    body: `Where feasible, notice will be provided; in urgent circumstances, immediate action may be taken.`,
  },
  {
    id: "governing-law",
    n: 9,
    title: "Governing Law",
    body: `These terms are governed by the laws of India. Users are responsible for understanding and complying with all local trading and financial regulations.`,
  },
  {
    id: "final-user-acknowledgement",
    n: 10,
    title: "Final User Acknowledgement",
    body: `By using this platform, you agree:

“I understand that this platform is a DIY trading automation tool. I am fully responsible for the strategies I create and the outcomes they generate. The platform provides technology and infrastructure, not financial advice or guarantees.”`,
  },
];

export default function TermsContent() {
  return (
    <section className="bg-[#F6F6F8] pt-0 sm:pt-0 pb-16 sm:pb-24">
      <div className="container-xxl">
        <div className="mx-auto max-w-3xl text-[15px] leading-7 text-neutral-700">
          <ol className="space-y-10">
            {SECTIONS.map((s) => (
              <li key={s.id} id={s.id} className="scroll-mt-24">
                <div className="border-l-2 border-neutral-200 pl-4">
                  <div className="text-xs font-semibold tracking-wide text-neutral-500">
                    {s.n}.
                  </div>
                  <h3 className="mt-1 text-[17px] sm:text-lg font-semibold text-neutral-900">
                    {s.title}
                  </h3>
                </div>

                {/* body */}
                {s.body && (
                  <p className="mt-3 text-neutral-700 whitespace-pre-line">
                    {s.body}
                  </p>
                )}

                {/* bullets */}
                {s.bullets?.length ? (
                  <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8 border-t border-neutral-200" />
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-center gap-3 text-xs text-neutral-500">
            <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 font-semibold text-green-700 ring-1 ring-inset ring-green-200">
              New
            </span>
            <span>Last updated: January 4, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
