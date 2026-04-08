'use client';

import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { createPortal } from 'react-dom';

const THEME_STORAGE_KEY = 'portfolio-theme';

const themeTokens = {
  light: {
    '--bg': '#E5E7EB',
    '--surface': '#F1F5F9',
    '--surface-muted': '#D1D5DB',
    '--fg-secondary': '#555555',
    '--fg-tertiary': '#888888',
    '--accent-font': '#1A3FA3',
    '--border': '#e1e1e1',
    '--divider': 'rgba(26, 63, 163, 0.18)',
    '--header-bg': 'rgba(229,231,235,0.95)',
    '--tag-bg': '#ffffff',
    '--on-accent': '#E5E7EB',
    '--overlay': 'rgba(15, 23, 42, 0.35)',
    '--toggle-bg': 'rgba(15, 23, 42, 0.9)',
    '--toggle-hover': 'rgba(15, 23, 42, 0.94)',
  },
  dark: {
    '--bg': '#16161A',
    '--surface': '#16161A',
    '--surface-muted': '#888888',
    '--fg-secondary': '#A7B4C8',
    '--fg-tertiary': '#A7B4C8',
    '--accent-font': '#FFFFF0',
    '--border': '#D1D5DB',
    '--divider': '#D1D5DB',
    '--header-bg': 'rgba(22, 22, 26, 0.95)',
    '--tag-bg': '#0F172A',
    '--on-accent': '#E5E7EB',
    '--overlay': 'rgba(15, 23, 42, 0.62)',
    '--toggle-bg': 'rgba(15, 23, 42, 0.9)',
    '--toggle-hover': 'rgba(15, 23, 42, 0.94)',
  },
};

const customStyles = {
  root: {
    backgroundColor: 'var(--bg)',
  },
  layoutContainer: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr 335px',
    minHeight: '100vh',
  },
  topRail: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: '#1A3FA3',
    zIndex: 120,
  },
  colIdentity: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    borderRight: '1px solid var(--divider)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    overflowY: 'auto',
    backgroundColor: 'var(--bg)',
    boxShadow: 'inset 0 -4px 0 #1A3FA3',
  },
  logoMark: {
    width: '64px',
    height: '64px',
    background: '#1A3FA3',
    color: 'var(--on-accent)',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Playfair Display", "Times New Roman", serif',
    fontSize: '22px',
    marginBottom: '24px',
  },
  brandBlock: {
    marginBottom: '48px',
  },
  engineerMeta: {
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid var(--border)',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  navItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '12px',
    color: 'var(--fg-secondary)',
    borderBottom: '1px solid transparent',
    transition: 'all 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  navItemActive: {
    color: 'var(--accent-font)',
    borderBottom: '1px solid #1A3FA3',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    background: '#2ecc71',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '6px',
    animation: 'pulse 2s infinite',
  },
  colMain: {
    position: 'fixed',
    top: 0,
    left: '300px',
    right: '335px',
    height: '100vh',
    overflowY: 'auto',
    borderRight: '1px solid var(--divider)',
    backgroundColor: 'var(--bg)',
  },
  mobileMain: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    height: 'auto',
    minHeight: 'calc(100vh - 4px)',
    overflowY: 'visible',
    borderRight: 'none',
    backgroundColor: 'var(--bg)',
  },
  mobileShell: {
    paddingTop: '4px',
    minHeight: '100vh',
    backgroundColor: 'var(--bg)',
  },
  mobileHeader: {
    padding: '16px',
    borderBottom: '1px solid var(--border)',
    background: 'var(--surface)',
  },
  mobileHeaderRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '12px',
  },
  mobileHeaderText: {
    flex: 1,
    minWidth: 0,
  },
  mobileName: {
    fontFamily: '"Playfair Display", "Times New Roman", serif',
    fontSize: '28px',
    color: 'var(--accent-font)',
    lineHeight: 1.1,
    marginBottom: '6px',
  },
  mobileRole: {
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--fg-secondary)',
  },
  mobileProfileMark: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    border: '1px solid rgba(26, 63, 163, 0.3)',
    boxShadow: '0 8px 20px rgba(15, 23, 42, 0.18)',
    background: 'var(--surface-muted)',
  },
  mobileNav: {
    display: 'flex',
    overflowX: 'auto',
    gap: '8px',
    padding: '12px 16px',
    borderBottom: '1px solid var(--border)',
    background: 'var(--bg)',
    position: 'sticky',
    top: '4px',
    zIndex: 40,
  },
  mobileNavBtn: {
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '8px 10px',
    border: '1px solid #1A3FA3',
    background: 'transparent',
    color: 'var(--accent-font)',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    flexShrink: 0,
  },
  mobileNavBtnActive: {
    background: '#1A3FA3',
    color: 'var(--on-accent)',
  },
  mobileSpecsToggle: {
    position: 'fixed',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 95,
    border: '1px solid #1A3FA3',
    borderRight: 'none',
    background: '#1A3FA3',
    color: 'var(--on-accent)',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '10px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '10px 8px',
    cursor: 'pointer',
  },
  mobileSpecsOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'var(--overlay)',
    zIndex: 98,
  },
  mobileSpecsPanel: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: 'min(92vw, 335px)',
    height: '100dvh',
    overflowY: 'auto',
    borderLeft: '1px solid var(--divider)',
    background: 'var(--surface)',
    boxShadow: 'inset 0 -4px 0 #1A3FA3',
    zIndex: 99,
  },
  mobileSpecsHead: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderBottom: '1px solid var(--border)',
    background: 'var(--surface)',
    zIndex: 2,
  },
  mobileSpecsClose: {
    border: '1px solid #1A3FA3',
    background: 'transparent',
    color: 'var(--accent-font)',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '4px 8px',
    cursor: 'pointer',
  },
  mobileFooter: {
    padding: '14px 16px',
    borderTop: '1px solid var(--border)',
    borderBottom: '4px solid #1A3FA3',
    background: 'var(--bg)',
  },
  mobileFooterInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--fg-tertiary)',
  },
  contentBottomRail: {
    width: '100%',
    height: '4px',
    background: '#1A3FA3',
    flexShrink: 0,
  },
  sectionHeader: {
    padding: '24px',
    borderBottom: '1px solid var(--border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    position: 'sticky',
    top: 0,
    background: 'var(--header-bg)',
    backdropFilter: 'blur(5px)',
    zIndex: 10,
  },
  projectCard: {
    display: 'block',
    borderBottom: '1px solid var(--border)',
    transition: 'background 0.2s',
    cursor: 'pointer',
  },
  projectHeader: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr auto',
    padding: '24px',
    alignItems: 'baseline',
    gap: '24px',
  },
  projectIndex: {
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    color: 'var(--fg-tertiary)',
  },
  projectBody: {
    padding: '0 24px 24px calc(80px + 24px)',
  },
  projectDesc: {
    maxWidth: '500px',
    color: 'var(--fg-secondary)',
    marginBottom: '24px',
    fontSize: '14px',
  },
  tagCluster: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  techTag: {
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '12px',
    padding: '2px 6px',
    border: '1px solid var(--border)',
    color: 'var(--fg-secondary)',
    background: 'var(--tag-bg)',
  },
  projectVisual: {
    marginTop: '24px',
    background: 'var(--surface-muted)',
    height: '200px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    color: 'var(--fg-tertiary)',
    fontSize: '12px',
    border: '1px solid var(--border)',
  },
  colSpecs: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '335px',
    height: '100vh',
    overflowY: 'hidden',
    paddingTop: '10px',
    borderLeft: '1px solid var(--divider)',
    background: 'var(--surface)',
    boxShadow: 'inset 0 -4px 0 #1A3FA3',
  },
  specBlock: {
    padding: '16px',
    borderBottom: '1px solid var(--border)',
  },
  specTitle: {
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '10px',
    textTransform: 'uppercase',
    marginBottom: '8px',
    color: 'var(--accent-font)',
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnMinimal: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 16px',
    border: '1px solid #1A3FA3',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '14px',
    background: 'transparent',
    color: 'var(--accent-font)',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  btnMinimalGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 16px',
    border: '1px solid transparent',
    fontFamily: '"JetBrains Mono", "Courier New", monospace',
    fontSize: '14px',
    background: 'transparent',
    color: 'var(--fg-secondary)',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  themeToggleDesktop: {
    position: 'fixed',
    top: '12px',
    right: '12px',
    width: '68px',
    height: '30px',
    borderRadius: '999px',
    border: '1px solid rgba(59, 130, 246, 0.45)',
    background: 'var(--toggle-bg)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2px',
    gap: '2px',
    zIndex: 125,
    transition: 'background 0.2s',
  },
  themeToggleMobile: {
    position: 'fixed',
    top: '12px',
    right: '20px',
    width: '68px',
    height: '30px',
    borderRadius: '999px',
    border: '1px solid rgba(59, 130, 246, 0.45)',
    background: 'var(--toggle-bg)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2px',
    gap: '2px',
    zIndex: 125,
    transition: 'background 0.2s',
  },
  themeToggleOption: {
    border: 'none',
    borderRadius: '999px',
    background: 'transparent',
    color: '#dbeafe',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    lineHeight: 1,
    cursor: 'pointer',
  },
  themeToggleOptionActive: {
    background: '#1A3FA3',
    color: 'var(--on-accent)',
  },
};

const TechTag = ({ children, style }) => (
  <span style={{ ...customStyles.techTag, ...style }}>{children}</span>
);

const ThemeToggle = ({ isMobile, theme, onThemeChange }) => {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      role="group"
      aria-label="Theme switch"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...(isMobile ? customStyles.themeToggleMobile : customStyles.themeToggleDesktop),
        position: 'fixed',
        top: '12px',
        background: hovered ? 'var(--toggle-hover)' : 'var(--toggle-bg)',
      }}
    >
      <button
        type="button"
        aria-label="Light mode"
        aria-pressed={theme === 'light'}
        onClick={() => onThemeChange('light')}
        style={{
          ...customStyles.themeToggleOption,
          ...(theme === 'light' ? customStyles.themeToggleOptionActive : {}),
        }}
      >
        ☀
      </button>
      <button
        type="button"
        aria-label="Dark mode"
        aria-pressed={theme === 'dark'}
        onClick={() => onThemeChange('dark')}
        style={{
          ...customStyles.themeToggleOption,
          ...(theme === 'dark' ? customStyles.themeToggleOptionActive : {}),
        }}
      >
        ☾
      </button>
    </div>,
    document.body
  );
};

const HoverArticle = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      style={{ ...customStyles.projectCard, background: hovered ? 'var(--surface)' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </article>
  );
};

const ProjectCard = ({ index, title, year, description, points, tags, link, isMobile }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      style={{ ...customStyles.projectCard, background: hovered ? 'var(--surface)' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={isMobile
          ? {
              ...customStyles.projectHeader,
              gridTemplateColumns: '36px 1fr auto',
              padding: '16px',
              gap: '12px',
            }
          : customStyles.projectHeader}
      >
        <span style={customStyles.projectIndex}>{index}</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '20px' : '22px', color: 'var(--accent-font)' }}>{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', color: 'var(--accent-font)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.04em' }}
            >
              [link]
            </a>
          )}
        </div>
        <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: isMobile ? '10px' : '12px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid var(--border)', padding: '2px 6px', color: 'var(--accent-font)' }}>{year}</span>
      </div>
      <div style={isMobile ? { ...customStyles.projectBody, padding: '0 16px 16px 16px' } : customStyles.projectBody}>
        <p style={{ margin: '0 0 12px 0', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', lineHeight: 1.45 }}>
          {description}
        </p>
        {points?.length > 0 && (
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px', listStyleType: 'disc', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', lineHeight: 1.45 }}>
            {points.map((point, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>
                {point}
              </li>
            ))}
          </ul>
        )}
        {tags?.length > 0 && (
          <div style={customStyles.tagCluster}>
            {tags.map((tag, i) => <TechTag key={i}>{tag}</TechTag>)}
          </div>
        )}
      </div>
    </article>
  );
};

const SkillSection = ({ label, tags }) => (
  <div style={{ marginBottom: '8px' }}>
    <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)', marginBottom: '4px' }}>{label}</div>
    <div style={customStyles.tagCluster}>
      {tags.map((tag, i) => <TechTag key={i} style={{ fontSize: '10.5px' }}>{tag}</TechTag>)}
    </div>
  </div>
);

const NavItem = ({ label, shortLabel, active, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...customStyles.navItem,
        ...(active ? customStyles.navItemActive : {}),
        color: active || hovered ? 'var(--accent-font)' : 'var(--fg-secondary)',
        paddingLeft: hovered && !active ? '4px' : '0',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <span>{label}</span>
      <span>{shortLabel}</span>
    </div>
  );
};

const Sidebar = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { label: '0. SYSTEM OVERVIEW', short: '[HOME]', key: 'index' },
    { label: '1. WORK EXPERIENCE', short: '[EXP]', key: 'experience' },
    { label: '2. TECHNICAL PROJECTS', short: '[PROJ]', key: 'work' },
    { label: '3. EDUCATION', short: '[EDU]', key: 'education' },
    { label: '4. BEYOND CODE', short: '[MORE]', key: 'more' },
  ];

  return (
    <aside style={customStyles.colIdentity}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
          <div style={customStyles.logoMark}>
            <Image
              src="/images/profile.JPG"
              alt="Divij Vipul Shah"
              width={64}
              height={64}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              fontFamily: '"JetBrains Mono", "Courier New", monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-font)',
              textAlign: 'right',
              lineHeight: 1.35,
            }}
          >
            V4.09
            <br />
            BUILD 2001
          </div>
        </div>

        <h1 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 700, fontSize: '26px', marginBottom: '8px', color: 'var(--accent-font)' }}>Divij Vipul Shah</h1>
        <p style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg-secondary)' }}>
          <span style={{ fontWeight: 700 }}>Full Stack AI Engineer</span><br />Austin, TX
        </p>

        <div style={customStyles.engineerMeta}>
          <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', color: 'var(--accent-font)' }}>
            <span style={customStyles.statusDot}></span>Open to AI / SDE opportunities
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg-tertiary)' }}>UTC−6 / CST</div>
        </div>
      </div>

      <nav style={customStyles.navMenu}>
        {navItems.map(item => (
          <NavItem
            key={item.key}
            label={item.label}
            shortLabel={item.short}
            active={activeNav === item.key}
            onClick={() => setActiveNav(item.key)}
          />
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg-tertiary)' }}>
        <span>© 2026 Shah Systems<br />All rights reserved.</span>
        <Image src="/favicon.ico" alt="Shah Systems favicon" width={14} height={14} />
      </div>
    </aside>
  );
};

const SpecsContent = ({ compact = false }) => {
  const [hoveredLink, setHoveredLink] = useState('');

  return (
    <>
      <div style={customStyles.specBlock}>
        <div style={customStyles.specTitle}>SKILLS</div>
        <SkillSection label="SYSTEMS" tags={['Distributed APIs', 'Event-Driven Architecture', 'Microservices', 'Production Monitoring']} />
        <SkillSection label="LANGUAGES" tags={['JavaScript', 'TypeScript', 'Python', 'SQL', 'C++', 'Java', 'C#']} />
        <SkillSection label="FRAMEWORKS" tags={['React', 'Next.js', 'Node.js', 'Express', 'ASP.NET']} />
        <SkillSection label="AI & DATA" tags={['Retrieval-Augmented Generation (RAG)', 'LLM Integration', 'LangChain', 'TensorFlow', 'PyTorch']} />
        <SkillSection label="CLOUD & DEVOPS" tags={['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD']} />
        <SkillSection label="DATABASES" tags={['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB']} />
      </div>

      <div style={customStyles.specBlock}>
        <div style={customStyles.specTitle}>CONNECT</div>
        <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: compact ? '9px' : '10px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 8px' }}>
          <a
            href="https://www.linkedin.com/in/divijvshah/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...customStyles.navItem,
              fontSize: compact ? '9px' : '10px',
              color: hoveredLink === 'linkedin' ? 'var(--accent-font)' : 'var(--fg-secondary)',
              borderBottom: '1px solid transparent',
            }}
            onMouseEnter={() => setHoveredLink('linkedin')}
            onMouseLeave={() => setHoveredLink('')}
          >
            LINKEDIN -&gt;
          </a>
          <a
            href="https://github.com/DivijShah"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...customStyles.navItem,
              fontSize: compact ? '9px' : '10px',
              color: hoveredLink === 'github' ? 'var(--accent-font)' : 'var(--fg-secondary)',
              borderBottom: '1px solid transparent',
            }}
            onMouseEnter={() => setHoveredLink('github')}
            onMouseLeave={() => setHoveredLink('')}
          >
            GITHUB -&gt;
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...customStyles.navItem,
              fontSize: compact ? '9px' : '10px',
              color: hoveredLink === 'resume' ? 'var(--accent-font)' : 'var(--fg-secondary)',
              borderBottom: '1px solid transparent',
            }}
            onMouseEnter={() => setHoveredLink('resume')}
            onMouseLeave={() => setHoveredLink('')}
          >
            RESUME -&gt;
          </a>
          <a
            href="mailto:divij4901@gmail.com"
            style={{
              ...customStyles.navItem,
              fontSize: compact ? '9px' : '10px',
              color: hoveredLink === 'email' ? 'var(--accent-font)' : 'var(--fg-secondary)',
              borderBottom: '1px solid transparent',
            }}
            onMouseEnter={() => setHoveredLink('email')}
            onMouseLeave={() => setHoveredLink('')}
          >
            EMAIL -&gt;
          </a>
        </div>
      </div>
    </>
  );
};

const SpecsSidebar = () => {
  return (
    <aside style={customStyles.colSpecs}>
      <SpecsContent />
    </aside>
  );
};

const IndexPage = ({ setActiveNav, isMobile, isHydrated }) => {
  const [btnHovered, setBtnHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactEmail = 'divij4901@gmail.com';

  const codeSnippets = [
    'I <- analyze() + predict(using = "Sports Data")',
    'const api: WebAPI = new WebAPI("Scalable & Secure");',
    'model.optimize(ml_workflow=True)',
    "SELECT * FROM data_models WHERE impact = 'high';",
    'const ui = createUX({ interactive: true });',
    'create_ai_systems(level="production")',
  ];
  const typewriterBoxWidth = `${Math.max(...codeSnippets.map((line) => line.length)) + 8}ch`;
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (_err) {
      setCopied(false);
    }
  };
  const focusAreas = [
    'Retrieval augmented AI systems',
    'Real time inference and validation pipelines',
    'Distributed APIs and scalable backend architecture',
    'Production CI/CD and system reliability',
  ];
  const impactItems = [
    'Scaled AI platform to 10K+ monthly users',
    'Improved system performance by 45%',
    'Reduced bounce rate by 25%',
    'Achieved 99.9% uptime in production',
    'Reduced API latency by up to 40%',
  ];

  return (
    <main style={isMobile ? customStyles.mobileMain : customStyles.colMain}>
      <section style={{ padding: isMobile ? '28px 16px' : '64px 24px', borderBottom: '1px solid var(--border)' }}>
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '2px solid rgba(59, 130, 246, 0.45)',
            borderRadius: '14px',
            padding: isMobile ? '14px 16px' : '20px 24px',
            marginBottom: isMobile ? '18px' : '28px',
            fontFamily: '"JetBrains Mono", "Courier New", monospace',
            fontSize: isMobile ? '12px' : '16.5px',
            color: '#dbeafe',
            minHeight: isMobile ? '68px' : '84px',
            width: isMobile ? '100%' : `min(100%, ${typewriterBoxWidth})`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textAlign: 'left',
            whiteSpace: isMobile ? 'normal' : 'nowrap',
            wordBreak: 'break-word',
            boxShadow: '0 18px 40px rgba(15, 23, 42, 0.35)',
          }}
        >
          {isHydrated ? (
            <Typewriter
              words={codeSnippets}
              loop
              typeSpeed={50}
              deleteSpeed={25}
              delaySpeed={1500}
              cursor
              cursorStyle="|"
            />
          ) : (
            codeSnippets[0]
          )}
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '34px' : '48px', lineHeight: 1.1, marginBottom: '24px', color: 'var(--accent-font)' }}>
          Engineering scalable<br />
          <span style={{ color: 'var(--fg-secondary)', fontStyle: 'italic' }}>AI Systems</span> in production.
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...customStyles.btnMinimal,
              background: btnHovered ? '#1A3FA3' : 'transparent',
              color: btnHovered ? 'var(--on-accent)' : 'var(--accent-font)',
            }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            VIEW RESUME
          </a>
          <div
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
            onMouseEnter={() => setContactHovered(true)}
            onMouseLeave={() => setContactHovered(false)}
          >
            <button
              type="button"
              style={customStyles.btnMinimalGhost}
              onClick={() => setActiveNav('more')}
            >
              CONTACT //
            </button>
            {contactHovered && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#1A3FA3',
                  color: 'var(--on-accent)',
                  border: '1px solid #1A3FA3',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  fontFamily: '"JetBrains Mono", "Courier New", monospace',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  whiteSpace: 'nowrap',
                  zIndex: 20,
                }}
              >
                <span>{contactEmail}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  style={{
                    border: '1px solid var(--on-accent)',
                    background: '#1A3FA3',
                    color: 'var(--on-accent)',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    fontFamily: '"JetBrains Mono", "Courier New", monospace',
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: isMobile ? '24px 16px' : '32px 24px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px' }}>
            <h3 style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>
              FOCUS_AREAS
            </h3>
            <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>
              [{focusAreas.length}_ITEMS]
            </span>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, paddingLeft: '18px', color: 'var(--fg-secondary)' }}>
            {focusAreas.map((item) => (
              <li key={item} style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '14px' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ padding: isMobile ? '24px 16px' : '32px 24px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px' }}>
            <h3 style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>
              IMPACT
            </h3>
            <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>
              [{impactItems.length}_ITEMS]
            </span>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, paddingLeft: '18px', color: 'var(--fg-secondary)' }}>
            {impactItems.map((item) => (
              <li key={item} style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '14px' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={customStyles.contentBottomRail} />
    </main>
  );
};

const ExperiencePage = ({ isMobile }) => {
  const experiences = [
    {
      role: 'Founding AI Engineer',
      company: 'SWIPE HEALTH',
      period: 'Apr 2026 – Present',
      location: 'Austin, TX',
      description: 'Built the complete AI intelligence and adaptive training layer for a fitness app converting wearable biometrics into personalized daily workouts',
      points: [
        'Architected 24 production-ready engines from a 66-page architecture spec covering adaptive training, AI coaching, and safety systems',
        'Designed progressive overload, plateau detection, deload scheduling, and readiness-based session modification pipelines',
        'Built three-layer AI coach with motivational interviewing, physiological tone modulation, and retention-driven personalization',
        'Engineered wearable data pipeline with HRV methodology, iOS Live Activity integration, and 150+ edge-case validations',
      ],
      tags: ['JavaScript', 'React Native', 'Swift', 'Anthropic Claude API', 'Spike API', 'iOS ActivityKit'],
    },
    {
      role: 'Founding Full Stack AI Engineer',
      company: 'ASTER INC',
      period: 'Jul 2025 – Mar 2026',
      description: 'Built and scaled a production AI platform serving 10K+ monthly users.',
      points: [
        'Owned end to end architecture across frontend, backend, and inference systems',
        'Developed retrieval augmented AI for cycle prediction and contextual insights',
        'Improved performance by 45% and reduced bounce rate by 25%',
        'Achieved 99.9% uptime with automated CI/CD and 95% test coverage',
      ],
      tags: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Supabase', 'RAG', 'OpenAI API', 'AWS', 'CI/CD'],
    },
    {
      role: 'Program Analyst',
      company: 'NC STATE UNIVERSITY',
      period: 'Feb 2024 – May 2025',
      description: 'Designed automated data infrastructure for operational analytics.',
      points: [
        'Architected ETL pipelines improving reporting accuracy by 30%',
        'Optimized backend schemas and queries, improving retrieval speed by 40%',
        'Built executive dashboards reducing audit discrepancies by 40%',
      ],
      tags: ['Python', 'SQL', 'ETL Pipelines', 'PostgreSQL', 'Power BI', 'Query Optimization'],
    },
    {
      role: 'Software Development Engineer',
      company: 'JINEE INFOTECH',
      period: 'Jan 2023 – May 2023',
      description: 'Engineered production backend systems under concurrent enterprise load.',
      points: [
        'Built 10+ secure REST APIs increasing transaction throughput by 35%',
        'Implemented containerized microservices with Kubernetes CI/CD',
        'Reduced API latency by 35% through query and service optimization',
      ],
      tags: ['ASP.NET', 'C#', 'Node.js', 'Express', 'REST APIs', 'Kubernetes', 'Docker', 'MySQL', 'CI/CD'],
    },
    {
      role: 'Business Analyst Intern',
      company: 'TALENTSERVE',
      period: 'May 2022 – Jul 2022',
      description: 'Supported analytics and reporting operations across business workflows.',
      points: [
        'Built BI dashboards and automated reporting workflows',
      ],
      tags: ['BI Dashboards', 'Reporting', 'Analytics'],
      showTags: false,
    },
    {
      role: 'Data Science Intern',
      company: 'MEMENT.IO',
      period: 'Feb 2022 – May 2022',
      description: 'Contributed to data pipeline and model quality improvements.',
      points: [
        'Optimized ETL pipelines and improved model performance',
      ],
      tags: ['Data Science', 'ETL', 'Model Optimization'],
      showTags: false,
    },
  ];
  const earlierExperienceStart = 4;
  const earlierExperienceCount = Math.max(0, experiences.length - earlierExperienceStart);

  return (
    <main style={isMobile ? customStyles.mobileMain : customStyles.colMain}>
      <section style={{ padding: isMobile ? '28px 16px' : '59px 24px', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '36px' : '50px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--accent-font)' }}>
          <span style={{ color: 'var(--fg-secondary)', fontStyle: 'italic' }}>Applied</span> Engineering
        </h2>
        <p style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '14px', color: 'var(--fg-secondary)' }}>Roles &amp; Production Systems</p>
      </section>

      <div style={isMobile ? { ...customStyles.sectionHeader, padding: '16px', position: 'static' } : customStyles.sectionHeader}>
        <h3 style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>WORK_HISTORY</h3>
        <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>[{experiences.length}_ITEMS]</span>
      </div>

      {experiences.map((exp, i) => {
        return (
          <React.Fragment key={`${exp.role}-${exp.company}`}>
            {i === earlierExperienceStart && (
              <div
                style={{
                  ...customStyles.sectionHeader,
                  position: 'static',
                  padding: isMobile ? '16px' : '24px',
                  background: 'transparent',
                  backdropFilter: 'none',
                  zIndex: 'auto',
                }}
              >
                <h3 style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>
                  INTERNSHIP_HISTORY
                </h3>
                <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>
                  [{earlierExperienceCount}_ITEMS]
                </span>
              </div>
            )}
            <HoverArticle>
              <div style={{ ...customStyles.projectHeader, gridTemplateColumns: isMobile ? '32px 1fr' : '40px 1fr auto', gap: isMobile ? '10px' : '16px', padding: isMobile ? '16px' : '24px' }}>
                <span style={customStyles.projectIndex}>0{i + 1}</span>
                <div>
                  <h3 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '19px' : '22px', color: 'var(--accent-font)', marginBottom: '4px', whiteSpace: isMobile ? 'normal' : 'nowrap' }}>{exp.role}</h3>
                  <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '13px', color: 'var(--fg-secondary)' }}>{exp.location ? `${exp.company} · ${exp.location}` : exp.company}</div>
                  {isMobile && (
                    <span style={{ display: 'inline-block', marginTop: '8px', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid var(--border)', padding: '2px 6px', color: 'var(--accent-font)' }}>{exp.period}</span>
                  )}
                </div>
                {!isMobile && (
                  <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid var(--border)', padding: '2px 6px', color: 'var(--accent-font)', whiteSpace: 'nowrap' }}>{exp.period}</span>
                )}
              </div>
              <div style={{ ...customStyles.projectBody, padding: isMobile ? '0 16px 16px 16px' : '0 24px 24px calc(56px + 24px)' }}>
                <p style={{ margin: '0 0 12px 0', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', lineHeight: 1.45, fontWeight: 700 }}>
                  {exp.description}
                </p>
                {exp.points && (
                  <ul style={{ margin: '0 0 18px 18px', paddingLeft: '18px', listStyleType: 'disc', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', lineHeight: 1.45 }}>
                    {exp.points.map((point, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                {exp.showTags !== false && exp.tags?.length > 0 && (
                  <div style={customStyles.tagCluster}>
                    {exp.tags.map((tag, j) => <TechTag key={j}>{tag}</TechTag>)}
                  </div>
                )}
              </div>
            </HoverArticle>
          </React.Fragment>
        );
      })}
      <div style={customStyles.contentBottomRail} />
    </main>
  );
};

const WorkPage = ({ isMobile }) => {
  const projects = [
    {
      index: '01',
      title: 'Jarvis Mock Interviewer',
      link: 'https://github.com/DivijShah/Jarvis-AI-Mock-Interviewer',
      year: '2025',
      description: 'AI powered mock interview system with real time LLM driven follow ups and voice interaction.',
      points: [
        'Built streaming inference pipeline for dynamic question generation',
        'Implemented resilient backend safeguards for API quota failures and malformed responses',
        'Designed modular conversational state management for scalable sessions',
      ],
      tags: ['Next.js', 'TypeScript', 'OpenAI API', 'Streaming APIs'],
    },
    {
      index: '02',
      title: 'AI Personal Assistant',
      link: 'https://github.com/DivijShah/Sentiment-Analysis-for-Multilingual-Languages',
      year: '2024',
      description: 'Context aware retrieval augmented AI assistant with persistent session memory.',
      points: [
        'Designed vector retrieval pipelines for contextual response generation',
        'Built scalable inference APIs with streaming output',
        'Deployed secure production environment on AWS with state persistence',
      ],
      tags: ['Next.js', 'Python', 'RAG', 'Vector Storage', 'AWS'],
    },
    {
      index: '03',
      title: 'Drowsi-Sense',
      link: 'https://github.com/DivijShah/drowsi-sense',
      year: '2024',
      description: 'Real time computer vision system for driver drowsiness detection.',
      points: [
        'Achieved 97% model accuracy on 50K+ labeled images',
        'Optimized preprocessing and inference latency for live monitoring',
        'Designed lightweight CNN architecture for resource constrained environments',
      ],
      tags: ['Python', 'PyTorch', 'OpenCV'],
    },
  ];

  return (
    <main style={isMobile ? customStyles.mobileMain : customStyles.colMain}>
      <section style={{ padding: isMobile ? '28px 16px' : '59px 24px', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '36px' : '50px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--accent-font)' }}>
          Project <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>Work.</span>
        </h2>
        <p style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '14px', color: 'var(--fg-secondary)' }}>Full catalog of selected engineering projects.</p>
      </section>

      <div style={isMobile ? { ...customStyles.sectionHeader, padding: '16px', position: 'static' } : customStyles.sectionHeader}>
        <h3 style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>ALL_PROJECTS</h3>
        <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>[{projects.length}_ITEMS]</span>
      </div>

      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} isMobile={isMobile} />
      ))}

      <div style={{ padding: isMobile ? '16px' : '24px', borderBottom: '1px solid var(--border)' }}>
        <a
          href="https://github.com/DivijShah"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)', textDecoration: 'none' }}
        >
          VIEW_MORE_ON_GITHUB -&gt;
        </a>
      </div>
      <div style={customStyles.contentBottomRail} />
    </main>
  );
};

const EducationPage = ({ isMobile }) => {
  const education = [
    {
      degree: 'M.S. Computer Science',
      university: 'NORTH CAROLINA STATE UNIVERSITY',
      period: '2023 – 2025',
      subtitle: 'Data Science Track',
      gpa: 'GPA 3.4/4.0',
      tags: ['Software Engineering', 'Neural Networks and Deep Learning', 'Cloud Computing', 'Foundations of AI', 'Statistics'],
    },
    {
      degree: 'B.Tech. Computer Engineering',
      university: 'PANDIT DEENDAYAL ENERGY UNIVERSITY',
      period: '2019 – 2023',
      gpa: 'GPA 9.33/10.00',
      tags: ['Data Structures and Algorithms', 'Database Management System', 'Object Oriented Programming'],
    },
  ];

  return (
    <main style={isMobile ? customStyles.mobileMain : customStyles.colMain}>
      <section style={{ padding: isMobile ? '28px 16px' : '64px 24px', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '36px' : '50px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--accent-font)' }}>
          Education.
        </h2>
        <p style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '14px', color: 'var(--fg-secondary)' }}>
          Academic foundation and core areas of study.
        </p>
      </section>

      <div style={isMobile ? { ...customStyles.sectionHeader, padding: '16px', position: 'static' } : customStyles.sectionHeader}>
        <h3 style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>EDUCATION</h3>
        <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-font)' }}>[{education.length}_ITEMS]</span>
      </div>

      {education.map((item, i) => (
        <HoverArticle key={item.degree}>
          <div style={{ ...customStyles.projectHeader, gridTemplateColumns: isMobile ? '32px 1fr' : '80px 1fr auto', padding: isMobile ? '16px' : '24px', gap: isMobile ? '10px' : '24px' }}>
            <span style={customStyles.projectIndex}>0{i + 1}</span>
            <div>
              <h3 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '19px' : '22px', color: 'var(--accent-font)', marginBottom: '4px' }}>{item.degree}</h3>
              {item.university && (
                <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg-secondary)', marginBottom: '4px' }}>{item.university}</div>
              )}
              {item.subtitle && (
                <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '13px', color: 'var(--fg-secondary)' }}>{item.subtitle}</div>
              )}
              {isMobile && (
                <span style={{ display: 'inline-block', marginTop: '8px', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid var(--border)', padding: '2px 6px', color: 'var(--accent-font)' }}>{item.period}</span>
              )}
            </div>
            {!isMobile && (
              <span style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid var(--border)', padding: '2px 6px', color: 'var(--accent-font)', whiteSpace: 'nowrap' }}>{item.period}</span>
            )}
          </div>
          <div style={isMobile ? { ...customStyles.projectBody, padding: '0 16px 16px 16px' } : customStyles.projectBody}>
            {item.gpa && (
              <p
                style={{
                  margin: '0 0 12px 0',
                  fontFamily: '"JetBrains Mono", "Courier New", monospace',
                  fontSize: '13px',
                  color: 'var(--fg-secondary)',
                }}
              >
                {item.gpa}
              </p>
            )}
            <div style={customStyles.tagCluster}>
              {item.tags.map((tag) => <TechTag key={tag}>{tag}</TechTag>)}
            </div>
          </div>
        </HoverArticle>
      ))}
      <div style={customStyles.contentBottomRail} />
    </main>
  );
};

const BeyondCodePage = ({ isMobile }) => {
  return (
    <main style={isMobile ? customStyles.mobileMain : { ...customStyles.colMain, boxShadow: 'inset 0 -4px 0 #1A3FA3' }}>
      <section style={{ padding: isMobile ? '28px 16px' : '64px 24px', borderBottom: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: '"Playfair Display", "Times New Roman", serif', fontWeight: 400, fontSize: isMobile ? '36px' : '50px', lineHeight: 1.1, marginBottom: '16px', color: 'var(--accent-font)' }}>
          Beyond <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>Code.</span>
        </h2>
        <p style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '14px', color: 'var(--fg-secondary)' }}>More about me.</p>
      </section>
      <section style={{ padding: isMobile ? '16px' : '24px', borderBottom: '1px solid var(--border)' }}>
        <p style={{ margin: '0 0 14px 0', maxWidth: '780px', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '15px', lineHeight: 1.6 }}>
          I build systems, but I leave room for spontaneity.
        </p>
        <p style={{ margin: '0 0 14px 0', maxWidth: '780px', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '15px', lineHeight: 1.6 }}>
          I spend an unreasonable amount of time analyzing <span style={{ color: 'var(--accent-font)', fontStyle: 'italic' }}>Soccer</span> - formations, movement, underlying stats. Some people watch games. I run mental models. (Yes, <span style={{ color: 'var(--accent-font)', fontStyle: 'italic' }}>Manchester United</span> is always involved.)
        </p>
        <p style={{ margin: '0 0 14px 0', maxWidth: '780px', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '15px', lineHeight: 1.6 }}>
          <span style={{ color: 'var(--accent-font)', fontStyle: 'italic' }}>Swimming</span> came before code. I even became a <span style={{ color: 'var(--accent-font)', fontStyle: 'italic' }}>Certified Lifeguard</span>. Staying calm when someone&apos;s flailing in the deep end is great practice for when a deploy goes sideways.
        </p>
        <p style={{ margin: 0, maxWidth: '780px', color: 'var(--fg-secondary)', fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '15px', lineHeight: 1.6 }}>
          <span style={{ color: 'var(--accent-font)', fontStyle: 'italic' }}>Hiking</span> helps me zoom out. <span style={{ color: 'var(--accent-font)', fontStyle: 'italic' }}>Photography</span> forces me to zoom in. Both are great reminders that perspective matters in life and in systems.
        </p>
      </section>
    </main>
  );
};

const App = () => {
  const [activeNav, setActiveNav] = useState('index');
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobileSpecsOpen, setIsMobileSpecsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;600&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background-color: var(--bg); color: var(--fg-secondary); font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; line-height: 1.5; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
      a { text-decoration: none; color: inherit; cursor: pointer; }
      ul { list-style: none; }
      @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const nextTokens = themeTokens[theme];
    Object.entries(nextTokens).forEach(([token, value]) => {
      document.documentElement.style.setProperty(token, value);
    });
    document.body.style.backgroundColor = nextTokens['--bg'];
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const getViewportWidth = () => (
      window.visualViewport?.width
      || window.innerWidth
      || document.documentElement?.clientWidth
      || 0
    );
    const updateViewport = () => {
      setIsMobile(getViewportWidth() <= 1024);
      setIsHydrated(true);
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMobileSpecsOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setIsMobileSpecsOpen(false);
  }, [activeNav]);

  const mobileNavItems = [
    { label: 'HOME', key: 'index' },
    { label: 'EXP', key: 'experience' },
    { label: 'PROJECTS', key: 'work' },
    { label: 'EDUCATION', key: 'education' },
    { label: 'MORE', key: 'more' },
  ];

  const renderMain = () => {
    switch (activeNav) {
      case 'index': return <IndexPage setActiveNav={setActiveNav} isMobile={isMobile} isHydrated={isHydrated} />;
      case 'experience': return <ExperiencePage isMobile={isMobile} />;
      case 'work': return <WorkPage isMobile={isMobile} />;
      case 'education': return <EducationPage isMobile={isMobile} />;
      case 'more': return <BeyondCodePage isMobile={isMobile} />;
      default: return <IndexPage setActiveNav={setActiveNav} isMobile={isMobile} isHydrated={isHydrated} />;
    }
  };

  const setThemeMode = (nextTheme) => {
    setTheme(nextTheme);
  };

  if (isMobile) {
    return (
      <div style={{ ...customStyles.root, ...themeTokens[theme] }}>
        <div style={customStyles.topRail} />
        <ThemeToggle isMobile theme={theme} onThemeChange={setThemeMode} />
        <div style={customStyles.mobileShell}>
          <header style={customStyles.mobileHeader}>
            <div style={customStyles.mobileHeaderRow}>
              <div style={customStyles.mobileHeaderText}>
                <div style={customStyles.mobileName}>Divij Vipul Shah</div>
                <div style={customStyles.mobileRole}>Full Stack AI Engineer · Austin, TX</div>
              </div>
              <div style={customStyles.mobileProfileMark}>
                <Image
                  src="/images/profile.JPG"
                  alt="Divij Shah portrait"
                  width={88}
                  height={88}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </header>
          <nav style={customStyles.mobileNav}>
            {mobileNavItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveNav(item.key)}
                style={{
                  ...customStyles.mobileNavBtn,
                  ...(activeNav === item.key ? customStyles.mobileNavBtnActive : {}),
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {renderMain()}
          <footer style={customStyles.mobileFooter}>
            <div style={customStyles.mobileFooterInner}>
              <span>© 2026 Shah Systems · All rights reserved.</span>
              <Image src="/favicon.ico" alt="Shah Systems favicon" width={14} height={14} />
            </div>
          </footer>
        </div>
        <button
          type="button"
          style={customStyles.mobileSpecsToggle}
          onClick={() => setIsMobileSpecsOpen(true)}
        >
          SKILLS
        </button>
        {isMobileSpecsOpen && (
          <>
            <div
              style={customStyles.mobileSpecsOverlay}
              onClick={() => setIsMobileSpecsOpen(false)}
            />
            <aside style={customStyles.mobileSpecsPanel}>
              <div style={customStyles.mobileSpecsHead}>
                <div style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-font)' }}>
                  Specs Panel
                </div>
                <button
                  type="button"
                  style={customStyles.mobileSpecsClose}
                  onClick={() => setIsMobileSpecsOpen(false)}
                >
                  Close
                </button>
              </div>
              <SpecsContent compact />
            </aside>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ ...customStyles.root, ...themeTokens[theme] }}>
      <div style={customStyles.topRail} />
      <ThemeToggle theme={theme} onThemeChange={setThemeMode} />
      <div style={customStyles.layoutContainer}>
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
        {renderMain()}
        <SpecsSidebar />
      </div>
    </div>
  );
};

export default App;
