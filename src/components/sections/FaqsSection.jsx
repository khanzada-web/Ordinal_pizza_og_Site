"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What are Ordinals?",
    answer:
      "In simple terms Ordinals are digital artifacts inscribed onto the Bitcoin blockchain for eternity. For more details, checkout the blog from the creator himself, Casey Rodarmor.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support via our email at support@nightsable.com or through our contact form.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including web design, development, branding, and consulting.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located in San Francisco, California, but we work with clients globally.",
  },
];

const FaqsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[86rem] px-4 sm:px-10 lg:px-8">
        <div className="mb-10 md:max-w-xl text-center mx-auto">
          <h2 className="uppercase text-pretty text-5xl font-title sm:text-7xl bg-gradient-to-r from-[#EF9631] to-[#E96751] bg-clip-text text-transparent">
            Faqs
          </h2>
        </div>
        <div className="accordion space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-md bg-black text-white border border-primary overflow-hidden"
            >
              <button
                className={`w-full text-left p-4 transition-colors duration-300 flex justify-between gap-3 hover:bg-primary ${
                  activeIndex === index && "bg-primary"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-extrabold text-lg">{faq.question}</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 overflow-auto">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
