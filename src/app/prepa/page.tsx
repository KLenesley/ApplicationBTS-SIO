import React from 'react';

export default function Prepa() {
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
            La Prépa ISEN
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Une option pour préparer les concours d’entrée à l’ISEN, couvrant les matières scientifiques, technologiques et humaines essentielles à votre réussite.
          </p>
        </div>

        {/* Matières */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mathématiques */}
          <div className="flex-1 bg-red-800/25 border-2 border-white-700 rounded-xl shadow-lg hover:shadow-gray-800 transition-all duration-300 hover:scale-102 p-0 flex flex-col cursor-pointer">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-2xl font-bold text-white-300 mb-3 flex items-center gap-2 justify-center">
                Mathématiques
              </h2>
              <div className="flex flex-col items-center">
                <p className="text-gray-300 text-base leading-relaxed mb-4 flex-grow w-full h-full text-center">
                  Compréhension approfondie et complexe des concepts comme les <span className="font-bold">exponentiels</span>, <span className="font-bold">logarithmes</span> et <span className="font-bold">probabilités</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Physique */}
          <div className="flex-1 bg-blue-800/25 border-2 border-white-700 rounded-xl shadow-lg hover:shadow-gray-800 transition-all duration-300 hover:scale-102 p-0 flex flex-col cursor-pointer">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-2xl font-bold text-white-300 mb-3 flex items-center gap-2 justify-center">
                Physique
              </h2>
              <div className="flex flex-col items-center">
                <p className="text-gray-300 text-base leading-relaxed mb-4 flex-grow w-full h-full text-center">
                  Approfondissement des concepts scientifiques, notamment l'<span className="font-bold">électrocinétique</span> et d'autres notions fondamentales de la physique.
                </p>
              </div>
            </div>
          </div>

          {/* Humanités */}
          <div className="flex-1 bg-green-800/25 border-2 border-white-700 rounded-xl shadow-lg hover:shadow-gray-800 transition-all duration-300 hover:scale-102 p-0 flex flex-col cursor-pointer">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-2xl font-bold text-gray-300 mb-3 flex items-center gap-2 justify-center">
                Humanités
              </h2>
              <div className="flex flex-col items-center">
                <p className="text-gray-300 text-base leading-relaxed mb-4 flex-grow w-full h-full text-center">
                  Développement des compétences en <span className="font-bold">communication orale</span> pour débattre sur un sujet, et révision de la <span className="font-bold">syntaxe française</span> pour obtenir une certification.
                </p>
              </div>
            </div>
          </div>

          {/* Anglais */}
          <div className="flex-1 bg-yellow-800/25 border-2 border-white-700 rounded-xl shadow-lg hover:shadow-gray-800 transition-all duration-300 hover:scale-102 p-0 flex flex-col cursor-pointer">
            <div className="flex flex-col flex-1 justify-center h-full w-full p-8">
              <h2 className="text-2xl font-bold text-white-300 mb-3 flex items-center gap-2 justify-center">
                Anglais
              </h2>
              <div className="flex flex-col items-center">
                <p className="text-gray-300 text-base leading-relaxed mb-4 flex-grow w-full h-full text-center">
                  Renforcement des compétences pour évoluer en anglais à l'oral dans un contexte international.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Préparation intensive */}
        <div className="bg-slate-800 border-2 border-white-700 rounded-xl shadow-xl p-7 text-center">
          <p className="text-slate-200 text-md leading-relaxed">
            <b>Préparation intensive</b> : 150h supplémentaires intégrées au BTS pour maximiser vos chances d’intégrer l’ISEN avec 800€ par semestre.
          </p>
        </div>
      </div>
    </div>
  );
}
