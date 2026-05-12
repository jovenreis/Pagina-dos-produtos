import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Mais vendidos</h3>

        <a href="">Barca de açaí 1L</a>
        <a href="">Roleta de 1L</a>
      </div>

      <div>
        <h3>Informações</h3>

        <p>Sobre</p>
        <p>Política de privacidade</p>
      </div>

      <div>
        <h3>Redes sociais</h3>

        <p>@Acai-itaki</p>
      </div>
    </footer>
  );
}