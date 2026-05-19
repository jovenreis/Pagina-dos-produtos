'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 

export default function MontarCopo() {
  const params = useParams();
  const slug = params?.id; // Pega o 'copo-300ml', 'copo-400ml' ou 'copo-500ml' da URL

  const configuracaoCopos = {
    'copo-300ml': { nome: 'Copo de 300ml', precoBase: 13.90 },
    'copo-400ml': { nome: 'Copo de 400ml', precoBase: 15.90 },
    'copo-500ml': { nome: 'Copo de 500ml', precoBase: 18.00 },
  };

  const cardapioOpcoes = {
    cremes: ["Creme de Ninho", "Creme de Cupuaçu", "Creme de Pitaya", "Sem Creme"],
    acompanhamentos: ["Granola", "Leite em Pó", "Paçoca", "Ovomaltine"],
    caldas: ["Leite Condensado", "Calda de Morango", "Mel", "Nutella (+ R$ 3,00)"],
    frutas: ["Morango", "Banana", "Kiwi", "Manga"]
  };

  const copoAtual = configuracaoCopos[slug] || { nome: 'Copo Personalizado', precoBase: 15.00 };

  const [cremeEscolhido, setCremeEscolhido] = useState('');
  const [caldaEscolhida, setCaldaEscolhida] = useState('');
  const [frutasEscolhidas, setFrutasEscolhidas] = useState([]);
  const [adicionaisEscolhidos, setAdicionaisEscolhidos] = useState([]);

  const gerenciarSelecao = (item, lista, setLista) => {
    if (lista.includes(item)) {
      setLista(lista.filter(i => i !== item));
    } else {
      setLista([...lista, item]);
    }
  };

  const precoTotal = copoAtual.precoBase + (caldaEscolhida === "Nutella (+ R$ 3,00)" ? 3.00 : 0);

  const finalizarPedido = () => {
    if (!cremeEscolhido || !caldaEscolhida) {
      alert("Por favor, selecione pelo menos um creme e uma calda para o seu açaí!");
      return;
    }

    const resumo = `
      🍧 *NOVO PEDIDO - AÇAÍ ITAKI* 🍧
      ---------------------------------
      *Tamanho:* ${copoAtual.nome}
      *Creme:* ${cremeEscolhido}
      *Calda:* ${caldaEscolhida}
      *Frutas:* ${frutasEscolhidas.join(', ') || 'Nenhuma'}
      *Acompanhamentos:* ${adicionaisEscolhidos.join(', ') || 'Nenhum'}
      ---------------------------------
      *Preço Final:* R$ ${precoTotal.toFixed(2)}
    `;

    const numeroWhats = "5511999999999"; 
    window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(resumo)}`, '_blank');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', color: '#333' }}>
      
      <a href="/" style={{ color: '#6b21a8', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
        ← Voltar para a Vitrine
      </a>

      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#4c1d95', margin: '0 0 10px 0' }}>Monte seu {copoAtual.nome}</h1>
        <p style={{ color: '#6b21a8', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>
          Preço Base: R$ {copoAtual.precoBase.toFixed(2)}
        </p>
      </header>

      <section style={styles.secao}>
        <h3 style={styles.tituloSecao}>1. Escolha um Creme:</h3>
        {cardapioOpcoes.cremes.map((creme) => (
          <label key={creme} style={styles.opcao}>
            <input type="radio" name="creme" value={creme} checked={cremeEscolhido === creme} onChange={(e) => setCremeEscolhido(e.target.value)} style={styles.input} />
            {creme}
          </label>
        ))}
      </section>

      <section style={styles.secao}>
        <h3 style={styles.tituloSecao}>2. Escolha uma Calda:</h3>
        {cardapioOpcoes.caldas.map((calda) => (
          <label key={calda} style={styles.opcao}>
            <input type="radio" name="calda" value={calda} checked={caldaEscolhida === calda} onChange={(e) => setCaldaEscolhida(e.target.value)} style={styles.input} />
            {calda}
          </label>
        ))}
      </section>

      <section style={styles.secao}>
        <h3 style={styles.tituloSecao}>3. Escolha as Frutas (Opcional):</h3>
        {cardapioOpcoes.frutas.map((fruta) => (
          <label key={fruta} style={styles.opcao}>
            <input type="checkbox" checked={frutasEscolhidas.includes(fruta)} onChange={() => gerenciarSelecao(fruta, frutasEscolhidas, setFrutasEscolhidas)} style={styles.input} />
            {fruta}
          </label>
        ))}
      </section>

      <section style={styles.secao}>
        <h3 style={styles.tituloSecao}>4. Acompanhamentos (Opcional):</h3>
        {cardapioOpcoes.acompanhamentos.map((item) => (
          <label key={item} style={styles.opcao}>
            <input type="checkbox" checked={adicionaisEscolhidos.includes(item)} onChange={() => gerenciarSelecao(item, adicionaisEscolhidos, setAdicionaisEscolhidos)} style={styles.input} />
            {item}
          </label>
        ))}
      </section>

      <div style={styles.barraFinalizar}>
        <div>
          <span style={{ fontSize: '12px', color: '#666' }}>Valor Total:</span>
          <h2 style={{ margin: 0, color: '#16a34a' }}>R$ {precoTotal.toFixed(2)}</h2>
        </div>
        <button onClick={finalizarPedido} style={styles.botaoEnviar}>
          Finalizar Pedido 🍧
        </button>
      </div>

    </div>
  );
}

const styles = {
  secao: { background: '#fcfaff', border: '1px solid #e9d5ff', borderRadius: '10px', padding: '15px', marginBottom: '20px' },
  tituloSecao: { color: '#4c1d95', marginTop: 0, marginBottom: '12px', fontSize: '16px' },
  opcao: { display: 'flex', alignItems: 'center', padding: '10px', background: '#fff', border: '1px solid #f3f4f6', borderRadius: '6px', marginBottom: '8px', cursor: 'pointer' },
  input: { marginRight: '12px', width: '18px', height: '18px', accentColor: '#6b21a8' },
  barraFinalizar: { position: 'sticky', bottom: '10px', background: '#fff', boxShadow: '0 -4px 10px rgba(0,0,0,0.05)', padding: '15px', display: 'flex', justifyIntersection: 'space-between', alignItems: 'center', borderRadius: '12px', border: '1px solid #e5e7eb', marginTop: '30px', justifyContent: 'space-between' },
  botaoEnviar: { background: '#6b21a8', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};