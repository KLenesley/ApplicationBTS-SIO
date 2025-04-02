import React from 'react';

const SisrPage = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center">
            <h1 className="text-4xl font-bold">Systèmes et Réseaux</h1>
            <p className="text-lg text-gray-600 mt-2">
            Bienvenue sur la page dédiée aux systèmes et réseaux. Ici, vous découvrirez des informations sur l'administration des systèmes, la gestion des réseaux et les technologies associées.
            </p>
            <a href="/specialites" className="text-blue-500 hover:underline mt-4 inline-block">
            Retour aux spécialités
            </a>
            </header>

            <main className="w-full max-w-3xl">
            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6">Pourquoi les systèmes et réseaux sont importants ?</h2>
            <p>
            Les systèmes et réseaux sont essentiels pour assurer la disponibilité, la performance et la sécurité des infrastructures informatiques, permettant ainsi aux entreprises de fonctionner efficacement.
            </p>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6">Ressources utiles</h2>
            <ul className="list-disc list-inside text-left">
            <li>
                <a href="https://www.cisco.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Cisco Networking Academy
                </a>
            </li>
            <li>
                <a href="https://www.redhat.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Red Hat
                </a>
            </li>
            <li>
                <a href="https://www.vmware.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                VMware
                </a>
            </li>
            </ul>
            </section>
            </main>
        </div>
    );
};

export default SisrPage;