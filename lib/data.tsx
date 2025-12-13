import { Plane, HardHat, Globe, Briefcase } from 'lucide-react';
import type { CompanyInfo, Service, TimelineItem, AboutCardItem, Founder, Partner} from './types';

export const COMPANY: CompanyInfo = {
    name: "Fasmala Pvt Ltd",
    tagline: "Multifaceted Enterprise in the Maldives",
    desc: "A multifaceted enterprise based in the Maldives, renowned for its diverse operational scope across several key sectors.",
    colors: {
        accent: "text-orange-600",
        bgAccent: "bg-orange-600",
        hover: "hover:bg-orange-700",
        light: "bg-orange-50",
        border: "border-orange-600"
    }
};

export const PARTNERS: Partner[] = [
    {
        name: 'Stone Hotel Maldives',
        image: '/images/partners/stone-hotel-maldives.jpeg'
    },
    {
        name: 'Mango Mart',
        image: '/images/partners/mango-mart.jpeg'
    },
    {
        name: 'Multi',
        image: '/images/partners/multi.jpeg'
    },
    {
        name: 'Sunny Canopy',
        image: '/images/partners/sunny-canopy.jpeg'
    },
    {
        name: 'Gangehi Island Resort',
        image: '/images/partners/gangehi-island-resort.jpeg'
    },
    {
        name: 'Starry hotels',
        image: '/images/partners/notsure.jpeg'
    }
];

export const SERVICES: Service[] = [
    {
        id: 'tourism',
        title: 'Tourism & Hospitality',
        icon: <Plane size={32} />,
        desc: 'Creating sustainable destination strategies and luxury hospitality infrastructures.',
        keypoints:['Tourism', 'Hospitality', 'Destination Strategies'],
        image: "/images/services/tourism.png",
        link: 'http://www.fasmalatravels.com/'
    },
    {
        id: 'construction',
        title: 'Construction & Engineering',
        icon: <HardHat size={32} />,
        desc: 'Delivering large-scale industrial and commercial infrastructure with precision.',
        keypoints:['Construction', 'Engineering', 'Infrastructure'],
        image: '/images/services/construction.png',
        link: 'null'
    },
    {
        id: 'trade',
        title: 'Global Trade',
        icon: <Globe size={32} />,
        desc: 'Optimizing supply chains and facilitating cross-border commercial exchange.',
        keypoints:['Trade', 'Supply Chains', 'Cross-Border Commerce'],
        image: '/images/services/globalTrade.png',
        link: 'null'
    },
    {
        id: 'consultancy',
        title: 'Strategic Consultancy',
        icon: <Briefcase size={32} />,
        desc: 'Data-driven insights to navigate complex B2B market landscapes.',
        keypoints:['Consultancy', 'Strategic Planning', 'Market Analysis'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        link: 'null'
    },
    {
        id: 'Jobzzy.com',
        title: 'Jobszzy Maldives',
        icon: <Briefcase size={32} />,
        desc: 'Jobszzy is our HR and recruitment division, bridging the gap between employers and talented professionals. We provide comprehensive HR solutions from recruitment to workforce management.',
        keypoints:['Recruitment', 'Workforce Management', 'HR Solutions'],
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
        link: 'null'
    }
];

export const FOUNDER: Founder = {
    name: 'Mr. Moosa Iyad Ibrahim',
    title: 'Founder & Chairman',
    message: 'At Fasmala, we believe that true progress lies at the intersection of innovation and integrity. For 1 year, we have not just built structures or managed supply chains; we have built trust. Our vision remains steadfast: to empower our partners to thrive in an ever-evolving global landscape.',
    image: '/images/founder.jpeg'
}

export const ABOUT_CARDS: AboutCardItem[] = [
    {
        id: 'vision',
        title: 'Our Vision',
        desc: "To be the world's most trusted partner for businesses seeking sustainable growth in complex markets.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        label: "Vision"
    },
    {
        id: 'mission',
        title: 'Our Mission',
        desc: "Delivering excellence through precision engineering, data-driven strategy, and ethical trade practices.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
        label: "Mission"
    },
    {
        id: 'motto',
        title: 'Our Motto',
        desc: "Integrity, Innovation, Sustainability, and a relentless commitment to Client Success.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
        label: "Values"
    }
];


export const TIMELINE: TimelineItem[] = [
    { year: "2024",
    title: "Sustainable Future",
    desc: "Committed to Carbon Neutrality across all sectors by 2030." }
];







