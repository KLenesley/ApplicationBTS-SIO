export default function Contact() {
    return (
        <div>
            <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <header className="text-center">
                    <h1 className="text-4xl font-bold">Contactez-nous</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
                    </p>
                </header>

                <main className="w-full max-w-3xl">
                    <form className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Votre email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Votre message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md opacity-50 cursor-not-allowed"
                            disabled
                        >
                            Envoyer
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
}