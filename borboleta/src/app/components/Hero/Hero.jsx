import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1>AÇAÍ DELICIOSO E REFRESCANTE!</h1>

        <p>
          Nosso açaí é cremoso, refrescante e cheio de sabor.
        </p>

        <button>Menu Completo</button>
      </div>

      <img src="img/barca.png" alt="barca" />
    </section>
  );
}