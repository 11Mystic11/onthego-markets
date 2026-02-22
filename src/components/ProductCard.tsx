import Image from "next/image";

export interface ProductProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    nutritionLabel?: string;
    nutritionValue?: string;
    icon?: "eco" | "fitness" | "drink" | "food" | "coffee";
}

const iconMap = {
    eco: (
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
        </svg>
    ),
    fitness: (
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
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
        </svg>
    ),
    drink: (
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    ),
    food: (
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
    coffee: (
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
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12a4 4 0 01-4-4V6h12v8a4 4 0 01-4 4z"
            />
        </svg>
    ),
};

const tagColorMap: Record<string, string> = {
    ORGANIC: "bg-emerald-700 text-emerald-100 border-emerald-600",
    VEGAN: "bg-emerald-700 text-emerald-100 border-emerald-600",
    "HIGH PROTEIN": "bg-blue-700 text-blue-100 border-blue-600",
    GF: "bg-orange-700 text-orange-100 border-orange-600",
    PROBIOTIC: "bg-purple-700 text-purple-100 border-purple-600",
    CAFFEINATED: "bg-amber-700 text-amber-100 border-amber-600",
    "FRESH DAILY": "bg-indigo-700 text-indigo-100 border-indigo-600",
    "SUGAR FREE": "bg-teal-700 text-teal-100 border-teal-600",
};

export default function ProductCard({
    title,
    description,
    image,
    tags = [],
    nutritionLabel,
    nutritionValue,
    icon,
}: ProductProps) {
    return (
        <div className="product-card rounded-3xl p-4 flex flex-col group h-full">
            {/* Image Container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-700">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Tags */}
                {tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className={`text-[10px] font-bold px-2 py-1 rounded-md border backdrop-blur-sm ${tagColorMap[tag] || "bg-slate-700 text-slate-100 border-slate-600"
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="px-2 pb-2 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                        {title}
                    </h3>
                    {icon && (
                        <span className="text-slate-400 group-hover:text-emerald-400 transition-colors">
                            {iconMap[icon]}
                        </span>
                    )}
                </div>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Nutrition Info & Add Button */}
                <div className="mt-auto flex items-center justify-between border-t border-slate-700 pt-4">
                    <div className="flex flex-col">
                        {nutritionLabel && (
                            <span className="text-xs text-slate-400 uppercase font-semibold">
                                {nutritionLabel}
                            </span>
                        )}
                        {nutritionValue && (
                            <span className="text-sm font-medium text-slate-200">
                                {nutritionValue}
                            </span>
                        )}
                    </div>
                    <button className="w-8 h-8 rounded-full bg-slate-700 hover:bg-emerald-600 hover:text-white text-slate-300 transition-all flex items-center justify-center">
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
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}