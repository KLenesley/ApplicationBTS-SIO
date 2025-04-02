import React from "react";

// Page de connexion

export default function LoginPage() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center">
                <h1 className="text-4xl font-bold">Connexion</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Connectez-vous pour accéder à votre espace personnel.
                </p>
            </header>

            <main className="w-full max-w-md">
                <form className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Adresse e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez votre e-mail"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Mot de passe
                        </label>
                        {/* Astuce : enregister votre mot de passe dans un lieu sûr, comme Bitwarden */}
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                        Se connecter
                    </button>
                </form>
                <div className="text-center mt-4">
                    <a href="/forgot-password" className="text-blue-500 hover:underline">
                        Mot de passe oublié ?
                    </a>
                </div>

                <div className="mt-6 text-sm text-gray-600 text-center shadow-md rounded-lg p-4 border border-gray-200 bg-zinc-50 cursor-pointer hover:shadow transition-shadow duration-300">
                    <p>
                        Astuce : Pensez à enregistrer vos mots de passe dans un gestionnaire sécurisé comme{" "}
                        <a href="https://bitwarden.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            Bitwarden
                        </a>{" "}
                        ou un autre outil de gestion de mots de passe.
                    </p>
                </div>
            </main>

            <div className="text-center text-gray-500
            rounded-lg p-3 border border-gray-200 bg-zinc-50">
                <p className="text-sm">
                    Vous n'avez pas de compte ?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Inscrivez-vous
                    </a>
                </p>
            </div>
        </div>
    );
}