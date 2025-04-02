import React from 'react';

const CybersecuritePage = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center">
            <h1 className="text-4xl font-bold">Cybersécurité</h1>
            <p className="text-lg text-gray-600 mt-2">
                Bienvenue sur la page dédiée à la cybersécurité. Ici, vous trouverez des informations sur les meilleures pratiques, les outils et les stratégies pour protéger vos données et vos systèmes.
            </p>
            <a href="/specialites" className="text-blue-500 hover:underline mt-4 inline-block">
                Retour aux spécialités
            </a>
            </header>

            <main className="w-full max-w-3xl">
            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-6">Pourquoi la cybersécurité est importante ?</h2>
                <p>
                La cybersécurité est essentielle pour protéger les informations sensibles, prévenir les cyberattaques et garantir la confidentialité des données personnelles et professionnelles.
                </p>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-6">Ressources utiles</h2>
                <ul className="list-disc list-inside text-left">
                <li>
                    <a href="https://www.cybermalveillance.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Cybermalveillance
                    </a>
                </li>
                <li>
                    <a href="https://www.cisa.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    CISA (Cybersecurity & Infrastructure Security Agency)
                    </a>
                </li>
                <li>
                    <a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    OWASP
                    </a>
                </li>
                </ul>
            </section>
            </main>
        </div>
    );
};

export default CybersecuritePage;