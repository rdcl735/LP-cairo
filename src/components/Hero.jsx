import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="section" 
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', position: 'relative', overflow: 'hidden' }}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.05), transparent 40%)`,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-secondary)', padding: '0.5rem 1rem', borderRadius: '2rem', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Atendimento Online para todo Brasil</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Contabilidade sem burocracia para você focar no que <span className="text-gradient">realmente importa.</span>
            </h1>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Especialista em Imposto de Renda, Regularização de CPF e CNPJ, Abertura de MEI e soluções contábeis para pessoas físicas e empresas.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-pulse">
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
              <a href="#servicos" className="btn btn-secondary">
                Solicitar Atendimento
                <ArrowRight size={20} />
              </a>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 color="var(--primary-blue)" size={20} />
                <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>CRC Ativo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 color="var(--primary-blue)" size={20} />
                <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>+8 anos de experiência</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img 
                src="/carolina.jpg" 
                alt="Carolina Cruz - Contadora" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/5' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)' }}></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="glass"
              style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '1rem 1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ background: 'var(--primary-blue)', color: 'white', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
                100%
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--accent-black)' }}>Compromisso</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>com cada cliente</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
