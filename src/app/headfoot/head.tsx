import styles from './styles.module.css';

export default function Head() {
    let user;
    if (user == null) {
        user = "Connexion";
    }

  return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
            <li className={`${styles.li} ${styles.active}`}>
                <a href="/" className={styles.a}>Accueil</a>
            </li>
            <li className={styles.li}>
                <a href="/specialites" className={styles.a}>Specialités</a>
            </li>
            <li className={styles.li}>
                <a href="/certifications" className={styles.a}>Certifications</a>
            </li>
            <li className={styles.lili}>
                <a href={`/user?name=${user}`} className={styles.a}>{user}</a>
            </li>
        </ul>
    </nav>
  );
}