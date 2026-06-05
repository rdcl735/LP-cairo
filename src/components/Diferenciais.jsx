import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Diferenciais = () => {
  const diferenciais = [
    'Atendimento Humanizado',
    'Mais de 8 anos de experiência',
    'Agilidade na resolução',
    'Atendimento online em todo Brasil',
    'Transparência em cada etapa',
    'Suporte personalizado',
    'Segurança e confidencialidade',
    'Atendimento para pessoa física e empresas'
  ];

  return (
    <section id="diferenciais" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-black)' }}
          >
            Por que escolher a <span style={{ color: 'var(--primary-blue)' }}>Carolina?</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Diferenciais que garantem a melhor experiência e segurança para você.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '1.5rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'default'
              }}
            >
              <div style={{ color: 'var(--primary-blue)' }}>
                <CheckCircle2 size={24} />
              </div>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
