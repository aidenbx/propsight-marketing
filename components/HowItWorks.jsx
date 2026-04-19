'use client';
import AnimateOnScroll from './ui/AnimateOnScroll';

const STEPS = [
  {
    num: 1,
    bg: '#1D9E75',
    title: 'Set your preferences',
    body: "Choose suburbs, set budget, and tell PropSight what you're looking for. Takes under 2 minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: 2,
    bg: '#1A3A5C',
    title: 'Receive your 6am digest',
    body: 'Every morning a ranked shortlist of AI-scored properties lands on your device — before you wake up.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    num: 3,
    bg: '#1D9E75',
    title: 'Analyse the signals',
    body: 'Suburb growth trends, infrastructure news, and capital gains signals — all in one place.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: 4,
    bg: '#1A3A5C',
    title: 'Schedule inspections',
    body: 'Tap Inspect on anything you like. PropSight builds your Saturday inspection route automatically.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
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
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>
              HOW IT WORKS
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#1A3A5C', lineHeight: 1.1, margin: '0 0 16px' }}>
              Simple. Powerful. Automated.
            </h2>
            <p style={{ fontSize: 17, color: '#636366', margin: 0 }}>
              From setup to Saturday inspection in minutes.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32,
        }}>
          {STEPS.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 0.1}>
              <div style={{ textAlign: 'center', position: 'relative' }}>
                {/* Connector line — desktop only (handled via CSS) */}
                <div style={{
                  width: 56, height: 56,
                  background: step.bg, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  position: 'relative', zIndex: 1,
                }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A3A5C', marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: '#636366', lineHeight: 1.6, maxWidth: 200, margin: '0 auto' }}>
                  {step.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
