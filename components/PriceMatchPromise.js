import { CONTACT_INFO } from "@/config/ContactInfo";

export default function PriceMatchPromise() {
  return (
    <article className="max-w-none space-y-5 leading-7">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Price Match Promise
        </h2>
        <p>
          {CONTACT_INFO.brandName} aims to help travelers review fair and
          suitable flight options. If you find a lower publicly available fare
          for the same itinerary before ticketing, our team may review the fare
          and attempt to match or provide a comparable option where available.
        </p>
        <p>
          A price match is not guaranteed. Airline inventory changes quickly,
          and final availability depends on supplier confirmation at the time of
          review and booking.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Eligible Comparison Requirements
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>The fare must be for the same airline, route, dates, flight numbers, cabin, and passenger count.</li>
          <li>The fare must include all mandatory taxes, fees, and carrier charges.</li>
          <li>The fare must be publicly available and verifiable at the time we review it.</li>
          <li>The booking conditions, refund rules, baggage, and restrictions must be comparable.</li>
          <li>The request must be made before ticketing or before final purchase confirmation.</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Exclusions
        </h2>
        <p>
          Price match review may not apply to expired fares, private membership
          fares, employee fares, rewards points, opaque fares, package-only
          rates, coupon-only prices, pricing mistakes, unavailable offers,
          screenshots that cannot be verified, or fares that change before
          booking can be completed.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Review Process
        </h2>
        <p>
          To request review, provide the competing itinerary details, total
          price, fare conditions, and source where the fare can be verified. Our
          team will review the information and explain whether a match,
          alternative option, or different fare is available.
        </p>
      </div>

      <div className="border-t border-neutral-200 pt-6">
        <p>
          For price match questions, contact {CONTACT_INFO.brandName} at{" "}
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
