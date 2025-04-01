import React from 'react';

// Certifications

const CertificationsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-gray-900">
            <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Certifications
            </h1>
            <p className="text-base sm:text-lg mt-4 max-w-2xl mx-auto text-gray-700">
                Découvrez ce que vous devez savoir sur les certifications professionnelles et l'épreuve finale du BTS SIO.
            </p>
            </header>

            <main className="w-full max-w-4xl space-y-12">
            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow transition-shadow duration-300">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
                Objectifs des Certifications
                </h2>
                <p className="text-gray-700 text-center mb-4">
                Les certifications valident les compétences techniques et professionnelles tout en renforçant l'employabilité.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Valider les compétences techniques acquises durant la formation.</li>
                <li>Attester de la maîtrise des outils et technologies utilisés en entreprise.</li>
                <li>Renforcer l'employabilité des étudiants sur le marché du travail.</li>
                </ul>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow transition-shadow duration-300">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">Épreuve Finale</h2>
                <p className="text-gray-700 text-center mb-4">
                Les étudiants démontrent leurs compétences à travers des épreuves pratiques et théoriques.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Réalisation d'un projet informatique en lien avec les certifications.</li>
                <li>Présentation orale devant un jury professionnel.</li>
                <li>Tests techniques pour valider les connaissances spécifiques.</li>
                </ul>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 hover:shadow transition-shadow duration-300">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">Exemples de Certifications</h2>
                <p className="text-gray-700 text-center mb-4">
                Quelques exemples de certifications accessibles aux étudiants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Certification Cisco CCNA (réseaux informatiques).</li>
                <li>Certification Microsoft (développement et administration).</li>
                <li>Certification ITIL (gestion des services informatiques).</li>
                <li>Certification en cybersécurité (type CEH ou équivalent).</li>
                </ul>
            </section>

            <section className="text-center">
                <p className="text-gray-800 text-lg font-medium">
                Ces certifications permettent aux diplômés du BTS SIO de se démarquer et de répondre aux attentes des recruteurs.
                </p>
            </section>
            </main>
        </div>
    );
};

export default CertificationsPage;