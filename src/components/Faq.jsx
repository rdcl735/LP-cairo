import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: 'Preciso declarar Imposto de Renda?', a: 'Isso depende dos seus rendimentos, bens e outras regras da Receita. Fazemos uma análise prévia gratuita para verificar a sua obrigatoriedade.' },
    { q: 'Como regularizar meu CPF?', a: 'Precisamos consultar a situação atual do seu CPF na Receita Federal, identificar as pendências (como falta de declaração) e enviar os dados ou guias para regularização.' },
    { q: 'Quanto custa abrir um MEI?', a: 'A abertura do MEI no portal do governo é gratuita. Nossos honorários são referentes à assessoria e segurança na abertura correta da sua atividade, além da orientação contábil inicial.' },
    { q: 'Meu CNPJ está inapto, o que fazer?', a: 'Um CNPJ fica inapto por omissão de declarações. Nós levantamos quais obrigações acessórias estão faltando, enviamos todas para a Receita e seu CNPJ volta a ficar ativo.' },
    { q: 'O atendimento é online?', a: 'Sim! Atendemos de forma 100% online clientes de todo o Brasil, com a mesma segurança e qualidade de um escritório físico, através do WhatsApp e reuniões online.' },
    { q: 'Quais documentos são necessários?', a: 'Depende do serviço. Para o Imposto de Renda, por exemplo, precisamos de informes de rendimentos, recibos médicos e dados de bens. Após o contato inicial, enviaremos um checklist exato.' }
  ];

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--accent-black)' }}>
            Dúvidas <span style={{ color: 'var(--primary-blue)' }}>Frequentes</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                border: '1px solid var(--glass-border)',
                borderRadius: '1rem',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-primary)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ 
                  width: '100%', 
                  padding: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  background: 'none',
                  textAlign: 'left',
                  color: 'var(--accent-black)',
                  fontWeight: 600,
                  fontSize: '1.125rem'
                }}
              >
                {faq.q}
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  {openIndex === index ? <Minus color="var(--primary-blue)" /> : <Plus color="var(--text-secondary)" />}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {faq.a}
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

export default Faq;
