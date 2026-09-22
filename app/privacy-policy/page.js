import Footer from "@/components/Footer";
import InnerBanner from "@/components/GenericComponents/InnerBanner";
import Navbar from "@/components/Headers/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar />
      <InnerBanner
        title="Privacy Information"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 text-neutral-700 sm:px-6 lg:px-8 lg:py-14">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
