"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300">
            {/* Desktop Header - Full width with solid dark background */}
            <div className="hidden md:block bg-emerald-800 shadow-lg">
                <div className="px-8 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center text-white shadow-md">
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
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-lg leading-tight text-white">
                                ON THE GO
                            </span>
                            <span className="font-display text-xs tracking-wider text-emerald-300 font-medium">
                                MARKETS
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex space-x-8 items-center">
                        <Link
                            href="/"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#solutions"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                        >
                            Solutions
                        </Link>
                        <Link
                            href="/products"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                        >
                            Food Choices
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                        >
                            Gallery
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/#contact"
                        className="bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-semibold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-orange-500/20 items-center gap-2 transform hover:scale-105 flex"
                    >
                        <span>Start Now</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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

            {/* Mobile Header - Glass panel style for mobile */}
            <div className="md:hidden bg-emerald-800 mx-4 mt-4 rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center text-white shadow-md">
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
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-lg leading-tight text-white">
                                ON THE GO
                            </span>
                            <span className="font-display text-xs tracking-wider text-emerald-300 font-medium">
                                MARKETS
                            </span>
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-emerald-800/95 backdrop-blur-sm mx-4 mt-2 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/#solutions"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Solutions
                        </Link>
                        <Link
                            href="/products"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Food Choices
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/#contact"
                            className="bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-orange-500/20 text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Start Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
