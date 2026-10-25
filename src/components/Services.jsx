import React from 'react';
import {
  FaMobileAlt,
  FaRocket,
  FaLaptopCode,
  FaPalette,
  FaCloud,
  FaTachometerAlt,
  FaCheckCircle,
  FaCogs
} from 'react-icons/fa';
import { servicesData } from '../data/portfolioData';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'FaMobileAlt':
      return <FaMobileAlt size={26} style={{ color: '#00f2fe' }} />;
    case 'FaRocket':
      return <FaRocket size={26} style={{ color: '#10b981' }} />;
    case 'FaLaptopCode':
      return <FaLaptopCode size={26} style={{ color: '#4facfe' }} />;
    case 'FaPalette':
      return <FaPalette size={26} style={{ color: '#ec4899' }} />;
    case 'FaCloud':
      return <FaCloud size={26} style={{ color: '#f59e0b' }} />;
    case 'FaTachometerAlt':
      return <FaTachometerAlt size={26} style={{ color: '#8a2be2' }} />;
    default:
      return <FaCogs size={26} style={{ color: '#00f2fe' }} />;
  }
};

const Services = () => {
  return (
    <section id="services" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaCogs />
            <span>Core Competencies</span>
          </div>
          <h2>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p>
            Key areas of specialization in cross-platform mobile app development, backend integration, and store publishing.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="row g-4">
          {servicesData.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="glass-panel p-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.35s ease'
                }}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {getServiceIcon(service.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 242, 254, 0.08)',
                        border: '1px solid rgba(0, 242, 254, 0.25)',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      marginBottom: '12px',
                      lineHeight: 1.35
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      marginBottom: '20px'
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-color)'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: '10px'
                    }}
                  >
                    Key Deliverables:
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '6px'
                        }}
                      >
                        <FaCheckCircle
                          size={13}
                          style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
