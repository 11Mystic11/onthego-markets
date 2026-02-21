"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300">
            <div className="glass-panel mx-auto max-w-7xl px-6 py-4 mt-4 rounded-2xl flex items-center justify-between shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-[#065F46] rounded-lg flex items-center justify-center text-white shadow-md shadow-emerald-900/10">
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
                        <span className="font-display font-bold text-lg leading-tight text-slate-900 dark:text-white">
                            ON THE GO
                        </span>
                        <span className="font-display text-xs tracking-wider text-emerald-700 dark:text-emerald-400 font-medium">
                            MARKETS
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#solutions"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                        Solutions
                    </Link>
                    <Link
                        href="/products"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                        Food Choices
                    </Link>
                    <Link
                        href="/#gallery"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                    >
                        Gallery
                    </Link>
                </div>

                {/* CTA Button */}
                <Link
                    href="/#contact"
                    className="hidden md:flex bg-[#F59E0B] hover:bg-yellow-500 text-white font-display font-semibold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-orange-500/20 items-center gap-2 transform hover:scale-105"
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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800 dark:text-white"
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

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass-panel mx-4 mt-2 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/#solutions"
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Solutions
                        </Link>
                        <Link
                            href="/products"
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Food Choices
                        </Link>
                        <Link
                            href="/#gallery"
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
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