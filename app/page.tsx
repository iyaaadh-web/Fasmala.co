import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/lib/data';
import { Suspense } from "react";
import AboutClient from "./AboutClient";

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutClient />
    </Suspense>
  );
}
export const metadata: Metadata = {
  title: "Home",
  description: "Fasmala Pvt. Ltd. - A multidisciplinary powerhouse driving value in Tourism, Construction, Trade, and Consultancy. Building the future, transforming today.",
  openGraph: {
    title: "Fasmala Pvt. Ltd. - Building Bridges Across Industries",
    description: "A multidisciplinary powerhouse driving value in Tourism, Construction, Trade, and Consultancy.",
    url: "https://fasmala.com",
  },
};

export default function HomePage() {
  // JSON-LD structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fasmala Pvt. Ltd.",
    alternateName: "Fasmala",
    url: "https://fasmala.com",
    logo: "https://fasmala.com/images/fasmala-logo.png",
    description: "A multidisciplinary powerhouse driving value in Tourism, Construction, Trade, and Consultancy.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business District, Global Tower, Floor 45",
      addressLocality: "London",
      addressCountry: "UK"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-20-7123-4567",
      contactType: "customer service",
      email: "contact@nexglobal.com"
    },
    sameAs: [
      "https://www.linkedin.com/company/fasmala",
      "https://twitter.com/fasmala",
      "https://www.facebook.com/fasmala"
    ],
    founder: {
      "@type": "Person",
      name: "Moosa Iyad Ibrahim"
    },
    foundingDate: "1998"
  };
  return (
    <div>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <HeroSection />
      <CapabilitiesSection />

      {/* CTA Strip */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
            <p className="text-slate-400 max-w-xl">
              Connect with our experts to discuss how {COMPANY.name} can help you achieve your strategic goals.
            </p>
          </div>
          <Link href="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
