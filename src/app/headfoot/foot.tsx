export default function Foot() {
    return (
        <footer className="bg-blue-900 text-white text-center py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="p-2 m-0">
                    <a href="/contact" className="hover:underline text-yellow-300 transition-colors duration-300 hover:text-yellow-400">Contact</a>
                </p>
                <p className="p-2 m-0">
                    <a href="/mentions" className="hover:underline text-yellow-300 transition-colors duration-300 hover:text-yellow-400">Mentions légales</a>
                </p>
                <p className="p-2 m-0">© 2025 - Tous droits réservés</p>
            </div>
        </footer>
    );
}