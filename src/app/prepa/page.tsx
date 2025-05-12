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
            <span className="font-extrabold text-cyan-400">Prépa ISEN</span> : une option pour préparer les concours d’entrée à l’ISEN, couvrant les matières scientifiques, technologiques et humaines essentielles à votre réussite.
          </p>
        </div>

        {/* Matières */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex-1 bg-[#334155] border border-cyan-700 rounded-xl shadow-xl hover:shadow-cyan-700 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2 justify-center">
              <span>∑</span> Mathématiques
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              Compréhension approfondie et complexes des concepts comme les exponentiels, logarithmes et probabilités.
            </p>
          </div>
          <div className="flex-1 bg-[#334155] border border-blue-700 rounded-xl shadow-xl hover:shadow-blue-700 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-blue-300 mb-3 flex items-center gap-2 justify-center">
              <span>⚡</span> Physique
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              Branche plus scientifique abordant le thème de l'électrocinétique.
            </p>
          </div>
          <div className="flex-1 bg-[#334155] border border-green-700 rounded-xl shadow-xl hover:shadow-green-700 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-green-300 mb-3 flex items-center gap-2 justify-center">
              <span>💬</span> Humanités
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              Développement des compétences en communication orale afin de débattre sur un sujet et révision de la syntaxe française afin d'avoir une certification.
            </p>
          </div>
          <div className="flex-1 bg-[#334155] border border-yellow-700 rounded-xl shadow-xl hover:shadow-yellow-700 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2 justify-center">
              <span>🌍</span> Anglais
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              Renforcement des compétences pour évoluer dans un contexte international.
            </p>
          </div>
        </div>

        {/* Préparation intensive */}
        <div className="bg-[#334155] border border-cyan-700 rounded-xl shadow-xl hover:shadow-cyan-700 transition-all duration-300 hover:scale-105 p-7 text-center">
          <p className="text-slate-200 text-sm leading-relaxed">
            <span className="text-cyan-400 font-extrabold">Préparation intensive</span> : 150h supplémentaires intégrées au BTS pour maximiser vos chances d’intégrer l’ISEN avec 800€ l'année.
          </p>
        </div>
      </div>
    </div>
  );
}
