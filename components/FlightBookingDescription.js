"use client";

import { ChevronRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/config/ContactInfo";
import HomeFaqs from "./HomeFaqs";

const contentBlocks = [
  {
    title: "Professional Travel Booking Services You Can Rely On",
    paragraphs: [
      "Planning a trip requires accuracy, trust, and reliable guidance. Our platform helps travelers find suitable flight options, understand booking requirements, and receive professional assistance throughout the reservation process.",
      "We support domestic and international routes with clear information, flexible options, and dependable customer service for smooth travel planning.",
    ],
  },
  {
    title: "A Smarter Way to Book Flights Online",
    paragraphs: [
      "Flight booking involves more than selecting dates and destinations. Travelers often need clarity on airline policies, baggage rules, fare conditions, and schedule flexibility.",
      "Our travel booking services offer guided support so you can compare airline options, understand fare structures, and choose itineraries that fit your needs.",
    ],
  },
  {
    title: "Personalized Booking Support",
    paragraphs: [
      "Every traveler has different priorities, from flexible dates to preferred airlines or fewer layovers. Our assistance is designed around those preferences.",
      "We help you explore route options, review fare flexibility, and plan trips with confidence.",
    ],
  },
  {
    title: "Start Planning With Confidence",
    paragraphs: [
      "Whether you are preparing for a domestic trip or an international journey, the right booking support can make the process easier from start to finish.",
    ],
  },
];

const highlights = [
  "Domestic and international flight booking",
  "Clear fare and policy guidance",
  "Support for changes and travel questions",
  "Reliable booking assistance",
];

const FlightBookingDescription = () => {
  return (
    <section className="bg-[#f8f9fa] px-4 py-10 md:px-8 lg:py-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span className="text-sm font-semibold uppercase tracking-[2px] text-theme">
            Flight Booking Support
          </span>
          <h2 className="mt-2 text-[30px] font-semibold leading-tight text-dark">
            Travel booking made clear, simple, and reliable
          </h2>

          <div className="mt-2 space-y-5">
            {contentBlocks.map((block) => (
              <div key={block.title}>
                <h3 className=" text-[18px] font-normal text-dark">
                  {block.title}
                </h3>
                <div className="space-y-2">
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-body"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <HomeFaqs />
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h3 className="text-xl font-semibold text-dark">
              Why travelers choose us
            </h3>
            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-theme" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={CONTACT_INFO.phoneHref}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-theme px-5 py-3 text-sm font-semibold text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Call For Booking
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FlightBookingDescription;
