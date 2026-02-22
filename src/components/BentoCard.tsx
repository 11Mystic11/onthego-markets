import Image from "next/image";
import { ReactNode } from "react";

export interface BentoCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    image?: string;
    variant?: "default" | "large" | "dark" | "wide" | "centered";
    className?: string;
    tags?: string[];
    iconBgColor?: string;
    badge?: string;
}

export default function BentoCard({
    title,
    description,
    icon,
    image,
    variant = "default",
    className = "",
    tags = [],
    iconBgColor = "bg-blue-50 dark:bg-blue-900/20",
    badge,
}: BentoCardProps) {
    const baseClasses = "bento-card rounded-3xl shadow-sm overflow-hidden";

    if (variant === "large" && image) {
        return (
            <div
                className={`${baseClasses} col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group ${className}`}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/30">
                        {icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2">{title}</h3>
                    <p className="text-slate-200 text-sm max-w-sm">{description}</p>
                </div>
            </div>
        );
    }

    if (variant === "dark") {
        return (
            <div
                className={`${baseClasses} bg-emerald-900 text-white p-8 relative ${className}`}
            >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <span className="text-4xl text-emerald-300">{icon}</span>
                    <div>
                        <h3 className="font-display font-bold text-xl mb-1">{title}</h3>
                        <p className="text-emerald-100/80 text-xs">{description}</p>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "centered") {
        return (
            <div
                className={`${baseClasses} bg-slate-800 p-6 border border-slate-700 flex flex-col items-center justify-center text-center ${className}`}
            >
                <div
                    className={`w-16 h-16 rounded-full ${iconBgColor} flex items-center justify-center mb-4`}
                >
                    <span className="text-2xl">{icon}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                    {title}
                </h3>
                <p className="text-slate-400 text-xs mt-2">
                    {description}
                </p>
            </div>
        );
    }

    if (variant === "wide" && image) {
        return (
            <div
                className={`${baseClasses} col-span-1 md:col-span-3 lg:col-span-4 row-span-1 bg-slate-800 p-2 border border-slate-700 flex flex-col md:flex-row gap-6 ${className}`}
            >
                <div className="w-full md:w-1/3 h-48 md:h-full relative overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#F59E0B]">{icon}</span>
                        <h3 className="font-display font-bold text-xl text-white">
                            {title}
                        </h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
                        {description}
                    </p>
                    {tags.length > 0 && (
                        <div className="flex gap-4 flex-wrap">
                            {tags.map((tag) => (
                                <div
                                    key={tag}
                                    className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-700 px-3 py-1.5 rounded-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-emerald-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="hidden lg:flex w-1/5 items-center justify-center border-l border-slate-700">
                    <button className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#F59E0B] hover:border-[#F59E0B] hover:text-white transition-colors text-slate-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div
            className={`${baseClasses} bg-slate-800 p-8 border border-slate-700 flex flex-col justify-center ${className}`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`${iconBgColor} p-3 rounded-xl`}>{icon}</div>
                {badge && (
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300">
                        {badge}
                    </span>
                )}
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
                {title}
            </h3>
            <p className="text-slate-400 text-sm">
                {description}
            </p>
        </div>
    );
}