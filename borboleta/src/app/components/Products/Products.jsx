import styles from "./Products.module.css";

export default function Products({ comprar }) {
  const produtos = [
    {
      nome: "Copo de 300ml",
      preco: "R$ 13.90",
      imagem: "img/copos.jpg",
    },
    {
      nome: "Copo de 400ml",
      preco: "R$ 15.90",
      imagem: "img/copos.jpg",
    },
    {
      nome: "Copo de 500ml",
      preco: "R$ 18.00",
      imagem: "img/copos.jpg",
    },
  ];

  return (
    <>
      <section className={styles.linha}>
        <hr />
        NOSSOS PRODUTOS
      </section>

      <section className={styles.products}>
        {produtos.map((produto, index) => (
          <article key={index}>
            <img src={produto.imagem} alt={produto.nome} />

            <h3>{produto.nome}</h3>

            <hr />

            <p>{produto.preco}</p>

            <button onClick={() => comprar(produto.nome)}>
              COMPRAR
            </button>
          </article>
        ))}
      </section>
    </>
  );
}