'use client';

import { useState, useEffect, useRef } from 'react';

export const useActiveCardObserver = (itemIds: string[], initialId: string | null = null) => {
    const [activeId, setActiveId] = useState<string | null>(initialId);
    const observerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('data-id');
                        if (id) setActiveId(id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.6,
            }
        );

        itemIds.forEach((id) => {
            const el = observerRefs.current[id];
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [itemIds]);

    return { activeId, observerRefs };
};
