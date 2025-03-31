export default function Head() {
    let user;
    user = "";
    if (user == null || user == "") {
        user = "Connexion";
    }

    return (
        <header className="bg-[#2A3B7E]">
            <nav className="bg-[#2A3B7E] relative z-10">
                <ul className="list-none m-0 p-0 flex items-center justify-between">
                    <li className="px-4 py-2 text-[#E1D7B7] bg-[#55679C]">
                        <a href="/" className="block text-center">Accueil</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#7C93C3]">
                        <a href="/specialites" className="block text-[#E1D7B7] text-center">Specialités</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#7C93C3]">
                        <a href="/certifications" className="block text-[#E1D7B7] text-center">Certifications</a>
                    </li>
                    <li className="relative group px-4 py-2 hover:bg-[#7C93C3]">
                        <a href="#" className="block text-[#E1D7B7] text-center">DropDown</a>
                        <ul className="absolute left-0 top-full hidden bg-[#55679C] list-none p-0 shadow-lg group-hover:block">
                            <li><a href="#" className="block px-4 py-2 text-[#E1D7B7] hover:bg-[#1E2A5E]">Test1</a></li>
                            <li><a href="#" className="block px-4 py-2 text-[#E1D7B7] hover:bg-[#1E2A5E]">Test2</a></li>
                            <li><a href="#" className="block px-4 py-2 text-[#E1D7B7] hover:bg-[#1E2A5E]">Test3</a></li>
                        </ul>
                    </li>
                    <li className="ml-auto px-4 py-2 hover:bg-[#7C93C3]">
                        <a href={`/user?name=${user}`} className="block text-[#E1D7B7] text-center">{user}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}