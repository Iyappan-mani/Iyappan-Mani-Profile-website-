import React from 'react';
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa';
import { educationData, personalInfo } from '../data/portfolioData';

const Education = () => {
  const interests = [
    {
      title: 'Positive Collaboration',
      desc: 'Ability to deal with people positively and act as a team facilitator.'
    },
    {
      title: 'Continuous Learning',
      desc: 'Innovative mindset with a strong willingness to learn and teach others.'
    },
    {
      title: 'Industry Trends',
      desc: 'Actively exploring and adopting new technologies and current industry trends.'
    }
  ];

  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaGraduationCap />
            <span>Academic Background</span>
          </div>
          <h2>
            Educational <span className="gradient-text">Qualifications</span>
          </h2>
          <p>
            Academic background from undergraduate engineering to postgraduate business administration.
          </p>
        </div>

        <div className="row g-4">
          {/* Left Column: Formal Degrees */}
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column gap-4">
              {educationData.map((item, index) => (
                <div key={index} className="glass-panel p-4 p-md-5">
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
                      <FaCalendarAlt size={11} /> {item.period}
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
                      <FaMapMarkerAlt size={12} /> {item.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px' }}>
                    {item.degree}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      marginBottom: '8px'
                    }}
                  >
                    {item.institution}
                  </div>

                  {item.grade && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#10b981',
                        marginBottom: '10px',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(16, 185, 129, 0.1)'
                      }}
                    >
                      <FaAward size={12} /> {item.grade}
                    </div>
                  )}

                  {item.description && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Career Objective & Interests */}
          <div className="col-12 col-lg-5">
            <div className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaLightbulb size={20} style={{ color: '#00f2fe' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                    Career Objective
                  </h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  {personalInfo.careerObjective}
                </p>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaHeart size={18} style={{ color: '#ec4899' }} />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    Interests & Values
                  </h4>
                </div>

                <div className="d-flex flex-column gap-3">
                  {interests.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <h5 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--accent-cyan)' }}>
                        {item.title}
                      </h5>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Info Snapshot */}
              <div
                style={{
                  marginTop: '24px',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <div><strong>Languages:</strong> {personalInfo.personalDetails?.languages}</div>
                  <div><strong>Nationality:</strong> {personalInfo.personalDetails?.nationality}</div>
                  <div><strong>Location:</strong> {personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
