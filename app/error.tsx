'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong</h2>
                <p className="text-lg text-slate-600 mb-8">
                    We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button onClick={() => reset()}>
                        Try Again
                    </Button>
                    <Button variant="secondary" onClick={() => window.location.href = '/'}>
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
