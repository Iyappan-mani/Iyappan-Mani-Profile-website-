import React from 'react';
import {
  FaCheckCircle,
  FaMobileAlt,
  FaShieldAlt,
  FaLayerGroup,
  FaCode,
  FaBolt,
  FaGooglePlay,
  FaApple
} from 'react-icons/fa';
import { SiReact, SiJavascript, SiFirebase } from 'react-icons/si';

const About = () => {
  const coreStrengths = [
    {
      title: 'Cross-Platform Mobile Development',
      desc: 'Building Android & iOS applications with React Native and JavaScript, delivering cross-platform apps from a single codebase.',
      icon: <FaMobileAlt size={22} style={{ color: '#00f2fe' }} />
    },
    {
      title: 'Play Store & App Store Deployment',
      desc: 'Handling complete app deployment lifecycle using Android Studio, Xcode, Play Console, and Apple Developer Console for production releases.',
      icon: <FaShieldAlt size={22} style={{ color: '#10b981' }} />
    },
    {
      title: 'Firebase Integration',
      desc: 'Integrating Firebase services including Authentication, Firestore, Cloud Messaging (FCM), and Cloud Storage into mobile and web apps.',
      icon: <FaCode size={22} style={{ color: '#8a2be2' }} />
    },
    {
      title: 'API Integration & UI/UX Design',
      desc: 'Integrating REST APIs for backend communication and designing intuitive, user-friendly mobile app interfaces with clean layouts.',
      icon: <FaBolt size={22} style={{ color: '#f59e0b' }} />
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaLayerGroup />
            <span>Architect & Engineer</span>
          </div>
          <h2>
            Crafting World-Class <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p>
            Bridging the gap between ambitious product design and resilient, scalable mobile and web engineering.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="row g-4 align-items-stretch">
          {/* Card 1: Comprehensive Career Narrative */}
          <div className="col-12 col-lg-7">
            <div
              className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
              style={{ minHeight: '420px' }}
            >
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(0, 242, 254, 0.12)',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    My Mission & Expertise
                  </span>
                </div>

                <h3 style={{ fontSize: '1.9rem', marginBottom: '18px', fontWeight: 800 }}>
                  High-Performance Code Meets <br />
                  <span className="gradient-text-emerald">Intuitive Human Design</span>
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>
                  Hi, I’m <strong>Iyappan Mani</strong>, a Software Developer currently working at <strong>Authorselvi Software Technology</strong>. 
                  I specialize in building and deploying cross-platform mobile applications for Android & iOS using <strong>React Native</strong> and <strong>JavaScript</strong>.
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '24px' }}>
                  My core strengths include end-to-end mobile app development, <strong>Firebase integration</strong> (Auth, Firestore, FCM), 
                  <strong>REST APIs integration</strong>, and <strong>UI/UX development</strong>. I handle complete store deployments using 
                  <strong> Android Studio</strong>, <strong>Xcode</strong>, <strong>Google Play Console</strong>, and <strong>Apple Developer Console</strong>.
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="row g-3 pt-3" style={{ borderTop: '1px solid var(--border-color)' }}>
                <div className="col-sm-6 d-flex align-items-center gap-2">
                  <FaCheckCircle style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Android & iOS App Development</span>
                </div>
                <div className="col-sm-6 d-flex align-items-center gap-2">
                  <FaCheckCircle style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Play Store & App Store Deployment</span>
                </div>
                <div className="col-sm-6 d-flex align-items-center gap-2">
                  <FaCheckCircle style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>REST APIs & Firebase Integration</span>
                </div>
                <div className="col-sm-6 d-flex align-items-center gap-2">
                  <FaCheckCircle style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Mobile UI/UX & Graphic Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Visual Graphic & Mobile Ecosystem */}
          <div className="col-12 col-lg-5">
            <div
              className="glass-panel ecosystem-card p-4 h-100 d-flex flex-column justify-content-between text-center"
              style={{
                minHeight: '420px'
              }}
            >
              <div>
                <span
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(112, 0, 255, 0.15)',
                    color: '#a855f7',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Cross-Platform Powerhouse
                </span>
                <h4 style={{ marginTop: '16px', fontSize: '1.4rem', fontWeight: 700 }}>
                  Unified Engineering for <br />
                  <span className="gradient-text">iOS, Android & Web</span>
                </h4>
              </div>

              {/* Futuristic Glass Smartphone & Ecosystem Showcase */}
              <div
                style={{
                  position: 'relative',
                  margin: '20px 0',
                  minHeight: '260px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Ambient Aura Background */}
                <div
                  style={{
                    position: 'absolute',
                    width: '210px',
                    height: '210px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 242, 254, 0.22) 0%, rgba(112, 0, 255, 0.14) 50%, transparent 70%)',
                    filter: 'blur(32px)',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                />

                {/* Smartphone Shell */}
                <div
                  className="animate-float"
                  style={{
                    position: 'relative',
                    width: '190px',
                    height: '265px',
                    borderRadius: '28px',
                    background: 'var(--bg-glass-heavy)',
                    border: '2px solid rgba(0, 242, 254, 0.45)',
                    boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.4), var(--glow-cyan)',
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1,
                    overflow: 'hidden'
                  }}
                >
                  {/* Dynamic Island Speaker Notch */}
                  <div
                    style={{
                      width: '50px',
                      height: '8px',
                      borderRadius: '10px',
                      background: 'rgba(0, 242, 254, 0.35)',
                      margin: '0 auto 8px auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#00f2fe'
                      }}
                    />
                  </div>

                  {/* Inner Screen */}
                  <div
                    style={{
                      flex: 1,
                      borderRadius: '20px',
                      background: 'linear-gradient(180deg, rgba(0, 242, 254, 0.08) 0%, rgba(112, 0, 255, 0.08) 100%)',
                      border: '1px solid var(--border-color)',
                      padding: '10px 8px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      textAlign: 'left'
                    }}
                  >
                    {/* Header */}
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '8px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <span
                            style={{
                              width: '7px',
                              height: '7px',
                              borderRadius: '50%',
                              backgroundColor: '#10b981',
                              boxShadow: '0 0 8px #10b981'
                            }}
                            className="animate-pulse-glow"
                          />
                          <span style={{ fontSize: '0.66rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.5px' }}>
                            REACT NATIVE
                          </span>
                        </div>
                        <span style={{ fontSize: '0.62rem', color: '#10b981', fontWeight: 700 }}>60 FPS</span>
                      </div>

                      {/* Mini Live Project Status Card */}
                      <div
                        style={{
                          background: 'var(--bg-card)',
                          borderRadius: '10px',
                          padding: '8px',
                          border: '1px solid var(--border-color)',
                          marginBottom: '8px'
                        }}
                      >
                        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                          Mobile App Engine
                        </div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          iOS & Android Unified
                        </div>
                      </div>

                      {/* Code / Visual Activity Bars */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ height: '4px', width: '85%', borderRadius: '4px', background: 'linear-gradient(90deg, var(--accent-cyan), transparent)' }} />
                        <div style={{ height: '4px', width: '65%', borderRadius: '4px', background: 'linear-gradient(90deg, #10b981, transparent)' }} />
                        <div style={{ height: '4px', width: '75%', borderRadius: '4px', background: 'linear-gradient(90deg, #8a2be2, transparent)' }} />
                      </div>
                    </div>

                    {/* Mini Bottom Store Status Strip */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingTop: '6px',
                        borderTop: '1px solid var(--border-color)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <FaGooglePlay size={10} style={{ color: '#00e676' }} />
                        <span style={{ fontSize: '0.58rem', fontWeight: 700, color: 'var(--text-primary)' }}>Play Store</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <FaApple size={11} style={{ color: 'var(--text-primary)' }} />
                        <span style={{ fontSize: '0.58rem', fontWeight: 700, color: 'var(--text-primary)' }}>App Store</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbit Satellite 1: Google Play Badge */}
                <div
                  style={{
                    position: 'absolute',
                    left: '6px',
                    top: '24px',
                    background: 'var(--bg-glass-heavy)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0, 230, 118, 0.45)',
                    padding: '6px 10px',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 2,
                    animation: 'floatSlow 5s ease-in-out infinite'
                  }}
                >
                  <FaGooglePlay size={13} style={{ color: '#00e676' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.66rem', fontWeight: 800, color: 'var(--text-primary)' }}>Google Play</div>
                    <div style={{ fontSize: '0.56rem', color: '#10b981', fontWeight: 700 }}>Signed AAB</div>
                  </div>
                </div>

                {/* Orbit Satellite 2: Apple Store Badge */}
                <div
                  style={{
                    position: 'absolute',
                    right: '6px',
                    bottom: '28px',
                    background: 'var(--bg-glass-heavy)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0, 122, 255, 0.45)',
                    padding: '6px 10px',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 2,
                    animation: 'floatSlow 6s ease-in-out infinite reverse'
                  }}
                >
                  <FaApple size={14} style={{ color: '#007aff' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.66rem', fontWeight: 800, color: 'var(--text-primary)' }}>App Store</div>
                    <div style={{ fontSize: '0.56rem', color: '#007aff', fontWeight: 700 }}>iOS IPA Build</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  className="glass-panel"
                  style={{
                    padding: '10px 16px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <SiReact style={{ color: '#61dafb' }} size={18} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>React Native</span>
                </div>
                <div
                  className="glass-panel"
                  style={{
                    padding: '10px 16px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <SiJavascript style={{ color: '#f7df1e' }} size={18} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>JavaScript</span>
                </div>
                <div
                  className="glass-panel"
                  style={{
                    padding: '10px 16px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <SiFirebase style={{ color: '#ffca28' }} size={18} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>Firebase Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths Feature Grid */}
        <div className="row g-4 mt-2">
          {coreStrengths.map((item) => (
            <div key={item.title} className="col-12 col-md-6 col-lg-3">
              <div
                className="glass-panel p-4 h-100"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  className="feature-icon-box"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
