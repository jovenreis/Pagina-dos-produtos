"use client";

import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const comprar = (tamanho) => {
    alert(`Sucesso! ${tamanho} foi adicionado ao carrinho 🛒`);
  };

  const validarEmail = () => {
    if (email.includes("@") && email.includes(".")) {
      alert("Email cadastrado com sucesso!");
      setEmail("");
    } else {
      alert("Digite um email válido.");
    }
  };

  const enviarDepoimento = () => {
    if (mensagem.trim() === "") {
      alert("Escreva um depoimento.");
    } else {
      alert("Avaliação enviada!");
      setMensagem("");
    }
  };

  return (
    <>
      <Header />

      <Hero />

      <Products comprar={comprar} />

      <About />

      <Testimonials
        mensagem={mensagem}
        setMensagem={setMensagem}
        enviarDepoimento={enviarDepoimento}
      />

      <Newsletter
        email={email}
        setEmail={setEmail}
        validarEmail={validarEmail}
      />

      <Footer />
    </>
  );
}