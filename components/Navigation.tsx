'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
    Menu, X, ChevronDown
} from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/data';

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = scrolled
        ? "fixed top-4 left-4 right-4 max-w-7xl mx-auto bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl py-3 px-6 z-50 transition-all duration-500 border border-slate-700/50"
        : "fixed top-0 w-full bg-slate-900/50 backdrop-blur-sm md:bg-slate-900 md:backdrop-blur-none py-6 px-8 z-50 transition-all duration-500 border-b border-slate-800/50 md:border-slate-800";

    const linkClass = "text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 uppercase tracking-wider";
    const activeLinkClass = "text-orange-500";

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={navClass}>
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="text-2xl font-bold text-white tracking-tighter cursor-pointer flex items-center gap-2"
                >
                    <Image
                        src="/images/type-logo-1.png"
                        alt="Logo"
                        width={300}
                        height={200}
                        className="object-contain filter invert brightness-0"
                        priority
                    />
                     {/* COMPANY.name removed */}
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className={`${linkClass} ${isActive('/') ? activeLinkClass : ''}`}
                    >
                        Home
                    </Link>

                    <div
                        className="relative group"
                        onMouseEnter={() => setMegaMenuOpen(true)}
                        onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                        <div className={`${linkClass} ${isActive('/capabilities') ? activeLinkClass : ''} py-2`}>
                            Capabilities <ChevronDown size={14} />
                        </div>

                        {megaMenuOpen && (
                            <div className="absolute top-full -left-20 w-[600px] pt-4 transform transition-all duration-200 origin-top">
                                <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden flex">
                                    <div className="w-1/3 bg-slate-50 p-6 border-r border-slate-100">
                                        <h4 className="text-orange-600 font-bold mb-2">Our Expertise</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            Decades of experience delivering excellence across complex sectors.
                                        </p>
                                    </div>
                                    <div className="w-2/3 p-6 grid grid-cols-2 gap-4">
                                        {SERVICES.map(s => (
                                            <Link key={s.id} href="/capabilities" className="group/item cursor-pointer">
                                                <h5 className="font-semibold text-slate-800 group-hover/item:text-orange-600 transition-colors flex items-center gap-2">
                                                    {s.title}
                                                </h5>
                                                <p className="text-xs text-slate-500 mt-1 line-clamp-1">{s.desc}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/about"
                        className={`${linkClass} ${isActive('/about') ? activeLinkClass : ''}`}
                    >
                        About Us
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all"
                    >
                        Contact Us
                    </Link>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white p-1"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div id="mobile-menu" className="absolute top-full left-0 w-full mt-2 md:hidden animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 mx-auto">
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/capabilities', label: 'Capabilities' },
                            { href: '/about', label: 'About' }
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={`p-4 rounded-xl font-medium text-lg flex justify-between items-center transition-all ${isActive(item.href)
                                    ? 'bg-orange-600/10 text-orange-500'
                                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {item.label}
                                {isActive(item.href) && <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.5)]" />}
                            </Link>
                        ))}
                        <div className="h-px bg-white/10 my-2"></div>
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="w-full bg-orange-600 text-white p-4 rounded-xl font-bold text-center hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};












