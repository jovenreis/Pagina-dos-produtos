import { useState } from "react";
import "./acai-itaki.css";

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
        <div className="logo">
          <img src="img/logo.jpg" id="img_logo" alt="logo" />
        </div>
        <ul className="menu">
          <li>HOME</li>
          <li>PRODUTOS</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>
      </header>

      <hr />

      <section id="principal">
        <h3>AÇAÍ DELICIOSO E REFRESCANTE!</h3>
        <h5>
          Nosso açaí é cremoso, refrescante e cheio de sabor, feito com
          ingredientes selecionados para garantir qualidade em cada colher.
        </h5>
        <button>Menu Completo</button>
        <img src="img/barca.png" alt="barca" />
      </section>

      <section id="linha">
        <hr />
        NOSSOS PRODUTOS
      </section>

      <section id="copos">
        <article>
          <img src="img/copo300ml.png" className="img_copo" alt="" />
          <li>Copo de 300ml</li>
          <hr />
          <li>R$ 13.90</li>
          <button onClick={() => comprar("Copo de 300ml")}>
            COMPRAR
          </button>
        </article>

        <article>
          <img src="img/copo400ml.png" className="img_copo" alt="" />
          <li>Copo de 400ml</li>
          <hr />
          <li>R$ 15.90</li>
          <button onClick={() => comprar("Copo de 400ml")}>
            COMPRAR
          </button>
        </article>

        <article>
          <img src="img/copo500ml.png" className="img_copo" alt="" />
          <li>Copo de 500ml</li>
          <hr />
          <li>R$18.00</li>
          <button onClick={() => comprar("Copo de 500ml")}>
            COMPRAR
          </button>
        </article>
      </section>

      <article id="sobre">
        <h4>SOBRE O AÇAÍ</h4>
        <hr />
        <p>
          Nosso açaí é cremoso, refrescante e cheio de sabor, preparado com
          ingredientes selecionados para garantir a melhor qualidade.
        </p>
        <button>Saiba mais</button>
      </article>

      <article id="depoimentos">
        <h4>DEPOIMENTOS DOS CLIENTES</h4>
        <label>AVALIAÇÕES: </label>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button onClick={enviarDepoimento}>
          Enviar avaliação
        </button>
      </article>

      <article id="premium">
        <h4>RECEBA NOSSAS NOVIDADES!</h4>
        <h6>Assine nosso plano premium e receba desconto especiais</h6>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && validarEmail()}
        />

        <button onClick={validarEmail}>
          Receber cupons...
        </button>
      </article>

      <footer>
        <div id="produtos">
          <h4>Mais vendidos</h4>
          <hr />
          <a href="">Barca de açai 1L</a>
          <a href="">Roleta de 1L</a>
          <a href="">Copo de 400ml</a>
        </div>

        <div id="info">
          <h4>Informações</h4>
          <h6>sobre</h6>
          <h6>politica de privacidade</h6>
        </div>

        <div id="Redes">
          <h4>Redes sociais</h4>
          <h6>@Acai-itaki</h6>
          <h6>11 94349-8492</h6>
          <h6>acaiitaki@gmail.com</h6>
        </div>
      </footer>
    </div>
  );
}