import React, { useState } from 'react';
import {
  SiReact,
  SiJavascript,
  SiRedux,
  SiGoogleplay,
  SiAppstore,
  SiNextdotjs,
  SiFirebase,
  SiPostman,
  SiAndroidstudio,
  SiXcode,
  SiGithub,
  SiHtml5,
  SiBootstrap,
  SiFigma
} from 'react-icons/si';
import { FaLaptopCode, FaCheck } from 'react-icons/fa';
import { skillsData } from '../data/portfolioData';

const getSkillIcon = (iconName, color) => {
  const iconProps = { size: 30, style: { color } };
  switch (iconName) {
    case 'SiReact':
      return <SiReact {...iconProps} />;
    case 'SiJavascript':
      return <SiJavascript {...iconProps} />;
    case 'SiRedux':
      return <SiRedux {...iconProps} />;
    case 'SiGoogleplay':
      return <SiGoogleplay {...iconProps} />;
    case 'SiAppstore':
      return <SiAppstore {...iconProps} />;
    case 'SiNextdotjs':
      return <SiNextdotjs {...iconProps} />;
    case 'SiFirebase':
      return <SiFirebase {...iconProps} />;
    case 'SiPostman':
      return <SiPostman {...iconProps} />;
    case 'SiAndroidstudio':
      return <SiAndroidstudio {...iconProps} />;
    case 'SiXcode':
      return <SiXcode {...iconProps} />;
    case 'SiGithub':
      return <SiGithub {...iconProps} />;
    case 'SiHtml5':
      return <SiHtml5 {...iconProps} />;
    case 'SiBootstrap':
      return <SiBootstrap {...iconProps} />;
    case 'SiFigma':
      return <SiFigma {...iconProps} />;
    default:
      return <SiReact {...iconProps} />;
  }
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData.items
      : skillsData.items.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaLaptopCode />
            <span>Technical Arsenal</span>
          </div>
          <h2>
            Software <span className="gradient-text">Proficiency</span>
          </h2>
          <p>
            Technical skills and development tools utilized for mobile application development, backend integration, and store deployments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {skillsData.categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '9px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                  background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-card)',
                  color: isSelected ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: isSelected ? '0 0 16px rgba(0, 242, 254, 0.25)' : 'none',
                  transition: 'all 0.25s ease'
                }}
                className="interactive-hover"
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="row g-4">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="col-12 col-sm-6 col-lg-4">
              <div
                className="glass-panel p-4 h-100"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  {/* Top Bar with Icon & Percentage */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 20px -6px ${skill.color}33`
                      }}
                    >
                      {getSkillIcon(skill.icon, skill.color)}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-code)',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(0, 242, 254, 0.08)'
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>
                    {skill.name}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      display: 'block',
                      marginBottom: '10px'
                    }}
                  >
                    {skill.category}
                  </span>

                  {/* Highlight note */}
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '16px'
                    }}
                  >
                    {skill.highlight}
                  </p>
                </div>

                {/* Animated Proficiency Bar */}
                <div>
                  <div
                    style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-tertiary)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, #00f2fe)`,
                        borderRadius: 'var(--radius-full)',
                        boxShadow: `0 0 10px ${skill.color}88`,
                        transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="glass-panel p-4 mt-5 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.08), rgba(112, 0, 255, 0.08))',
            border: '1px solid rgba(0, 242, 254, 0.2)'
          }}
        >
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Looking for a custom tech stack or proprietary SDK integration?
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.88rem',
                color: '#10b981',
                fontWeight: 600
              }}
            >
              <FaCheck /> Ready to adapt rapidly
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
