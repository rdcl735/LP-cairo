import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Split words logic
  const headlineLine1 = "Contabilidade".split(" ");
  const headlineAccent = "Premium".split(" ");
  const headlineLine2 = "Sem Burocracia".split(" ");
  const description = "Especialista em Imposto de Renda, Regularização de CPF e CNPJ, Abertura de MEI e soluções contábeis exclusivas.".split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const descContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.6 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className="hero-internal-container">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Vignette Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
          zIndex: 1
        }}
      />

      {/* Content anchored to bottom */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%', 
          padding: '2rem 1rem 4rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '1.5rem' }}
        >
          <h1 className="hero-headline">
            {/* Line 1 */}
            <div style={{ display: 'inline-block' }}>
              {headlineLine1.map((word, i) => (
                <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                  {word}
                </motion.span>
              ))}
              {headlineAccent.map((word, i) => (
                <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em', fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 600 }}>
                  {word}
                </motion.span>
              ))}
            </div>
            <br />
            {/* Line 2 */}
            <div style={{ display: 'inline-block' }}>
              {headlineLine2.map((word, i) => (
                <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>
        </motion.div>

        <motion.div
          variants={descContainerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '440px', marginBottom: '2.5rem' }}
        >
          <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            {description.map((word, i) => (
              <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        >
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'white',
              color: 'var(--accent-black)',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              display: 'inline-block',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>

      <style>{`
        .hero-headline {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 76px;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
