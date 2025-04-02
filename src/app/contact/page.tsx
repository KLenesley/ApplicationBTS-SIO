export default function Contact() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-gray-800">
            <header className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900">Contactez-nous</h1>
            <p className="text-lg text-gray-700 mt-4">
                Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
            </p>
            </header>

            <main className="w-full max-w-md">
            <form className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center">Formulaire de Contact</h2>
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nom
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre email"
                />
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre message"
                ></textarea>
                </div>
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                >
                Envoyer
                </button>
            </form>
            </main>
        </div>
    );
}