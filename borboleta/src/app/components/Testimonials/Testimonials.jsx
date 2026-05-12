import styles from "./Testimonials.module.css";

export default function Testimonials({
  mensagem,
  setMensagem,
  enviarDepoimento,
}) {
  return (
    <section className={styles.testimonials}>
      <h2>DEPOIMENTOS</h2>

      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

      <button onClick={enviarDepoimento}>
        Enviar avaliação
      </button>
    </section>
  );
}