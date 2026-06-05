import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CtaFinal = () => {
  return (
    <section className="section" style={{ padding: '2rem 1rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--accent-black) 0%, var(--primary-blue) 100%)',
            borderRadius: '2rem',
            padding: '5rem 2rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)'
          }}
        >
          {/* Background Elements */}
          <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
          <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'white', letterSpacing: '-0.02em' }}>
              Resolva sua situação fiscal e contábil com segurança.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
              Fale agora com a equipe da Cairo Contabilidade e receba orientação especializada.
            </p>
            
            <motion.a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: 'white',
                color: 'var(--primary-blue)',
                fontSize: '1.125rem',
                padding: '1rem 2.5rem',
                display: 'inline-flex',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaFinal;
