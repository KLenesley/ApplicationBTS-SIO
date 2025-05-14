import React from 'react';
export default function Presentation() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#233554] via-[#334155] to-[#1e293b] text-slate-200 py-16 px-4 overflow-hidden font-sans">

      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-700 rounded-full opacity-20 blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-700 rounded-full opacity-30 blur-2xl z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* Titre principal */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow">
            Présentation du BTS SIO
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explorez les composantes clés de la formation qui prépare les professionnels de demain en informatique.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Bloc 1 : Fondamentaux */}
          <div className="flex-1 bg-[#334155] border border-cyan-700 rounded-xl shadow-xl hover:shadow-cyan-700 transition-all duration-300 hover:scale-105 p-0 flex flex-col">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2 justify-center">
                <span>📚</span> Bloc 1
              </h2>
              <div className="flex flex-col items-center">
                <p className="text-cyan-200 text-base leading-relaxed mb-4 flex-grow w-full h-full text-justify">
                  Les étudiants se formeront aux bases de l'informatique : <span className="font-bold">programmation</span>, <span className="font-bold">réseaux</span> et <span className="font-bold">cybersécurité</span> avec du travail à rendre.
                  Chaque étudiant se spécialise dans l'une des deux spécialités au second semestre, tandis que la cybersécurité est enseignée à tous.
                </p>
                <a
                  href="/specialites"
                  className="inline-block px-6 py-2 mb-4 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Découvrir les spécialités
                </a>
                <p className="text-center text-cyan-300">
                  Les étudiants d'une même spécialité doivent remplir un projet imposé par les professeurs en atelier professionnel.
                </p>
              </div>
            </div>
          </div>

          {/* Matières Générales */}
          <div className="flex-1 bg-[#334155] border border-blue-700 rounded-xl shadow-xl hover:shadow-blue-700 transition-all duration-300 hover:scale-105 p-0 flex flex-col">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-lg font-bold text-blue-400 mb-2 flex items-center gap-2 justify-center">
                <span className="text-base">📘</span> Matières Générales
              </h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-2 w-full">
                Des matières transverses renforcent les compétences organisationnelles :
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-2 text-blue-300 text-sm font-medium list-disc list-inside pl-2 text-left w-full">
                <li><span className="font-bold">Mathématiques</span> – Utilisation des diagrammes, la logique booléenne et le Python pour résoudre des problèmes informatiques.</li>
                <li><span className="font-bold">CEJM</span> – Apprendre les bases de la culture de l'économie, juridique et managériale de différentes organisations.</li>
                <li><span className="font-bold">Culture Générale</span> – Developpement des compétences en rédaction et en expression orale avec des références culturelles.</li>
                <li><span className="font-bold">Anglais</span> – Rédaction de CV, des mails professionnels et à communiquer dans un contexte international.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comptes Rendus + Événements */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Comptes Rendus */}
          <div className="flex-1 bg-[#334155] border border-indigo-700 rounded-xl shadow-xl hover:shadow-indigo-700 transition-all duration-300 hover:scale-105 p-0 flex flex-col">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2 justify-center">
                <span>📗</span> Comptes Rendus
              </h2>
              <p className="text-indigo-200 text-base leading-relaxed mb-2 w-full">
                Mettez en pratique vos compétences et préparez-vous au monde professionnel :
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-2 text-indigo-300 text-base font-medium list-disc list-inside pl-2 text-left w-full">
                <li><span className="font-bold">Portfolio</span> – création de site web personnel pour présenter ses expériences, ses atouts et ses projets.</li>
                <li><span className="font-bold">Certification</span> – recherche sur internet de certifications liées à l'informatique afin de les présenter oralement.</li>
                <li><span className="font-bold">Projet</span> – présentation orale d'un projet réalisé en stage ou en atelier professionnel.</li>
              </ul>
            </div>
          </div>

          {/* Événements */}
          <div className="flex-1 bg-[#334155] border border-sky-700 rounded-xl shadow-xl hover:shadow-sky-700 transition-all duration-300 hover:scale-105 p-0 flex flex-col">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-xl font-bold text-sky-300 mb-3 flex items-center gap-2 justify-center">
                <span>🎉</span> Événements
              </h2>
              <p className="text-sky-200 text-base leading-relaxed mb-2 w-full">
                Découvrez les moments forts de la formation :
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-2 text-sky-300 text-base font-medium list-disc list-inside pl-2 text-left w-full">
                <li><span className="font-bold">Journée des BTS</span> – journée exclusive aux étudiants du lycée afin de créer des liens.</li>
                <li><span className="font-bold">LAN</span> – journée e-sport festive avant Noël afin de passer un bon moment entre étudiant SIO.</li>
                <li><span className="font-bold">Forum de l'orientation</span> – présentation du BTS SIO aux élèves.</li>
                <li><span className="font-bold">Stage</span> – 10 semaines de stages sur 2 ans. 5 en première année, 5 dans la deuxième</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
