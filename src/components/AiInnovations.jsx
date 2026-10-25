import React, { useState, useEffect } from 'react';
import {
  FaRobot,
  FaMicrophone,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaCode,
  FaCogs,
  FaChartLine,
  FaBolt,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaBrain,
  FaWifi,
  FaBatteryFull,
  FaMagic
} from 'react-icons/fa';
import { SiReact, SiJavascript, SiAndroid, SiApple } from 'react-icons/si';
import { aiFeaturesData } from '../data/portfolioData';

const aiTabs = [
  { id: 'voice', label: 'Voice to Job', icon: FaMicrophone, color: '#00f2fe' },
  { id: 'ocr', label: 'Document OCR', icon: FaFileAlt, color: '#10b981' },
  { id: 'invoice', label: 'Auto Invoice', icon: FaFileInvoiceDollar, color: '#a855f7' },
  { id: 'code', label: 'Dev Agent', icon: FaCode, color: '#f59e0b' }
];

const getAiIcon = (iconName, color) => {
  const props = { size: 22, style: { color } };
  switch (iconName) {
    case 'FaMicrophone':
      return <FaMicrophone {...props} />;
    case 'FaFileAlt':
      return <FaFileAlt {...props} />;
    case 'FaFileInvoiceDollar':
      return <FaFileInvoiceDollar {...props} />;
    case 'FaCode':
      return <FaCode {...props} />;
    case 'FaCogs':
      return <FaCogs {...props} />;
    case 'FaChartLine':
      return <FaChartLine {...props} />;
    default:
      return <FaRobot {...props} />;
  }
};

const AiInnovations = () => {
  const [activeTab, setActiveTab] = useState('voice');
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = aiTabs.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % aiTabs.length;
        return aiTabs[nextIndex].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleTabClick = (tabId) => {
    setAutoRotate(false);
    setActiveTab(tabId);
  };
  return (
    <section id="ai-solutions" className="section-wrapper" style={{ position: 'relative' }}>
      {/* Ambient Glow Orbs */}
      <div className="ambient-glow-orb orb-cyan" style={{ top: '10%', right: '-5%' }} />
      <div className="ambient-glow-orb orb-purple" style={{ bottom: '10%', left: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--accent-cyan)' }}>
            <FaRobot size={18} />
            <span>Developer • Innovation • AI • Impact</span>
          </div>
          <h2>
            React Native + AI = <span className="gradient-text">Smarter Mobile Apps</span>
          </h2>
          <p>
            Turning ideas into intelligent mobile experiences. AI works with you, not instead of you.
          </p>
        </div>

        {/* Top Tech Alignment Bar */}
        <div
          className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-5 pb-3"
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <div className="d-flex align-items-center gap-2">
            <SiReact size={24} style={{ color: '#61dafb' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>React Native</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <SiJavascript size={22} style={{ color: '#f7df1e' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>JavaScript</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <SiAndroid size={24} style={{ color: '#3ddc84' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Android</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <SiApple size={24} style={{ color: 'var(--text-primary)' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>iOS</span>
          </div>
          <span
            style={{
              padding: '4px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--accent-cyan)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Same Code • More Possibilities
          </span>
        </div>

        {/* Main Content Layout: Feature Grid + Visual Showcase */}
        <div className="row g-4 align-items-stretch">
          {/* Left Column: 6 Core AI Features */}
          <div className="col-12 col-xl-7">
            <div className="row g-3 h-100">
              {aiFeaturesData.map((item) => (
                <div key={item.id} className="col-12 col-md-6">
                  <div
                    className="glass-panel p-4 h-100 d-flex flex-column justify-content-between"
                    style={{
                      borderRadius: '20px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '14px',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {getAiIcon(item.icon, item.color)}
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                            background: `${item.color}15`,
                            color: item.color,
                            border: `1px solid ${item.color}33`,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
                        {item.title}
                      </h3>

                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '14px' }}>
                        {item.description}
                      </p>
                    </div>

                    <div
                      style={{
                        paddingTop: '10px',
                        borderTop: '1px solid var(--border-color)',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span style={{ color: item.color }}>✓</span> {item.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive AI Smartphone Showcase & Strategic Pillars */}
          <div className="col-12 col-xl-5">
            <div
              className="glass-panel p-4 h-100 d-flex flex-column justify-content-between text-center"
              style={{
                borderRadius: '24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
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
                  AI Mobile Architecture
                </span>
                <h4 style={{ marginTop: '14px', fontSize: '1.35rem', fontWeight: 800 }}>
                  Intelligent Mobile Experiences
                </h4>
              </div>

              {/* Interactive AI Feature Tabs */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-3 mt-2">
                {aiTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabClick(tab.id)}
                      className="interactive-hover"
                      style={{
                        padding: '5px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        border: isActive ? `1.5px solid ${tab.color}` : '1px solid var(--border-color)',
                        background: isActive ? `${tab.color}20` : 'var(--bg-secondary)',
                        color: isActive ? tab.color : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <Icon size={12} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Futuristic Glass Smartphone Showcase */}
              <div
                style={{
                  position: 'relative',
                  margin: '10px 0 16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Ambient Aura Background */}
                <div
                  style={{
                    position: 'absolute',
                    width: '260px',
                    height: '260px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 242, 254, 0.22) 0%, rgba(112, 0, 255, 0.16) 50%, transparent 70%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                />

                {/* Floating Top Badge */}
                <div
                  className="animate-float"
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-8px',
                    zIndex: 4,
                    background: 'var(--bg-glass-heavy)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), var(--glow-cyan)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  <FaMagic size={11} style={{ color: '#00f2fe' }} />
                  <span>AI Works With You, Not Instead</span>
                </div>

                {/* Smartphone Hardware Frame */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '310px',
                    minHeight: '385px',
                    borderRadius: '34px',
                    background: 'linear-gradient(155deg, #1f2937, #0b0f19)',
                    border: '2px solid rgba(0, 242, 254, 0.45)',
                    boxShadow: '0 24px 50px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 242, 254, 0.15)',
                    padding: '9px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1,
                    overflow: 'hidden'
                  }}
                >
                  {/* Dynamic Island Pill Notch */}
                  <div
                    style={{
                      width: '90px',
                      height: '18px',
                      borderRadius: '12px',
                      background: '#000000',
                      margin: '0 auto 8px auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '0 8px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#10b981',
                        boxShadow: '0 0 6px #10b981'
                      }}
                    />
                    <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.5px' }}>
                      NEURAL 4.0
                    </span>
                  </div>

                  {/* OLED Screen Content Container */}
                  <div
                    style={{
                      flex: 1,
                      borderRadius: '24px',
                      background: 'radial-gradient(circle at 50% 10%, rgba(0, 242, 254, 0.08) 0%, #060911 80%)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '12px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Screen Status Bar */}
                    <div className="d-flex justify-content-between align-items-center mb-2" style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                      <span style={{ fontWeight: 700, color: '#ffffff' }}>09:41</span>
                      <div className="d-flex align-items-center gap-2">
                        <FaWifi size={10} />
                        <span style={{ fontSize: '0.62rem', fontWeight: 800 }}>5G</span>
                        <FaBatteryFull size={12} style={{ color: '#10b981' }} />
                      </div>
                    </div>

                    {/* App Header Inside Phone */}
                    <div
                      className="d-flex align-items-center justify-content-between p-2 mb-2"
                      style={{
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <SiReact className="animate-spin-slow" size={20} style={{ color: '#00f2fe' }} />
                        <div className="text-start">
                          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                            React Native AI
                          </div>
                          <div style={{ fontSize: '0.62rem', color: '#00f2fe' }}>
                            Intelligent Engine
                          </div>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(0, 242, 254, 0.15)',
                          color: '#00f2fe',
                          border: '1px solid rgba(0, 242, 254, 0.3)'
                        }}
                      >
                        60 FPS
                      </span>
                    </div>

                    {/* Dynamic Screen Viewport: Switches with Active Tab */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      {/* VIEW 1: VOICE TO JOB */}
                      {activeTab === 'voice' && (
                        <div className="text-center py-2">
                          <div
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '50%',
                              background: 'radial-gradient(circle, rgba(0, 242, 254, 0.3), rgba(0, 242, 254, 0.05))',
                              border: '1.5px solid #00f2fe',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 8px auto',
                              boxShadow: '0 0 16px rgba(0, 242, 254, 0.4)'
                            }}
                          >
                            <FaMicrophone size={18} style={{ color: '#00f2fe' }} />
                          </div>

                          {/* Soundwave equalizer bars */}
                          <div className="d-flex justify-content-center align-items-center gap-1 mb-2" style={{ height: '20px' }}>
                            {[0.3, 0.7, 1, 0.5, 0.9, 0.4, 0.8, 0.6, 0.3].map((height, i) => (
                              <span
                                key={i}
                                style={{
                                  width: '3px',
                                  height: `${height * 100}%`,
                                  background: 'linear-gradient(to top, #00f2fe, #7000ff)',
                                  borderRadius: '2px',
                                  animation: `eqWave 0.8s ease-in-out infinite ${i * 0.1}s`
                                }}
                              />
                            ))}
                          </div>

                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '10px',
                              padding: '7px 9px',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              marginBottom: '7px',
                              fontSize: '0.7rem',
                              color: '#e2e8f0',
                              textAlign: 'left'
                            }}
                          >
                            <span style={{ color: '#00f2fe', fontWeight: 700 }}>🎙️ "Voice Prompt": </span>
                            "Log inspection task for Yacht #42 Port engine fuel line"
                          </div>

                          <div
                            style={{
                              background: 'rgba(16, 185, 129, 0.12)',
                              border: '1px solid rgba(16, 185, 129, 0.35)',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              fontSize: '0.66rem',
                              color: '#10b981',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <span>✓ Task #284 Created</span>
                            <span style={{ color: '#94a3b8', fontWeight: 500 }}>Assigned: Lead Tech</span>
                          </div>
                        </div>
                      )}

                      {/* VIEW 2: DOCUMENT OCR */}
                      {activeTab === 'ocr' && (
                        <div className="py-2">
                          <div
                            style={{
                              position: 'relative',
                              background: 'rgba(255, 255, 255, 0.03)',
                              borderRadius: '12px',
                              padding: '10px',
                              border: '1px dashed rgba(16, 185, 129, 0.5)',
                              overflow: 'hidden',
                              marginBottom: '8px'
                            }}
                          >
                            {/* Animated Scan Beam */}
                            <div
                              className="animate-scan-beam"
                              style={{
                                position: 'absolute',
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #10b981, transparent)',
                                boxShadow: '0 0 10px #10b981'
                              }}
                            />

                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981' }}>
                                📄 Receipt Scan
                              </span>
                              <span style={{ fontSize: '0.6rem', color: '#64748b' }}>Vision OCR</span>
                            </div>

                            <div style={{ fontSize: '0.66rem', color: '#cbd5e1', lineHeight: 1.4, textAlign: 'left' }}>
                              <div>• Vendor: <strong style={{ color: '#ffffff' }}>Marine Tech Solutions</strong></div>
                              <div>• Item: <strong style={{ color: '#ffffff' }}>Hydraulic Filter Kit</strong></div>
                              <div>• Amount: <strong style={{ color: '#10b981' }}>$1,420.00 USD</strong></div>
                            </div>
                          </div>

                          <div
                            style={{
                              background: 'rgba(16, 185, 129, 0.12)',
                              border: '1px solid rgba(16, 185, 129, 0.35)',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              fontSize: '0.66rem',
                              color: '#10b981',
                              fontWeight: 700,
                              textAlign: 'center'
                            }}
                          >
                            ✓ 100% Extracted & Digitized into Firebase
                          </div>
                        </div>
                      )}

                      {/* VIEW 3: AUTO INVOICING */}
                      {activeTab === 'invoice' && (
                        <div className="py-2">
                          <div
                            style={{
                              background: 'rgba(168, 85, 247, 0.08)',
                              borderRadius: '12px',
                              padding: '10px',
                              border: '1px solid rgba(168, 85, 247, 0.3)',
                              marginBottom: '8px',
                              textAlign: 'left'
                            }}
                          >
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#c084fc' }}>
                                #INV-2026-89
                              </span>
                              <span
                                style={{
                                  fontSize: '0.58rem',
                                  padding: '2px 6px',
                                  borderRadius: 'var(--radius-full)',
                                  background: 'rgba(168, 85, 247, 0.2)',
                                  color: '#e9d5ff'
                                }}
                              >
                                Auto-Generated
                              </span>
                            </div>

                            <div style={{ fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.4 }}>
                              <div>Client: <strong style={{ color: '#ffffff' }}>Pacific Medihub App</strong></div>
                              <div>Service: <strong style={{ color: '#ffffff' }}>API & React Native Module</strong></div>
                              <div className="d-flex justify-content-between mt-2 pt-1" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                <span>Total Due:</span>
                                <strong style={{ color: '#c084fc', fontSize: '0.74rem' }}>$3,520.00</strong>
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(0, 242, 254, 0.25))',
                              border: '1px solid rgba(168, 85, 247, 0.4)',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              fontSize: '0.66rem',
                              color: '#ffffff',
                              fontWeight: 700,
                              textAlign: 'center'
                            }}
                          >
                            ⚡ One-Tap Client Dispatch via Push & Email
                          </div>
                        </div>
                      )}

                      {/* VIEW 4: DEV AGENT */}
                      {activeTab === 'code' && (
                        <div className="py-2">
                          <div
                            style={{
                              background: '#030712',
                              borderRadius: '10px',
                              padding: '8px 10px',
                              border: '1px solid rgba(245, 158, 11, 0.3)',
                              marginBottom: '8px',
                              fontFamily: 'monospace',
                              textAlign: 'left'
                            }}
                          >
                            <div className="d-flex gap-1 mb-2">
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }} />
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                            </div>
                            <div style={{ fontSize: '0.62rem', color: '#94a3b8', lineHeight: 1.4 }}>
                              <div style={{ color: '#64748b' }}>{'// React Native AI Hook'}</div>
                              <div><span style={{ color: '#f59e0b' }}>const</span> ai = <span style={{ color: '#38bdf8' }}>useAIWorkflow</span>();</div>
                              <div><span style={{ color: '#f59e0b' }}>await</span> ai.<span style={{ color: '#10b981' }}>optimize</span>({`{ fps: 60 }`});</div>
                            </div>
                          </div>

                          <div
                            style={{
                              background: 'rgba(245, 158, 11, 0.12)',
                              border: '1px solid rgba(245, 158, 11, 0.35)',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              fontSize: '0.66rem',
                              color: '#f59e0b',
                              fontWeight: 700,
                              textAlign: 'center'
                            }}
                          >
                            ✓ Zero Re-renders • 60 FPS Target Locked
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Phone Dock Navigation */}
                    <div
                      className="d-flex justify-content-around align-items-center pt-2 mt-1"
                      style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
                    >
                      {aiTabs.map((tab) => {
                        const Icon = tab.icon;
                        const isCurrent = activeTab === tab.id;
                        return (
                          <div
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            style={{
                              cursor: 'pointer',
                              color: isCurrent ? tab.color : '#64748b',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '2px',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <Icon size={12} />
                            <span style={{ fontSize: '0.55rem', fontWeight: 600 }}>
                              {tab.label.split(' ')[0]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Value Pillars */}
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <div
                    style={{
                      padding: '10px 6px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <FaBolt size={18} style={{ color: '#f59e0b', marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Faster Dev
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{
                      padding: '10px 6px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <FaUsers size={18} style={{ color: '#10b981', marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Happier Users
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{
                      padding: '10px 6px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <FaRocket size={18} style={{ color: '#00f2fe', marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Bigger Scale
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Philosophy: What AI Does Well vs. What It Doesn't Replace */}
        <div
          className="glass-panel p-4 p-md-5 mt-5"
          style={{
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)'
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-5">
              <div className="d-flex align-items-center gap-2 mb-2" style={{ color: 'var(--accent-cyan)' }}>
                <FaBrain size={20} />
                <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Developer Perspective
                </span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '14px', lineHeight: 1.3 }}>
                "AI is here to <span className="gradient-text">empower developers</span> who adapt."
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '18px' }}>
                4+ years into my software development journey, integrating AI agents into my daily mobile workflow has been a true game changer. From eliminating repetitive code to rapid prototyping, AI helps me move faster and think deeper.
              </p>
              <div
                style={{
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  borderLeft: '4px solid var(--accent-cyan)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                "The gap is no longer between 'good' and 'bad' developers — it’s between those who adapt and those who don’t."
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="row g-3">
                {/* Column 1: What AI Does Well */}
                <div className="col-12 col-md-6">
                  <div
                    style={{
                      padding: '20px',
                      borderRadius: '18px',
                      background: 'rgba(16, 185, 129, 0.06)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      height: '100%'
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-3" style={{ color: '#10b981' }}>
                      <FaCheckCircle size={18} />
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0 }}>
                        What AI Does Well
                      </h4>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <li className="d-flex align-items-start gap-2 mb-2">
                        <span style={{ color: '#10b981', fontWeight: 700 }}>•</span>
                        <span>Handles repetitive and time-consuming tasks</span>
                      </li>
                      <li className="d-flex align-items-start gap-2 mb-2">
                        <span style={{ color: '#10b981', fontWeight: 700 }}>•</span>
                        <span>Speeds up development, testing, and experimentation</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span style={{ color: '#10b981', fontWeight: 700 }}>•</span>
                        <span>Acts as an intelligent 24/7 coding assistant</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 2: What It Doesn't Replace */}
                <div className="col-12 col-md-6">
                  <div
                    style={{
                      padding: '20px',
                      borderRadius: '18px',
                      background: 'rgba(0, 242, 254, 0.06)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      height: '100%'
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-3" style={{ color: 'var(--accent-cyan)' }}>
                      <FaRobot size={18} />
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0 }}>
                        What It Doesn't Replace
                      </h4>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <li className="d-flex align-items-start gap-2 mb-2">
                        <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>•</span>
                        <span>Real-world problem solving & business logic</span>
                      </li>
                      <li className="d-flex align-items-start gap-2 mb-2">
                        <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>•</span>
                        <span>System architecture & mobile design thinking</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>•</span>
                        <span>Experience-driven engineering decisions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Banner */}
        <div
          className="glass-panel p-4 mt-4 text-center"
          style={{
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(112, 0, 255, 0.1) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.3)'
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 800,
              fontStyle: 'italic',
              margin: '0 0 8px 0',
              fontFamily: 'var(--font-display)'
            }}
          >
            "Build Smarter. Automate More. Create Better Experiences."
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            Combining cutting-edge artificial intelligence with production React Native architecture for next-generation mobile applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiInnovations;
