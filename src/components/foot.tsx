export default function Foot() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 text-center py-12">
            <div className="container mx-auto flex flex-col justify-center items-center space-y-8">
            <div className="flex space-x-10">
                <a href="/contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-semibold tracking-wide border-b-2 border-transparent hover:border-white">
                Contact
                </a>
                <a href="/mentions" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-semibold tracking-wide border-b-2 border-transparent hover:border-white">
                Mentions légales
                </a>
            </div>
            <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                <i className="fab fa-instagram"></i>
                </a>
            </div>
            <p className="text-xs text-gray-500 tracking-wide">© 2025 - Tous droits réservés</p>
            </div>
        </footer>
    );
}