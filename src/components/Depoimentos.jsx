import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Depoimentos = () => {
  const depoimentos = [
    { nome: 'João Silva', empresa: 'Empresário', texto: 'A Carolina resolveu meu problema com a malha fina em tempo recorde. Muito atenciosa e profissional!' },
    { nome: 'Mariana Costa', empresa: 'MEI', texto: 'Abri meu MEI e agora tenho toda a contabilidade em dia graças ao suporte incrível dela. Recomendo de olhos fechados.' },
    { nome: 'Carlos Mendes', empresa: 'Cliente Pessoa Física', texto: 'Estava com meu CPF irregular e não sabia o que fazer. Ela me orientou passo a passo e regularizou tudo rapidamente.' }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--accent-black)' }}>
            O que dizem os <span style={{ color: 'var(--primary-blue)' }}>Clientes</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {depoimentos.map((dep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#F59E0B' }}>
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                "{dep.texto}"
              </p>
              <div>
                <h4 style={{ fontWeight: 600, color: 'var(--accent-black)' }}>{dep.nome}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{dep.empresa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
