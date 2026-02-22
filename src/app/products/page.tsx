import ProductCard from "@/components/ProductCard";

const products = [
    {
        title: "Harvest Grain Bowl",
        description:
            "Quinoa base with roasted sweet potatoes, kale, chickpeas, and tahini dressing.",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        tags: ["ORGANIC"],
        nutritionLabel: "Calories",
        nutritionValue: "420 kcal",
        icon: "eco" as const,
    },
    {
        title: "Power Protein Box",
        description:
            "Hard-boiled eggs, sharp cheddar, almonds, and apple slices for sustained energy.",
        image:
            "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=400&fit=crop",
        tags: ["HIGH PROTEIN"],
        nutritionLabel: "Protein",
        nutritionValue: "24g",
        icon: "fitness" as const,
    },
    {
        title: "Green Glow Juice",
        description:
            "Cold-pressed spinach, cucumber, apple, and lemon. No added sugars.",
        image:
            "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop",
        tags: ["VEGAN", "GF"],
        nutritionLabel: "Size",
        nutritionValue: "12 oz",
        icon: "drink" as const,
    },
    {
        title: "Berry Granola Parfait",
        description:
            "Greek yogurt layered with fresh mixed berries and organic honey-oat granola.",
        image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
        tags: ["PROBIOTIC"],
        nutritionLabel: "Protein",
        nutritionValue: "18g",
        icon: "food" as const,
    },
    {
        title: "Turkey Avocado Wrap",
        description:
            "Roasted turkey breast, swiss cheese, avocado spread, and romaine in a spinach wrap.",
        image:
            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop",
        tags: [],
        nutritionLabel: "Calories",
        nutritionValue: "380 kcal",
        icon: "food" as const,
    },
    {
        title: "Nitro Cold Brew",
        description:
            "Smooth, creamy nitrogen-infused cold brew coffee. Zero sugar.",
        image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
        tags: ["CAFFEINATED"],
        nutritionLabel: "Origin",
        nutritionValue: "Ethiopia",
        icon: "coffee" as const,
    },
    {
        title: "California Roll Box",
        description:
            "Sustainable crab stick, avocado, and cucumber. Includes wasabi and ginger.",
        image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
        tags: ["FRESH DAILY"],
        nutritionLabel: "Pieces",
        nutritionValue: "8 Count",
        icon: "food" as const,
    },
    {
        title: "Sparkling Botanicals",
        description:
            "Grapefruit and rosemary infused sparkling water. Refreshingly crisp.",
        image:
            "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop",
        tags: ["SUGAR FREE"],
        nutritionLabel: "Calories",
        nutritionValue: "0 kcal",
        icon: "drink" as const,
    },
];

const categories = [
    { name: "All Products", active: true },
    { name: "Fresh Meals", active: false },
    { name: "Snacks", active: false },
    { name: "Beverages", active: false },
    { name: "Coffee & Tea", active: false },
];

export default function ProductsPage() {
    return (
        <>
            {/* Header Section */}
            <header className="relative pt-40 pb-20 overflow-hidden bg-slate-900">
                {/* Background Blur Orbs */}
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">
                            Curated Selection
                        </span>
                    </div>

                    <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 text-white tracking-tight">
                        Fuel Your Team With <br />
                        <span className="gradient-text">Premium Choices</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Explore our constantly evolving catalog of fresh meals, healthy
                        snacks, and premium beverages designed to keep your workplace
                        energized.
                    </p>
                </div>
            </header>

            {/* Products Section */}
            <section className="pb-32 relative bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16 pt-12">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${category.active
                                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-800/30 transform hover:scale-105"
                                    : "bg-slate-800 border border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                                tags={product.tags}
                                nutritionLabel={product.nutritionLabel}
                                nutritionValue={product.nutritionValue}
                                icon={product.icon}
                            />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-medium transition-colors">
                            Load more products
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
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-900/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <div className="bg-slate-800 border border-slate-700 p-12 rounded-3xl">
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
                            See something you like?
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                            We can customize your office micro-market with these exact
                            products. Let us know what your team craves.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-yellow-500/20 transform hover:scale-105">
                                Request for My Office
                            </button>
                            <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white font-display font-medium py-4 px-10 rounded-xl transition-all backdrop-blur-sm">
                                Download Catalog PDF
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}