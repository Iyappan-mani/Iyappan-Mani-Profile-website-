import React from 'react';
import {
  FaLinkedin,
  FaExternalLinkAlt,
  FaThumbsUp,
  FaComment,
  FaShare
} from 'react-icons/fa';
import { linkedInPostsData, personalInfo } from '../data/portfolioData';
import picImg from '../image/pic.png';

const LinkedInPosts = () => {
  return (
    <section id="linkedin-posts" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: '#0a66c2' }}>
            <FaLinkedin size={18} />
            <span>LinkedIn Activity</span>
          </div>
          <h2>
            Recent <span className="gradient-text">LinkedIn Posts</span>
          </h2>
          <p>
            Project milestones, app deployment updates, and technical insights shared on my professional network.
          </p>
        </div>

        {/* Posts Cards Grid */}
        <div className="row g-4 align-items-stretch">
          {/* Featured Post (Post 1): AI Agents & 4+ Years Journey */}
          {linkedInPostsData.length > 0 && (
            <div className="col-12 col-lg-7">
              {(() => {
                const post = linkedInPostsData[0];
                return (
                  <div
                    className="glass-panel p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
                    style={{
                      borderRadius: '24px',
                      border: '1px solid rgba(0, 242, 254, 0.35)',
                      boxShadow: '0 12px 30px -10px rgba(0, 242, 254, 0.15)',
                      position: 'relative'
                    }}
                  >
                    {/* Featured Ribbon Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '18px',
                        right: '18px',
                        background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(112, 0, 255, 0.15))',
                        border: '1px solid var(--accent-cyan)',
                        color: 'var(--accent-cyan)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Featured Post
                    </div>

                    <div>
                      {/* Post Author Header */}
                      <div
                        className="d-flex align-items-center justify-content-between mb-4 pb-3"
                        style={{ borderBottom: '1px solid var(--border-color)', paddingRight: '110px' }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div
                            style={{
                              width: '52px',
                              height: '52px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(112, 0, 255, 0.2))',
                              border: '2px solid #0a66c2',
                              overflow: 'hidden',
                              flexShrink: 0
                            }}
                          >
                            <img
                              src={picImg}
                              alt={post.author}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          </div>
                          <div>
                            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                              {post.author}
                            </h4>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', lineHeight: 1.3 }}>
                              Software Developer • Authorselvi Software Technology
                            </span>
                            <span style={{ fontSize: '0.74rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                              {post.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.94rem',
                          lineHeight: 1.75,
                          marginBottom: '20px',
                          whiteSpace: 'pre-line'
                        }}
                      >
                        {post.content}
                      </div>

                      {/* Hashtags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              padding: '3px 10px',
                              borderRadius: 'var(--radius-full)',
                              background: 'var(--bg-secondary)',
                              color: '#0a66c2',
                              border: '1px solid var(--border-color)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Post Footer & Engagement */}
                    <div>
                      <div
                        className="d-flex justify-content-between align-items-center pt-3"
                        style={{ borderTop: '1px solid var(--border-color)' }}
                      >
                        <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <span className="d-flex align-items-center gap-1">
                            <FaThumbsUp size={14} style={{ color: '#0a66c2' }} /> {post.metrics.likes}
                          </span>
                          <span className="d-flex align-items-center gap-1">
                            <FaComment size={13} style={{ color: 'var(--accent-cyan)' }} /> {post.metrics.comments}
                          </span>
                          <span className="d-flex align-items-center gap-1">
                            <FaShare size={13} />
                          </span>
                        </div>

                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-modern btn-primary-gradient interactive-hover"
                          style={{
                            padding: '8px 18px',
                            fontSize: '0.82rem',
                            gap: '8px'
                          }}
                        >
                          <FaLinkedin size={14} />
                          <span>View on LinkedIn</span>
                          <FaExternalLinkAlt size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Additional Posts (Posts 2 & 3): Deployment & Project Architecture */}
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column gap-4 h-100">
              {linkedInPostsData.slice(1).map((post) => (
                <div
                  key={post.id}
                  className="glass-panel p-4 flex-grow-1 d-flex flex-column justify-content-between"
                  style={{
                    borderRadius: '24px',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.35s ease'
                  }}
                >
                  <div>
                    {/* Post Author Header */}
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-2" style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <div className="d-flex align-items-center gap-3">
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(112, 0, 255, 0.2))',
                            border: '2px solid #0a66c2',
                            overflow: 'hidden',
                            flexShrink: 0
                          }}
                        >
                          <img
                            src={picImg}
                            alt={post.author}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '0.96rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                            {post.author}
                          </h4>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', lineHeight: 1.3 }}>
                            Software Developer
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                            {post.date}
                          </span>
                        </div>
                      </div>

                      <a
                        href={personalInfo.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: '#0a66c2',
                          transition: 'transform 0.25s ease'
                        }}
                        className="interactive-hover"
                        title="Open LinkedIn Profile"
                      >
                        <FaLinkedin size={22} />
                      </a>
                    </div>

                    {/* Post Content */}
                    <div
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        lineHeight: 1.65,
                        marginBottom: '14px',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {post.content}
                    </div>

                    {/* Hashtags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--bg-secondary)',
                            color: '#0a66c2',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Footer & Engagement */}
                  <div>
                    <div
                      className="d-flex justify-content-between align-items-center pt-2"
                      style={{ borderTop: '1px solid var(--border-color)' }}
                    >
                      <div className="d-flex align-items-center gap-3" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <span className="d-flex align-items-center gap-1">
                          <FaThumbsUp size={12} style={{ color: '#0a66c2' }} /> {post.metrics.likes}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <FaComment size={11} style={{ color: 'var(--accent-cyan)' }} /> {post.metrics.comments}
                        </span>
                        <span className="d-flex align-items-center gap-1">
                          <FaShare size={11} />
                        </span>
                      </div>

                      <a
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-modern btn-outline-glass interactive-hover"
                        style={{
                          padding: '5px 12px',
                          fontSize: '0.76rem',
                          gap: '6px'
                        }}
                      >
                        <span>View Post</span>
                        <FaExternalLinkAlt size={9} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global LinkedIn Connect Banner */}
        <div
          className="glass-panel p-4 p-md-5 mt-5 text-center"
          style={{
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(10, 102, 194, 0.12) 0%, rgba(0, 242, 254, 0.08) 100%)',
            border: '1px solid rgba(10, 102, 194, 0.3)'
          }}
        >
          <div className="d-flex flex-column align-items-center gap-3">
            <FaLinkedin size={40} style={{ color: '#0a66c2' }} />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
              Connect with Me on <span style={{ color: '#0a66c2' }}>LinkedIn</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: 0, fontSize: '0.96rem' }}>
              Follow my profile to stay updated with latest mobile development projects, app store launches, and technical engineering milestones at Authorselvi Software Technology.
            </p>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-modern btn-primary-gradient mt-2 interactive-hover"
              style={{
                padding: '12px 28px',
                fontSize: '0.95rem',
                gap: '10px'
              }}
            >
              <FaLinkedin size={18} />
              <span>Visit LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;
