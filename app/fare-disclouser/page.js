import FareDisclouser from "@/components/FareDisclouser";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/GenericComponents/InnerBanner";
import Navbar from "@/components/Headers/Navbar";

export default function FareDisclouserPage() {
  return (
    <div>
      <Navbar />
      <InnerBanner
        title="Fare Information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fare Disclosure" },
        ]}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 text-neutral-700 sm:px-6 lg:px-8 lg:py-14">
        <FareDisclouser />
      </main>
      <Footer />
    </div>
  );
}
