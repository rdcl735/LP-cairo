import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, HeartHandshake } from 'lucide-react';

const Sobre = () => {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="sobre-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--glass-border)' }}
          >
            <div style={{ position: 'relative', marginBottom: '3rem' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', top: '0', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--primary-blue)', border: '4px solid var(--bg-primary)' }}></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-black)', marginBottom: '0.5rem' }}>Início da Carreira</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Imersão em escritórios de contabilidade, construindo uma base sólida em rotinas fiscais.</p>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '3rem' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', top: '0', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--primary-blue)', border: '4px solid var(--bg-primary)' }}></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-black)', marginBottom: '0.5rem' }}>Especialização Técnica</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Foco no fechamento contábil e regularização de empresas e pessoas físicas.</p>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', top: '0', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--primary-blue)', border: '4px solid var(--bg-primary)', boxShadow: '0 0 10px rgba(37,99,235,0.5)' }}></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-black)', marginBottom: '0.5rem' }}>Atendimento Humanizado</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Hoje, oferecendo soluções com transparência, proximidade e agilidade para clientes de todo o Brasil.</p>
            </div>
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
