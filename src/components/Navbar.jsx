import React, { useState, useEffect } from 'react';
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ theme, toggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Scroll Spy logic
      const sections = ['hero', 'about', 'services', 'experience', 'skills', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00f2fe, #4facfe, #8a2be2)',
          zIndex: 10001,
          transition: 'width 0.1s ease-out'
        }}
      />

      {/* Floating Glass Navigation Header */}
      <header
        style={{
          position: 'fixed',
          top: scrolled ? '12px' : '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1240px',
          zIndex: 10000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '10px 24px' : '14px 28px',
            background: scrolled ? 'var(--bg-glass-heavy)' : 'var(--bg-glass)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            boxShadow: scrolled
              ? '0 16px 36px -10px rgba(0, 0, 0, 0.4), var(--glow-cyan)'
              : '0 8px 24px -6px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.35s ease'
          }}
        >
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #7000ff 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#070a13',
                fontWeight: 800,
                fontSize: '1.2rem',
                boxShadow: '0 4px 14px rgba(0, 242, 254, 0.4)'
              }}
            >
              IM
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.3px',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Iyappan Mani
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    display: 'inline-block'
                  }}
                  title="Available for hire"
                />
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600,
                  marginTop: '-3px'
                }}
              >
                React & React Native
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            className="d-none d-lg-flex"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'rgba(0, 242, 254, 0.09)' : 'transparent',
                    border: isActive ? '1px solid rgba(0, 242, 254, 0.25)' : '1px solid transparent',
                    transition: 'all 0.25s ease'
                  }}
                  className="interactive-hover"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action Controls & Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: theme === 'dark' ? '#fbbf24' : '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              className="interactive-hover"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="btn-modern btn-outline-glass d-none d-sm-inline-flex"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <FaFileDownload size={13} style={{ color: 'var(--accent-cyan)' }} />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-modern btn-primary-gradient d-none d-md-inline-flex"
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              <FaPaperPlane size={12} />
              <span>Connect</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
              className="d-lg-none interactive-hover"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: theme === 'dark' ? 'rgba(7, 10, 19, 0.92)' : 'rgba(248, 250, 255, 0.96)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transform: mobileMenuOpen ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            width: '100%',
            maxWidth: '360px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '10px 24px',
                width: '100%',
                textAlign: 'center',
                borderRadius: 'var(--radius-md)',
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
                border: '1px solid var(--border-color)',
                boxShadow: theme === 'dark' ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '12px', width: '100%', marginTop: '12px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-modern btn-outline-glass"
              style={{ flex: 1, padding: '12px' }}
            >
              <FaFileDownload /> Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-modern btn-primary-gradient"
              style={{ flex: 1, padding: '12px' }}
            >
              <FaPaperPlane /> Connect
            </a>
          </div>

          {/* Social Links in Mobile Menu */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a66c2',
                textDecoration: 'none'
              }}
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25d366',
                textDecoration: 'none'
              }}
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
