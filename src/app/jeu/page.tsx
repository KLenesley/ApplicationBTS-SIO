import React from 'react';

export default function Jeu() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-white to-cyan-200">
            <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-lg p-8 w-full max-w-lg border border-gray-300">
                <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center tracking-tight drop-shadow-md">
                    Jeu
                </h1>
                <p className="text-gray-600 text-center mb-4">Bienvenue sur la page de jeu.</p>
            </div>
            <div>
                <p className ="text-purple-800">L'élèves répond à des questions sur les caractéristiques de la 
                    formation pour savoir s'il est apte à s'y intégrer.</p>
                <a href="/jeu/quiz"
                    className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-block">
                    Accéder au quiz
                </a>
            </div>
        </div>
    );
}