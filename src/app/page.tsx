import Image from "next/image";

export default function Home() {
  let user;
  user = "";
  if (user == "") {
    user = null;
  }
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-6 text-white">
      <div className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 w-[33vw] h-[40vh]">
        <h1 className="text-3xl font-bold text-center mb-4 text-violet-300">Bonjour {user},</h1>
        <p className="text-lg text-center mb-2 text-gray-300">Bienvenue sur le site des BTS SIO</p>
        <p className="text-center mb-2 text-gray-300">Créé par des élèves en BTS SIO pour les futurs BTS SIO</p>
        <p className="text-center mb-2 text-gray-300">Es-tu prêt à relever le défi ?</p>
        <p className="text-center mb-6 text-gray-300">Mais tout d'abord, il faut apprendre à connaître notre BTS</p>
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <a href="#">Commencer à apprendre !</a>
        </button>
      </div>
    </div>
  );
}