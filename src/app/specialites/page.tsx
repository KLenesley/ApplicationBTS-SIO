import React from 'react';

export default function Specialites() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#233554] via-[#334155] to-[#1e293b] text-slate-200 py-16 px-4 overflow-hidden font-sans text-center">

      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-700 rounded-full opacity-20 blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-700 rounded-full opacity-30 blur-2xl z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* Titre principal */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow">
            Spécialités du BTS SIO
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez les spécialités du BTS SIO : développement d'applications, gestion des systèmes et réseaux, ainsi que la cybersécurité.
          </p>
        </div>

        {/* SLAM + SISR */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* SISR */}
          <div className="flex-1 bg-slate-800 border-2 border-white-700 rounded-xl shadow-lg hover:shadow-gray-800 transition-all duration-300 hover:scale-102 p-0 flex flex-col cursor-pointer">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-2xl font-bold text-cyan-300 mb-3 flex items-center gap-2 justify-center">
                SISR – Infrastructure & Réseaux
              </h2>
              <p className="text-cyan-200 text-base leading-relaxed mb-4 w-full text-center">
                La spécialité SISR se concentre sur l’administration des systèmes et réseaux d’entreprise. Les étudiants travailleront sur des consoles virtuelles et apprendront à :
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-2 text-cyan-400 text-base font-medium list-inside pl-2 text-center w-full list-none">
                <li>Gérer des machines virtuelles</li>
                <li>Configurer des serveurs</li>
                <li>Superviser des réseaux</li>
                <li>Utiliser le cloud computing</li>
                <li>Gérer les infra-réseaux</li>
              </ul>
            </div>
          </div>

          {/* SLAM */}
          <div className="flex-1 bg-slate-800 border-2 border-white-700 rounded-xl shadow-lg hover:shadow-gray-800 transition-all duration-300 hover:scale-102 p-0 flex flex-col cursor-pointer">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-2xl font-bold text-blue-300 mb-3 flex items-center gap-2 justify-center">
                SLAM – Développement & Applications
              </h2>
              <p className="text-blue-200 text-base leading-relaxed mb-4 w-full text-center">
                La spécialité SLAM met l'accent sur le développement de logiciels métiers et la manipulation des bases de données. Langages enseignés :
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 items-start text-blue-300 text-base font-medium list-none text-center w-full">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Python</li>
                <li>C#</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cybersécurité */}
        <div className="flex-1 bg-slate-800 border-2 border-white-700 rounded-xl shadow-lg hover:shadow-gray-800 transition-all duration-300 hover:scale-102 p-0 flex flex-col cursor-pointer">
          <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center gap-2 justify-center">
              Cybersécurité
            </h2>
            <p className="text-indigo-200 text-base leading-relaxed mb-4 w-full text-center">
              La spécialité cybersécurité forme les étudiants à la protection des systèmes informatiques contre les menaces et attaques.
            </p>
            <p className="text-indigo-200 text-base leading-relaxed mb-4 w-full text-center">
              Sécurisez les réseaux, détectez les vulnérabilités et protégez les données sensibles.
            </p>
            <p className="text-gray-200 text-base leading-relaxed w-full text-center">
              Entraînez-vous à la cybersécurité avec :&nbsp;
              <a href="https://joligo.fr/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline hover:text-indigo-500 transition">
                Joligo
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
