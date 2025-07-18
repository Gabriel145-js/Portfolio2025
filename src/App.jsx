import React from 'react';
import { Element } from 'react-scroll'
import './App.sass'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projetos from './components/Projetos/Projetos';
import Contatos from './components/Contatos/Contatos';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      <Element id="inicio" className="section conteudo">
        <Hero />
      </Element>

      <Element id="about" className="section">
        <About />
      </Element>

      <Element id="skills" className="section">
        <Skills />
      </Element>

      <Element id="projetos" className="section">
        <Projetos />
      </Element>

      <Element id="contatos" className="section">
        <Contatos />
      </Element>

      <Footer />
    </>
  );
};

export default App;