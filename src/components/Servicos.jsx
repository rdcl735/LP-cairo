import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, Building2, Briefcase, Calculator, LineChart } from 'lucide-react';

const Servicos = () => {
  const servicos = [
    { icon: <FileText size={32} />, title: 'Imposto de Renda', desc: 'Declaração, retificação e acompanhamento detalhado para evitar malha fina.' },
    { icon: <UserCheck size={32} />, title: 'Regularização de CPF', desc: 'Análise e regularização completa junto à Receita Federal com rapidez.' },
    { icon: <Building2 size={32} />, title: 'Regularização de CNPJ', desc: 'Atualização cadastral e resolução de pendências fiscais para sua empresa.' },
    { icon: <Briefcase size={32} />, title: 'Abertura de MEI', desc: 'Formalização rápida e segura para você empreender dentro da lei.' },
    { icon: <Calculator size={32} />, title: 'Contabilidade para MEI', desc: 'Orientação, suporte contábil e emissão de guias mensais.' },
    { icon: <LineChart size={32} />, title: 'Consultoria Contábil', desc: 'Análise e direcionamento estratégico focado no crescimento do seu negócio.' },
  ];

  return (
    <section id="servicos" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Soluções Contábeis para <span style={{ color: 'var(--primary-blue)' }}>Você e Seu Negócio</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Serviços premium projetados para resolver suas pendências com máxima eficiência.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '2.5rem 2rem',
                borderRadius: '1.5rem',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="service-card"
            >
              <div 
                className="service-glow"
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
                  {servico.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-black)' }}>
                  {servico.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {servico.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card:hover {
          box-shadow: var(--shadow-glow);
          border-color: rgba(37, 99, 235, 0.3) !important;
        }
        .service-card:hover .service-glow {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Servicos;
