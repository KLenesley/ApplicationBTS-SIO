'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ConnexionForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const reason = searchParams.get('reason');
    if (reason === 'registered') {
      setInfoMessage('✅ Votre compte a été créé avec succès. Veuillez vous connecter.');
    } else if (reason === 'password-reset') {
      setInfoMessage('🔐 Votre mot de passe a été réinitialisé avec succès.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simule une requête de connexion
    setTimeout(() => {
      setLoading(false);
      if (username === 'admin' && password === 'password') {
        router.push('/home');
      } else {
        setError("❌ Nom d'utilisateur ou mot de passe incorrect.");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center tracking-tight drop-shadow-sm">
          Connexion
        </h1>

        {infoMessage && (
          <p className="text-green-600 text-sm mb-4 text-center font-medium">{infoMessage}</p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Entrez votre nom d'utilisateur"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg transition-all duration-300 hover:from-cyan-700 hover:to-blue-700 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600 space-y-2">
          <a href="/forgot-password" className="text-cyan-700 hover:underline block">
            Mot de passe oublié ?
          </a>
          <a href="/register" className="text-cyan-700 hover:underline block">
            Créer un compte
          </a>
          <a href="/presentation" className="text-cyan-700 hover:underline block">
            Retour à la présentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnexionForm;
