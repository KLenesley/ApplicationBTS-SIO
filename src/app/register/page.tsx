'use client';
import React, { use } from 'react';
import { useRouter } from 'next/navigation';

export default function Inscription() {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Logique d'inscription ici (par exemple, appel API)
        // Une fois l'inscription réussie, rediriger vers la page de connexion
        router.push('/user');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100">
            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
                <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center tracking-tight drop-shadow-sm">
                    Inscription
                </h1>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Nom d'utilisateur
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
                            placeholder="Entrez votre nom d'utilisateur"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Adresse e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
                            placeholder="Entrez votre adresse e-mail"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
                            placeholder="Entrez votre mot de passe"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-2 rounded-xl
                        shadow-lg transition-all duration-300"
                    >
                        S'inscrire
                    </button>
                </form>
                <div className="mt-6 space-y-2 text-center">
                    <a href="/user" className="text-sm text-cyan-700 hover:underline">
                        Déjà inscrit ? Se connecter
                    </a>
                    <br />
                    <a href="/presentation" className="text-sm text-cyan-700 hover:underline">
                        Retour à la présentation
                    </a>
                    <br />
                    <a href="/forgot-password" className="text-sm text-cyan-700 hover:underline">
                        Mot de passe oublié ?
                    </a>
                </div>
            </div>
        </div>
    );
}