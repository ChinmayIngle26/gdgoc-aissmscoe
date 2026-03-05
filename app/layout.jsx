import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "GDG On Campus AISSMS COE",
    template: "%s | GDG AISSMS COE",
  },
  description:
    "Join GDG On Campus AISSMS College of Engineering, Pune. Explore tech events, coding workshops, and developer communities.",
  keywords: [
    "GDG",
    "Google Developer Group",
    "AISSMS COE",
    "Pune",
    "tech events",
    "coding workshops",
    "developer community",
  ],
  openGraph: {
    title: "GDG On Campus AISSMS COE",
    description:
      "Join GDG On Campus AISSMS College of Engineering, Pune. Explore tech events, coding workshops, and developer communities.",
    url: "https://gdgoc-aissmscoe.vercel.app",
    siteName: "GDG AISSMS COE",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDG On Campus AISSMS COE",
    description:
      "Join GDG On Campus AISSMS College of Engineering, Pune. Explore tech events, coding workshops, and developer communities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clashDisplay.variable}>
      <body className={`${darkerGrotesque.variable} antialiased page`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
