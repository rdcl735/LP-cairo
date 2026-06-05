import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--glass-border)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--accent-black)', marginBottom: '1rem' }}>
              Carolina Cruz<span style={{ color: 'var(--primary-blue)' }}>.</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '300px' }}>
              Contabilidade sem burocracia para você focar no que realmente importa.
            </p>
            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--bg-secondary)', borderRadius: '1rem', border: '1px solid var(--glass-border)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              CRC Ativo
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, color: 'var(--accent-black)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Links Rápidos</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#servicos" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Serviços</a></li>
              <li><a href="#sobre" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Sobre Carolina</a></li>
              <li><a href="#diferenciais" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Diferenciais</a></li>
              <li><a href="#faq" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, color: 'var(--accent-black)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Contato</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="https://wa.me/5511999999999" style={{ color: 'var(--text-secondary)' }}>WhatsApp: (11) 99999-9999</a></li>
              <li><a href="mailto:contato@carolinacruz.com.br" style={{ color: 'var(--text-secondary)' }}>contato@carolinacruz.com.br</a></li>
              <li style={{ color: 'var(--text-secondary)' }}>Atendimento Online - Todo Brasil</li>
            </ul>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'var(--bg-secondary)', borderRadius: '0.5rem' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'var(--bg-secondary)', borderRadius: '0.5rem' }}><Linkedin size={20} /></a>
              <a href="mailto:contato@carolinacruz.com.br" style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'var(--bg-secondary)', borderRadius: '0.5rem' }}><Mail size={20} /></a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} Carolina Cruz Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
