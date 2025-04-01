
import Presentation from '../app/presentation/page';
export default function Head() {
    let user;
    user = "";
    if (user == null || user == "") {
        user = "Connexion";
    }

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <ul className="flex items-center space-x-8">
                    <li className="text-white font-medium hover:text-green-400 transition duration-300">
                        <a href="/" className="block">Accueil</a>
                    </li>
                    <li className="text-white font-medium hover:text-green-400 transition duration-300">
                        <a href="/specialites" className="block">Specialités</a>
                    </li>
                    <li className="text-white font-medium hover:text-green-400 transition duration-300">
                        <a href="/presentation" className="block">Présentation</a>
                    </li>
                    <li className="relative group text-white font-medium hover:text-green-400 transition duration-300">
                        <a href="#" className="block">Autres</a>
                        <ul className="absolute left-0 top-full hidden bg-gray-800 rounded-lg shadow-md group-hover:block">
                            <li>
                                <a href="/certifications" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-t-lg transition duration-300">
                                    Certifications
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
                                    Test2
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-b-lg transition duration-300">
                                    Test3
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="ml-auto">
                    <a href={`/login?name=${user}`} className="px-5 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-500 shadow-md transition duration-300">
                        {user}
                    </a>
                </div>
            </nav>
        </header>
    );
}