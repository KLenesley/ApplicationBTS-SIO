import React from 'react';

// Certifications

const CertificationsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 font-sans text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">Certifications du BTS SIO</h1>
            <p className="mb-6 text-justify">
            Le BTS Services Informatiques aux Organisations (SIO) propose plusieurs certifications qui permettent aux étudiants de valider leurs compétences techniques et professionnelles. Ces certifications sont reconnues dans le domaine de l'informatique et valorisent le parcours des étudiants.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Objectifs des Certifications</h2>
            <p className="mb-4">
            Les certifications visent à :
            </p>
            <ul className="list-disc list-inside mb-6">
            <li>Valider les compétences techniques acquises durant la formation.</li>
            <li>Attester de la maîtrise des outils et technologies utilisés en entreprise.</li>
            <li>Renforcer l'employabilité des étudiants sur le marché du travail.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Épreuve Finale</h2>
            <p className="mb-4">
            Lors de l'examen final, les étudiants doivent démontrer leurs compétences à travers des épreuves pratiques et théoriques. Ces épreuves incluent :
            </p>
            <ul className="list-disc list-inside mb-6">
            <li>La réalisation d'un projet informatique en lien avec les certifications.</li>
            <li>Une présentation orale devant un jury professionnel.</li>
            <li>Des tests techniques pour valider les connaissances spécifiques.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Exemples de Certifications</h2>
            <p className="mb-4">Voici quelques exemples de certifications que les étudiants peuvent obtenir :</p>
            <ul className="list-disc list-inside mb-6">
            <li>Certification Cisco CCNA (réseaux informatiques).</li>
            <li>Certification Microsoft (développement et administration).</li>
            <li>Certification ITIL (gestion des services informatiques).</li>
            <li>Certification en cybersécurité (type CEH ou équivalent).</li>
            </ul>

            <p className="text-justify">
            Ces certifications permettent aux diplômés du BTS SIO de se démarquer et de répondre aux attentes des recruteurs dans le domaine de l'informatique.
            </p>
        </div>
    );
};

export default CertificationsPage;