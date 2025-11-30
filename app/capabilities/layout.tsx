import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Capabilities - Services & Expertise",
    description: "Explore Fasmala's expertise across Tourism & Hospitality, Construction & Engineering, Global Trade, and Strategic Consultancy. Holistic solutions for complex business challenges.",
    openGraph: {
        title: "Our Capabilities - Fasmala Pvt. Ltd.",
        description: "Deep functional expertise in tourism, construction, trade, and consultancy with a holistic perspective.",
        url: "https://fasmala.com/capabilities",
    },
    keywords: ["tourism services", "construction engineering", "global trade solutions", "business consultancy", "infrastructure projects"],
};

export default function CapabilitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
