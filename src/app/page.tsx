import Image from "next/image";

export default function Home() {
  let user;
  user = "";
  if (user == "") {
    user = null;
  }
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-6 text-[#1E2A5E]">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center w-96 h-86 transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-4">Bonjour {user},</h1>
        <p className="text-lg text-center mb-2">Bienvenue sur le site des BTS SIO</p>
        <p className="text-center mb-2">Créé par des élèves en BTS SIO pour les futurs BTS SIO</p>
        <p className="text-center mb-2">Es-tu prêt à relever le défi ?</p>
        <p className="text-center mb-6">Mais tout d'abord, il faut apprendre à connaître notre BTS</p>
        <button className="bg-[#55679C] text-white px-4 py-2 rounded hover:bg-[#7C93C3] transition">
          <a href="#">Commencer à apprendre !</a>
        </button>
      </div>
    </div>
  );
}
