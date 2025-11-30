'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [isAnimating, setIsAnimating] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        setIsAnimating(true);

        const timer = setTimeout(() => {
            setDisplayChildren(children);
            window.scrollTo(0, 0); // Instant scroll to top

            requestAnimationFrame(() => {
                setIsAnimating(false);
            });
        }, 400);

        return () => clearTimeout(timer);
    }, [children, pathname, searchParams]);

    return (
        <div
            style={{ transformOrigin: 'top' }}
        >
            {displayChildren}
        </div>
    );
}
