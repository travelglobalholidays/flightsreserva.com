"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Can I book flights by phone?",
    answer:
      "Yes, you can call our travel support team for flight booking assistance and available fare options.",
  },
  {
    question: "Do you help with domestic and international flights?",
    answer:
      "Yes, we assist with both domestic and international flight planning and booking support.",
  },
  {
    question: "Are prices shown clearly before booking?",
    answer:
      "Yes, our team explains fare details, taxes, and applicable airline rules before confirmation.",
  },
  {
    question: "Can I change or cancel my booking?",
    answer:
      "Changes and cancellations depend on the airline policy and fare rules. Our support team can guide you through the process.",
  },
  {
    question: "Will I receive a booking confirmation?",
    answer:
      "Yes, once your booking is confirmed, the itinerary details are shared with you by email or phone support.",
  },
];

export default function HomeFaqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question} className="border border-black/10 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-dark">
                {faq.question}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-theme text-white">
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-black/10 px-5 py-4">
                <p className="text-sm leading-relaxed text-body">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
