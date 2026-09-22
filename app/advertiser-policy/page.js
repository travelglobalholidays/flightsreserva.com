import AdvertiserPolicy from "@/components/AdvertiserPolicy";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/GenericComponents/InnerBanner";
import Navbar from "@/components/Headers/Navbar";

export default function AdvertiserPolicyPage() {
  return (
    <div>
      <Navbar />
      <InnerBanner
        title="Advertising Information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Advertiser Policy" },
        ]}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 text-neutral-700 sm:px-6 lg:px-8 lg:py-14">
        <AdvertiserPolicy />
      </main>
      <Footer />
    </div>
  );
}
