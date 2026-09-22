import { CONTACT_INFO } from "@/config/ContactInfo";

const reviewItems = [
  "Passenger names must match government-issued identification.",
  "Flight dates, airports, layovers, and travel times should be checked carefully.",
  "Fare rules, baggage allowances, cancellation terms, and change fees may vary by airline.",
  "Final prices are confirmed only when the ticket is issued by the airline or supplier.",
];

const faqs = [
  {
    question: "Is FlightsReserva an airline?",
    answer:
      "No. FlightsReserva is an independent travel assistance service. We help travelers review flight booking options, but we do not own, operate, or control airline services.",
  },
  {
    question: "When is a booking confirmed?",
    answer:
      "A booking is confirmed only after the airline or supplier issues confirmation details, a booking reference, or an e-ticket.",
  },
  {
    question: "Can prices change before booking?",
    answer:
      "Yes. Flight prices and seat availability can change before ticketing because airline inventory is dynamic.",
  },
  {
    question: "What should I review before payment?",
    answer:
      "Review passenger names, travel dates, airports, fare rules, baggage information, cancellation terms, and the total amount before authorizing payment.",
  },
];

export default function BookFlightsDescription() {
  return (
    <section className="bg-[#f8f9fa] px-4 py-10 md:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <article className="space-y-7">
          <div>
            <h2 className="text-[30px] font-semibold leading-tight text-dark">
              Book Flights With Independent Travel Assistance
            </h2>
            <div className="mt-3 space-y-3">
              <p className="text-sm leading-relaxed text-body">
                <strong>{CONTACT_INFO.brandName}</strong> helps travelers review
                available flight options and complete booking requests with
                clear information. Our service is designed for travelers who
                want assistance understanding routes, schedules, fare rules,
                baggage details, and booking conditions before confirming a
                trip.
              </p>
              <p className="text-sm leading-relaxed text-body">
                We are not an airline and we are not affiliated with any airline
                unless specifically stated. Airline schedules, prices, baggage
                rules, refunds, cancellations, and seat availability are
                controlled by the airline or travel supplier.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-dark">
              How Booking Assistance Works
            </h3>
            <div className="mt-3 space-y-3">
              <p className="text-sm leading-relaxed text-body">
                Start by sharing your departure city, destination, travel dates,
                passenger count, and any schedule preferences. Our team can help
                review available flight options and explain important booking
                details so you can choose the itinerary that fits your needs.
              </p>
              <p className="text-sm leading-relaxed text-body">
                Before payment, travelers should review the complete itinerary,
                total price, fare restrictions, and airline rules. A reservation
                is considered confirmed only after the airline or supplier
                issues confirmation details.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-dark">
              Important Details To Review Before Booking
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body">
              {reviewItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-dark">
              Transparent Booking Support
            </h3>
            <div className="mt-3 space-y-3">
              <p className="text-sm leading-relaxed text-body">
                FlightsReserva aims to provide clear booking assistance without
                implying airline ownership or official airline status. Any
                airline names or trademarks referenced during booking are used
                only to identify travel options and remain the property of their
                respective owners.
              </p>
              <p className="text-sm leading-relaxed text-body">
                Additional charges may apply for baggage, seat selection,
                changes, cancellations, service assistance, or optional airline
                services. Customers should review all charges and policies before
                confirming a booking.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold text-dark">
              Book Flights Online FAQs
            </h3>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-t border-black/10 pt-4">
                  <h4 className="text-base font-semibold text-dark">
                    {faq.question}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
