import { CONTACT_INFO } from "@/config/ContactInfo";

export default function CancellationRefundPolicy() {
  return (
    <article className="max-w-none space-y-5 leading-7">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Cancellation & Refund Policy
        </h2>
        <p>
          This policy explains how cancellation, change, refund, and travel
          credit requests are handled by {CONTACT_INFO.brandName}. Because flight
          tickets are issued under airline and supplier fare rules, eligibility
          for a refund or change depends on the specific ticket, route, fare
          class, airline policy, and timing of the request.
        </p>
        <p>
          {CONTACT_INFO.brandName} is an independent travel assistance service.
          We help submit and manage requests, but airlines and suppliers make
          the final decision on refund eligibility, penalties, credits, waivers,
          and processing timelines.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          How To Request A Cancellation
        </h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Contact us as soon as possible with your booking reference and passenger name.</li>
          <li>Tell us whether you want to cancel, change dates, request credit, or review refund options.</li>
          <li>Our team will check the applicable fare rules and supplier policy.</li>
          <li>We will explain known fees, restrictions, and available options before processing where possible.</li>
        </ol>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Refund Eligibility
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Refundable tickets:</strong> May be refunded according to
            airline rules, less applicable penalties or service fees.
          </li>
          <li>
            <strong>Non-refundable tickets:</strong> Usually do not qualify for
            cash refunds but may allow airline credit or date changes.
          </li>
          <li>
            <strong>Partially used tickets:</strong> Refund value, if any, is
            calculated by the airline or supplier.
          </li>
          <li>
            <strong>No-show bookings:</strong> Missing a flight or failing to
            cancel before departure may remove refund or credit eligibility.
          </li>
          <li>
            <strong>Airline schedule changes:</strong> Major airline-initiated
            changes may qualify for rebooking, credit, or refund based on
            carrier policy.
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Non-Refundable Charges
        </h2>
        <p>
          Some charges may be non-refundable even when part of a booking is
          eligible for refund. These may include service fees, payment
          processing charges, supplier handling fees, insurance premiums,
          optional add-ons, seat fees, baggage fees, or charges already used.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Processing Timelines
        </h2>
        <p>
          Refund timelines vary by airline, supplier, bank, and payment method.
          After approval, many refunds may take several business days or billing
          cycles to appear. International itineraries, multi-airline tickets,
          disputed payments, or manual airline review can take longer.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Travel Credits And Vouchers
        </h2>
        <p>
          Some airlines issue future travel credits or vouchers instead of cash
          refunds. Credits may have expiration dates, passenger restrictions,
          route limits, reissue fees, fare differences, or airline-specific
          terms. Customers are responsible for reviewing and using credits
          before expiration.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Customer Responsibilities
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Submit cancellation or change requests before scheduled departure whenever possible.</li>
          <li>Review fare rules and ticket restrictions before purchase.</li>
          <li>Provide accurate booking and passenger details for verification.</li>
          <li>Monitor email and phone communications for airline or agency updates.</li>
        </ul>
      </div>

      <div className="space-y-2 border-t border-neutral-200 pt-6">
        <h2 className="font-heading text-xl font-medium text-dark">
          Contact For Cancellation Or Refund Help
        </h2>
        <p>
          For cancellation or refund assistance, contact{" "}
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
