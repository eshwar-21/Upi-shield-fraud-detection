
import React from 'react';
import './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Demo from './components/Demo';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020617] selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.05]"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Features />
        <Demo />
        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default App;
