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
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow">
            Spécialités du BTS SIO
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez les trois spécialités du BTS SIO : développement d'applications, gestion des systèmes et réseaux, et cybersécurité.
          </p>
        </div>

        {/* SLAM + SISR */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* SISR */}
          <div className="flex-1 bg-[#334155] border border-cyan-700 rounded-xl shadow-xl hover:shadow-cyan-700 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2 justify-center">
              <span>🖧</span> SISR – Infrastructure & Réseaux
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed mb-2">
              La spécialité SISR se concentre sur l’administration des systèmes et réseaux d’entreprise. Les étudiants travailleront sur des consoles virtuelles et apprendront à :
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 items-start mt-2 text-cyan-300 text-sm font-medium text-left">
              <div className="flex items-center gap-2"><span className="text-cyan-400">•</span> Gérer des machines virtuelles</div>
              <div className="flex items-center gap-2"><span className="text-cyan-400">•</span> Configurer des serveurs</div>
              <div className="flex items-center gap-2"><span className="text-cyan-400">•</span> Superviser des réseaux</div>
              <div className="flex items-center gap-2"><span className="text-cyan-400">•</span> Utiliser le cloud computing</div>
              <div className="flex items-center gap-2"><span className="text-cyan-400">•</span> Gérer les infra-réseaux</div>
            </div>
          </div>
        
          {/* SLAM */}
          <div className="flex-1 bg-[#334155] border border-blue-700 rounded-xl shadow-xl hover:shadow-blue-700 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-blue-300 mb-3 flex items-center gap-2 justify-center">
              <span>💻</span> SLAM – Développement & Applications
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed mb-2">
              La spécialité SLAM met l'accent sur le développement de logiciels métiers et la manipulation des bases de données. Langages enseignés :
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 items-start mt-2 text-blue-300 text-sm font-medium text-left">
              <div className="flex items-center gap-2"><span className="text-blue-400">•</span> HTML</div>
              <div className="flex items-center gap-2"><span className="text-blue-400">•</span> CSS</div>
              <div className="flex items-center gap-2"><span className="text-blue-400">•</span> JavaScript</div>
              <div className="flex items-center gap-2"><span className="text-blue-400">•</span> PHP</div>
              <div className="flex items-center gap-2"><span className="text-blue-400">•</span> Python</div>
              <div className="flex items-center gap-2"><span className="text-blue-400">•</span> C#</div>
              <div className="flex items-center gap-2"><span className="text-blue-400">•</span> SQL</div>
            </div>
          </div>
        </div>

        {/* Cybersécurité */}
        <div className="flex-1 bg-[#334155] border-2 border-indigo-900 rounded-xl shadow-xl hover:shadow-indigo-900 transition-all duration-300 hover:scale-105 p-7 text-center">
          <h2 className="text-xl font-bold text-indigo-400 mb-3 flex items-center gap-2 justify-center">
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
            <a href="https://joligo.fr/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-blue-600 transition">
              Joligo
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
