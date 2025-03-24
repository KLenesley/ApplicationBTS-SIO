export default function Head() {
    let user;
    if (user == null) {
        user = "Connexion";
    }

    return (
        <header className="bg-gray-800">
            <nav className="bg-gray-800 relative z-10">
                <ul className="list-none m-0 p-0 flex items-center justify-between">
                    <li className="px-4 py-2 text-white bg-green-600">
                        <a href="/" className="block text-center">Accueil</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <a href="/specialites" className="block text-white text-center">Specialités</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                        <a href="/certifications" className="block text-white text-center">Certifications</a>
                    </li>
                    <li className="relative group px-4 py-2 hover:bg-gray-700">
                        <a href="#" className="block text-white text-center">DropDown</a>
                        <ul className="absolute left-0 top-full hidden bg-gray-500 list-none p-0 shadow-lg group-hover:block">
                            <li><a href="/test1" className="block px-4 py-2 text-white hover:bg-black">Test1</a></li>
                            <li><a href="/test2" className="block px-4 py-2 text-white hover:bg-black">Test2</a></li>
                            <li><a href="/test3" className="block px-4 py-2 text-white hover:bg-black">Test3</a></li>
                        </ul>
                    </li>
                    <li className="ml-auto px-4 py-2 hover:bg-gray-700">
                        <a href={`/user?name=${user}`} className="block text-white text-center">{user}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}