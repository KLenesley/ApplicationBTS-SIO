export default function Foot() {
    return (
        <footer className="bg-cyan-950 text-white py-12 mt-auto w-full shadow-md border-t border-cyan-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                        <a
                            href="/contact"
                            className="px-8 py-3 rounded-lg bg-cyan-800 text-white font-semibold tracking-wide shadow 
                            hover:bg-cyan-700 transition-all duration-300 ease-out border border-cyan-700"
                        >
                            Contact
                        </a>
                        <a
                            href="/mentions"
                            className="px-8 py-3 rounded-lg bg-cyan-800 text-white font-semibold tracking-wide shadow 
                            hover:bg-cyan-700 transition-all duration-300 ease-out border border-cyan-700"
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
