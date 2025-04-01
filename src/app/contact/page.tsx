export default function Contact() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-gray-800">
            <header className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900">Contactez-nous</h1>
            <p className="text-lg text-gray-700 mt-4">
                Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter.
            </p>
            </header>

            <main className="w-full max-w-3xl">
            <section className="bg-gray-50 shadow-md rounded-xl p-8 border border-gray-300">
                <h2 className="text-2xl font-semibold mb-6 text-center">Formulaire de Contact</h2>
                <form>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                    Nom
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3"
                    placeholder="Votre nom"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3"
                    placeholder="Votre email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800">
                    Message
                    </label>
                    <textarea
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3"
                    placeholder="Votre message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                >
                    Envoyer
                </button>
                </form>
            </section>
            </main>
        </div>
    );
}