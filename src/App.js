import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AiInnovations from './components/AiInnovations';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import LinkedInPosts from './components/LinkedInPosts';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('iyappan_portfolio_theme_v2');
    return savedTheme ? savedTheme : 'light';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('iyappan_portfolio_theme_v2', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Interactive Custom Follower Cursor Animation */}
      <CustomCursor />

      {/* Dynamic 60FPS Interactive Particle Canvas */}
      <ParticleBackground theme={theme} />

      {/* Floating Glass Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <AiInnovations />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <LinkedInPosts />
        <Testimonials />
        <Contact />
      </main>

      {/* Futuristic Footer */}
      <Footer />

      {/* Back to Top Progress Ring Button */}
      <BackToTop />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
