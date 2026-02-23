import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Education from './sections/Education/Education';
import Certifications from './sections/Certifications/Certifications';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
