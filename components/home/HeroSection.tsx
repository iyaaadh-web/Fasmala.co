'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { COMPANY, PARTNERS } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex items-start md:items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover filter brightness-[0.3] blur-sm"
                    poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                >
                    <source src="/images/221543_tiny.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 md:pt-35 lg:pt-48">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1 mb-6 border border-orange-500/50 rounded-md bg-orange-500/10 backdrop-blur-sm">
                        <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">Global Excellence</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Future</span><br />
                        Transforming Today.
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                        {COMPANY.desc} We partner with leaders in business and society to tackle their most important challenges and capture their greatest opportunities.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact">
                            <Button>Start a Conversation</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline">Our Journey</Button>
                        </Link>
                    </div>

                    {/* Floating Partner Carousel */}
                    <div
                        className="mt-24 w-full overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-8 pointer-events-none select-none relative"
                        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        <div className="mb-4 px-8 text-xs font-bold text-orange-400 uppercase tracking-widest opacity-80">Trusted by Industry Leaders</div>

                        <div className="flex w-max animate-scroll">
                            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                                <div key={i} className="mx-8 flex items-center gap-3 opacity-60 grayscale">
                                    <div className="w-10 h-10 bg-slate-700/50 rounded-md flex items-center justify-center text-white/50">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <span className="text-lg font-semibold text-slate-300 whitespace-nowrap">{partner}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

