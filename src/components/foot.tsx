export default function Foot() {
    return (
        <footer className="bg-gray-900 text-gray-300 text-center py-8">
            <div className="container mx-auto flex flex-col justify-center items-center space-y-6">
            <div className="flex space-x-6">
                <a href="/contact" className="text-cyan-300 hover:text-cyan-500 transition-colors duration-300">Contact</a>
                <a href="/mentions" className="text-cyan-300 hover:text-cyan-500 transition-colors duration-300">Mentions légales</a>
            </div>
            <p className="text-sm">© 2025 - Tous droits réservés</p>
            </div>
        </footer>
    );
}