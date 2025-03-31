export default function Foot() {
    return (
        <footer className="bg-gray-800 text-white text-center relative py-7">
            <div className="container mx-auto flex flex-col justify-center items-center space-y-4">
                <p className="p-2 m-0">
                    <a href="/contact" className="hover:none text-cyan-200 transition-colors duration-300 hover:text-cyan-400">Contact</a>
                </p>
                <p className="p-2 m-0">
                    <a href="/mentions" className="hover:none text-cyan-200 transition-colors duration-300 hover:text-cyan-400">Mentions légales</a>
                </p>
                <p className="p-2 m-0">© 2025 - Tous droits réservés</p>
            </div>
        </footer>
    );
}