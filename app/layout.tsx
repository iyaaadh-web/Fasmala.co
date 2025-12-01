import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fasmala.com'), // Update with your actual domain
  title: {
    default: "Fasmala Pvt. Ltd. - Building Bridges Across Industries",
    template: "%s | Fasmala Pvt. Ltd."
  },
  description: "A multidisciplinary powerhouse driving value in Tourism, Construction, Trade, and Consultancy. Building the future, transforming today.",
  keywords: ["construction services", "tourism hospitality", "global trade", "business consultancy", "infrastructure development", "commercial services"],
  authors: [{ name: "Fasmala Pvt. Ltd." }],
  creator: "Fasmala Pvt. Ltd.",
  publisher: "Fasmala Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fasmala.com",
    siteName: "Fasmala Pvt. Ltd.",
    title: "Fasmala Pvt. Ltd. - Building Bridges Across Industries",
    description: "A multidisciplinary powerhouse driving value in Tourism, Construction, Trade, and Consultancy.",
    images: [
      {
        url: "/public/images/type-logo-1.png",
        width: 1200,
        height: 630,
        alt: "Fasmala Pvt. Ltd. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasmala Pvt. Ltd. - Building Bridges Across Industries",
    description: "A multidisciplinary powerhouse driving value in Tourism, Construction, Trade, and Consultancy.",
    images: ["/public/images/type-logo-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
