import React, { useState } from 'react';
import {
  FaPaperPlane,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaComments,
  FaClock
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Professional Inquiry',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission / trigger client mailto and success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger mailto link as convenience
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `${formData.subject} from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Iyappan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaComments />
            <span>Get In Touch</span>
          </div>
          <h2>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p>
            Feel free to reach out for career opportunities, technical discussions, or professional collaboration.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Left Column: Direct Connect & Availability */}
          <div className="col-12 col-lg-5">
            <div
              className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
              style={{ borderRadius: '24px' }}
            >
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>
                  Direct Contact <br />
                  <span className="gradient-text-emerald">& Networking</span>
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Currently working as a <strong>Software Developer at Authorselvi Software Technology</strong>. 
                  Reach out directly on LinkedIn, WhatsApp, or drop a message below.
                </p>

                {/* Contact Cards */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {/* WhatsApp Quick Chat */}
                  <a
                    href={personalInfo.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(37, 211, 102, 0.1)',
                      border: '1px solid rgba(37, 211, 102, 0.3)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    className="interactive-hover"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          background: '#25d366',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff'
                        }}
                      >
                        <FaWhatsapp size={22} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, display: 'block' }}>
                          Chat on WhatsApp
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#25d366', fontWeight: 600 }}>
                          Instant Direct Response
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#25d366' }}>
                      Message Now →
                    </span>
                  </a>

                  {/* Email with Copy */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          background: 'rgba(0, 242, 254, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)'
                        }}
                      >
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                          Email Address
                        </span>
                        <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {personalInfo.displayEmail}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      style={{
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: copiedEmail ? '#10b981' : 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        color: copiedEmail ? '#070a13' : 'var(--text-primary)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.25s ease'
                      }}
                      className="interactive-hover"
                    >
                      {copiedEmail ? <FaCheck size={12} /> : <FaCopy size={12} />}
                      <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Location & Timezone */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 20px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <FaMapMarkerAlt size={18} style={{ color: '#ec4899' }} />
                    <div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                        Base Location
                      </span>
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {personalInfo.location} (IST / UTC+5:30)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Ribbon */}
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 242, 254, 0.06)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <FaClock size={20} style={{ color: 'var(--accent-cyan)' }} />
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>
                    Rapid Response Commitment
                  </span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    Inquiries typically answered within 2 hours during active business hours.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="col-12 col-lg-7">
            <div
              className="glass-panel p-4 p-md-5 h-100"
              style={{ borderRadius: '24px', position: 'relative' }}
            >
              {isSubmitted ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '400px',
                    textAlign: 'center',
                    padding: '20px'
                  }}
                >
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '2px solid #10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      marginBottom: '20px'
                    }}
                    className="animate-pulse-glow"
                  >
                    <FaCheck size={32} />
                  </div>

                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>
                    Message Dispatched Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been forwarded and an email draft has been generated. I will get back to you promptly!
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Mobile App Development (React Native)',
                        budget: '$1,000 - $5,000',
                        message: ''
                      });
                    }}
                    className="btn-modern btn-outline-glass"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '6px' }}>
                    Send a Message
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>
                    Fill out the form below and let me know about your product timeline and objectives.
                  </p>

                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-12 col-md-6">
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'all 0.25s ease'
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-12 col-md-6">
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'all 0.25s ease'
                        }}
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-12">
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject / Reason for contact"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'all 0.25s ease'
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          fontSize: '0.92rem',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-modern btn-primary-gradient w-100"
                        style={{ padding: '14px', fontSize: '1rem' }}
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <FaPaperPlane size={14} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
