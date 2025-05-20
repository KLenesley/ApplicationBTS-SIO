import Image from "next/image";

export default function Home() {
  const user = ""; // Tu peux brancher ça à une auth plus tard

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#233554] via-[#334155] to-[#1e293b] text-white font-sans flex flex-col items-center justify-center px-6">
      <main className="w-full max-w-5xl p-8 sm:p-14 flex flex-col gap-10 items-center text-center">
        {/* Logo + Accueil */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logoNDLPFull.png"
            alt="Logo NDLP Full"
            width={220}
            height={50}
            className="drop-shadow-2xl"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-300 drop-shadow-md">
            Bonjour !
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mt-2">
            Bienvenue sur la page du <abbr className="text-cyan-400 cursor-pointer" title="Services Informatiques aux Organisations">BTS SIO</abbr>, une formation au cœur des métiers du numérique.
          </p>
        </div>

        {/* Bloc centré "Qu'est-ce que le BTS SIO ?" */}
        <div className="flex justify-center w-full">
          <div className="bg-slate-800 border-2 border-white-700 rounded-2xl p-7 shadow-lg text-center hover:scale-[1.02] transition-transform w-full max-w-2xl cursor-pointer">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">Qu'est-ce que le BTS SIO ?</h2>
            <p className="text-slate-200 leading-relaxed">
              Le BTS SIO (Services Informatiques aux Organisations) est une formation de deux ans qui prépare les étudiants à devenir des professionnels compétents dans le domaine de l'informatique.
            </p>
          </div>
        </div>
        <div>
          <a href="/presentation" className="inline-block px-12 py-4 mb-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Découvrir la formation
          </a>
        </div>
      </main>
    </div>
  );
}