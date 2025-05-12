export default function Presentation() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#233554] via-[#334155] to-[#1e293b] text-slate-200 py-16 px-4 overflow-hidden font-sans text-center">
        <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-700 rounded-full opacity-20 blur-2xl z-0 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-900 rounded-full opacity-30 blur-2xl z-0 animate-pulse" />

        {/* Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto space-y-12">

        {/* Titre principal */}
        <header className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-lg">
          Présentation du BTS SIO
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed text-justify">
          Explorez les composantes clés de la formation qui prépare les professionnels de demain en informatique.
          </p>
        </header>

        {/* Grille des sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8">

          <section className="flex flex-col bg-gradient-to-br from-[#1e293b] to-[#334155] border border-cyan-800 rounded-xl shadow-lg hover:shadow-cyan-900 transition-transform duration-300 hover:scale-105 p-6 text-center text-sm leading-relaxed h-full">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2 justify-center">
            📚 Bloc 1 : Fondamentaux
          </h2>
          <p className="text-slate-200 mb-4 text-justify flex-grow">
            Les étudiants se formeront aux bases de l'informatique, donc la programmation, les réseaux et la cybersécurité.
            Chaque étudiant se spécialise dans l'une des deux spécialités au second semestre, tandis que la cybersécurité est enseignée à tous.
          </p>
          <a
            href="/specialites"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Découvrir les spécialités
          </a>
          </section>

          <section className="flex flex-col bg-gradient-to-br from-[#1e293b] to-[#334155] border border-purple-800 rounded-xl shadow-lg hover:shadow-purple-900 transition-transform duration-300 hover:scale-105 p-6 text-center text-sm leading-relaxed h-full">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2 justify-center">
            📘 Matières Générales
          </h2>
          <p className="text-slate-200 mb-4 text-justify flex-grow">
            Des matières transverses renforcent les compétences organisationnelles :
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-2 text-purple-300 font-medium list-disc list-inside text-justify">
            <li><strong className="text-purple-300">Mathématiques</strong> – entraînement sur des diagrammes, sur des booléens et le langage python.</li>
            <li><strong className="text-purple-300">CEJM</strong> – comprendre la culture de base de l'économie, du droit et du management dans le monde de l'entreprise.</li>
            <li><strong className="text-purple-300">Culture Générale</strong> – entraînement des rédactions écrites et de l'expression orale.</li>
            <li><strong className="text-purple-300">Anglais</strong> – rédactions de CV et de mails en anglais pour communiquer à l'international.</li>
          </ul>
          </section>

          <section className="flex flex-col bg-gradient-to-br from-[#1e293b] to-[#334155] border border-green-800 rounded-xl shadow-lg hover:shadow-green-900 transition-transform duration-300 hover:scale-105 p-6 text-center text-sm leading-relaxed h-full">
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2 justify-center">
            📗 Comptes Rendus
          </h2>
          <p className="text-slate-200 mb-4 text-justify flex-grow">
            Permet de mettre en pratique les compétences acquises et de se préparer au monde professionnel.
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-2 text-green-300 font-medium list-disc list-inside text-justify">
            <li><strong className="text-green-300">Portolio</strong> – création d'un site web personnel pour représenter ses compétences, ses projets et ses expériences.</li>
            <li><strong className="text-green-300">Certification</strong> – recherche internet des certifications numériques et les présenter oralement.</li>
            <li><strong className="text-green-300">Projet</strong> – présentation orale d'un projet réalisé en entreprise ou en atelier.</li>
          </ul>
          </section>

          <section className="flex flex-col bg-gradient-to-br from-[#1e293b] to-[#334155] border border-blue-800 rounded-xl shadow-lg hover:shadow-blue-900 transition-transform duration-300 hover:scale-105 p-6 text-center text-sm leading-relaxed h-full">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2 justify-center">
            🎉 Événements
          </h2>
          <p className="text-slate-200 mb-4 text-justify flex-grow">
            Découvrez les moments forts de la formation :
          </p>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-blue-300 font-medium list-disc list-inside text-justify">
              <li><strong className="text-blue-300">Journée des BTS</strong> – journée exclusive à tous les BTS de l'établissement afin de créer des liens entre étudiant.</li>
              <li><strong className="text-blue-300">LAN</strong> – une journée e-sport festive, avant les vacances de Noël, entre étudiants SIO.</li>
              <li><strong className="text-blue-300">Forum de l'orientation</strong> – présentation de la formation BTS SIO aux élèves de l'établissement.</li>
              <li><strong className="text-blue-300">Stage</strong> – 10 semaines de stages à effectuer au cours de la formation. 5 en 1ère année, 5 en 2ème année.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
