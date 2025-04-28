import React from "react";

export default function Presentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-20 text-center">
        {/* Titre principal */}
        <header>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-400 drop-shadow-lg tracking-tight">
            🚀 Présentation du BTS SIO
          </h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Explorez les composantes clés de la formation qui prépare les professionnels de demain en informatique.
          </p>
        </header>

        {/* Grille des sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          
          {/* Bloc 1 */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-bold text-violet-300 mb-4">📚 Bloc 1 : Fondamentaux</h2>
            <p className="text-gray-200 text-sm leading-6">
              Ce bloc pose les bases solides de l’informatique : analyse des besoins, conception logicielle,
              administration de systèmes. Les étudiants participent à des projets concrets encadrés.
              <br /><br />
              Deux spécialisations permettent de se professionnaliser dans le développement ou l’administration réseau.
            </p>
          </section>

          {/* Bloc 2 */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-bold text-violet-300 mb-4">📘 Matières Générales</h2>
            <p className="text-gray-200 text-sm mb-4 leading-6">
              Des matières transverses renforcent les compétences organisationnelles :
            </p>
            <ul className="list-disc pl-5 space-y-2 text-indigo-100 text-sm">
              <li><strong className="text-violet-400">Mathématiques</strong> – logique, calcul, statistiques.</li>
              <li><strong className="text-violet-400">CEJM</strong> – comprendre le monde de l'entreprise.</li>
              <li><strong className="text-violet-400">Culture Générale</strong> – expression orale et écrite.</li>
              <li><strong className="text-violet-400">Anglais</strong> – communication technique internationale.</li>
            </ul>
          </section>

          {/* Bloc 3 */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-bold text-violet-300 mb-4">🎉 Événements</h2>
            <p className="text-gray-200 text-sm mb-4 leading-6">
              La vie en BTS SIO est rythmée par des temps forts :
            </p>
            <ul className="list-disc pl-5 space-y-2 text-indigo-100 text-sm">
              <li><strong className="text-violet-400">Journée des BTS</strong> – rencontres et partages inter-promos.</li>
              <li><strong className="text-violet-400">LAN</strong> – journée e-sport festifs entre étudiants.</li>
              <li><strong className="text-violet-400">Forum Orientation</strong> – présentation de la formation aux élèves de l'établissement.</li>
            </ul>
          </section>
        </div>

       
      </div>
    </div>
  );
}
