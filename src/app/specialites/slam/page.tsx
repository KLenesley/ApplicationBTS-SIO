import React from 'react';

const SlamPage = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center">
            <h1 className="text-4xl font-bold">SLAM</h1>
            <p className="text-lg text-gray-600 mt-2">
            Bienvenue sur la page dédiée au SLAM (Solutions Logicielles et Applications Métier). Découvrez les compétences, les outils et les technologies pour concevoir et développer des applications.
            </p>
            <a href="/specialites" className="text-blue-500 hover:underline mt-4 inline-block">
            Retour aux spécialités
            </a>
            </header>

            <main className="w-full max-w-3xl">
            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6">Pourquoi choisir le SLAM ?</h2>
            <p>
            Le SLAM permet de développer des compétences en programmation, en gestion de bases de données et en conception d'applications pour répondre aux besoins des entreprises.
            </p>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6">Ressources utiles</h2>
            <ul className="list-disc list-inside text-left">
            <li>
                <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                MDN Web Docs
                </a>
            </li>
            <li>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                React Documentation
                </a>
            </li>
            <li>
                <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                MySQL
                </a>
            </li>
            </ul>
            </section>
            </main>
        </div>
    );
};

export default SlamPage;