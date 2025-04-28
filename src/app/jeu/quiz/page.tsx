'use client';

import React, { useState } from 'react';

const questions = [
    {
        question: "Aimez-vous résoudre des problèmes logiques ou techniques ?",
        weight: 20,
    },
    {
        question: "Savez-vous travailler en autonomie et en équipe ?",
        weight: 15,
    },
    {
        question: "Êtes-vous à l'aise avec l'algèbre?",
        weight: 10,
    },
    {
        question: "Êtes-vous patient(e) ?",
        weight: 10,
    },
    {
        question: "Aimerez-vous passer votre temps à résoudre des problèmes ?",
        weight: 0,
    },
    {
        question: "Avez-vous une bonne concentration sur un projet ?",
        weight: 10,
    },
    {
        question: "Vous sentez-vous à l'aise à l'idée de travailler derrière un écran pendant plusieurs heures ?",
        weight: 10,
    },
    {
        question: "Avez-vous des bases en informatique (cybersécurité, programmation, réseaux) ?",
        weight: 20,
    },
    {
        question: "Aimez-vous apprendre de nouvelles technologies numériques et les utiliser ?",
        weight: 15,
    },
    {
        question: "Avez-vous des connaissances sur le réseau et la sécurité informatique ?",
        weight: 5,
    },
    {
        question: "Aimerez-vous travailler dans un domaine en constante évolution ?",
        weight: 5,
    },
    {
        question: "Quelle est votre fréquence d'utilisation de vos outils informatiques ?",
        weight: 5,
    },
    {
        question: "Arrivez-vous à régler les problèmes informatiques par vous-même ?",
        weight: 5,
    },
    {
        question: "Considérez-vous l'IA comme un outil utile dans le développement logiciel ?",
        weight: 5,
    },
    {
        question: "Connaissez-vous des hébergeurs de sites web ?",
        weight: 0,
    },
    {
        question: "Votre envie de créer une application ou un jeu vidéo.",
        weight: 0,
    },
    {
        question: "Envisagez-vous de créer votre propre entreprise grâce aux compétences en informatique, (ex : développer le site web de votre société ou en gérer l'infrastructure numérique) ?",
        weight: 0,
    },
    {
        question: "Pensez-vous à l'avenir à gérer des attaques ?",
        weight: 0,
    },
    {
        question: "Êtes-vous prêt à vous former sur des systèmes d'exploitation autre que Windows ?",
        weight: 0,
    },
    {
        question: "Avez-vous des connaissances sur les bases de données ?",
        weight: 0,
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
        if (score >= 80) return "Tu es apte à intégrer le BTS.";
        if (score >= 60) return "Ton score est correct, tu as de bons atouts pour le BTS.";
        if (score >= 40) return "Ce n'est pas mauvais. Tes connaissances sont améliorable.";
        if (score >= 20) return "La formation te serai difficile, révise tes points faibles.";
        if (score >= 0) return "Ne te décourage pas.";
        else return "Aucune réponse donnée.";
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-white to-cyan-200">
            <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-lg p-8 w-full max-w-xl border border-gray-300 space-y-6">
                <h1 className="text-4xl font-extrabold text-blue-900 text-center tracking-tight drop-shadow-md">
                    Êtes-vous prêt<br></br> pour le BTS SIO ?
                </h1>
                <p className="text-gray-600 text-center mb-4">
                    Répondez à ces questions pour <br></br>évaluer ton aptitude à intégrer le BTS SIO.
                </p>
                {questions.map((q, idx) => (
                    <div key={idx} className="space-y-2">
                        <p className="text-lg font-medium text-blue-800">{q.question}</p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4, 5].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => handleAnswer(idx, val)}
                                    className={`px-3 py-1 rounded-full text-white font-semibold transition ${answers[idx] === val
                                            ? 'bg-blue-700 scale-105'
                                            : 'bg-blue-400 hover:bg-blue-600'
                                        }`}
                                >
                                    {val}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => setSubmitted(true)}
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition"
                >
                    Voir mon score
                </button>

                {submitted && (
                    <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold">Score : {calculateScore()}%</p>
                        <p className="mt-2">{getResultMessage(calculateScore())}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
