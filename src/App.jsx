import React from 'react';
import './App.sass'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projetos from './components/Projetos/Projetos';

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projetos/>
    </>
  );
};

export default App;