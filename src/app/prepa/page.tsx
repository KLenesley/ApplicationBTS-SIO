import React from 'react';

export default function Prepa() {
  return (
    <div className="p-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white rounded-3xl shadow-2xl space-y-12 border border-gray-800">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-red-700 drop-shadow-xl text-center tracking-tight">
        La Prépa ISEN
      </h2>

      {/* Introduction */}
      <p className="text-gray-300 text-lg leading-relaxed text-justify max-w-4xl mx-auto">
        La <span className="text-red-700 font-semibold">Prépa ISEN</span> est une formation complémentaire qui prépare les étudiants aux concours d'entrée à l'ISEN. Elle couvre des matières clés pour affronter les épreuves scientifiques, technologiques et humaines.
      </p>

      {/* List of Subjects */}
      <ul className="list-disc pl-8 space-y-4 text-gray-200 text-base leading-relaxed max-w-4xl mx-auto">
        <li>
          <strong className="text-red-700">Mathématiques</strong> : pour une compréhension approfondie des tâches complexes liées aux études d'ingénierie.
        </li>
        <li>
          <strong className="text-red-700">Physique</strong> : pour une approche scientifique des technologies numériques et de l'électronique.
        </li>
        <li>
          <strong className="text-red-700">Humanités</strong> : pour développer ses compétences en communication et réviser les règles de syntaxe française.
        </li>
        <li>
          <strong className="text-red-700">Anglais</strong> : pour renforcer ses compétences dans un environnement international et technologique.
        </li>
      </ul>

      {/* Preparation Details */}
      <p className="text-gray-300 text-lg leading-relaxed text-justify max-w-4xl mx-auto">
        Les étudiants de la Prépa ISEN bénéficient d'une <span className="text-red-700 font-semibold">préparation intensive</span> pour intégrer une école d'ingénieur de l'ISEN, avec <span className="text-red-700 font-semibold">150 heures supplémentaires</span> intégrées dans l'emploi du temps du BTS.
      </p>
    </div>
  );
}
