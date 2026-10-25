import React from 'react';
import Typewriter from 'typewriter-effect';
import {
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaCheckCircle,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import picImg from '../image/pic.png';

const Hero = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows */}
      <div className="ambient-glow-orb orb-cyan" style={{ top: '-10%', left: '-5%' }} />
      <div className="ambient-glow-orb orb-purple" style={{ top: '30%', right: '-10%' }} />
      <div className="ambient-glow-orb orb-emerald" style={{ bottom: '-10%', left: '30%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center gy-5">
          {/* Left Column: Introduction & Call-To-Actions */}
          <div className="col-12 col-lg-7 text-center text-lg-start">
            {/* Live Availability Status Pill */}
            <div className="d-inline-flex align-items-center mb-3">
              <div
                className="glass-pill interactive-hover"
                style={{
                  boxShadow: '0 4px 16px rgba(0, 242, 254, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 12px #10b981'
                  }}
                  className="animate-pulse-glow"
                />
                <span>Software Developer at Authorselvi Software Technology</span>
              </div>
            </div>

            {/* Main Greeting & Name */}
            <h5
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontSize: '1rem',
                marginBottom: '8px'
              }}
            >
              Hello World, I'm
            </h5>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                marginBottom: '14px',
                lineHeight: 1.15
              }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Heading */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.8vw, 1.95rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
              className="justify-content-lg-start"
            >
              <span style={{ marginRight: '10px', color: 'var(--text-muted)' }}>Specialist in</span>
              <span style={{ color: 'var(--accent-cyan)' }}>
                <Typewriter
                  options={{
                    strings: personalInfo.roles,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30
                  }}
                />
              </span>
            </div>

            {/* Short Bio Paragraph */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                lineHeight: 1.75,
                maxWidth: '620px',
                margin: '0 auto 28px auto'
              }}
              className="ms-lg-0"
            >
              Building cross-platform mobile applications for Android & iOS with{' '}
              <strong>React Native</strong> and interactive web applications with{' '}
              <strong>React.js</strong>. Specialized in <strong>Firebase integration</strong> and end-to-end{' '}
              <strong>Play Store & App Store</strong> deployment.
            </p>

            {/* Action Buttons Suite */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                justifyContent: 'center',
                marginBottom: '32px'
              }}
              className="justify-content-lg-start"
            >
              <a
                href="#projects"
                className="btn-modern btn-primary-gradient interactive-hover"
                style={{ padding: '14px 30px' }}
              >
                <span>Explore Projects</span>
                <FaArrowRight size={14} />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-modern btn-outline-glass interactive-hover"
                style={{ padding: '14px 28px' }}
              >
                <FaFileDownload size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>View Full CV</span>
              </button>

              <a
                href="#contact"
                className="btn-modern btn-outline-glass interactive-hover"
                style={{ padding: '14px 28px' }}
              >
                <FaEnvelope size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Social Proof & Channels */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                justifyContent: 'center'
              }}
              className="justify-content-lg-start"
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Connect:
              </span>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.3s ease'
                }}
                className="interactive-hover"
                title="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a66c2',
                  transition: 'all 0.3s ease'
                }}
                className="interactive-hover"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  transition: 'all 0.3s ease'
                }}
                className="interactive-hover"
                title="WhatsApp Direct Message"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Holographic Avatar & Floating Feature Badges */}
          <div className="col-12 col-lg-5">
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                margin: '0 auto'
              }}
            >
              {/* Outer Glowing Holographic Ring */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '100%',
                  borderRadius: '36px',
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.25), rgba(112, 0, 255, 0.25))',
                  border: '2px solid rgba(0, 242, 254, 0.4)',
                  boxShadow: '0 25px 60px -15px rgba(0, 242, 254, 0.35)',
                  overflow: 'hidden'
                }}
                className="animate-float"
              >
                {/* Background decorative grid pattern */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage:
                      'radial-gradient(rgba(0, 242, 254, 0.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.6
                  }}
                />

                {/* Profile Image with smooth object fit */}
                <img
                  src={picImg}
                  alt={personalInfo.name}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '92%',
                    height: '95%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))'
                  }}
                />

                {/* Bottom Gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '35%',
                    background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)'
                  }}
                />
              </div>

              {/* Floating Orbit Badge 1: React Native */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  background: 'var(--bg-glass-heavy)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 242, 254, 0.4)',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), var(--glow-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 2
                }}
                className="animate-pulse-glow"
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(97, 218, 251, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#61dafb'
                  }}
                >
                  <SiReact size={22} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    React Native
                  </span>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--accent-cyan)' }}>
                    iOS & Android
                  </span>
                </div>
              </div>

              {/* Floating Orbit Badge 2: Store Releases */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '-25px',
                  background: 'var(--bg-glass-heavy)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 2
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(0, 230, 118, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00e676'
                    }}
                  >
                    <FaGooglePlay size={16} />
                  </div>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(0, 122, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#007aff'
                    }}
                  >
                    <FaApple size={18} />
                  </div>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Store Deployment
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaCheckCircle size={10} /> Signed Production Builds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats Ribbon */}
        <div
          style={{
            marginTop: '80px',
            padding: '24px 20px',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--glow-card)'
          }}
        >
          <div className="row text-center gy-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="col-6 col-md-3"
                style={{
                  borderRight: idx < personalInfo.stats.length - 1 ? '1px solid var(--border-color)' : 'none'
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-1px'
                  }}
                  className="gradient-text"
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginTop: '2px'
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    marginTop: '2px'
                  }}
                >
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
