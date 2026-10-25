import React, { useState } from 'react';
import {
  FaFolderOpen,
  FaExternalLinkAlt,
  FaGithub,
  FaMobileAlt,
  FaLaptopCode,
  FaStar,
  FaArrowRight,
  FaLayerGroup
} from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FaFolderOpen />
            <span>Featured Case Studies</span>
          </div>
          <h2>
            Featured <span className="gradient-text">Projects & Apps</span>
          </h2>
          <p>
            Explore real-world mobile apps shipped to stores and scalable web platforms built with cutting-edge technologies.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  padding: '9px 22px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
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
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="glass-panel h-100 d-flex flex-column justify-content-between"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.35s ease'
                }}
              >
                {/* Project Header Mockup Area */}
                <div
                  style={{
                    height: '180px',
                    position: 'relative',
                    background:
                      project.category === 'Mobile Apps'
                        ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.2) 0%, rgba(112, 0, 255, 0.3) 100%)'
                        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 242, 254, 0.3) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--border-color)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle Background Pattern */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage:
                        'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  />

                  {/* Device Icon Avatar */}
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '20px',
                      background: 'var(--bg-glass-heavy)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                      zIndex: 1
                    }}
                    className="animate-float"
                  >
                    {project.category === 'Mobile Apps' ? (
                      <FaMobileAlt size={34} style={{ color: 'var(--accent-cyan)' }} />
                    ) : project.category === 'Web Apps' ? (
                      <FaLaptopCode size={34} style={{ color: '#4facfe' }} />
                    ) : (
                      <FaLayerGroup size={34} style={{ color: '#10b981' }} />
                    )}
                  </div>

                  {/* Top Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '16px',
                      right: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: 2
                    }}
                  >
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-glass-heavy)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {project.category}
                    </span>

                    {project.featured && (
                      <span
                        style={{
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(245, 158, 11, 0.2)',
                          border: '1px solid rgba(245, 158, 11, 0.4)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#f59e0b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <FaStar size={10} /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Area */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '6px' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
                      {project.subtitle}
                    </p>

                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        marginBottom: '18px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: 'var(--radius-full)',
                            color: 'var(--accent-cyan)'
                          }}
                        >
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-color)'
                    }}
                  >
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="btn-modern btn-primary-gradient interactive-hover"
                      style={{
                        padding: '8px 18px',
                        fontSize: '0.84rem'
                      }}
                    >
                      <span>Case Study</span>
                      <FaArrowRight size={11} />
                    </button>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-primary)',
                            textDecoration: 'none'
                          }}
                          className="interactive-hover"
                          title="View Repository"
                        >
                          <FaGithub size={15} />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-cyan)',
                            textDecoration: 'none'
                          }}
                          className="interactive-hover"
                          title="Open Live Preview"
                        >
                          <FaExternalLinkAlt size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
