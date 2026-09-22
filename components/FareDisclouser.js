import { CONTACT_INFO } from "@/config/ContactInfo";

export default function FareDisclouser() {
  return (
    <article className="max-w-none space-y-5 leading-7">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Fare Disclosure
        </h2>
        <p>
          This Fare Disclosure explains how flight prices, availability, fees,
          and airline rules may apply when using {CONTACT_INFO.brandName}. We
          provide independent travel assistance and work to present fare
          information clearly so travelers can make informed decisions.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Fare Availability
        </h2>
        <p>
          Flight fares are dynamic and may change based on seat inventory,
          demand, airline rules, route, travel dates, fare class, and supplier
          availability. A fare is not guaranteed until the booking is confirmed
          and the ticket is issued by the airline or supplier.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          What A Quoted Fare May Include
        </h2>
        <p>
          A quoted fare may include base fare, government taxes, airport fees,
          airline-imposed charges, supplier fees, and applicable service fees.
          The final amount should be reviewed before payment authorization.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Additional Charges
        </h2>
        <p>
          Additional charges may apply for checked baggage, carry-on baggage,
          seat selection, meals, priority boarding, upgrades, insurance, ticket
          changes, cancellations, refund processing, or other optional services.
          These charges are often controlled by the airline and may be collected
          separately.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Fare Rules And Restrictions
        </h2>
        <p>
          Each ticket may have specific restrictions, including refundability,
          change fees, minimum stay, maximum stay, advance purchase
          requirements, no-show rules, baggage rules, and routing restrictions.
          Travelers should review fare rules before confirming a purchase.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Advertised Or Promotional Fares
        </h2>
        <p>
          Promotional fares, sample prices, or advertised deals may be limited
          in quantity, route, date, cabin, or availability. If an advertised
          fare is unavailable at the time of booking, our team may help review
          alternate fares that match your request.
        </p>
      </div>

      <div className="border-t border-neutral-200 pt-6">
        <p>
          {CONTACT_INFO.brandName} is not an airline and does not control
          airline pricing, inventory, schedules, or fare rules. For fare
          disclosure questions, contact{" "}
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
