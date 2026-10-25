import React, { useState, useEffect } from 'react';
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
  FaClock
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-color)',
        padding: '60px 0 30px 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between mb-5">
          {/* Left Column: Brand & Tagline */}
          <div className="col-12 col-md-5 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #7000ff 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#070a13',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}
              >
                IM
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                {personalInfo.name}
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '380px', margin: '0 auto' }} className="ms-md-0">
              Software Developer at Authorselvi Software Technology specializing in React Native mobile app development and store deployments.
            </p>
          </div>

          {/* Middle Column: Live Timezone & Status */}
          <div className="col-12 col-md-3 text-center">
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <FaClock style={{ color: 'var(--accent-cyan)' }} />
                <span>Local Time (IST):</span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-code)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)'
                }}
              >
                {time || '12:00:00 PM'}
              </span>
            </div>
          </div>

          {/* Right Column: Social Channels & Back to Top */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-end gap-3">
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}
                className="interactive-hover"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a66c2',
                  textDecoration: 'none'
                }}
                className="interactive-hover"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  textDecoration: 'none'
                }}
                className="interactive-hover"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--accent-cyan)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                className="interactive-hover"
                title="Scroll to Top"
              >
                <FaArrowUp size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
          className="text-center text-md-start"
        >
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="mt-2 mt-md-0">
            Engineered with <FaHeart size={12} style={{ color: '#ef4444', margin: '0 3px' }} /> using{' '}
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>React 19</span> & Modern Architecture.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
