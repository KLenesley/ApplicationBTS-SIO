import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image
          className={styles.logo}
          src="/ndlp.png"
          alt="NDLP"
          width={180}
          height={180}
          priority
        />
        <h2>Bienvenue</h2>
       Pour avoir des informations sur le BTS SIO ou faire un quiz pour savoir si tu es fait pour le BTS SIO.

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="http://localhost:3000/presentation"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Présentation
          </a>
          <a
            href="http://localhost:3000/quiz"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Quiz
          </a>
        </div>
      </main>
        <footer className={styles.footer}>
        <a
          href="http://localhost:3000/specialites"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Les spécialités
        </a>
        <a
          href="http://localhost:3000/prepa"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          La prépa
        </a>
        <a
          href="http://localhost:3000/certifications"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Les certifications
        </a>
      </footer>
    </div>
  );
}
