import { CONTACT_INFO } from "@/config/ContactInfo";

export default function AdvertiserPolicy() {
  return (
    <article className="max-w-none space-y-5 leading-7">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Advertiser Policy
        </h2>
        <p>
          This Advertiser Policy explains how {CONTACT_INFO.brandName} presents
          travel-related advertisements, promotional messages, fare information,
          and third-party travel content on {CONTACT_INFO.domain}. Our goal is
          to keep advertising clear, truthful, relevant, and easy for travelers
          to understand.
        </p>
        <p>
          {CONTACT_INFO.brandName} is an independent travel assistance service.
          We do not claim to be an airline, airport, government agency, or
          official airline website. Airline names, logos, trademarks, and brand
          identifiers belong to their respective owners and are used only for
          identification or itinerary reference where applicable.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Clear Business Identity
        </h2>
        <p>
          Our ads and landing pages should identify {CONTACT_INFO.brandName} as
          the advertised business. We do not intentionally create ads or website
          content that suggests false affiliation, endorsement, or official
          status with any airline or travel supplier.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Fare And Offer Accuracy
        </h2>
        <p>
          Travel fares and offers can change quickly because airline inventory,
          taxes, supplier charges, and fare rules are dynamic. Any advertised or
          displayed fare is subject to availability and final confirmation at
          the time of booking.
        </p>
        <p>
          We aim not to promote expired, unavailable, or misleading offers. If
          an advertised fare is no longer available, our team may help customers
          review alternative options that match their travel request.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Pricing Transparency
        </h2>
        <p>
          Pricing communications should avoid creating a false impression of the
          final cost. Fare quotes may include airline fares, taxes,
          carrier-imposed charges, supplier fees, and {CONTACT_INFO.brandName}
          service fees where applicable. Optional services such as baggage,
          seats, insurance, upgrades, and airline add-ons may cost extra.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Third-Party Advertising And Analytics
        </h2>
        <p>
          We may use third-party advertising platforms, analytics tools, call
          tracking, conversion tracking, or remarketing technologies to measure
          campaign performance and improve our services. These tools may use
          cookies or similar technologies as described in our Privacy Policy and
          Cookies Policy.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Content Standards
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>We aim to use clear language and avoid deceptive claims.</li>
          <li>We do not guarantee airline approval, refunds, upgrades, or specific fares.</li>
          <li>We do not claim exclusive airline status unless clearly documented.</li>
          <li>We disclose that travel services are subject to airline and supplier rules.</li>
          <li>We keep calls to action relevant to services available on our website.</li>
        </ul>
      </div>

      <div className="space-y-2 border-t border-neutral-200 pt-6">
        <h2 className="font-heading text-xl font-medium text-dark">
          Advertiser Contact
        </h2>
        <p>
          For advertising, trademark, or offer accuracy questions, contact{" "}
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
