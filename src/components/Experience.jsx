import React from 'react';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaBriefcase />
            <span>Track Record</span>
          </div>
          <h2>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p>
            A chronological timeline of building, scaling, and deploying mobile apps and web platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, #00f2fe 0%, #4facfe 50%, #7000ff 100%)',
              opacity: 0.4
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {experienceData.map((exp, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '24px',
                  position: 'relative'
                }}
              >
                {/* Glowing Node Dot */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: '0 0 16px rgba(0, 242, 254, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 2,
                    marginTop: '6px'
                  }}
                >
                  <FaBriefcase size={16} style={{ color: 'var(--accent-cyan)' }} />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-panel p-4 p-md-5"
                  style={{
                    flex: 1,
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  {/* Top Metadata */}
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 14px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 242, 254, 0.1)',
                        border: '1px solid rgba(0, 242, 254, 0.3)',
                        color: 'var(--accent-cyan)',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      <FaCalendarAlt size={11} /> {exp.period}
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <FaMapMarkerAlt size={12} /> {exp.location}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      marginBottom: '4px',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      marginBottom: '16px'
                    }}
                  >
                    {exp.company}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      marginBottom: '20px'
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Key Highlights */}
                  <div style={{ marginBottom: '22px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {exp.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '8px'
                          }}
                        >
                          <FaCheckCircle
                            size={14}
                            style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-color)'
                    }}
                  >
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
