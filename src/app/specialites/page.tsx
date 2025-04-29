import styles from './styles.module.css'

export default function Specialite() {
    
    return (
        <div>
            <h1 className="text-blue-800">Spécialités du BTS SIO</h1>
            Il y a 3 spécialités en BTS SIO : <br/><br/>
            
            SLAM : <br/><br/>
            <p>C'est une spécialité où l'on apprend la programmation dans différents languages comme 
                C#, HTML, PHP, javascript, SQL.</p><br/><br/>
            
            SISR : <br/><br/>
            <p>C'est une spécialité où l'on apprend l'infrastructure et l'administration d'un réseau.</p>
            <br/><br/>
            
            cybersécurité : <br/><br/>
            <p>C'est une spécialité où l'on apprend a sécurisé un réseau et comment marche 
                les attaques informatiques.</p><br/><br/>
        </div>
    );

}