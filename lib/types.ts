import { ReactNode } from 'react';

export interface CompanyInfo {
    name: string;
    tagline: string;
    desc: string;
    colors: {
        accent: string;
        bgAccent: string;
        hover: string;
        light: string;
        border: string;
    };
}

export interface Service {
    id: string;
    title: string;
    icon: ReactNode;
    desc: string;
    image: string;
    keypoints?: string[]; // Optional array of key points/features for the service
    link?: string; // Optional link to the service page
}

export interface TimelineItem {
    year: string;
    title: string;
    desc: string;
}

export interface Founder {
    name: string;
    title: string;
    message: string;
    image: string;
}

export interface AboutCardItem {
    id: string;
    title: string;
    desc: string;
    image: string;
    label: string;
}

export interface Partner {
    name: string;
    image: string;
}