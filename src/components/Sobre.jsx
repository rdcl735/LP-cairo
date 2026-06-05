import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, HeartHandshake } from 'lucide-react';

const Sobre = () => {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="sobre-grid">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5' }}>
              <img 
                src="/carolina.jpg" 
                alt="Carolina Cruz" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}></div>
            </div>
          </motion.div>

          {/* Right: Text and Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--accent-black)' }}>
              Conheça <span style={{ color: 'var(--primary-blue)' }}>Carolina Cruz</span>
            </h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Profissional contábil com mais de 8 anos de experiência em escritórios de contabilidade, especializada em fechamentos contábeis, regularizações fiscais, obrigações acessórias e suporte empresarial.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Atua com foco em atendimento humanizado, segurança e eficiência na resolução de demandas fiscais e contábeis.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-blue)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                  <Award size={24} />
                </div>
                <span style={{ fontWeight: 600, color: 'var(--accent-black)' }}>CRC Ativo</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-blue)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                  <Clock size={24} />
                </div>
                <span style={{ fontWeight: 600, color: 'var(--accent-black)' }}>+8 Anos de Experiência</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-blue)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                  <HeartHandshake size={24} />
                </div>
                <span style={{ fontWeight: 600, color: 'var(--accent-black)' }}>Atendimento Consultivo</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-blue)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                  <BookOpen size={24} />
                </div>
                <span style={{ fontWeight: 600, color: 'var(--accent-black)' }}>Atualização Constante</span>
              </div>
            </div>
          </motion.div>

          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .sobre-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Sobre;
