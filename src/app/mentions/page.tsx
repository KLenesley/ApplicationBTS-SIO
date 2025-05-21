import React from "react";

export default function Mentions() {
    return (
        <div className="relative min-h-screen bg-gradient-to-tr from-[#233554] via-[#334155] to-[#1e293b] text-slate-200 py-16 px-4 overflow-hidden font-sans">
            {/* Effets décoratifs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-700 rounded-full opacity-20 blur-2xl z-0" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-700 rounded-full opacity-30 blur-2xl z-0" />

            <main className="relative z-10 max-w-3xl mx-auto bg-[#334155]/80 border border-cyan-700 rounded-xl shadow-xl p-8 space-y-8">
                <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow text-center mb-6">
                    Mentions légales
                </h1>
                <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-slate-300 mb-6">
                    <p>
                        Application de gestion et de suivi pour le BTS SIO, développée par et pour les étudiants du BTS SIO.
                    </p>
                </blockquote>
                <section>
                    <h2 className="text-xl font-bold text-cyan-300 mb-2">1. Éditeur de l&apos;application</h2>
                    <p className="mb-2">
                        Cette application est développée dans le cadre du BTS SIO (Services Informatiques aux Organisations) par les étudiants du lycée Notre Dame de La Providence à Avranches, sous la supervision pédagogique de l&apos;équipe enseignante.
                    </p>
                    <p className="mb-1">Adresse : Lycée Notre Dame de La Providence, 9 rue Chanoine Berenger, 50300 AVRANCHES</p>
                    <p>Téléphone : 02 33 58 02 22</p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-blue-300 mb-2">2. Hébergement</h2>
                    <p>
                        L&apos;application est hébergée sur les infrastructures du lycée Notre Dame de La Providence ou sur des plateformes cloud éducatives dédiées, selon les besoins pédagogiques.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-indigo-300 mb-2">3. Responsabilité</h2>
                    <p>
                        L&apos;équipe pédagogique et les étudiants s&apos;efforcent de fournir une application fiable et à jour. Cependant, aucune garantie n&apos;est donnée quant à l&apos;exactitude ou l&apos;exhaustivité des informations et fonctionnalités proposées. L&apos;utilisation de l&apos;application se fait sous la responsabilité de l&apos;utilisateur.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-sky-300 mb-2">4. Propriété intellectuelle</h2>
                    <p>
                        L&apos;ensemble des contenus, codes sources et ressources de l&apos;application sont la propriété du lycée Notre Dame de La Providence et/ou de ses étudiants, sauf mention contraire. Toute reproduction ou utilisation non autorisée est interdite.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-cyan-300 mb-2">5. Données personnelles</h2>
                    <p>
                        L&apos;application peut collecter des données personnelles strictement nécessaires à son fonctionnement (identification, suivi pédagogique, etc.). Ces données sont traitées de manière confidentielle et ne sont pas transmises à des tiers sans consentement.
                    </p>
                    <p>
                        Conformément à la réglementation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour toute demande, contactez l&apos;administration du lycée.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-blue-300 mb-2">6. Cookies</h2>
                    <p>
                        L&apos;application peut utiliser des cookies techniques pour assurer son bon fonctionnement. Aucun cookie à des fins publicitaires n&apos;est utilisé. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités pourraient ne pas fonctionner correctement.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-indigo-300 mb-2">7. Loi applicable</h2>
                    <p>
                        L&apos;application et ses mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège du lycée.
                    </p>
                </section>
            </main>
        </div>
    );
}
