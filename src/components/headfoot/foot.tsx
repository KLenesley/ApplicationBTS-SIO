export default function Foot() {
    return (
        <footer className="bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 text-white py-10 mt-auto w-full shadow-2xl border-t border-gray-300">
            <div className="w-full max-w-5xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6">
                        <a
                            href="https://ndlpavranches.fr/contact/"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold shadow-lg border border-cyan-800 transition-all duration-300 transform hover:scale-105"
                        >
                            Contact
                        </a>
                        <a
                            href="/mentions"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold shadow-lg border border-cyan-800 transition-all duration-300 transform hover:scale-105"
                        >
                            Mentions légales
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-cyan-300 text-sm tracking-wider font-light">
                            © 2025 - Tous droits réservés
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
