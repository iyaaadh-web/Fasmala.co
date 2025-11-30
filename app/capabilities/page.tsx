import React from 'react';
import Image from 'next/image';
import { SERVICES } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export default function CapabilitiesPage() {
    return (
        <div className="pt-24 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Capabilities</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        We bring deep functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization.
                    </p>
                </div>
                <div className="space-y-24">
                    {SERVICES.map((s, idx) => (
                        <div key={s.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                            <div className="flex-1 w-full">
                                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                                    <Image
                                        src={s.image}
                                        alt={`${s.title} - Professional services illustration`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-2xl">
                                        <div className="text-orange-600">{s.icon}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-bold text-slate-900">{s.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    {s.desc} Our approach combines rigorous analysis with creative strategy. We don't just assess the market; we help you shape it.
                                    Whether you are looking to expand infrastructure, optimize global trade routes, or redefine a tourism destination, our teams work alongside you.
                                </p>
                                <ul className="space-y-3">
                                    {['Strategic Planning', 'Operational Efficiency', 'Digital Implementation', 'Sustainability Audits'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <div className="w-2 h-2 rounded-sm bg-orange-600"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="secondary" className="mt-4">Learn More</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
