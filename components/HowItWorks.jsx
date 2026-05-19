'use client';
import AnimateOnScroll from './ui/AnimateOnScroll';

const BEFORE = [
  'Open 4+ different property sites every night',
  'Scroll past 200+ listings to find 3 worth seeing',
  'Miss the suburb rezoning news until prices move',
  'Book 6 inspections — 4 turn out to be wrong',
  'Spend your Sunday doing property research',
];

const AFTER = [
  'One morning digest, ranked best first',
  '20 pre-scored matches that actually fit',
  'Infrastructure alerts before the market reacts',
  'Inspect only what truly fits your goals',
  'Spend Sunday at the inspection, not behind a screen',
];

const STEPS = [
  {
    num: 1, bg: '#1D9E75',
    title: 'Tell us what matters',
    body: 'Set your suburbs, budget, and buyer goals in under 2 minutes. Family buyer, investor, lifestyle seeker — Vestio personalises everything from there.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
      </svg>
    ),
  },
  {
    num: 2, bg: '#1A3A5C',
    title: 'Wake up to your shortlist',
    body: 'Every morning at your chosen time, a ranked digest of the best matching properties lands on your phone. Already scored. Already filtered.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
  },
  {
    num: 3, bg: '#1D9E75',
    title: 'Read the signals, not the noise',
    body: 'Infrastructure alerts, suburb momentum scores, and growth signals surface automatically. Know what the market knows — and what it doesn\'t yet.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    num: 4, bg: '#1A3A5C',
    title: 'Inspect smarter, decide faster',
    body: 'Tap Inspect. Vestio builds your Saturday route. Directions, times, addresses — all set. No spreadsheet, no stress.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#F5F9FF', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>
              HOW IT WORKS
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1A3A5C', lineHeight: 1.08, margin: '0 0 12px' }}>
              From setup to Saturday inspection in 4 minutes.
            </h2>
            <p style={{ fontSize: 19, color: '#636366', margin: 0, fontStyle: 'italic' }}>
              Not 4 hours. Not 4 weekends.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Before / After comparison */}
        <AnimateOnScroll delay={0.1}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 0,
            background: '#fff', borderRadius: 16,
            border: '1px solid #E4ECF7',
            boxShadow: '0 4px 24px rgba(26,58,92,0.08)',
            overflow: 'hidden',
            marginBottom: 72,
          }}>
            {/* Without */}
            <div style={{ padding: '28px 28px 32px', background: '#FFF8F7', borderRight: '1px solid #E4ECF7' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#E24B4A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}>
                ✗ Without Vestio
              </div>
              {BEFORE.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  padding: '10px 0',
                  borderBottom: i < BEFORE.length - 1 ? '1px solid #FDE8E6' : 'none',
                }}>
                  <span style={{ fontSize: 14, color: '#E24B4A', flexShrink: 0, marginTop: 1 }}>✗</span>
                  <span style={{ fontSize: 14, color: '#636366', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* With */}
            <div style={{ padding: '28px 28px 32px', background: '#F6FEFB' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}>
                ✓ With Vestio
              </div>
              {AFTER.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  padding: '10px 0',
                  borderBottom: i < AFTER.length - 1 ? '1px solid #D1F7E8' : 'none',
                }}>
                  <span style={{ fontSize: 14, color: '#1D9E75', flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#1A3A5C', lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Steps — horizontal timeline */}
        <style>{`
          .steps-grid { grid-template-columns: 1fr 1fr; gap: 40px 24px; }
          .connector-line { display: none; }
          @media (min-width: 1024px) {
            .steps-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
            .connector-line { display: block; }
          }
          @keyframes stepPulse {
            0%, 100% { box-shadow: 0 4px 16px rgba(0,0,0,0.15), 0 0 0 0 rgba(29,158,117,0.3); }
            50% { box-shadow: 0 4px 16px rgba(0,0,0,0.15), 0 0 0 8px rgba(29,158,117,0); }
          }
        `}</style>
        <div style={{ position: 'relative' }}>
          {/* Connecting line — desktop only */}
          <div className="connector-line" style={{
            position: 'absolute', top: 28, left: '12.5%', right: '12.5%',
            height: 2, background: 'linear-gradient(to right, #1D9E75, #E4ECF7, #1D9E75)', zIndex: 0,
          }} />

          <div className="steps-grid" style={{
            display: 'grid',
            gap: 24,
          }}>
            {STEPS.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.12}>
                <div style={{ textAlign: 'center', position: 'relative' }}>
                  {/* Step circle */}
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: '50%',
                      background: step.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 8px',
                      position: 'relative', zIndex: 1,
                      transition: 'transform 200ms ease',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                      cursor: 'default',
                      ...(i === 0 ? { animation: 'stepPulse 2.5s ease infinite' } : {}),
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <div style={{ fontSize: 11, fontWeight: 700, color: step.bg, marginBottom: 12, letterSpacing: '0.5px' }}>
                    STEP {step.num}
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1A3A5C', marginBottom: 8, margin: '0 0 8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: '#636366', lineHeight: 1.65, maxWidth: 180, margin: '0 auto' }}>
                    {step.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
