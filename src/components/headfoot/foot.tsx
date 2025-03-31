export default function Foot() {
    return (
        <footer className="bg-[#2A3B7E] text-[#E1D7B7] text-center relative py-4">
            <div className="container mx-auto flex flex-col justify-center items-center space-y-2">
                <p className="p-1 m-0"><a href="/contact" className="hover:none text-[#7C93C3] transition-colors duration-300 hover:text-[#55679C]">Contact</a></p>
                <p className="p-1 m-0"><a href="/mentions" className="hover:none text-[#7C93C3] transition-colors duration-300 hover:text-[#55679C]">Mentions légales</a></p>
                <p className="p-1 m-0">© 2025 - Tous droits réservés</p>
            </div>
        </footer>
    );
}