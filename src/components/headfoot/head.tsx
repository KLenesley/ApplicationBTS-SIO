'use client';

import React, { useState } from 'react';

export default function Head() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationLinks = [
        { label: 'Accueil', href: '/' },
        { label: 'Présentation', href: '/presentation' },
        { label: 'Spécialités', href: '/specialites' },
        { label: 'Prépa ISEN', href: '/prepa' },
        { label: 'Certifications', href: '/certifications' },
        { label: 'Quiz', href: '/quiz' },
    ];

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 h-16">
                <nav className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center space-x-3 text-white hover:opacity-80 transition duration-300"
                    >
                        <img
                            src="/NDLP_logo.png"
                            alt="Logo NDLP"
                            className="h-10 w-auto"
                        />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isMobileMenuOpen
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 6h16M4 12h16M4 18h16'
                                }
                            />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <ul
                        className={`${
                            isMobileMenuOpen ? 'block' : 'hidden'
                        } md:flex space-x-6 items-center w-full md:w-auto`}
                    >
                        {navigationLinks.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="text-white hover:text-green-400 font-medium transition-colors duration-200 block md:inline"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Spacer to prevent content overlap */}
            <div className="h-16"></div>
        </>
    );
}
