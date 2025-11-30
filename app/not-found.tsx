// app/404/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-9xl font-bold text-orange-600 mb-4">404</h1>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h2>
                <p className="text-xl text-slate-600 mb-8">
                    Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link href="/">
                        <Button>Go Home</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="secondary">Contact Support</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

}

