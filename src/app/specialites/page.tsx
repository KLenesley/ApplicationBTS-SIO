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
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-center">Liste des Spécialités</h2>
                <ul className="list-disc list-inside">
                {specialites.map((specialite, index) => (
                    <li key={index} className="text-lg">{specialite}</li>
                ))}
                </ul>
            </section>
            <section className="text-center">
                <h2 className="text-2xl font-semibold mb-6">Cybersécurité</h2>
                <p>
                La cybersécurité est une compétence essentielle dans le domaine de l'informatique. 
                Elle vise à protéger les systèmes, les réseaux et les données contre les cyberattaques 
                et les menaces potentielles. Cette spécialité est de plus en plus importante dans un 
                monde numérique en constante évolution.
                </p>
            </section>
            </main>
        </div>
    );
};

export default Specialites;