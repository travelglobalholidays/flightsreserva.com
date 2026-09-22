import Footer from "@/components/Footer";
import InnerBanner from "@/components/GenericComponents/InnerBanner";
import Navbar from "@/components/Headers/Navbar";
import PriceMatchPromise from "@/components/PriceMatchPromise";

export default function PriceMatchPromisePage() {
  return (
    <div>
      <Navbar />
      <InnerBanner
        title="Fare Review Information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Price Match Promise" },
        ]}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 text-neutral-700 sm:px-6 lg:px-8 lg:py-14">
        <PriceMatchPromise />
      </main>
      <Footer />
    </div>
  );
}
