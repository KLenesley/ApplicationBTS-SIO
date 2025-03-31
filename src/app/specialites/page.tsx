import React from "react";

function SpecialiteCard({ icone, titre, description }: { icone: string; titre: string; description: string }) {
    return (
        <div
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow"
            role="region"
            aria-labelledby={`specialite-${titre}`}
        >
            <div className="text-4xl mb-4" aria-hidden="true">
                {icone}
            </div>
            <h3 id={`specialite-${titre}`} className="text-xl font-semibold mb-2">
                {titre}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}

export default function Specialites() {
    const specialites = [
        {
            titre: "Développement Web",
            description: "Créez des sites web modernes et performants avec les dernières technologies.",
            icone: "🌐",
        },
        {
            titre: "Administration Systèmes et Réseaux",
            description: "Gérez et sécurisez les infrastructures réseau et systèmes d'entreprise.",
            icone: "🖧",
        },
        {
            titre: "Cybersécurité",
            description: "Protégez les données et les systèmes contre les cybermenaces.",
            icone: "🔒",
        },
        {
            titre: "Gestion de Projets",
            description: "Planifiez, organisez et suivez vos projets avec efficacité.",
            icone: "📋",
        },
    ];

    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center">
                <h1 className="text-4xl font-bold">Spécialités</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Découvrez nos domaines d'expertise et développez vos compétences.
                </p>
            </header>

            <main className="w-full max-w-6xl">
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Nos Domaines d'Expertise</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {specialites.length > 0 ? (
                            specialites.map((specialite, index) => (
                                <SpecialiteCard
                                    key={index}
                                    icone={specialite.icone}
                                    titre={specialite.titre}
                                    description={specialite.description}
                                />
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Aucune spécialité disponible pour le moment.</p>
                        )}
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Nous offrons une expertise approfondie dans des domaines clés pour vous aider à atteindre vos
                        objectifs professionnels. Nos formations et services sont conçus pour répondre aux besoins du
                        marché actuel.
                    </p>
                </section>
            </main>
        </div>
    );
}