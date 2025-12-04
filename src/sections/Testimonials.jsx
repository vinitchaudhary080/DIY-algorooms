// src/sections/Testimonials.jsx
import React from "react";

// ⭐ simple star row (no external images)
function Stars({ value = 5 }) {
  const total = 5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < value ? "text-[#3B66F6]" : "text-neutral-300"}`}
          fill="currentColor"
        >
          <path d="M10 15.27l-5.18 3.04 1.4-5.99L1 7.97l6.09-.52L10 2l2.91 5.45 6.09.52-5.22 4.35 1.4 5.99z" />
        </svg>
      ))}
    </div>
  );
}

const items = [
  {
    text: "Interface kaafi clean hai, setup karna bhi easy laga. Pehle din se comfortable tha.",
    name: "Rohit Mehra",
    role: "Mumbai",
    rating: 5,
  },
  {
    text: "Strategy create karna genuinely simple hai. No coding, bas rules set karo and done.",
    name: "Priya Sharma",
    role: "Bengaluru",
    rating: 5,
  },
  {
    text: "Workflow banana easy tha and UI intuitive. Mujhe koi confusion nahi hua.",
    name: "Farhan Ali",
    role: "Hyderabad",
    rating: 5,
  },
  {
    text: "Good experience overall. Workflow steps clearly show ho jaate hain.",
    name: "Vikram Singh",
    role: "Gurugram",
    rating: 4,
  },
  {
    text: "Simple to use and quick to set up. Daily monitoring bhi easy hai.",
    name: "Ananya Iyer",
    role: "Chennai",
    rating: 4,
  },
  {
    text: "Kaafi helpful platform hai. Workflow activity ek jagah dekhna convenient hai.",
    name: "Sandeep R.",
    role: "Pune",
    rating: 4,
  },
  {
    text: "UI light and smooth. Workflow samajhne me zyada time nahi laga.",
    name: "Megha Joshi",
    role: "Ahmedabad",
    rating: 4,
  },
  {
    text: "Easy to get started and support bhi responsive tha.",
    name: "Kritika Jain",
    role: "Jaipur",
    rating: 4,
  },
];



export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 scroll-mt-nav bg-gradient-to-b from-[#F8F9FB] to-white"
    >
      <div className="container-xxl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs text-black font-semibold ring-2 ring-[#F6F6F9]">
            User Stories
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold  leading-tight tracking-tight text-neutral-900">
            What Our Users Love
            <br /> About Algorooms.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <article
              key={i}
              className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-5 ring-[#F6F6F9] transition hover:shadow-[0_10px_40px_rgba(59,102,246,0.1)]"
            >
              {/* faint quotes */}
              <span className="pointer-events-none absolute right-4 top-3 text-neutral-200 select-none text-4xl leading-none">
                &rdquo;
              </span>

              {/* stars */}
              <Stars value={t.rating} />

              {/* text */}
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">
                “{t.text}”
              </p>

              {/* divider */}
              <div className="mt-4 h-px w-full bg-neutral-200/70" />

              {/* user */}
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-[13px] font-semibold text-neutral-700 ring-1 ring-black/5">
                  {t.name.split(" ").map(s => s[0]).slice(0,2).join("")}
                </span>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
