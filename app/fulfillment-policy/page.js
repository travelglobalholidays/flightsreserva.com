import Footer from "@/components/Footer";
import FulfillmentPolicy from "@/components/FulfillmentPolicy";
import InnerBanner from "@/components/GenericComponents/InnerBanner";
import Navbar from "@/components/Headers/Navbar";

export default function FulfillmentPolicyPage() {
  return (
    <div>
      <Navbar />
      <InnerBanner
        title="Booking Fulfillment Information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fulfillment Policy" },
        ]}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 text-neutral-700 sm:px-6 lg:px-8 lg:py-14">
        <FulfillmentPolicy />
      </main>
      <Footer />
    </div>
  );
}
