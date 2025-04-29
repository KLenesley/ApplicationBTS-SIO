import styles from "./page.module.css";

export default function Menu() {

    return (
        <div className={styles.Menu} >
            <a href="http://localhost:3000/" className={styles.lien}>Accueil</a> 
            <a href="http://localhost:3000/specialites" className={styles.lien}>Spécialités</a> 
            <a href="http://localhost:3000/certifications" className={styles.lien}>Certification</a>
            <a href="http://localhost:3000/jeu" className={styles.lien}>Jeu</a>
        </div>
    );

}