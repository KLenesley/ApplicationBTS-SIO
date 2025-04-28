'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function MdpOublie() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simule un envoi de mail (tu peux ici faire appel à une vraie API)
    setTimeout(() => {
      setLoading(false);

      if (email.includes('@')) {
        setSent(true);
        setTimeout(() => {
          router.push('/user?reason=password-reset');
        }, 2000); // Redirige après 2 secondes
      } else {
        setError('Adresse e-mail invalide.');
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Mot de passe oublié
        </h1>

        {sent ? (
          <p className="text-green-600 text-center font-medium text-sm">
            ✅ Un e-mail de réinitialisation a été envoyé à <strong>{email}</strong>. Redirection...
          </p>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800"
                placeholder="Entrez votre adresse e-mail"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg transition-all duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-cyan-700 hover:to-blue-700'
              }`}
            >
              {loading ? 'Envoi en cours...' : 'Réinitialiser le mot de passe'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
