import Link from "next/link";
import Image from "next/image";

const installations = [
    {
        title: "Downtown Office Complex",
        description: "Complete market installation serving 500+ employees daily with fresh food options and grab-and-go items.",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop",
        location: "Chicago, IL",
    },
    {
        title: "Medical Center Hub",
        description: "24/7 automated market solution for hospital staff and visitors with healthy meal options.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
        location: "Boston, MA",
    },
    {
        title: "University Campus Store",
        description: "Smart market serving students with organic snacks, fresh salads, and study fuel essentials.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        location: "Austin, TX",
    },
    {
        title: "Corporate Headquarters",
        description: "Premium market experience with locally sourced products and artisan coffee bar.",
        image: "https://images.unsplash.com/photo-1567401893415-59fac2c3513a?w=600&h=400&fit=crop",
        location: "Seattle, WA",
    },
    {
        title: "Airport Terminal Kiosk",
        description: "High-traffic travel hub installation with quick grab items and travel essentials.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
        location: "Denver, CO",
    },
    {
        title: "Fitness Center Market",
        description: "Health-focused market with protein-packed options, smoothies, and sports nutrition.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3188?w=600&h=400&fit=crop",
        location: "Miami, FL",
    },
];

const customBuilds = [
    {
        title: "The Urban Market",
        description: "Full-service convenience store build with modern aesthetics, smart shelving, and integrated POS systems.",
        image: "https://images.unsplash.com/photo-1609208807592-469a2cf8c1ea?w=600&h=400&fit=crop",
        features: ["Smart Inventory", "Self-Checkout", "24/7 Access"],
    },
    {
        title: "The Corner Store Revival",
        description: "Neighborhood market transformation combining classic charm with modern convenience technology.",
        image: "https://images.unsplash.com/photo-1578916171728-46686e3658ba?w=600&h=400&fit=crop",
        features: ["Local Products", "Community Hub", "Fresh Daily"],
    },
    {
        title: "The Tech Hub Market",
        description: "Futuristic unmanned store with AI-powered inventory tracking and mobile-first checkout experience.",
        image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&h=400&fit=crop",
        features: ["AI Powered", "Cashier-less", "App Integrated"],
    },
    {
        title: "The Green Market",
        description: "Sustainable market design with eco-friendly fixtures, bulk dispensers, and zero-waste packaging options.",
        image: "https://images.unsplash.com/photo-1542838132-25c99ae1a135?w=600&h=400&fit=crop",
        features: ["Eco-Friendly", "Zero Waste", "Organic Focus"],
    },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
            {/* Hero Section */}
            <section className="px-6 py-16 md:py-24">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        Our <span className="text-emerald-700">Gallery</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        Explore our portfolio of successful installations and custom market builds.
                        From corporate offices to university campuses, we deliver tailored solutions.
                    </p>
                </div>
            </section>

            {/* Our Installations Section */}
            <section className="px-6 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Installations
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            See how we have transformed spaces into thriving market destinations
                            that serve communities and businesses alike.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {installations.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {item.location}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Builds Section */}
            <section className="px-6 py-16 bg-gradient-to-b from-slate-900 to-emerald-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                            Custom Builds
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            From concept to completion, we design and build custom market solutions
                            that match your vision and exceed expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {customBuilds.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.features.map((feature, fIndex) => (
                                            <span
                                                key={fIndex}
                                                className="bg-emerald-700/50 text-emerald-200 text-xs font-medium px-3 py-1 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 max-w-3xl mx-auto">
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Build Your Vision?
                            </h3>
                            <p className="text-slate-300 mb-8">
                                Let our team design a custom market solution tailored to your space,
                                audience, and business goals. From initial concept to grand opening,
                                we handle every detail.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/30 transform hover:scale-105"
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
            <section className="px-6 py-16 bg-emerald-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                        Want to See More?
                    </h3>
                    <p className="text-emerald-100 mb-8">
                        Schedule a tour of one of our installations or request a detailed case study
                        for your industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contact"
                            className="bg-white text-emerald-800 font-display font-semibold py-3 px-8 rounded-xl transition-all hover:bg-emerald-50"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/products"
                            className="bg-emerald-700 text-white font-display font-semibold py-3 px-8 rounded-xl transition-all hover:bg-emerald-600 border border-emerald-500"
                        >
                            View Products
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}