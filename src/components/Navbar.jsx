import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-primary)',
      zIndex: 100
    }}>
      {/* Left: Brand */}
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', color: 'var(--accent-black)' }}>
        Cairo Contabilidade
      </div>

      {/* Center: Nav links */}
      <nav className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <a href="#servicos" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280', transition: 'color 0.2s' }}>Serviços</a>
        <a href="#sobre" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280', transition: 'color 0.2s' }}>Sobre</a>
        <a href="#diferenciais" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280', transition: 'color 0.2s' }}>Diferenciais</a>
        <a href="#faq" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280', transition: 'color 0.2s' }}>FAQ</a>
      </nav>

      {/* Right: Black pill button */}
      <div className="desktop-nav">
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            backgroundColor: 'var(--accent-black)', 
            color: 'white', 
            padding: '10px 24px', 
            borderRadius: '9999px', 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '14px', 
            fontWeight: 500,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'inline-block',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
        >
          Falar no WhatsApp
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', display: 'none', cursor: 'pointer', color: 'var(--accent-black)' }}>
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
