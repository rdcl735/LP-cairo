import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'glass' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--accent-black)' }}>
          Carolina Cruz<span style={{ color: 'var(--primary-blue)' }}>.</span>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <a href="#servicos" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Serviços</a>
          <a href="#sobre" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Sobre</a>
          <a href="#diferenciais" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>Diferenciais</a>
          <a href="#faq" style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>FAQ</a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', display: 'none' }}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
