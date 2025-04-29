import React from 'react';

export default function Presentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a36] via-[#2e2d5c] to-[#3d3c6a] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-20 text-center">
        {/* Titre principal */}
        <header>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-300 drop-shadow-lg tracking-tighter">
            🚀 Présentation du BTS SIO
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Explorez les composantes clés de la formation qui prépare les professionnels de demain en informatique.
          </p>
        </header>

        {/* Grille des sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

          {/* Bloc 1 */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-violet-200 mb-5">📚 Bloc 1 : Fondamentaux</h2>
            <p className="text-gray-300 text-base leading-7 text-justify">
              Les étudiants se formeront aux bases de l'informatique, donc la programmation les réseaux et la cybersécurité.
              <br /><br />
              Chaque étudiants se spécialiseront dans l'une des deux spécialités au second semestre du BTS SIO 1ère année.
              En revanche la cybersécurité, une troisième spécialité qui est enseignée pour tous les étudiants.
            </p>
            <div>
              <a href="/specialites"
                className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block border border-cyan-800">
                Découvrir les specialités
              </a>
            </div>
          </section>

          {/* Bloc 2 */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-violet-200 mb-5">📘 Matières Générales</h2>
            <p className="text-gray-300 text-base mb-4 leading-7">
              Des matières transverses renforcent les compétences organisationnelles :
            </p>
            <ul className="list-disc pl-5 space-y-3 text-indigo-50 text-base text-justify">
              <li><strong className="text-violet-300">Mathématiques</strong> – logique, calcul, statistiques.</li>
              <li><strong className="text-violet-300">CEJM</strong> – comprendre le monde de l'entreprise.</li>
              <li><strong className="text-violet-300">Culture Générale</strong> – expression orale et écrite.</li>
              <li><strong className="text-violet-300">Anglais</strong> – communication technique internationale.</li>
            </ul>
          </section>

          {/* Bloc 3 */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-violet-200 mb-5">🎉 Événements</h2>
            <p className="text-gray-300 text-base mb-4 leading-7">
              Voici les évènements au cours de la formation :
            </p>
            <ul className="list-disc pl-5 space-y-3 text-indigo-50 text-base text-justify">
              <li><strong className="text-violet-300">Journée des BTS</strong> – rencontres et partages inter-promos.</li>
              <li><strong className="text-violet-300">LAN</strong> – une journée e-sport festifs entre étudiants.</li>
              <li><strong className="text-violet-300">Forum Orientation</strong> – présentation de la formation aux élèves de l'établissement.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
