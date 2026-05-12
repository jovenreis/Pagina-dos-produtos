import styles from "./Newsletter.module.css";

export default function Newsletter({
  email,
  setEmail,
  validarEmail,
}) {
  return (
    <section className={styles.newsletter}>
      <h2>RECEBA NOSSAS NOVIDADES</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={validarEmail}>
        Receber cupons
      </button>
    </section>
  );
}