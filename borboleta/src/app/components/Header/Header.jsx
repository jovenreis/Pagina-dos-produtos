import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/img/logo.jpg" alt="logo" />

      <ul>
        <li>HOME</li>
        <li>PRODUTOS</li>
        <li>SOBRE</li>
        <li>CONTATO</li>
      </ul>
    </header>
  );
}