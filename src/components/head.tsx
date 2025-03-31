
import Certifications from './../app/certifications/page';
export default function Head() {
    let user;
    user = "";
    if (user == null || user == "") {
        user = "Connexion";
    }

    return (
        <header className="bg-gray-900 shadow-md">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <ul className="flex items-center space-x-6">
                    <li className="text-white font-semibold hover:text-green-400 transition-colors">
                        <a href="/" className="block">Accueil</a>
                    </li>
                    <li className="text-white font-semibold hover:text-green-400 transition-colors">
                        <a href="/specialites" className="block">Specialités</a>
                    </li>
                    <li className="text-white font-semibold hover:text-green-400 transition-colors">
                        <a href="/certifications" className="block">Certifications</a>
                    </li>
                    <li className="relative group text-white font-semibold hover:text-green-400 transition-colors">
                        <a href="#" className="block">Autres</a>
                        <ul className="absolute left-0 top-full hidden bg-gray-800 rounded-md shadow-lg group-hover:block">
                            <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-t-md">Certifications</a></li>
                            <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Test2</a></li>
                            <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-b-md">Test3</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="ml-auto">
                    <a href={`/user?name=${user}`} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500 transition-colors">
                        {user}
                    </a>
                </div>
            </nav>
        </header>
    );
}