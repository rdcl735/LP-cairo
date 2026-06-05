import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ChevronDown } from 'lucide-react';

const Problemas = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const problemas = [
    { title: 'CPF irregular ou suspenso', desc: 'Regularizamos sua situação junto à Receita Federal para você voltar a ter crédito e paz.' },
    { title: 'Imposto de Renda atrasado', desc: 'Avaliamos o que falta, organizamos seus documentos e enviamos as declarações atrasadas evitando multas maiores.' },
    { title: 'Malha fina da Receita Federal', desc: 'Analisamos o motivo da retenção, corrigimos as inconsistências e liberamos sua restituição.' },
    { title: 'Necessidade de abrir um MEI', desc: 'Cuidamos de toda a formalização de forma rápida e segura para você já começar a faturar e emitir notas.' },
    { title: 'CNPJ inapto', desc: 'Identificamos as pendências, entregamos as obrigações acessórias em atraso e reativamos sua empresa.' },
    { title: 'Pendências fiscais', desc: 'Fazemos um diagnóstico completo e propomos o parcelamento ou quitação para limpar seu nome.' },
    { title: 'Dificuldade com obrigações contábeis', desc: 'Assumimos a rotina contábil da sua empresa para você focar apenas no crescimento do negócio.' },
    { title: 'Regularização empresarial', desc: 'Ajustamos contratos, alvarás e licenças para sua empresa operar 100% dentro da lei.' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Você está enfrentando algum <span style={{ color: 'var(--primary-blue)' }}>destes problemas?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Nós sabemos como resolver. Clique no problema para ver como podemos ajudar.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {problemas.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderRadius: '1rem',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '0.75rem', color: '#EF4444' }}>
                    <AlertTriangle size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--accent-black)' }}>{prob.title}</h3>
                </div>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  <ChevronDown color="var(--text-secondary)" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-secondary)' }}>
                      <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                        <p style={{ marginBottom: '1rem' }}>{prob.desc}</p>
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                          Resolver agora <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problemas;

// need to import ArrowRight
import { ArrowRight } from 'lucide-react';
