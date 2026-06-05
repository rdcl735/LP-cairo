import React from 'react';
import { motion } from 'framer-motion';

const ComoFunciona = () => {
  const passos = [
    { num: '01', title: 'Contato', desc: 'Entre em contato pelo WhatsApp' },
    { num: '02', title: 'Análise', desc: 'Análise da sua situação' },
    { num: '03', title: 'Estratégia', desc: 'Definição da melhor solução' },
    { num: '04', title: 'Execução', desc: 'Execução e acompanhamento' },
    { num: '05', title: 'Sucesso', desc: 'Problema resolvido' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--accent-black)' }}>Como <span style={{ color: 'var(--primary-blue)' }}>Funciona</span></h2>
        </div>

        <div className="timeline-container" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Horizontal Line for desktop */}
          <div className="timeline-line" style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', position: 'relative', zIndex: 1 }} className="timeline-grid">
            {passos.map((passo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '50%', 
                  background: 'var(--primary-blue)', 
                  color: 'white', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontWeight: 'bold', fontSize: '1.25rem',
                  marginBottom: '1.5rem',
                  boxShadow: '0 0 15px rgba(37,99,235,0.3)',
                  border: '4px solid var(--bg-primary)'
                }}>
                  {passo.num}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--accent-black)' }}>{passo.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{passo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .timeline-line {
            top: 0 !important;
            bottom: 0 !important;
            left: 50% !important;
            width: 2px !important;
            height: auto !important;
            transform: translateX(-50%) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ComoFunciona;
