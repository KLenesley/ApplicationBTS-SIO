export default function Certifications() {
    return (

        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center">
                <h1 className="text-4xl font-bold">Certifications</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Découvrez nos certifications professionnelles et développez vos compétences.
                </p>
            </header>

            <main className="w-full max-w-6xl">
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Nos Certifications</h2>
                    <div
                        className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow"
                        role="region"
                        aria-labelledby="certifications-list"
                    >
                        <h3 id="certifications-list" className="text-xl font-semibold mb-4">
                            🌟 Domaines de Certification
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            🚀 Explorez nos certifications dans les domaines suivants :
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-left text-gray-700">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">
                                💻 Développement Web
                            </li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">
                                🖧 Administration Systèmes et Réseaux
                            </li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">
                                🔒 Cybersécurité
                            </li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">
                                📋 Gestion de Projets
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Pourquoi obtenir une certification ?</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Les certifications professionnelles sont un excellent moyen de valider vos compétences et de vous
                        démarquer sur le marché du travail. Elles témoignent de votre expertise et de votre engagement dans
                        votre domaine.
                    </p>
                </section>
            </main>
        </div>
    );
}