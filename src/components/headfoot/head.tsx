'use client';

import React from 'react';

export default function Head() {
    let user = ""; // Remplacer par une vraie logique d'authentification si besoin
    if (!user) user = "Connexion";

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
                <nav className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-3 text-white hover:opacity-80 transition duration-300">
                        <img src="/NDLP_logo.png" alt="Logo NDLP" className="h-10 w-auto" />
                    </a>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {[['Accueil', '/'], ['Présentation', '/presentation'], ['Spécialités', '/specialites'], ['Prépa ISEN', '/prepa'], ['Certifications', '/certifications'], ['Jeu', '/jeu']].map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="text-white hover:text-green-400 font-medium transition-colors duration-200"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* User Button */}
                    <div className="mt-4 md:mt-0">
                        <a
                            href={`/user?name=${encodeURIComponent(user)}`}
                            className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200"
                        >
                            {user}
                        </a>
                    </div>
                </nav>
            </header>

            {/* Main Content (with padding to avoid header overlap) */}
            <div className="pt-20"> {/* Added padding-top to compensate for the fixed header */}
                {/* Your main page content goes here */}
            </div>
        </>
    );
}
