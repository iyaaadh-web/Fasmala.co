import React from 'react';
import { siteConfig } from '@/content/content.config';
import Link from 'next/link';
import {
    MapPin, Phone, Mail, Linkedin, Twitter, Facebook, TrendingUp
} from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/data';

export const Footer = () => (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
            <div className="col-span-1 md:col-span-1">
                <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-600 rounded-md flex items-center justify-center text-white">
                        <TrendingUp size={20} strokeWidth={3} />
                    </div>
                    {COMPANY.name}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-slate-400">
                    We transform businesses through strategic innovation and industrial expertise.
                    Building the future, honoring the past.
                </p>
                <div className="flex gap-4">
                    <a href="https://linkedin.com/company/fasmala" aria-label="Visit our LinkedIn page" className="hover:text-orange-600 transition-colors">
                        <Linkedin size={20} />
                    <a href="https://facebook.com/fasmala" aria-label="Visit our Facebook page" className="hover:text-orange-600 transition-colors">
                        <Facebook size={20} />
                    </a>
                </div>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
                <ul className="space-y-3 text-sm">
                    <li>
                        <Link href="/about" className="hover:text-orange-600 cursor-pointer transition-colors">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-orange-600 cursor-pointer transition-colors">
                            Leadership
                        </Link>
                    </li>
                    <li>
                        <Link href="/careers" className="hover:text-orange-600 cursor-pointer transition-colors">
                            Careers
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Capabilities</h4>
                <ul className="space-y-3 text-sm">
                    {SERVICES.map(s => (
                        <li key={s.id}>
                            <Link href="/capabilities" className="hover:text-orange-600 cursor-pointer transition-colors">
                                {s.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-orange-600 mt-1 shrink-0" />
                        <span>{siteConfig.company.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone size={18} className="text-orange-600 shrink-0" />
                        <span>{siteConfig.company.phone}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail size={18} className="text-orange-600 shrink-0" />
                        <a href="mailto:info@fasmala.com" className="hover:text-orange-400 transition-colors">
                            siteConfig.company.email
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2024 {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy" className="cursor-pointer hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="cursor-pointer hover:text-white">Terms of Service</Link>
            </div>
        </div>
    </footer>
);

