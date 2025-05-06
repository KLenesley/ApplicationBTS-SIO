export default function Foot() {
    return (
        <footer className="bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 text-white py-12 mt-auto w-full 
            shadow-[0_-10px_30px_-15px_rgba(8,145,178,0.2)] border-t border-cyan-800/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                        <a
                            href="/contact"
                            className="group relative px-8 py-3 rounded-lg bg-gradient-to-br from-cyan-800/20 to-cyan-900/30 
                            text-cyan-50 font-semibold tracking-wide shadow-lg backdrop-blur-sm
                            hover:from-cyan-700/30 hover:to-cyan-800/40 transition-all duration-300 ease-out 
                            border border-cyan-700/30 hover:border-cyan-600"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors">Contact</span>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-600/0 via-cyan-600/5 to-cyan-600/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="/mentions"
                            className="group relative px-8 py-3 rounded-lg bg-gradient-to-br from-cyan-800/20 to-cyan-900/30 
                            text-cyan-50 font-semibold tracking-wide shadow-lg backdrop-blur-sm
                            hover:from-cyan-700/30 hover:to-cyan-800/40 transition-all duration-300 ease-out 
                            border border-cyan-700/30 hover:border-cyan-600"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors">Mentions légales</span>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-600/0 via-cyan-600/5 to-cyan-600/0 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-cyan-300/70 text-sm tracking-wider font-light">
                            © 2025 - Tous droits réservés
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}