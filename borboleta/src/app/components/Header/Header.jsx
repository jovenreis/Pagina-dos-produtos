import styles from "./Header.module.css";
import Link from "next/link"; 

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="img/logo.jpg" alt="logo" />

      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/#produtos">PRODUTOS</Link> 
        </li>
        <li>
          <Link href="/#sobre">SOBRE</Link>
        </li>
        <li>
          <Link href="/contato">CONTATO</Link>
        </li>
      </ul>
    </header>
  );
}