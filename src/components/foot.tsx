export default function Foot() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 text-center py-12">
            <div className="container mx-auto flex flex-col justify-center items-center space-y-8">
            <nav className="flex flex-wrap justify-center gap-10">
                <a 
                    href="/contact" 
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-semibold tracking-wide border-b-2 border-transparent hover:border-white"
                    aria-label="Contact"
                >
                    Contact
                </a>
                <a 
                    href="/mentions" 
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-semibold tracking-wide border-b-2 border-transparent hover:border-white"
                    aria-label="Mentions légales"
                >
                    Mentions légales
                </a>
            </nav>
            <p className="text-sm text-gray-400 tracking-wide">© 2025 - Tous droits réservés</p>
            </div>
        </footer>
    );
}