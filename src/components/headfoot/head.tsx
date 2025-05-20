'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Head() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        ['Accueil', '/'],
        ['Présentation', '/presentation'],
        ['Spécialités', '/specialites'],
        ['Prépa ISEN', '/prepa'],
        ['Quiz', '/quiz'],
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg z-50">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
                    >
                        <img src="/NDLP_logo.png" alt="Logo NDLP" className="h-12 w-auto drop-shadow-lg" />
                        <span className="text-xl font-bold">NDLP</span>
                    </a>
                    <ul className="hidden md:flex flex-1 justify-center gap-8 items-center">
                        {navLinks.map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={`text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
                                        ${pathname === href ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 hover:text-blue-300'}
                                    `}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className={"md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 hover:bg-gray-600"}
                        aria-label="Ouvrir le menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </nav>
                <div
                    id="mobile-menu"
                    className={`md:hidden bg-gray-800 shadow-lg transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
                    aria-hidden={!menuOpen}
                >
                    <ul className="flex flex-col gap-4 px-6 py-4">
                        {navLinks.map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={`block font-medium px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
                                        ${pathname === href ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 hover:text-blue-300'}
                                    `}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <div>
                {/* Votre contenu principal ici */}
            </div>
        </>
    );
}
