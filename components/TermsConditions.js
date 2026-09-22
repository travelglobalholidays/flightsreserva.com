import { CONTACT_INFO } from "@/config/ContactInfo";

export default function TermsConditions() {
  return (
    <article className="max-w-none space-y-5 leading-7">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Terms & Conditions
        </h2>
        <p>
          These Terms & Conditions govern your use of {CONTACT_INFO.domain} and
          the independent travel assistance services offered by{" "}
          {CONTACT_INFO.brandName}. By using this website, submitting a travel
          request, speaking with our support team, or confirming a reservation,
          you agree to the terms described on this page.
        </p>
        <p>
          {CONTACT_INFO.brandName} is not an airline and is not owned, operated,
          endorsed by, or officially connected with any airline unless expressly
          stated. We assist travelers with flight search, itinerary review,
          booking support, changes, cancellation guidance, and travel-related
          customer service.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Independent Travel Assistance
        </h2>
        <p>
          We provide assistance using information supplied by airlines, global
          distribution systems, consolidators, and other travel service
          providers. Availability, pricing, schedules, fare rules, baggage
          allowances, seat availability, and airline policies are controlled by
          the applicable airline or supplier and may change before ticketing.
        </p>
        <p>
          Our role is to help you understand available options and complete a
          booking request. We do not guarantee that a specific fare, route,
          seat, schedule, or service will remain available until payment is
          accepted and the reservation is confirmed by the supplier.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Booking Requests And Confirmation
        </h2>
        <p>
          A booking request is not confirmed until the airline or supplier
          issues a confirmation number, ticket number, or written confirmation.
          You are responsible for reviewing passenger names, dates, airports,
          travel documents, contact details, baggage rules, and fare conditions
          before authorizing payment.
        </p>
        <p>
          Passenger names must match the government-issued identification or
          passport used for travel. Name corrections, date changes, routing
          changes, and ticket reissues may be restricted by the airline and may
          require additional charges.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Pricing, Taxes, Fees And Service Charges
        </h2>
        <p>
          Any fare quote may include airline fare, taxes, carrier-imposed
          charges, supplier fees, and service fees charged by{" "}
          {CONTACT_INFO.brandName} for assistance. We aim to explain applicable
          charges before payment. Final pricing is confirmed only at the time of
          ticketing.
        </p>
        <p>
          Additional optional costs may apply for baggage, seat selection,
          priority boarding, meals, insurance, upgrades, exchange fees, refund
          processing, or other airline services. These charges are usually set
          by the airline or supplier and may not be controlled by{" "}
          {CONTACT_INFO.brandName}.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Payments And Authorization
        </h2>
        <p>
          By providing payment information, you authorize us or our payment
          processor to charge the amount disclosed for the selected service.
          Payment may be processed by a third-party payment provider. We may
          require identity, billing, or fraud-prevention verification before
          confirming a booking.
        </p>
        <p>
          If payment is declined, flagged for verification, reversed, or not
          completed, the fare may no longer be available and the booking may not
          be confirmed.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Changes, Cancellations And Refunds
        </h2>
        <p>
          Changes and cancellations are subject to airline fare rules, supplier
          policies, and applicable service fees. Some tickets are non-refundable
          or may only qualify for travel credit. Refunds, when permitted, are
          processed only after airline or supplier approval.
        </p>
        <p>
          Please review our Cancellation & Refund Policy for more information
          about eligibility, timelines, and non-refundable charges.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Traveler Responsibilities
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Review all itinerary and passenger details before purchase.</li>
          <li>
            Carry valid identification, passport, visa, and required travel
            documents.
          </li>
          <li>
            Check airline baggage rules, check-in deadlines, and travel
            advisories.
          </li>
          <li>Arrive at the airport within the airline's recommended time.</li>
          <li>Contact us promptly if any booking detail appears incorrect.</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Third-Party Providers
        </h2>
        <p>
          Airlines, hotels, car rental companies, insurance providers, and other
          travel suppliers are independent businesses. Their terms, conditions,
          and policies apply to the services they provide.{" "}
          {CONTACT_INFO.brandName} is not responsible for airline delays,
          cancellations, schedule changes, denied boarding, baggage decisions,
          government restrictions, weather events, or supplier service failures.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Website Use
        </h2>
        <p>
          You agree not to misuse this website, submit false information,
          interfere with website functionality, attempt unauthorized access, or
          use our content for unlawful or misleading purposes. Website content
          is provided for general travel assistance and may change without
          notice.
        </p>
      </div>

      <div className="space-y-2 border-t border-neutral-200 pt-6">
        <h2 className="font-heading text-xl font-medium text-dark">
          Contact
        </h2>
        <p>
          For questions about these Terms & Conditions, contact{" "}
          {CONTACT_INFO.brandName} at{" "}
          <a
            href={CONTACT_INFO.emailHref}
            className="font-medium text-theme hover:text-theme2"
          >
            {CONTACT_INFO.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
