'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY, ABOUT_CARDS, TIMELINE, FOUNDER } from '@/lib/data';
import { useActiveCardObserver } from '@/lib/hooks';
import { TextPagination } from '@/components/ui/Button';

export default function AboutPage() {
    const { activeId, observerRefs } = useActiveCardObserver(ABOUT_CARDS.map(c => c.id), ABOUT_CARDS[0].id);

    const handleTextClick = (id: string) => {
        const element = observerRefs.current[id];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    return (
        <div className="pt-24 pb-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Chairman Message */}
                <section className="mb-24">
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 text-slate-100 -mr-20 -mt-20">
                            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.6,33.1C59.1,44.1,47.7,52.9,35.6,60.8C23.5,68.6,10.8,75.4,-1.1,77.4C-13.1,79.3,-24.3,76.4,-35.3,69.5C-46.3,62.6,-57.1,51.7,-65.4,39C-73.7,26.3,-79.6,11.8,-79.2,-2.4C-78.7,-16.6,-71.9,-30.5,-62.3,-41.8C-52.7,-53.1,-40.3,-61.8,-27.6,-69.6C-14.8,-77.3,-1.7,-84.1,12.2,-85.2C26.1,-86.3,40,-81.7,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-xl z-10 relative">
                            <Image src={FOUNDER.image} alt="Founder" fill className="object-cover" />
                        </div>
                        <div className="flex-1 relative z-10">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Message from our founder</h2>
                            <div className="text-slate-600 text-lg italic leading-relaxed mb-6">
                                &quot; {FOUNDER.message} &quot;
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">{FOUNDER.name}</div>
                                <div className="text-orange-600 text-sm font-semibold">{FOUNDER.title}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="mb-12">
                    <div className="max-w-6xl mr-auto text-left">
                        <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pioneering Progress Since 1998</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Fasmala Pvt. Ltd. is a premier multidisciplinary firm dedicated to bridging the gap between traditional industries and modern innovation.
                            With a footprint spanning four continents, we empower businesses in tourism, construction, trade, and consultancy to achieve sustainable growth.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Our team of experts brings decades of experience, ensuring that every project we undertake is executed with precision, integrity, and a forward-thinking mindset.
                        </p>
                    </div>
                </section>

                {/* Vision Mission Motto - Responsive Carousel with Text Pagination */}
                <section className="mb-24">
                    <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory snap-stop-always pb-4 md:pb-0 no-scrollbar">
                        {ABOUT_CARDS.map((card) => {
                            const isActive = activeId === card.id;
                            return (
                                <div
                                    key={card.id}
                                    ref={(el) => { observerRefs.current[card.id] = el; }}
                                    data-id={card.id}
                                    className="group relative h-[500px] min-w-[85vw] md:min-w-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 snap-center"
                                >
                                    <Image
                                        src={card.image}
                                        alt={`${card.title} - ${card.desc}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 85vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                                    <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 md:opacity-100 md:translate-y-0'}`}>
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg">
                                            <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                                            <p className="text-slate-200 text-sm leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <TextPagination items={ABOUT_CARDS.map(card => ({ id: card.id, label: card.label }))} activeId={activeId} onTextClick={handleTextClick} />
                </section>

                {/* Timeline */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Our History</h2>
                        <div className="w-20 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-slate-200"></div>

                        {TIMELINE.map((item, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-24 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-5/12"></div>

                                <div className="absolute left-4 md:left-1/2 transform -translate-x-[calc(50%-0.5px)] md:-translate-x-1/2 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-md z-10 mt-1.5 md:mt-0"></div>

                                <div className={`w-full pl-12 md:pl-0 md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                                    <div className="text-orange-600 font-bold text-lg mb-1">{item.year}</div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
