import styles from "./Products.module.css";
import Link from "next/link"; 

export default function Products() {
  const produtos = [
    {
      nome: "Copo de 300ml",
      preco: "R$ 13.90",
      imagem: "img/copo300ml.png",
      slug: "copo-300ml", 
    },
    {
      nome: "Copo de 400ml",
      preco: "R$ 15.90",
      imagem: "img/copo400ml.png",
      slug: "copo-400ml", 
    },
    {
      nome: "Copo de 500ml",
      preco: "R$ 18.00",
      imagem: "img/copo500ml.png",
      slug: "copo-500ml", 
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

            <Link href={`/produtos/${produto.slug}`} style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{ width: '100%' }}>
                MONTAR COPO
              </button>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}