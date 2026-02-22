import Link from "next/link";
import Image from "next/image";

const installations = [
    {
        title: "Downtown Office Complex",
        description: "Complete market installation serving 500+ employees daily with fresh food options and grab-and-go items.",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800",
        location: "Chicago, IL",
    },
    {
        title: "Medical Center Hub",
        description: "24/7 automated market solution for hospital staff and visitors with healthy meal options.",
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800",
        location: "Boston, MA",
    },
    {
        title: "University Campus Store",
        description: "Smart market serving students with organic snacks, fresh salads, and study fuel essentials.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
        location: "Austin, TX",
    },
    {
        title: "Corporate Headquarters",
        description: "Premium market experience with locally sourced products and artisan coffee bar.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        location: "Seattle, WA",
    },
    {
        title: "Airport Terminal Kiosk",
        description: "High-traffic travel hub installation with quick grab items and travel essentials.",
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800",
        location: "Denver, CO",
    },
    {
        title: "Fitness Center Market",
        description: "Health-focused market with protein-packed options, smoothies, and sports nutrition.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
        location: "Miami, FL",
    },
];

const customBuilds = [
    {
        title: "The Urban Market",
        description: "Full-service convenience store build with modern aesthetics, smart shelving, and integrated POS systems.",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800",
        features: ["Smart Inventory", "Self-Checkout", "24/7 Access"],
    },
    {
        title: "The Corner Store Revival",
        description: "Neighborhood market transformation combining classic charm with modern convenience technology.",
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800",
        features: ["Local Products", "Community Hub", "Fresh Daily"],
    },
    {
        title: "The Tech Hub Market",
        description: "Futuristic unmanned store with AI-powered inventory tracking and mobile-first checkout experience.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        features: ["AI Powered", "Cashier-less", "App Integrated"],
    },
    {
        title: "The Green Market",
        description: "Sustainable market design with eco-friendly fixtures, bulk dispensers, and zero-waste packaging options.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
        features: ["Eco-Friendly", "Zero Waste", "Organic Focus"],
    },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-slate-900">
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">
                            Our Portfolio
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="text-emerald-400">Gallery</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Explore our portfolio of successful installations and custom market builds.
                        From corporate offices to university campuses, we deliver tailored solutions.
                    </p>
                </div>
            </section>

            {/* Our Installations Section */}
            <section className="px-6 py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3 block">
                            Real Locations
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Installations
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            See how we have transformed spaces into thriving market destinations
                            that serve communities and businesses alike.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {installations.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/20"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Dark overlay at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    {/* Location badge */}
                                    <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {item.location}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Builds Section */}
            <section className="px-6 py-20 bg-gradient-to-b from-slate-900 to-emerald-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm mb-3 block">
                            Bespoke Solutions
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                            Custom Builds
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            From concept to completion, we design and build custom market solutions
                            that match your vision and exceed expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {customBuilds.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/30"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.features.map((feature, fIndex) => (
                                            <span
                                                key={fIndex}
                                                className="bg-emerald-700/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-700/50"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Inner CTA */}
                    <div className="text-center">
                        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Build Your Vision?
                            </h3>
                            <p className="text-slate-400 mb-8">
                                Let our team design a custom market solution tailored to your space,
                                audience, and business goals. From initial concept to grand opening,
                                we handle every detail.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-amber-500/20 transform hover:scale-105"
                            >
                                <span>Request a Custom Quote</span>
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
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-6 py-20 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                        Want to See More?
                    </h3>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                        Schedule a tour of one of our installations or request a detailed case study
                        for your industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contact"
                            className="bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-semibold py-3 px-8 rounded-xl transition-all shadow-lg shadow-amber-500/20 transform hover:scale-105"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/products"
                            className="bg-slate-800 hover:bg-slate-700 text-white font-display font-semibold py-3 px-8 rounded-xl transition-all border border-slate-600 hover:border-emerald-500"
                        >
                            View Products
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
