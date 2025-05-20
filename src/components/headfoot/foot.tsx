export default function Foot() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-8 mt-auto w-full shadow-lg">
            <div className="w-full max-w-5xl mx-auto px-6 text-center">
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex gap-6">
                        <a
                            href="https://ndlpavranches.fr/contact/"
                            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            Contact
                        </a>
                        <a
                            href="/mentions"
                            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            Mentions légales
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-blue-300 text-sm tracking-wider font-light">
                            © 2025 - Tous droits réservés
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
