import type React from "react";

interface StylizedButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function StylizedButton({ href, children, className = "" }: StylizedButtonProps) {
    return (
        <a
            href={href}
            className={`border border-r-[3px] border-b-[3px] border-black bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-black hover:text-white transition-all ${className}`}
        >
            {children}
        </a>
    );
}