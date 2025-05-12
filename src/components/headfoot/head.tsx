'use client';

import React, { useState } from 'react';

export default function Head() {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = ""; // Remplacer par une vraie logique d'authentification si besoin

    const navLinks = [
        ['Accueil', '/'],
        ['Présentation', '/presentation'],
        ['Spécialités', '/specialites'],
        ['Prépa ISEN', '/prepa'],
        ['Jeu', '/jeu'],
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 shadow-xl z-50">
                <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-3 text-gray-900 hover:opacity-90 transition-opacity"
                    >
                        <img src="/NDLP_logo.png" alt="Logo NDLP" className="h-10 w-auto drop-shadow-lg" />
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex flex-1 justify-center gap-10 items-center">
                        {navLinks.map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="text-gray-100 hover:text-blue-200 font-bold px-3 py-1 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-300"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                </nav>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden bg-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
                    aria-hidden={!menuOpen}
                >
                    <ul className="flex flex-col gap-2 px-6 py-4">
                        {navLinks.map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="block text-gray-900 hover:text-green-600 font-bold px-3 py-2 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                             
                    </ul>
                </div>
            </header>
            {/* Main Content (no padding to avoid header overlap) */}
            <div>
                {/* Votre contenu principal ici */}
            </div>
        </>
    );
}
