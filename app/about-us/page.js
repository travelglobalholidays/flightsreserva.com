import Footer from "@/components/Footer";
import InnerBanner from "@/components/GenericComponents/InnerBanner";
import Navbar from "@/components/Headers/Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <InnerBanner
        title="Travel Assistance Information"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <main className="mx-auto max-w-7xl px-4 py-10 text-neutral-700 sm:px-6 lg:px-8 lg:py-14">
        <article className="max-w-none space-y-5 leading-7">
          <div>
            <h2 className="font-heading text-xl font-medium text-dark">
              About FlightsReserva - Your Independent Travel Assistance Partner
            </h2>
            <p>
              <strong>FlightsReserva</strong> is an independent travel
              assistance service dedicated to helping travelers explore suitable
              flight options and plan their journeys with greater ease and
              confidence. Our focus is not simply on finding a flight, but on
              helping customers understand the available travel choices and
              identify options that best match their schedule, destination,
              preferences, and overall travel requirements.
            </p>
            <p>
              Planning a journey can often become complicated with numerous
              airlines, routes, schedules, connections, and fare options
              available. At FlightsReserva, we aim to make this process easier.
              Our travel assistance team helps customers explore available
              options, compare suitable itineraries, and plan a journey based on
              their individual needs.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-medium text-dark">
              Making Travel Planning Easier
            </h2>
            <p>
              Every traveler has different priorities. Some may prefer
              convenient departure times, while others may be looking for
              shorter connections, flexible travel options, or an itinerary that
              better fits their overall plans.
            </p>
            <p>
              FlightsReserva helps simplify these choices by presenting relevant
              travel options and assisting customers in planning their journey.
              Our goal is to save travelers the time and effort involved in
              searching through numerous possibilities on their own.
            </p>
            <p>
              By combining modern technology with personalized travel
              assistance, we strive to provide a straightforward and convenient
              experience from the initial travel search through journey planning.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-medium text-dark">
              Independent Travel Assistance
            </h2>
            <p>
              FlightsReserva operates independently and is not affiliated with,
              endorsed by, or operated by any airline. This independence allows
              our focus to remain on helping travelers explore available options
              from different travel providers based on their requirements.
            </p>
            <p>
              Rather than representing any particular airline, our role is to
              assist customers in reviewing available routes, schedules, and
              travel options so they can make informed choices for their
              journey.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-medium text-dark">
              Personalized Journey Planning
            </h2>
            <p>
              A successful trip involves more than choosing a destination.
              Flight timings, connections, travel duration, routing, and
              individual preferences can all play an important role in creating a
              convenient itinerary.
            </p>
            <p>
              Our travel assistance team considers these factors when helping
              customers explore their options. Whether you're planning a business
              trip, family vacation, international journey, or a quick getaway,
              FlightsReserva aims to make the planning process simpler and more
              organized.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-medium text-dark">
              Assistance Throughout Your Travel Planning
            </h2>
            <p>
              Travel questions can arise at any stage of planning. Our team is
              available to provide assistance with flight options,
              itinerary-related questions, route information, and general travel
              planning.
            </p>
            <p>
              We believe that technology makes travel searches faster, while
              personalized assistance can make travel decisions easier.
              FlightsReserva brings these together to provide travelers with a
              convenient and customer-focused planning experience.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-medium text-dark">
              Our Mission
            </h2>
            <p>
              Our mission at <strong>FlightsReserva</strong> is to simplify
              travel planning by helping customers discover suitable flight
              options and create journeys that better fit their needs.
            </p>
            <p>
              We are committed to providing independent travel assistance, clear
              information, personalized support, and a convenient way to explore
              travel possibilities. From your initial search to planning your
              journey, FlightsReserva is here to help you explore your options
              and travel with greater confidence.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <p>
              <strong>Important Disclaimer:</strong> FlightsReserva is an
              independent travel assistance service and is not an airline. We
              are not affiliated with, endorsed by, or officially connected with
              any airline unless specifically stated otherwise. Airline names,
              logos, trademarks, and other brand identifiers belong to their
              respective owners. Flight availability, schedules, fares, and
              airline policies are determined by the respective airlines or
              travel service providers and may change without notice.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
