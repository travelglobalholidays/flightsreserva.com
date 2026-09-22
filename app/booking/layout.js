import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata({
  title: "Booking",
  description: "Private FlightsReserva booking pages.",
  path: "/booking",
});

export default function BookingLayout({ children }) {
  return children;
}
