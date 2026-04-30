'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features',     href: '#features' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Contact',      href: '#contact' },
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.propsight.com.au';

function Logo() {
  return (
    <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      {/* SVG logomark */}
      <div style={{ position: 'relative', width: 40, height: 40 }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="10" fill="#1D9E75" />
          {/* House outline */}
          <path d="M20 9L8 19.5V32h9v-8h6v8h9V19.5L20 9z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
          {/* Scan lines */}
          <line x1="13" y1="22" x2="27" y2="22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
          <line x1="13" y1="25" x2="27" y2="25" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
          <line x1="13" y1="28" x2="27" y2="28" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
        </svg>
        {/* Pulsing dot */}
        <div className="animate-pulse-dot" style={{
          position: 'absolute', top: 2, right: 2,
          width: 8, height: 8,
          background: '#fff',
          borderRadius: '50%',
          border: '1.5px solid #1D9E75',
        }} />
      </div>
      <span style={{ fontSize: 20, fontWeight: 800, lineHeight: 1 }}>
        <span style={{ color: '#1A3A5C' }}>Prop</span>
        <span style={{ color: '#1D9E75' }}>Sight</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(href) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const navBg = scrolled ? '#fff' : 'transparent';
  const navBorder = scrolled ? '1px solid #E4ECF7' : '1px solid transparent';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        borderBottom: navBorder,
        transition: 'all 200ms ease',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Logo />

          {/* Desktop nav links */}
          <div style={{ gap: 32, alignItems: 'center' }}
               className="hidden lg:flex">
            {NAV_LINKS.map(link => (
              <button key={link.label} onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: 500, color: '#636366',
                  fontFamily: 'inherit', transition: 'color 150ms ease',
                  padding: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#1D9E75'}
                onMouseLeave={e => e.currentTarget.style.color = '#636366'}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a href={`${APP_URL}/login`} rel="noopener noreferrer"
              style={{
                height: 36, padding: '0 16px', borderRadius: 10,
                border: '1.5px solid #1A3A5C', color: '#1A3A5C',
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                display: 'flex', alignItems: 'center',
                transition: 'all 200ms ease', background: 'transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1A3A5C'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1A3A5C'; }}
            >
              Sign in
            </a>
            <a href={`${APP_URL}/register`} rel="noopener noreferrer"
              className="hidden sm:flex"
              style={{
                height: 36, padding: '0 16px', borderRadius: 10,
                background: '#1D9E75', color: '#fff', border: '1.5px solid #1D9E75',
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                display: 'flex', alignItems: 'center',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0F6E56'; e.currentTarget.style.transform = 'scale(1.01)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1D9E75'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Get started
            </a>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(o => !o)}
              className="flex lg:hidden"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 6, flexDirection: 'column',
                gap: 5, justifyContent: 'center', alignItems: 'center',
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                display: 'block', width: 22, height: 2, background: '#1A3A5C',
                borderRadius: 2,
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                transition: 'transform 200ms ease',
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, background: '#1A3A5C',
                borderRadius: 2,
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 200ms ease',
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, background: '#1A3A5C',
                borderRadius: 2,
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transition: 'transform 200ms ease',
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0,
              background: '#fff', zIndex: 49,
              padding: '24px 24px 40px',
              borderBottom: '1px solid #E4ECF7',
              boxShadow: '0 8px 24px rgba(26,58,92,0.10)',
            }}
            className="lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <button key={link.label} onClick={() => scrollTo(link.href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 18, fontWeight: 500, color: '#1A3A5C',
                  fontFamily: 'inherit',
                  padding: '16px 0',
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid #E4ECF7' : 'none',
                }}
              >
                {link.label}
              </button>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
              <a href={`${APP_URL}/login`} rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '14px', borderRadius: 12,
                  border: '1.5px solid #1A3A5C', color: '#1A3A5C',
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                }}>
                Sign in
              </a>
              <a href={`${APP_URL}/register`} rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '14px', borderRadius: 12,
                  background: '#1D9E75', color: '#fff',
                  fontSize: 15, fontWeight: 600, textDecoration: 'none',
                }}>
                Get started free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
