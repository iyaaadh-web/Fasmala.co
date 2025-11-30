// content/content.config.ts
// ========================================
// CENTRALIZED CONTENT MANAGEMENT SYSTEM
// Real Fasmala Pvt Ltd Content
// ========================================

export const siteConfig = {
    // Company Information
    company: {
        name: "Fasmala Pvt Ltd",
        tagline: "Multifaceted Enterprise in the Maldives",
        description: "Fasmala Pvt Ltd is a multifaceted enterprise based in the Maldives, renowned for its diverse operational scope across several key sectors. The company has established itself as a leading player in FMCG trade, travel agency services, and tax and business consultancy. Recently expanding its portfolio to include construction, security, shipping, and cleaning services.",
        email: "info@fasmala.com",
        phone: "+960 123 4567",
        address: "Maldives",
        founded: "2020",
    },

    // SEO & Metadata
    seo: {
        domain: "https://fasmala.com",
        defaultTitle: "Fasmala Pvt Ltd - Multifaceted Enterprise in the Maldives",
        defaultDescription: "Leading provider of FMCG trade, travel agency services, tax and business consultancy, construction, security, shipping, and cleaning services in the Maldives.",
        keywords: [
            "Fasmala",
            "Maldives business",
            "FMCG trade",
            "travel agency Maldives",
            "business consultancy",
            "construction Maldives",
            "security services",
            "shipping services",
            "cleaning services",
            "Maldives tourism"
        ],
        twitterHandle: "@fasmala",
        ogImage: "/og-image.jpg",
    },

    // Social Media Links
    social: {
        facebook: "https://facebook.com/fasmala",
        twitter: "https://twitter.com/fasmala",
        linkedin: "https://linkedin.com/company/fasmala",
        instagram: "https://instagram.com/fasmala",
    },

    // Navigation Menu
    navigation: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ],
};

// Office Hours
export const officeHours = {
    title: "Office Hours",
    schedule: [
        { days: "Sunday - Thursday", hours: "8:00 AM - 5:00 PM" },
        { days: "Saturday", hours: "9:00 AM - 1:00 PM" },
        { days: "Friday", hours: "Closed" },
    ],
};

// Contact Information
export const contactInfo = {
    items: [
        {
            icon: "Mail",
            title: "Email",
            value: "info@fasmala.com",
            href: "mailto:info@fasmala.com",
        },
        {
            icon: "Phone",
            title: "Phone",
            value: "+960 938-7414",
            href: "https://wa.me/+9609387414",
        },
        {
            icon: "MapPin",
            title: "Location",
            value: "Maldives",
            href: "#",
        },
    ],
};
