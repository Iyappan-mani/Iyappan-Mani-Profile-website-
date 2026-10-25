import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
      setVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      onClick={scrollToTop}
      className="back-to-top-btn interactive-hover"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '54px',
        height: '54px',
        borderRadius: '50%',
        background: 'var(--bg-glass-heavy)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--border-color)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), var(--glow-cyan)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 9990,
        transition: 'all 0.3s ease'
      }}
      title="Back to Top"
    >
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '54px',
          height: '54px',
          transform: 'rotate(-90deg)'
        }}
      >
        <circle
          cx="27"
          cy="27"
          r={radius}
          stroke="var(--border-color)"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="27"
          cy="27"
          r={radius}
          stroke="var(--accent-cyan)"
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
        />
      </svg>
      <FaArrowUp size={16} style={{ color: 'var(--accent-cyan)', zIndex: 1 }} />
    </div>
  );
};

export default BackToTop;
