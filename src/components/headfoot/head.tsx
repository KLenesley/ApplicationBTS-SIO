'use client';

import React, { useState } from 'react';

export default function Head() {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = ""; // Remplacer par une vraie logique d'authentification si besoin
    const userLabel = user ? user : "Connexion";

    const navLinks = [
        ['Accueil', '/'],
        ['Présentation', '/presentation'],
        ['Spécialités', '/specialites'],
        ['Prépa ISEN', '/prepa'],
        ['Certifications', '/certifications'],
        ['Jeu', '/jeu'],
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 shadow-xl z-50">
                <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="https://ndlpavranches.fr/lycee/"
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

                    {/* Connexion button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href={`/user?name=${encodeURIComponent(userLabel)}`}
                            className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            {userLabel}
                        </a>
                    </div>

                    {/* Hamburger menu button (mobile) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300 ml-2"
                        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
                        </svg>
                    </button>
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
                        <li>
                            <a
                                href={`/user?name=${encodeURIComponent(userLabel)}`}
                                className="block bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white font-bold px-4 py-2 rounded-xl shadow-lg transition-all duration-150 mt-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                {userLabel}
                            </a>
                        </li>
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
