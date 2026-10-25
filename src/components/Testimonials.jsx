import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaComments } from 'react-icons/fa';
import { testimonialsData } from '../data/portfolioData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="testimonials" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaComments />
            <span>Client Praise & Endorsements</span>
          </div>
          <h2>
            Trusted by <span className="gradient-text">Founders & Teams</span>
          </h2>
          <p>
            Real feedback from collaborators and product leaders who trusted me with their mission-critical mobile and web apps.
          </p>
        </div>

        {/* Testimonials Grid for Large Screens & Carousel Controls */}
        <div className="row g-4 d-none d-lg-flex">
          {testimonialsData.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div
                className="glass-panel p-4 h-100 d-flex flex-column justify-content-between"
                style={{ borderRadius: '24px' }}
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-1" style={{ color: '#fbbf24' }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} size={15} />
                      ))}
                    </div>
                    <FaQuoteLeft size={20} style={{ color: 'rgba(0, 242, 254, 0.4)' }} />
                  </div>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      marginBottom: '24px'
                    }}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-color)'
                  }}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--accent-cyan)'
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0 }}>
                      {item.name}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', display: 'block' }}>
                      {item.role}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel View for Mobile & Tablet */}
        <div className="d-lg-none">
          {testimonialsData[currentIndex] && (
            <div
              className="glass-panel p-4 p-md-5"
              style={{ borderRadius: '24px', minHeight: '320px' }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex gap-1" style={{ color: '#fbbf24' }}>
                  {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                <FaQuoteLeft size={24} style={{ color: 'rgba(0, 242, 254, 0.4)' }} />
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  marginBottom: '24px'
                }}
              >
                "{testimonialsData[currentIndex].quote}"
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-color)'
                }}
              >
                <img
                  src={testimonialsData[currentIndex].avatar}
                  alt={testimonialsData[currentIndex].name}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-cyan)'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <span style={{ fontSize: '0.82rem', color: 'var(--accent-blue)', display: 'block' }}>
                    {testimonialsData[currentIndex].role}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    {testimonialsData[currentIndex].company}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: '42px',
                height: '42px',
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
              <FaChevronLeft size={14} />
            </button>

            <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {currentIndex + 1} / {testimonialsData.length}
            </span>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: '42px',
                height: '42px',
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
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
