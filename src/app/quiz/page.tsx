export default function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen p-6 sm:p-16 bg-gradient-to-r from-blue-50 to-blue-100 font-[family-name:var(--font-geist-sans)]">
            <main className="w-full max-w-4xl text-center shadow-lg bg-white rounded-xl p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-blue-700 sm:text-4xl mb-6">
                Quiz : Suis-je fait pour le BTS SIO ?
            </h1>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto sm:text-lg leading-relaxed">
                Bienvenue sur le quiz qui vous aidera à découvrir si le BTS SIO est fait pour vous. Répondez aux questions pour en savoir plus sur votre compatibilité avec ce cursus.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
                Commencer le Quiz
            </button>
            </main>
        </div>
    );
}