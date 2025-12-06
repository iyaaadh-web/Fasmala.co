// lib/content.ts
// Helper functions to use centralized content throughout your app

import {
    siteConfig,
    officeHours
} from '@/content/content.config';
import { Metadata } from 'next';

// ========================================
// METADATA GENERATORS
// ========================================

interface PageMetadataOptions {
    title?: string;
    description?: string;
    keywords?: string[];
    path?: string;
    image?: string;
}

export function generateMetadata(options: PageMetadataOptions): Metadata {
    const {
        title = siteConfig.seo.defaultTitle,
        description = siteConfig.seo.defaultDescription,
        keywords = siteConfig.seo.keywords,
        path = '/',
        image = siteConfig.seo.ogImage,
    } = options;

    const url = `${siteConfig.seo.domain}${path}`;
    const fullImage = image.startsWith('http') ? image : `${siteConfig.seo.domain}${image}`;

    return {
        title,
        description,
        keywords: keywords.join(', '),
        authors: [{ name: siteConfig.company.name }],
        creator: siteConfig.company.name,
        publisher: siteConfig.company.name,
        metadataBase: new URL(siteConfig.seo.domain),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.company.name,
            images: [
                {
                    url: fullImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [fullImage],
            creator: siteConfig.seo.twitterHandle,
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
}

// ========================================
// CONTENT GETTERS
// ========================================

export const getContent = {
    // Site Configuration
    site: () => siteConfig,
    company: () => siteConfig.company,
    social: () => siteConfig.social,
    navigation: () => siteConfig.navigation,
    seo: () => siteConfig.seo,
    
    // Office Hours
    officeHours: () => officeHours
};

// ========================================
// STRUCTURED DATA GENERATORS
// ========================================

export function generateOrganizationSchema() {
    const schema: any = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.company.name,
        description: siteConfig.company.description,
        url: siteConfig.seo.domain,
        logo: `${siteConfig.seo.domain}/images/fasmala-logo.png`,
        foundingDate: siteConfig.company.founded,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Maldives',
            addressCountry: 'MV',
            streetAddress: siteConfig.company.address,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.company.phone,
            email: siteConfig.company.email,
            contactType: 'Customer Service',
        },
        sameAs: Object.values(siteConfig.social),
    };
    
    // Only add founder if it exists in the config
    if ('founder' in siteConfig.company && siteConfig.company.founder) {
        schema.founder = {
            '@type': 'Person',
            name: (siteConfig.company as any).founder.name,
        };
    }
    
    return schema;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteConfig.seo.domain}${item.url}`,
        })),
    };
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

export function getPageMetadata(page: 'home' | 'about' | 'capabilities' | 'contact'): Metadata {
    const metadataMap = {
        home: {
            title: siteConfig.seo.defaultTitle,
            description: siteConfig.seo.defaultDescription,
            path: '/',
        },
        about: {
            title: `About Us - ${siteConfig.company.name}`,
            description: `Learn about ${siteConfig.company.name} - ${siteConfig.company.description}`,
            path: '/about',
        },
        capabilities: {
            title: `Our Capabilities - ${siteConfig.company.name}`,
            description: `Explore our services and capabilities at ${siteConfig.company.name}`,
            path: '/capabilities',
        },
        contact: {
            title: `Contact Us - ${siteConfig.company.name}`,
            description: `Get in touch with ${siteConfig.company.name}. ${siteConfig.company.description}`,
            path: '/contact',
        },
    };

    return generateMetadata(metadataMap[page]);
}

// Export content objects for direct imports if needed
export {
    siteConfig,
    officeHours
};
