import React, { useEffect } from 'react';
import {
  FaTimes,
  FaPrint,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { personalInfo, experienceData, educationData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(5, 8, 16, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'var(--bg-glass-heavy)',
          borderRadius: '24px',
          padding: '36px',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.7), var(--glow-cyan)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Actions */}
        <div className="d-flex justify-content-between align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="d-flex gap-2">
            <button
              onClick={handlePrint}
              className="btn-modern btn-outline-glass"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <FaPrint size={13} />
              <span>Print / Save as PDF</span>
            </button>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            className="interactive-hover"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Resume Content Container (Printable) */}
        <div id="printable-resume">
          {/* Header Contact Card */}
          <div className="mb-4">
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
              <div>
                <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '4px' }}>
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
                <h4 style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '12px' }}>
                  {personalInfo.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  <strong>Career Objective:</strong> {personalInfo.careerObjective}
                </p>
              </div>

              {/* Contact Pill Details */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)'
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <FaEnvelope style={{ color: 'var(--accent-cyan)' }} />
                  <span>{personalInfo.displayEmail}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaPhoneAlt style={{ color: '#10b981' }} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaMapMarkerAlt style={{ color: '#ec4899' }} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Professional Strengths */}
          <div className="mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
              Professional Strengths
            </h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0 }}>
              {personalInfo.strengths?.map((str, idx) => (
                <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {str}
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Software Proficiency */}
          <div className="mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
              Software Proficiency & Technical Skills
            </h4>
            <div className="row g-2">
              <div className="col-12 col-md-4">
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.88rem' }}>Technical Skills:</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  React Native, JavaScript, React.js, Firebase integration
                </span>
              </div>
              <div className="col-12 col-md-4">
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.88rem' }}>Deployment & Tools:</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Android Studio, Xcode, Play Store & App Store Deployment, Play Console, Apple Developer Console
                </span>
              </div>
              <div className="col-12 col-md-4">
                <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.88rem' }}>Source Code & Others:</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Git, GitHub, REST APIs, Graphic design, UI/UX development, Unit testing
                </span>
              </div>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-cyan)', marginBottom: '16px' }}>
              Professional Experience
            </h4>
            <div className="d-flex flex-column gap-3">
              {experienceData.map((exp, index) => (
                <div key={index}>
                  <div className="d-flex justify-content-between align-items-baseline mb-1">
                    <h5 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                      {exp.role} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>| {exp.company}</span>
                    </h5>
                    <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    {exp.description}
                  </p>
                  <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0 }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
              Educational Qualification
            </h4>
            {educationData.map((edu, eIdx) => (
              <div key={eIdx} className="mb-2">
                <div className="d-flex justify-content-between">
                  <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    {edu.degree} - {edu.institution}
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>{edu.period}</span>
                </div>
                <span style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 600 }}>
                  {edu.grade}
                </span>
              </div>
            ))}
          </div>

          {/* Section: Personal Information */}
          <div className="mb-3">
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
              Personal Information
            </h4>
            <div className="row g-2" style={{ fontSize: '0.88rem' }}>
              <div className="col-6 col-md-4">
                <span style={{ color: 'var(--text-muted)' }}>Father's Name: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.personalDetails?.fatherName}</strong>
              </div>
              <div className="col-6 col-md-4">
                <span style={{ color: 'var(--text-muted)' }}>Date of Birth: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.personalDetails?.dob}</strong>
              </div>
              <div className="col-6 col-md-4">
                <span style={{ color: 'var(--text-muted)' }}>Gender: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.personalDetails?.gender}</strong>
              </div>
              <div className="col-6 col-md-4">
                <span style={{ color: 'var(--text-muted)' }}>Nationality: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.personalDetails?.nationality}</strong>
              </div>
              <div className="col-6 col-md-4">
                <span style={{ color: 'var(--text-muted)' }}>Languages: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.personalDetails?.languages}</strong>
              </div>
              <div className="col-6 col-md-4">
                <span style={{ color: 'var(--text-muted)' }}>Marital Status: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.personalDetails?.maritalStatus}</strong>
              </div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Declaration: I hereby declare that all the information furnished above is true to my knowledge and belief.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
