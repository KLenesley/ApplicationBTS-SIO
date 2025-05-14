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
                        Tutoriels en français sur le développement d&apos;applications Web, le réseau et la cybersécurité.
                    </p>
                </blockquote>
                <section>
                    <h2 className="text-xl font-bold text-cyan-300 mb-2">1. Éditeur du site</h2>
                    <p className="mb-2">
                        Le site Web BTS SIO de NDLP avranches est édité par des étudiants du BTS SIO (Services Informatiques aux Organisations) de{" "}
                        <a
                            href="https://ndlpavranches.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 underline hover:text-cyan-300 transition"
                        >
                            Lycée Notre Dame de La Providence à Avranches
                        </a>
                        , sous la responsabilité de M. Laurent BOUQUET, enseignant en informatique.
                    </p>
                    <p className="mb-1">Adresse : Lycée Notre Dame de La Providence, 9 rue Chanoine Berenger 50300 AVRANCHES</p>
                    <p>Téléphone : 02 33 58 02 22</p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-blue-300 mb-2">2. Hébergement</h2>
                    <p>
                        Le Site est hébergé par{" "}
                        <a
                            href="https://docs.gitlab.com/ee/user/project/pages/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                        >
                            GitLab Pages
                        </a>
                        , service d&apos;hébergement de pages statiques fourni par{" "}
                        <a
                            href="https://about.gitlab.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                        >
                            GitLab Inc
                        </a>
                        .
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-indigo-300 mb-2">3. Responsabilité</h2>
                    <p>
                        M. Laurent BOUQUET s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce Site, dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, M. Laurent BOUQUET ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce Site.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-sky-300 mb-2">5. Données personnelles et suivi des utilisateurs</h2>
                    <p>
                        Le Site utilise PostHog, un outil d&apos;analyse open source, pour comprendre comment les visiteurs interagissent avec le contenu proposé. PostHog collecte des informations telles que les pages visitées, le temps passé sur le site, les interactions avec les éléments du site et l&apos;adresse IP dans un format anonymisé pour respecter la vie privée des utilisateurs.
                    </p>
                    <p>
                        Ces données sont utilisées uniquement dans le but d&apos;analyser le trafic et d&apos;améliorer l&apos;expérience utilisateur sur le Site. Aucune information personnelle identifiable n&apos;est collectée intentionnellement par PostHog sans le consentement explicite de l&apos;utilisateur. Les utilisateurs qui ne souhaitent pas être suivis par PostHog peuvent désactiver les cookies dans leur navigateur ou utiliser des outils de blocage des traqueurs.
                    </p>
                    <p>
                        Pour plus d&apos;informations sur la politique de confidentialité de PostHog et sur la manière dont ils traitent les données, veuillez visiter{" "}
                        <a
                            href="https://posthog.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 underline hover:text-sky-300 transition"
                        >
                            leur site web
                        </a>
                        .
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-cyan-300 mb-2">6. Cookies</h2>
                    <p>
                        Le Site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur, faciliter la navigation sur le site et pour le suivi analytique via PostHog. Les utilisateurs peuvent à tout moment modifier les paramètres de leur navigateur pour refuser les cookies ou pour être avertis lorsque des cookies sont envoyés.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-blue-300 mb-2">7. Loi applicable</h2>
                    <p>
                        Le présent Site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                    </p>
                </section>
            </main>
        </div>
    );
}