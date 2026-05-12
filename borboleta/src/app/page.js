import { useState } from "react";
import styles from "./acai-itaki.module.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const comprar = (tamanho) => {
    alert(`Sucesso! ${tamanho} foi adicionado ao seu carrinho 🛒`);
  };

  const validarEmail = () => {
    if (email.includes("@") && email.includes(".")) {
      alert("Email cadastrado com sucesso! Prepare-se para os descontos. 🍦");
      setEmail("");
    } else {
      alert("Por favor, digite um email válido.");
    }
  };

  const enviarDepoimento = () => {
    const textoLimpo = mensagem.trim();

    if (textoLimpo === "") {
      alert("Opa! Escreva um depoimento antes de enviar.");
    } else {
      alert("Avaliação enviada com sucesso! Obrigado pelo carinho. ❤️");
      console.log("Depoimento recebido:", textoLimpo);
      setMensagem("");
    }
  };

  return (
    <div>
      <header>
        <div className={styles.logo}>
          <img
            src="img/logo.jpg"
            className={styles.img_logo}
            alt="logo"
          />
        </div>

        <ul className={styles.menu}>
          <li>HOME</li>
          <li>PRODUTOS</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>
      </header>

      <hr />

      <section className={styles.principal}>
        <h3>AÇAÍ DELICIOSO E REFRESCANTE!</h3>

        <h5>
          Nosso açaí é cremoso, refrescante e cheio de sabor, feito com
          ingredientes selecionados para garantir qualidade em cada colher.
        </h5>

        <button>Menu Completo</button>

        <img src="img/barca.png" alt="barca" />
      </section>

      <section className={styles.linha}>
        <hr />
        NOSSOS PRODUTOS
      </section>

      <section className={styles.copos}>
        <article>
          <img
            src="img/copo300ml.png"
            className={styles.img_copo}
            alt="copo 300ml"
          />

          <li>Copo de 300ml</li>

          <hr />

          <li>R$ 13.90</li>

          <button onClick={() => comprar("Copo de 300ml")}>
            COMPRAR
          </button>
        </article>

        <article>
          <img
            src="img/copo400ml.png"
            className={styles.img_copo}
            alt="copo 400ml"
          />

          <li>Copo de 400ml</li>

          <hr />

          <li>R$ 15.90</li>

          <button onClick={() => comprar("Copo de 400ml")}>
            COMPRAR
          </button>
        </article>

        <article>
          <img
            src="img/copo500ml.png"
            className={styles.img_copo}
            alt="copo 500ml"
          />

          <li>Copo de 500ml</li>

          <hr />

          <li>R$ 18.00</li>

          <button onClick={() => comprar("Copo de 500ml")}>
            COMPRAR
          </button>
        </article>
      </section>

      <article className={styles.sobre}>
        <h4>SOBRE O AÇAÍ</h4>

        <hr />

        <p>
          Nosso açaí é cremoso, refrescante e cheio de sabor, preparado com
          ingredientes selecionados para garantir a melhor qualidade.
        </p>

        <button>Saiba mais</button>
      </article>

      <article className={styles.depoimentos}>
        <h4>DEPOIMENTOS DOS CLIENTES</h4>

        <label>AVALIAÇÕES:</label>

        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />

        <button onClick={enviarDepoimento}>
          Enviar avaliação
        </button>
      </article>

      <article className={styles.premium}>
        <h4>RECEBA NOSSAS NOVIDADES!</h4>

        <h6>
          Assine nosso plano premium e receba descontos especiais
        </h6>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && validarEmail()
          }
        />

        <button onClick={validarEmail}>
          Receber cupons...
        </button>
      </article>

      <footer>
        <div className={styles.produtos}>
          <h4>Mais vendidos</h4>

          <hr />

          <a href="">Barca de açaí 1L</a>
          <a href="">Roleta de 1L</a>
          <a href="">Copo de 400ml</a>
        </div>

        <div className={styles.info}>
          <h4>Informações</h4>

          <h6>Sobre</h6>
          <h6>Política de privacidade</h6>
        </div>

        <div className={styles.redes}>
          <h4>Redes sociais</h4>

          <h6>@Acai-itaki</h6>
          <h6>11 94349-8492</h6>
          <h6>acaiitaki@gmail.com</h6>
        </div>
      </footer>
    </div>
  );
}

