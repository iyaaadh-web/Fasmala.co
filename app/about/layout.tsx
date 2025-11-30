import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us - Our Story & History",
    description: "Learn about Fasmala Pvt. Ltd.'s journey since 1998. Pioneering progress in tourism, construction, trade, and consultancy with integrity and innovation.",
    openGraph: {
        title: "About Fasmala Pvt. Ltd. - Our Story & History",
        description: "Discover our 25-year journey of building trust and delivering excellence across industries.",
        url: "https://fasmala.com/about",
    },
    keywords: ["company history", "founder message", "corporate values", "business timeline", "Moosa Iyad Ibrahim"],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
