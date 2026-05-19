import React from 'react';

export default function Contato() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      <a href="/" style={{ color: '#6b21a8', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px' }}>
        ← Voltar para o Início
      </a>

      <h1 style={{ color: '#4c1d95', marginBottom: '10px' }}>Fale Conosco 📱</h1>
      <p style={{ color: '#6b21a8', fontWeight: 'bold' }}>Açaí Itaki</p>
      
      <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', margin: '30px 0' }} />

      <div style={{ background: '#fcfaff', border: '1px solid #e9d5ff', borderRadius: '12px', padding: '25px', textAlign: 'left' }}>
        <h3 style={{ color: '#4c1d95', marginTop: 0 }}>Nossos Canais:</h3>
        
        <p style={{ margin: '15px 0', color: '#374151' }}>
          <strong>📞 Telefone / WhatsApp:</strong> (11) 99999-9999
        </p>
        
        <p style={{ margin: '15px 0', color: '#374151' }}>
          <strong>📧 E-mail:</strong> contato@acaiitaki.com.br
        </p>

        <p style={{ margin: '15px 0', color: '#374151' }}>
          <strong>📍 Endereço:</strong> Av. Zunkeller 649, São Paulo - SP
        </p>
      </div>

      <p style={{ marginTop: '30px', fontSize: '14px', color: '#9ca3af' }}>
        Horário de Atendimento: Todos os dias, das 12h às 22h.
      </p>
    </div>
  );
}