import Image from "next/image";

export default function Home() {
  const user = ""; // Tu peux brancher ça à une auth plus tard

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#233554] via-[#334155] to-[#1e293b] text-white font-sans flex flex-col items-center justify-center px-6">
      <main className="w-full max-w-5xl bg-white/5 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-2xl p-8 sm:p-14 flex flex-col gap-10 items-center text-center">
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
            Bienvenue sur la page du <span className="text-cyan-400 font-semibold">BTS SIO</span>, une formation au cœur des métiers du numérique.
          </p>
        </div>

        {/* Bloc centré "Qu'est-ce que le BTS SIO ?" */}
        <div className="flex justify-center w-full">
          <div className="bg-gradient-to-br from-[#334155]/80 to-[#233554]/80 border border-slate-700 rounded-2xl p-7 shadow-lg text-left hover:scale-[1.02] transition-transform w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">Qu'est-ce que le BTS SIO ?</h2>
            <p className="text-slate-200 leading-relaxed">
              Le BTS SIO (Services Informatiques aux Organisations) est une formation de deux ans qui prépare les étudiants à devenir des professionnels compétents dans le domaine de l'informatique.
            </p>
          </div>
        </div>
        <div>
          <a href="/presentation" className="px-10 py-4 bg-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block border border-cyan-800">
            Découvrir la formation
          </a>
        </div>
      </main>
    </div>
  );
}