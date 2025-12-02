import { Plane, HardHat, Globe, Briefcase } from 'lucide-react';
import type { CompanyInfo, Service, TimelineItem, AboutCardItem } from './types';

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

export const PARTNERS: string[] = [
    "AeroDynamics Global", "BuildRight Inc", "Horizon Logistics", "Summit Financial",
    "EcoConstruct", "Pacific Trade Route", "Vanguard Systems", "Apex Hospitality"
];

export const SERVICES: Service[] = [
    {
        id: 'tourism',
        title: 'Tourism & Hospitality',
        icon: <Plane size={32} />,
        desc: 'Creating sustainable destination strategies and luxury hospitality infrastructures.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'construction',
        title: 'Construction & Engineering',
        icon: <HardHat size={32} />,
        desc: 'Delivering large-scale industrial and commercial infrastructure with precision.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'trade',
        title: 'Global Trade',
        icon: <Globe size={32} />,
        desc: 'Optimizing supply chains and facilitating cross-border commercial exchange.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'consultancy',
        title: 'Strategic Consultancy',
        icon: <Briefcase size={32} />,
        desc: 'Data-driven insights to navigate complex B2B market landscapes.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'Jobzzy.com',
        title: 'Jobszzy Maldives',
        icon: <Briefcase size={32} />,
        desc: 'Data-driven insights to navigate complex B2B market landscapes.',
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjcnVpdG1lbnR8ZW58MHx8MHx8fDA%3D?auto=format&fit=crop&q=80&w=800" 
    }
];

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
    { year: "1998", title: "Foundation", desc: "Established as a small boutique consultancy firm in London." },
    { year: "2005", title: "Expansion into Construction", desc: "Acquired BuildRight Inc, opening our infrastructure division." },
    { year: "2012", title: "Global Trade Network", desc: "Opened key logistics hubs in Singapore and Dubai." },
    { year: "2020", title: "Digital Transformation", desc: "Launched proprietary AI-driven market analysis tools." },
    { year: "2024", title: "Sustainable Future", desc: "Committed to Carbon Neutrality across all sectors by 2030." },
];




