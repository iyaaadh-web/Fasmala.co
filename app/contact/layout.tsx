import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us - Get in Touch",
    description: "Contact Fasmala Pvt. Ltd. for inquiries about our services, partnerships, or business opportunities. Our team is ready to help you achieve your strategic goals.",
    openGraph: {
        title: "Contact Fasmala Pvt. Ltd.",
        description: "Get in touch with our team for inquiries about tourism, construction, trade, and consultancy services.",
        url: "https://fasmala.com/contact",
    },
    keywords: ["contact fasmala", "business inquiry", "partnership opportunities", "get quote", "customer service"],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
