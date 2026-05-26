"use client";

import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Link from "next/link";

export default function Products() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/api/produtos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar os produtos da API");
        }
        return res.json();
      })
      .then((data) => {
        setProdutos(data);
        setCarregando(false);
      })
      .catch((err) => {
        console.error(err);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p style={{ textAlign: "center", padding: "20px" }}>Carregando cardápio...</p>;
  }

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

            <p>
              {produto.precoBase.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <Link href={`/produtos/${produto.id}`} style={{ textDecoration: 'none', width: '100%' }}>
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