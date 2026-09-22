import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FlightProvider } from "@/context/FlightContext";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.flightsreserva.com"),
  title: {
    default: "FlightsReserva | Independent Flight Booking Assistance",
    template: "%s | FlightsReserva",
  },
  description:
    "FlightsReserva provides independent flight booking assistance for domestic and international travel with clear fare information, transparent policies, and customer-focused support.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.flightsreserva.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.flightsreserva.com",
    title: "FlightsReserva | Independent Flight Booking Assistance",
    description:
      "Plan your travel with FlightsReserva. We offer independent flight booking assistance, transparent fare information, and dependable customer support.",
    siteName: "FlightsReserva",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlightsReserva Travel Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlightsReserva | Flight Booking Support",
    description:
      "Professional flight booking assistance with transparent pricing and reliable travel support.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Theme & Mobile Meta */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="format-detection" content="telephone=no" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.flightsreserva.com" />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "FlightsReserva",
              url: "https://www.flightsreserva.com",
              description:
                "FlightsReserva is an independent travel assistance service providing flight booking support and customer assistance.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                areaServed: "US",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <AuthProvider>
          <FlightProvider>{children}</FlightProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
