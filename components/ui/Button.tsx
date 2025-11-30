import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button = ({ children, variant = "primary", className = "", onClick, type = "button", disabled = false }: ButtonProps) => {
    const baseStyle = "px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2";
    const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";

    const variants: Record<string, string> = {
        primary: `bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 ${disabledStyle}`,
        secondary: `bg-white text-slate-900 border border-slate-200 hover:border-orange-600 hover:text-orange-600 ${disabledStyle}`,
        outline: `border-2 border-white text-white hover:bg-white hover:text-slate-900 ${disabledStyle}`,
        text: `text-orange-600 hover:text-orange-700 px-0 ${disabledStyle}`
    };

    return (
        <button 
            type={type}
            onClick={onClick} 
            disabled={disabled}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

interface MobilePaginationProps {
    items: { id: string; title?: string }[];
    activeId: string | null;
    onDotClick?: (id: string) => void;
}

export const MobilePagination = ({ items, activeId, onDotClick }: MobilePaginationProps) => (
    <div className="flex md:hidden justify-center items-center gap-2 mt-6">
        {items.map((item) => (
            <button
                key={item.id}
                onClick={() => onDotClick && onDotClick(item.id)}
                className={`h-2 rounded-full transition-all duration-300 ${activeId === item.id
                        ? 'w-6 bg-orange-600'
                        : 'w-2 bg-slate-200'
                    }`}
                aria-label={`Go to slide ${item.title || 'item'}`}
            />
        ))}
    </div>
);

interface TextPaginationProps {
    items: { id: string; label: string }[];
    activeId: string | null;
    onTextClick?: (id: string) => void;
}

export const TextPagination = ({ items, activeId, onTextClick }: TextPaginationProps) => (
    <div className="flex md:hidden justify-center items-center gap-3 mt-6">
        {items.map((item) => (
            <button
                key={item.id}
                onClick={() => onTextClick && onTextClick(item.id)}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all duration-300 uppercase tracking-wide ${activeId === item.id
                        ? 'bg-orange-600 text-white shadow-md shadow-orange-200'
                        : 'bg-white text-slate-400 border border-slate-100'
                    }`}
            >
                {item.label}
            </button>
        ))}
    </div>
);
