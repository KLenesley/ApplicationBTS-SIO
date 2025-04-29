import React from 'react';

export default function Specialites() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-16 px-6 overflow-hidden">

      {/* Effets lumineux */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-violet-700/30 blur-3xl rounded-full animate-pulse opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/20 blur-2xl rounded-full opacity-30 pointer-events-none z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {/* Titre principal */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-400 drop-shadow-md">
            Spécialités du BTS SIO
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les trois spécialités du BTS SIO : développement d'applications et gestion des systèmes et réseaux à choisir pour le second semestre, et cybersécurité.
          </p>
        </div>

        {/* SLAM + Cybersécurité */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Cybersécurité */}
          <div className="group p-8 bg-gray-950 border border-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-violet-300 mb-4 group-hover:text-violet-200 transition">
              🛡️ Cybersécurité
            </h2>
            <p className="text-gray-300 text-base leading-relaxed text-justify">
              La spécialité cybersécurité forme les étudiants à la protection des systèmes informatiques contre les menaces et attaques. <br /><br />
              Ils apprendront à sécuriser les réseaux, à détecter des vulnérabilités et à mettre en place des mesures de protection des données sensibles. <br /><br />
              Entraînez-vous à la cybersécurité avec le logiciel développé par un professeur sur 
              <a href="https://joligo.fr/" target="_blank" rel="noopener noreferrer" className="text-violet-400 underline ml-1 hover:text-violet-300 transition">
                Joligo
              </a>.
            </p>
          </div>

          {/* SLAM */}
          <div className="group p-8 bg-gray-950 border border-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-violet-300 mb-4 text-center group-hover:text-violet-200 transition">
              💻 SLAM – Développement & Applications
            </h2>
            <p className="text-gray-300 text-base leading-relaxed text-justify">
              La spécialité SLAM met l'accent sur le développement de logiciels métiers et la manipulation des bases de données. Les langages enseignés incluent :
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-400 grid grid-cols-2 sm:grid-cols-3 gap-y-1 pl-2">
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

        {/* SISR */}
        <div className="flex justify-center">
          <div className="group p-8 bg-gray-950 border border-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-violet-300 mb-4 text-center group-hover:text-violet-200 transition">
              🖧 SISR – Infrastructure & Réseaux
            </h2>
            <p className="text-gray-300 text-base leading-relaxed text-justify">
              La spécialité SISR se concentre sur l’administration des systèmes et réseaux d’entreprise. Les étudiants travailleront sur des consoles virtuelles et apprendront à :
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-400 grid grid-cols-2 sm:grid-cols-2 gap-y-1 pl-2">
              <li>Gérer des machines virtuelles</li>
              <li>Configurer des serveurs</li>
              <li>Superviser des réseaux</li>
              <li>Utiliser le cloud computing</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
