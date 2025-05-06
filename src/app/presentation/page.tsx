{/* Bloc 3 */}

export default function Presentation() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-16 px-4 overflow-hidden font-sans text-center">
      
      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-700 rounded-full opacity-20 blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-900 rounded-full opacity-30 blur-2xl z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        
        {/* Titre principal */}
        <header className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow">
            🚀 Présentation du BTS SIO
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explorez les composantes clés de la formation qui prépare les professionnels de demain en informatique.
          </p>
        </header>

        {/* Grille des sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8">
          
          {/* Bloc 1 */}
          <section className="flex-1 bg-gray-800 border-2 border-indigo-900 rounded-xl shadow-xl hover:shadow-purple-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-indigo-400 mb-3 flex items-center gap-2 justify-center">
              📚 Bloc 1 : Fondamentaux
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Les étudiants se formeront aux bases de l'informatique, donc la programmation, les réseaux et la cybersécurité.
              Chaque étudiant se spécialise dans l'une des deux spécialités au second semestre, tandis que la cybersécurité est enseignée à tous.
            </p>
            <a
              href="/specialites"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Découvrir les spécialités
            </a>
          </section>

          {/* Bloc 2 */}
          <section className="flex-1 bg-gray-800 border-2 border-purple-900 rounded-xl shadow-xl hover:shadow-indigo-900 transition-all duration-300 hover:scale-105 p-7 text-center">
            <h2 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2 justify-center">
              📘 Matières Générales
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Des matières transverses renforcent les compétences organisationnelles :
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-indigo-300 text-sm font-medium list-disc list-inside">
              <li><strong className="text-purple-300">Mathématiques</strong> – logique, calcul, statistiques.</li>
              <li><strong className="text-purple-300">CEJM</strong> – comprendre le monde de l'entreprise.</li>
              <li><strong className="text-purple-300">Culture Générale</strong> – expression orale et écrite.</li>
              <li><strong className="text-purple-300">Anglais</strong> – communication technique internationale.</li>
            </ul>
          </section>

          {/* Bloc 3 */}
            <section className="flex-1 bg-gray-800 border-2 border-blue-900 rounded-xl shadow-xl hover:shadow-pink-900 transition-all duration-300 hover:scale-105 p-7 text-center mx-auto md:col-span-2">
              <h2 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2 justify-center">
              🎉 Événements
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Découvrez les moments forts de la formation :
              </p>
              <ul className="mt-4 space-y-3 text-blue-300 text-sm font-medium text-center">
              <li className="flex items-center gap-2 justify-center">
              <span className="text-blue-400">📅</span>
              <strong className="text-blue-300">Journée des BTS</strong> – rencontres et partages inter-promos.
              </li>
              <li className="flex items-center gap-2 justify-center">
              <span className="text-blue-400">🎮</span>
              <strong className="text-blue-300">LAN</strong> – une journée e-sport festive entre étudiants.
              </li>
              <li className="flex items-center gap-2 justify-center">
              <span className="text-blue-400">📢</span>
              <strong className="text-blue-300">Forum Orientation</strong> – présentation de la formation aux élèves de l'établissement.
              </li>
              </ul>
            </section>
        </div>
      </div>
    </div>
  );
}
