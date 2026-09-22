import { CONTACT_INFO } from "@/config/ContactInfo";

export default function CookiesPolicy() {
  return (
    <article className="max-w-none space-y-5 leading-7">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Cookies Policy
        </h2>
        <p>
          This Cookies Policy explains how {CONTACT_INFO.brandName} may use
          cookies, pixels, tags, local storage, analytics identifiers, and
          similar technologies on {CONTACT_INFO.domain}. These technologies help
          us operate the website, measure performance, improve user experience,
          and understand how visitors interact with our travel assistance pages.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          What Cookies Are
        </h2>
        <p>
          Cookies are small files stored on your browser or device when you
          visit a website. They may remember preferences, support website
          functionality, help keep sessions secure, and provide aggregated
          information about website traffic and performance.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Types Of Cookies We May Use
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Essential cookies:</strong> Help the website load, remember
            basic settings, and support security.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand page visits,
            traffic sources, and how users navigate the website.
          </li>
          <li>
            <strong>Performance cookies:</strong> Help identify technical
            issues and improve website speed and usability.
          </li>
          <li>
            <strong>Advertising cookies:</strong> May help measure ad
            performance, limit repeated messages, and show relevant travel
            information where permitted.
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Third-Party Tools
        </h2>
        <p>
          We may use tools provided by analytics, advertising, call tracking,
          fraud-prevention, or website service providers. These providers may
          set their own cookies or similar technologies subject to their privacy
          practices.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium text-dark">
          Managing Cookies
        </h2>
        <p>
          Most browsers allow you to block, delete, or manage cookies through
          browser settings. If you disable cookies, some website features,
          forms, tracking preferences, or security functions may not work as
          expected.
        </p>
      </div>

      <div className="space-y-2 border-t border-neutral-200 pt-6">
        <h2 className="font-heading text-xl font-medium text-dark">
          Contact
        </h2>
        <p>
          For questions about cookies or tracking technologies, contact{" "}
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
