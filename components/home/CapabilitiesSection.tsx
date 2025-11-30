'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { useActiveCardObserver } from '@/lib/hooks';
import { Button, MobilePagination } from '@/components/ui/Button';

export const CapabilitiesSection = () => {
    const { activeId, observerRefs } = useActiveCardObserver(SERVICES.map(s => s.id), SERVICES[0].id);

    const handleDotClick = (id: string) => {
        const element = observerRefs.current[id];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Our Capabilities</h2>
                        <h3 className="text-4xl font-bold text-slate-900">Expertise Across Industries</h3>
                    </div>
                    <Link href="/capabilities" className="hidden md:flex">
                        <Button variant="text">
                            View all Capabilities <ArrowRight size={20} />
                        </Button>
                    </Link>
                </div>

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory snap-stop-always pb-4 md:pb-0 no-scrollbar">
                    {SERVICES.map((s) => {
                        const isActive = activeId === s.id;
                        return (
                            <div
                                key={s.id}
                                ref={(el) => { observerRefs.current[s.id] = el; }}
                                data-id={s.id}
                                className="group relative h-96 min-w-[85vw] md:min-w-0 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden snap-center"
                            >
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex flex-col justify-end p-8">
                                    <h4 className={`text-white font-bold text-2xl mb-2 transition-transform duration-500 ${isActive ? 'translate-y-0 md:translate-y-2 md:group-hover:translate-y-0' : 'translate-y-2 group-hover:translate-y-0'}`}>
                                        {s.title}
                                    </h4>

                                    <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'}`}>
                                        <div className="overflow-hidden">
                                            <p className={`text-slate-300 text-sm leading-relaxed mb-6 pt-2 transition-opacity duration-700 delay-100 ${isActive ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                                {s.desc}
                                            </p>
                                            <div className={`flex items-center text-sm font-bold text-orange-400 pb-2 ${isActive ? 'text-orange-300 md:text-orange-400 md:group-hover:text-orange-300' : 'group-hover:text-orange-300'}`}>
                                                Explore <ArrowRight size={16} className={`ml-2 transition-transform ${isActive ? 'translate-x-1 md:translate-x-0 md:group-hover:translate-x-1' : 'group-hover:translate-x-1'}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <MobilePagination items={SERVICES} activeId={activeId} onDotClick={handleDotClick} />

                <div className="mt-8 text-center md:hidden">
                    <Link href="/capabilities">
                        <Button variant="text">View all Capabilities <ArrowRight size={20} /></Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
