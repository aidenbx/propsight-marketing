'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './ui/PhoneMockup';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.propsight.com.au';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#1D9E75" />
      <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MiniPropertyCard({ score, price, address, tags, meta }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #E4ECF7',
      borderRadius: 8, padding: 10, marginBottom: 6,
    }}>
      <div style={{ position: 'relative', height: 60, background: '#E4ECF7', borderRadius: 6, marginBottom: 8 }}>
        <span style={{ position: 'absolute', top: 4, left: 4, background: '#fff', borderRadius: 4, padding: '2px 6px', fontSize: 8, fontWeight: 600, color: '#636366' }}>domain.com.au</span>
        <span style={{ position: 'absolute', top: 4, right: 4, background: '#1D9E75', color: '#fff', borderRadius: 4, padding: '2px 6px', fontSize: 8, fontWeight: 700 }}>{score}</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#1A3A5C' }}>{price}</div>
      <div style={{ fontSize: 10, color: '#636366', marginTop: 2, marginBottom: 6 }}>{address}</div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 6, flexWrap: 'wrap' }}>
        {tags.map(t => (
          <span key={t.text} style={{ fontSize: 8, fontWeight: 600, padding: '2px 6px', borderRadius: 4, background: t.type === 'green' ? '#F0FDF4' : '#EFF6FF', color: t.type === 'green' ? '#166534' : '#1e40af' }}>{t.text}</span>
        ))}
      </div>
      <div style={{ fontSize: 9, color: '#9CA3AF' }}>{meta}</div>
    </div>
  );
}

function FloatingCard({ children, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      style={{ position: 'absolute', background: '#fff', borderRadius: 12, boxShadow: '0 8px 24px rgba(26,58,92,0.10)', padding: '10px 14px', ...style }}
    >
      {children}
    </motion.div>
  );
}

const AUDIENCE_CONTENT = {
  buyer: {
    trustItem1: 'Built for the housing crisis generation',
    stat1: { num: '47%', label: 'of buyers use AI tools' },
  },
  investor: {
    trustItem1: 'Capital growth signals included',
    stat1: { num: '6am', label: 'daily digest' },
  },
};

export default function Hero() {
  const [audience, setAudience] = useState('buyer');
  const content = AUDIENCE_CONTENT[audience];

  function scrollToHowItWorks() {
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section style={{
      minHeight: '100vh', background: '#F5F9FF',
      paddingTop: 64, display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Radial bg blob */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 1000, height: 800,
        background: 'radial-gradient(circle, rgba(29,158,117,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '48px 24px',
        display: 'flex', alignItems: 'center',
        gap: 48, width: '100%', position: 'relative', zIndex: 1,
      }}>
        {/* LEFT — copy */}
        <div style={{ flex: '1 1 55%', minWidth: 0 }}>
          {/* Eyebrow */}
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#E6FFF7', border: '1px solid #9FE1CB',
              color: '#1D9E75', fontSize: 11, fontWeight: 700,
              letterSpacing: '1.2px', padding: '5px 14px', borderRadius: 20,
            }}>
              AI-POWERED · AUSTRALIA & NEW ZEALAND
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800, color: '#1A3A5C',
              letterSpacing: '-2px', lineHeight: 1.05,
              margin: '24px 0 0',
            }}
          >
            The housing market is hard.<br />
            Finding your property doesn&apos;t{' '}
            <span className="underline-grow">have to be.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: '#636366', maxWidth: 520, lineHeight: 1.65, marginTop: 24,
            }}
          >
            Whether you&apos;re a first home buyer navigating the most competitive market in decades, or an investor hunting capital growth signals — PropSight does the research so you don&apos;t have to.
          </motion.p>

          {/* Audience toggle */}
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
            style={{ marginTop: 28 }}
          >
            <div style={{
              display: 'inline-flex',
              background: '#fff',
              border: '1px solid #E4ECF7',
              borderRadius: 10,
              padding: 3,
            }}>
              {[
                { key: 'buyer',    label: 'First home buyer' },
                { key: 'investor', label: 'Investor' },
              ].map(opt => (
                <button
                  key={opt.key}
                  onClick={() => setAudience(opt.key)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 8,
                    border: 'none',
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                    background: audience === opt.key ? '#1A3A5C' : 'transparent',
                    color: audience === opt.key ? '#fff' : '#1A3A5C',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}
          >
            <a href={`${APP_URL}/register`} rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center',
                height: 52, padding: '0 32px', borderRadius: 14,
                background: '#1D9E75', color: '#fff',
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0F6E56'; e.currentTarget.style.transform = 'scale(1.01)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,58,92,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1D9E75'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Get started free →
            </a>
            <button onClick={scrollToHowItWorks}
              style={{
                display: 'inline-flex', alignItems: 'center',
                height: 52, padding: '0 24px', borderRadius: 14,
                background: '#fff', border: '1.5px solid #1A3A5C',
                color: '#1A3A5C', fontSize: 16, fontWeight: 500,
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#F5F9FF'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              See how it works ↓
            </button>
          </motion.div>

          {/* Trust strip — item 1 is audience-reactive */}
          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginTop: 28 }}
          >
            {[
              content.trustItem1,
              'Daily 6am property digest',
              'AI-scored for your criteria',
            ].map(text => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle />
                <span style={{ fontSize: 13, color: '#636366' }}>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats row — stat 1 is audience-reactive */}
          <motion.div custom={6} initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 36 }}
          >
            {[
              content.stat1,
              { num: '8',   label: 'Suburbs monitored' },
              { num: '6am', label: 'Daily digest' },
            ].map((s, i, arr) => (
              <div key={s.label} style={{
                display: 'flex', flexDirection: 'column',
                paddingRight: i < arr.length - 1 ? 32 : 0,
                borderRight: i < arr.length - 1 ? '1px solid #E4ECF7' : 'none',
              }}>
                <span style={{ fontSize: 28, fontWeight: 800, color: '#1A3A5C', lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: 4 }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — phone mockup (hidden on mobile) */}
        <div className="hidden md:flex" style={{
          flex: '1 1 45%', justifyContent: 'center',
          alignItems: 'center', position: 'relative',
        }}>
          <div className="animate-float" style={{ position: 'relative' }}>
            <PhoneMockup width={280}>
              <div style={{ background: '#1A3A5C', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#fff', fontSize: 14, fontWeight: 800 }}>PropSight</span>
                <div style={{ position: 'relative' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                  <div style={{ position: 'absolute', top: -3, right: -3, width: 6, height: 6, background: '#1D9E75', borderRadius: '50%' }} />
                </div>
              </div>
              <div style={{ padding: '8px 8px 4px', display: 'flex', gap: 4, overflowX: 'auto', background: '#fff' }}>
                {[{ l: '● Domain', c: '#166534', bg: '#F0FDF4', b: '#22C55E' }, { l: '● REA', c: '#C2410C', bg: '#FFF7ED', b: '#EF9F27' }, { l: '● CoreLogic', c: '#166534', bg: '#F0FDF4', b: '#22C55E' }].map(p => (
                  <span key={p.l} style={{ fontSize: 9, fontWeight: 600, color: p.c, background: p.bg, border: `0.5px solid ${p.b}`, padding: '3px 8px', borderRadius: 10, whiteSpace: 'nowrap' }}>{p.l}</span>
                ))}
              </div>
              <div style={{ borderLeft: '3px solid #1D9E75', padding: '8px 10px', margin: '6px 8px', background: '#fff', borderRadius: '0 6px 6px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#1A3A5C' }}>Tuesday digest</span>
                </div>
                <span style={{ fontSize: 9, color: '#1D9E75', fontWeight: 600 }}>8 new · AU &amp; NZ</span>
              </div>
              <div style={{ padding: '0 8px 8px' }}>
                <MiniPropertyCard score="91" price="$1,050,000" address="44 Norman Ave, Norman Park" tags={[{ text: '+18%', type: 'green' }, { text: 'River views', type: 'blue' }]} meta="4bd 3ba · Sat 9:30am" />
                <MiniPropertyCard score="88" price="$785,000" address="14 Redfern St, Cannon Hill" tags={[{ text: '+12%', type: 'green' }, { text: 'Train 400m', type: 'blue' }]} meta="3bd 2ba · Sat 10:30am" />
              </div>
            </PhoneMockup>

            <FloatingCard style={{ top: -10, right: -24, minWidth: 130 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, background: '#1D9E75', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600 }}>AI Score</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#1A3A5C' }}>91 / 100</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard style={{ bottom: 40, left: -24, minWidth: 140 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#1D9E75" /><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600 }}>Perfect match</div>
                  <div style={{ fontSize: 10, color: '#9CA3AF' }}>3 suburbs · $785k</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard style={{ top: 80, left: -20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /></svg>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#1A3A5C', whiteSpace: 'nowrap' }}>6am digest ready</div>
                  <div style={{ fontSize: 10, color: '#9CA3AF' }}>Just now</div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
