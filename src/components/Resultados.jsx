import React from 'react';
import { motion } from 'framer-motion';

const Resultados = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem' }}>+8</div>
            <div style={{ fontSize: '1.25rem', opacity: 0.9 }}>anos de experiência</div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem' }}>+500</div>
            <div style={{ fontSize: '1.25rem', opacity: 0.9 }}>atendimentos realizados</div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem' }}>100%</div>
            <div style={{ fontSize: '1.25rem', opacity: 0.9 }}>compromisso com o cliente</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Resultados;
