import React from "react";

const Specialites = () => {
    const specialites = ["SLAM", "SISR", "Cybersécurité"];

    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="text-center">
                <h1 className="text-4xl font-bold">Spécialités du BTS SIO</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Le BTS SIO propose deux spécialités principales :
                    <strong> SLAM </strong> (Solutions Logicielles et Applications Métiers),
                    qui se concentre sur le développement d'applications, et
                    <strong> SISR </strong> (Solutions d'Infrastructure, Systèmes et Réseaux),
                    qui se focalise sur la gestion des réseaux et des infrastructures.
                </p>
            </header>

            <main className="w-full max-w-3xl">

                <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6
                    6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>

                    <h2 className="text-2xl font-semibold mb-6 " id="slam">SLAM</h2>
                    <p>
                        La spécialité SLAM se concentre sur le développement d'applications logicielles et la création de solutions informatiques adaptées aux besoins des entreprises.
                        Les étudiants apprennent à concevoir, développer et maintenir des applications, en utilisant divers langages de programmation et technologies.
                    </p>
                    <a href="/specialites/slam" className="text-blue-500 hover:underline mt-4 inline-block">
                        En savoir plus sur la spécialité SLAM
                    </a>
                </section>

                <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>

                    <h2 className="text-2xl font-semibold mb-6" id="sisr">SISR</h2>
                    <p>
                        La spécialité SISR est axée sur la gestion des infrastructures informatiques et des réseaux.
                        Les étudiants acquièrent des compétences en administration de systèmes, en sécurité des réseaux et en gestion des services informatiques.
                    </p>
                    <a href="/specialites/sisr" className="text-blue-500 hover:underline mt-4 inline-block">
                        En savoir plus sur la spécialité SISR
                    </a>
                </section>

                <section className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-12 text-center hover:shadow transition-shadow duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <h2 className="text-2xl font-semibold mb-6" id="cyber">Cybersécurité</h2>
                    <p>
                        La cybersécurité est une compétence essentielle dans le domaine de l'informatique.
                        Elle vise à protéger les systèmes, les réseaux et les données contre les cyberattaques
                        et les menaces potentielles. Cette spécialité est de plus en plus importante dans un
                        monde numérique en constante évolution.
                    </p>
                    <a href="/specialites/cybersecurite" className="text-blue-500 hover:underline mt-4 inline-block">
                        En savoir plus sur la cybersécurité
                    </a>
                </section>
            </main>
        </div>
    );
};

export default Specialites;