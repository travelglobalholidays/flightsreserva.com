import { CONTACT_INFO } from "@/config/ContactInfo";

export default function PrivacyPolicy() {
  return (
    <article className="max-w-none space-y-5 leading-7">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Privacy Policy
        </h2>
        <p>
          This Privacy Policy explains how {CONTACT_INFO.brandName} collects,
          uses, stores, and protects information when you visit{" "}
          {CONTACT_INFO.domain}, request travel assistance, communicate with our
          team, or use our booking support services.
        </p>
        <p>
          We are committed to handling personal information responsibly and using
          it only for legitimate travel assistance, customer support, security,
          and business purposes described below.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Information We May Collect
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name, email address, phone number, and contact preferences.</li>
          <li>Travel details such as route, dates, destination, passenger count, and itinerary preferences.</li>
          <li>Passenger information needed to support a booking request.</li>
          <li>Billing details and payment verification information processed through payment providers.</li>
          <li>Messages, call notes, support requests, and customer service communications.</li>
          <li>Device, browser, IP address, cookie, analytics, and website usage information.</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          How We Use Information
        </h2>
        <p>We may use personal information to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Respond to flight search, booking, change, cancellation, or refund requests.</li>
          <li>Provide customer support and communicate itinerary-related updates.</li>
          <li>Verify identity, payment, booking details, and fraud-prevention signals.</li>
          <li>Coordinate with airlines, suppliers, payment processors, and service providers.</li>
          <li>Improve website performance, content, security, and user experience.</li>
          <li>Comply with legal, regulatory, accounting, tax, dispute, and security obligations.</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Sharing With Travel And Service Providers
        </h2>
        <p>
          To assist with a travel request, we may share necessary information
          with airlines, booking systems, payment processors, fraud-prevention
          vendors, customer support tools, email providers, analytics providers,
          or other service providers that help operate our business.
        </p>
        <p>
          We do not sell personal information as a standalone product. We share
          information only as needed to provide services, operate the website,
          comply with legal obligations, protect our rights, or complete a
          customer-requested transaction.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Payment Information
        </h2>
        <p>
          Payment transactions may be handled by third-party payment processors.
          We may receive payment status, billing verification, and transaction
          details, but payment providers may process card data according to
          their own security and privacy practices.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Cookies And Analytics
        </h2>
        <p>
          We may use cookies, pixels, tags, and analytics tools to understand
          website usage, maintain security, measure performance, improve
          content, and support advertising measurement. You can manage cookies
          through your browser settings. Some features may not work properly if
          cookies are disabled.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Data Retention
        </h2>
        <p>
          We retain personal information only as long as reasonably necessary
          for booking support, customer service, legal compliance, dispute
          resolution, accounting, fraud prevention, and business records. The
          retention period may vary based on the type of information and the
          purpose for which it was collected.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Data Security
        </h2>
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards designed to protect personal information. No website,
          system, or transmission method can be guaranteed to be completely
          secure, so customers should avoid sending unnecessary sensitive
          information.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Your Choices And Rights
        </h2>
        <p>
          Depending on your location, you may have rights to request access,
          correction, deletion, restriction, or a copy of personal information.
          You may also opt out of marketing communications by using the
          unsubscribe link in an email or contacting us directly.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Children's Privacy
        </h2>
        <p>
          Our services are intended for adults and travel planners. We do not
          knowingly collect personal information from children under 13. If you
          believe a child has provided information to us, contact us so we can
          review and remove it where appropriate.
        </p>
      </div>

      <div className="space-y-2 border-t border-neutral-200 pt-6">
        <h2 className="font-heading text-xl font-medium text-dark">
          Contact For Privacy Requests
        </h2>
        <p>
          For privacy questions, access requests, or data removal requests,
          contact {CONTACT_INFO.brandName} at{" "}
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
