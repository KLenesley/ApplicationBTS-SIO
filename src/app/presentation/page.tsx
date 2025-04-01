export default function Presentation() {
    return (

        <div>
            <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <header className="text-center">
                    <h1 className="text-4xl font-bold">Présentation du BTS SIO</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Découvrez le BTS Services Informatiques aux Organisations et tout ce qu'il propose pour vous former aux métiers de l'informatique.
                    </p>
                </header>

                <main className="w-full max-w-6xl">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Qu'est-ce que le BTS SIO ?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-center">
                            Le BTS SIO (Services Informatiques aux Organisations) est une formation de deux ans qui prépare les étudiants à devenir des professionnels de l'informatique. 
                            Il propose deux spécialités : Solutions d'Infrastructure, Systèmes et Réseaux (SISR) et Solutions Logicielles et Applications Métiers (SLAM).
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Les Spécialités</h2>
                        <div className="text-gray-600 max-w-3xl mx-auto">
                            <h3 className="text-xl font-semibold mt-4">SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</h3>
                            <p>
                                Cette spécialité forme les étudiants à la gestion des réseaux, des serveurs et des infrastructures informatiques. 
                                Elle est idéale pour ceux qui souhaitent devenir administrateurs systèmes et réseaux.
                            </p>
                            <h3 className="text-xl font-semibold mt-4">SLAM (Solutions Logicielles et Applications Métiers)</h3>
                            <p>
                                Cette spécialité est axée sur le développement d'applications et de logiciels. 
                                Elle convient parfaitement aux étudiants qui souhaitent devenir développeurs ou concepteurs d'applications.
                            </p>
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Pourquoi choisir le BTS SIO ?</h2>
                        <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto text-left">
                            <li>Une formation professionnalisante avec des stages en entreprise.</li>
                            <li>Des compétences techniques et pratiques adaptées aux besoins du marché.</li>
                            <li>Une insertion rapide dans le monde du travail ou une poursuite d'études.</li>
                            <li>Un diplôme reconnu par l'État et les entreprises.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>

    );
}