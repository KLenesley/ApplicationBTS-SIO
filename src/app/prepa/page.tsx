import React from 'react';

export default function Prepa() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-16 px-4 overflow-hidden font-sans text-center">
      
      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-700 rounded-full opacity-20 blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-700 rounded-full opacity-30 blur-2xl z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* Titre principal */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400 drop-shadow">
            La Prépa ISEN
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            <span className="font-extrabold text-red-500">Prépa ISEN</span> : une formation d’excellence pour préparer les concours d’entrée à l’ISEN, couvrant les matières scientifiques, technologiques et humaines essentielles à votre réussite.
          </p>
        </div>

        {/* Matières */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex-1 bg-gray-800 border-2 border-red-900 rounded-xl shadow-xl hover:shadow-red-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2 justify-center">
              <span>∑</span> Mathématiques
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Compréhension approfondie des concepts clés pour l’ingénierie.
            </p>
          </div>
          <div className="flex-1 bg-gray-800 border-2 border-yellow-900 rounded-xl shadow-xl hover:shadow-yellow-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2 justify-center">
              <span>⚡</span> Physique
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Approche scientifique des technologies numériques et électroniques.
            </p>
          </div>
          <div className="flex-1 bg-gray-800 border-2 border-blue-900 rounded-xl shadow-xl hover:shadow-blue-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2 justify-center">
              <span>💬</span> Humanités
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Développement des compétences en communication et expression écrite.
            </p>
          </div>
          <div className="flex-1 bg-gray-800 border-2 border-green-900 rounded-xl shadow-xl hover:shadow-green-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2 justify-center">
              <span>🌍</span> Anglais
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Renforcement des compétences pour évoluer dans un contexte international.
            </p>
          </div>
        </div>

        {/* Préparation intensive */}
        <div className="bg-gray-800 border-2 border-red-900 rounded-xl shadow-xl hover:shadow-pink-900 transition-all duration-300 hover:scale-105 p-7 text-center">
          <p className="text-gray-200 text-sm leading-relaxed">
            <span className="text-red-500 font-extrabold">Préparation intensive</span> : 150h supplémentaires intégrées au BTS pour maximiser vos chances d’intégrer l’ISEN.
          </p>
        </div>
      </div>
    </div>
  );
}
