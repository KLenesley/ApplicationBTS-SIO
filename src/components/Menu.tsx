import styles from "./page.module.css";

export default function Menu() {

    return (
        <div className={styles.Menu}>
            <a href="http://localhost:3000/">Accueil </a> 
            <a href="http://localhost:3000/specialites">Spécialités </a> 
            <a href="http://localhost:3000/certifications">Certification</a>
        </div>
    );

}