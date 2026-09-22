import Image from "next/image";
import CommonButton from "./Common/CommonButton";
import SectionHeading from "./Common/Headings";
export default function AboutSection() {
  return (
    <section className="py-10 lg:py-[70px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          {/* LEFT */}
          <div className="relative lg:col-span-4">
            {/* Images */}
            <div className="mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none">
              <Image
                src="/images/about/01.jpg"
                alt="About"
                width={400}
                height={500}
                className="h-auto w-full rounded-[200px] object-cover"
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className="lg:col-span-8">
            {/* Heading */}
            <SectionHeading
              tagline="About FlightsReserva"
              title=" Making Travel Planning Simple, Convenient & Reliable"
              suffix=""
            />

            {/* Text */}
            <p className="text-body mb-4">
              FlightsReserva is an independent travel assistance service created
              to make travel planning simpler, more convenient, and less
              time-consuming. Whether you're planning a domestic trip, an
              international journey, or simply exploring suitable flight
              options, we help you review available choices and plan a journey
              that fits your schedule, preferences, and travel needs.
            </p>

            <p className="text-body mb-4">
              At FlightsReserva, we understand that planning the right journey
              can sometimes feel complicated. With different airlines, routes,
              schedules, connections, and fare options to consider, finding a
              suitable itinerary can take time. Our experienced travel
              assistance team helps simplify the process by presenting relevant
              flight options and providing personalized guidance, so you can
              compare your choices and plan your journey with greater
              confidence.
            </p>

            {/* Button */}
            <CommonButton href="about-us" text="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
}
