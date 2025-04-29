'use client';

import React, { useState } from 'react';

const questions = [
  {
    question: "Aimez-vous résoudre des problèmes logiques ou techniques ?",
    weight: 5,
  },
  {
    question: "Savez-vous travailler en autonomie et en équipe ?",
    weight: 5,
  },
  {
    question: "Êtes-vous à l'aise avec les mathématiques ?",
    weight: 5,
  },
  {
    question: "Êtes-vous patient(e) ?",
    weight: 5,
  },
  {
    question: "Aimerez-vous passer votre temps à résoudre des problèmes complexes ?",
    weight: 5,
  },
  {
    question: "Avez-vous une bonne capacité de concentration sur un projet de longue durée ?",
    weight: 5,
  },
  {
    question: "Vous sentez-vous à l'aise à l'idée de travailler derrière un écran pendant plusieurs heures consécutives ?",
    weight: 5,
  },
  {
    question: "Avez-vous des bases en informatique (cybersécurité, programmation, réseaux) ?",
    weight: 5,
  },
  {
    question: "Aimez-vous apprendre et utiliser de nouvelles technologies numériques ?",
    weight: 5,
  },
  {
    question: "Avez-vous des connaissances sur les réseaux et la sécurité informatique ?",
    weight: 5,
  },
  {
    question: "Seriez-vous intéressé(e) à travailler dans un domaine en constante évolution technologique ?",
    weight: 5,
  },
  {
    question: "Quelle est votre fréquence d'utilisation quotidienne de vos outils informatiques ?",
    weight: 5,
  },
  {
    question: "Parvenez-vous généralement à résoudre vous-même les problèmes informatiques courants ?",
    weight: 5,
  },
  {
    question: "Considérez-vous l'IA comme un outil potentiellement utile dans le développement logiciel ?",
    weight: 5,
  },
  {
    question: "Avez-vous déjà entendu parler d'hébergeurs de sites web ?",
    weight: 5,
  },
  {
    question: "Êtes-vous motivé(e) par l'idée de créer une application ou un jeu vidéo ?",
    weight: 5,
  },
  {
    question: "Envisagez-vous de créer votre propre entreprise en utilisant vos compétences informatiques (par exemple, développer un site web ou gérer l'infrastructure numérique) ?",
    weight: 5,
  },
  {
    question: "Vous imaginez-vous être capable de gérer des incidents de sécurité informatique à l'avenir ?",
    weight: 5,
  },
  {
    question: "Seriez-vous prêt(e) à vous former sur des systèmes d'exploitation autres que Windows (Linux, macOS) ?",
    weight: 5,
  },
  {
    question: "Avez-vous des notions sur le fonctionnement des bases de données ?",
    weight: 5,
  },
];

export default function Jeu() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number, value: number) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const calculateScore = () => {
    let total = 0;
    let possible = 0;
    answers.forEach((ans, i) => {
      if (ans !== null) {
        total += ans * questions[i].weight;
        possible += 5 * questions[i].weight; // 5 est la note maximale
      }
    });
    return Math.round((total / possible) * 100);
  };

  const getResultMessage = (score: number) => {
    if (score >= 80) return "Excellent ! Vous semblez avoir un profil très adapté pour le BTS SIO.";
    if (score >= 60) return "Bon profil ! Vous possédez de bons atouts pour réussir le BTS SIO.";
    if (score >= 40) return "Intéressant ! Vos bases sont correctes, mais un approfondissement serait bénéfique.";
    if (score >= 20) return "Quelques points à renforcer. La formation pourrait être exigeante, une préparation est conseillée.";
    if (score >= 0) return "Ne vous découragez pas ! Explorez les bases de l'informatique pour envisager sereinement cette formation.";
    else return "Veuillez répondre à toutes les questions.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-200 to-indigo-200 flex flex-col items-center justify-center py-12 sm:py-20 px-6">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-lg border border-gray-200 space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">
            Évaluez votre aptitude<br className="sm:hidden" /> pour le BTS SIO
          </h1>
          <p className="text-gray-600 mt-2">
            Répondez honnêtement aux questions pour obtenir une première évaluation.
          </p>
        </header>

        <main className="space-y-6">
          {questions.map((q, idx) => (
            <div key={idx} className="space-y-3">
              <p className="text-lg font-semibold text-blue-800">{q.question}</p>
              <div className="flex justify-around items-center">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAnswer(idx, val)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-200
                      ${answers[idx] === val
                        ? 'bg-blue-700 text-white scale-110 shadow-md'
                        : 'bg-blue-300 text-blue-700 hover:bg-blue-400 hover:text-white'
                      }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </main>

        <footer className="text-center mt-8">
          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
          >
            Afficher mon résultat
          </button>

          {submitted && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md shadow-inner">
              <p className="text-xl font-bold">Votre score : {calculateScore()}%</p>
              <p className="mt-2 text-gray-700">{getResultMessage(calculateScore())}</p>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}