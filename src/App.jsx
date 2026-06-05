import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problemas from './components/Problemas';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import ComoFunciona from './components/ComoFunciona';
import Resultados from './components/Resultados';
import Depoimentos from './components/Depoimentos';
import Faq from './components/Faq';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-external-frame">
      <Navbar />
      <main>
        <Hero />
        {/* We keep the rest of the content below the hero */}
        <div className="page-content">
          <Problemas />
          <Servicos />
          <Sobre />
          <Diferenciais />
          <ComoFunciona />
          <Resultados />
          <Depoimentos />
          <Faq />
          <CtaFinal />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
