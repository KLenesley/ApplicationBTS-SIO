import styles from "./page.module.css";

export default function Menu() {

    return (
        <div className={styles.Menu} >
            <a href="http://localhost:3000/" className={styles.lien}>Accueil</a> 
            <a href="http://localhost:3000/presentation" className={styles.lien}>Présentation</a> 
            <a href="http://localhost:3000/specialites" className={styles.lien}>Spécialités</a> 
            <a href="http://localhost:3000/prepa" className={styles.lien}>Prépa ISEN</a> 
            <a href="http://localhost:3000/certifications" className={styles.lien}>Certification</a>
            <a href="http://localhost:3000/quiz" className={styles.lien}>Quiz</a>
        </div>
    );

}