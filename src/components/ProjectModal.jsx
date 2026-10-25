import React, { useEffect } from 'react';
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaGooglePlay,
  FaApple,
  FaCheckCircle,
  FaLayerGroup
} from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(5, 8, 16, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-glass-heavy)',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), var(--glow-cyan)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
          className="interactive-hover"
        >
          <FaTimes size={16} />
        </button>

        {/* Category & Badge */}
        <div className="d-flex align-items-center gap-2 mb-2">
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(0, 242, 254, 0.12)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--accent-cyan)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                color: '#f59e0b',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              ★ Featured Case Study
            </span>
          )}
        </div>

        {/* Project Title */}
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '6px' }}>
          {project.title}
        </h2>
        <h5 style={{ color: 'var(--text-muted)', fontWeight: 600, marginBottom: '20px' }}>
          {project.subtitle}
        </h5>

        {/* Metrics Banner */}
        {project.metrics && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '16px 20px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              marginBottom: '24px'
            }}
          >
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key} style={{ flex: 1, minWidth: '120px' }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 700
                  }}
                >
                  {key}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* In-depth Narrative */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
            Executive Summary
          </h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            {project.description}
          </p>
        </div>

        {/* Architecture & Engineering Approach */}
        {project.architecture && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaLayerGroup style={{ color: '#00f2fe' }} /> Architecture & Tech Stack
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {project.architecture}
            </p>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && (
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px' }}>
              Key Accomplishments & Features
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '8px'
                  }}
                >
                  <FaCheckCircle
                    size={15}
                    style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Tags */}
        <div style={{ marginBottom: '32px' }}>
          <h5 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
            Technologies Integrated:
          </h5>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  padding: '5px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* External Links & Store Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-modern btn-primary-gradient"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              <FaExternalLinkAlt size={13} />
              <span>Live Demonstration</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-modern btn-outline-glass"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              <FaGithub size={15} />
              <span>Source Repository</span>
            </a>
          )}

          {project.storeLinks?.playStore && (
            <a
              href={project.storeLinks.playStore}
              target="_blank"
              rel="noreferrer"
              className="btn-modern btn-outline-glass"
              style={{ padding: '12px 20px', fontSize: '0.9rem' }}
            >
              <FaGooglePlay size={15} style={{ color: '#00e676' }} />
              <span>Google Play</span>
            </a>
          )}

          {project.storeLinks?.appStore && (
            <a
              href={project.storeLinks.appStore}
              target="_blank"
              rel="noreferrer"
              className="btn-modern btn-outline-glass"
              style={{ padding: '12px 20px', fontSize: '0.9rem' }}
            >
              <FaApple size={16} />
              <span>App Store</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
