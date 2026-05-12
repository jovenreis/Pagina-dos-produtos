import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>SOBRE O AÇAÍ</h2>

      <hr />

      <p>
        Nosso açaí é cremoso, refrescante e cheio de sabor.
      </p>

      <button>Saiba mais</button>
    </section>
  );
}