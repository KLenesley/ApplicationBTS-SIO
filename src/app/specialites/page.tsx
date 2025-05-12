import React from 'react';

export default function Specialites() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#233554] via-[#334155] to-[#1e293b] text-slate-200 py-16 px-4 overflow-hidden font-sans text-center">

      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-700 rounded-full opacity-20 blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-900 rounded-full opacity-30 blur-2xl z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* Titre principal */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 drop-shadow">
            Spécialités du BTS SIO
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez les trois spécialités du BTS SIO : développement d'applications, gestion des systèmes et réseaux, et cybersécurité.
          </p>
        </div>

        {/* SLAM + SISR */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* SISR */}
          <div className="flex-1 bg-gray-800 border-2 border-purple-900 rounded-xl shadow-xl hover:shadow-blue-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2 justify-center">
              <span>🖧</span> SISR – Infrastructure & Réseaux
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-2">
              La spécialité SISR se concentre sur l’administration des systèmes et réseaux d’entreprise. Les étudiants travailleront sur des consoles virtuelles et apprendront à :
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-1 text-purple-300 text-sm font-medium list-disc list-inside pl-2">
              <li>Gérer des machines virtuelles</li>
              <li>Configurer des serveurs</li>
              <li>Superviser des réseaux</li>
              <li>Utiliser le cloud computing</li>
            </ul>
          </div>
        
          {/* SLAM */}
          <div className="flex-1 bg-gray-800 border-2 border-pink-900 rounded-xl shadow-xl hover:shadow-blue-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-pink-400 mb-3 flex items-center gap-2 justify-center">
              <span>💻</span> SLAM – Développement & Applications
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-2">
              La spécialité SLAM met l'accent sur le développement de logiciels métiers et la manipulation des bases de données. Langages enseignés :
            </p>
            <ul className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-1 text-blue-300 text-sm font-medium list-disc list-inside pl-2">
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

        {/* Cybersécurité */}
        <div className="flex-1 bg-gray-800 border-2 border-blue-900 rounded-xl shadow-xl hover:shadow-pink-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2 justify-center">
              <span>🛡️</span> Cybersécurité
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-2">
              La spécialité cybersécurité forme les étudiants à la protection des systèmes informatiques contre les menaces et attaques.
            </p>
            <p className="text-gray-200 text-sm leading-relaxed mb-2">
              Sécurisez les réseaux, détectez les vulnérabilités et protégez les données sensibles.
            </p>
            <p className="text-gray-200 text-sm leading-relaxed">
              Entraînez-vous à la cybersécurité avec :&nbsp;
              <a href="https://joligo.fr/" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline hover:text-pink-600 transition">
                Joligo
              </a>.
            </p>
          </div>
      </div>
    </div>
  );
}
