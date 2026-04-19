'use client';
import AnimateOnScroll from './ui/AnimateOnScroll';

const FEATURES = [
  {
    tone: 'teal',
    title: 'AI Property Scoring',
    body: 'Every listing scored 0–100 using suburb data, price benchmarks, transport access, and live market signals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    tone: 'navy',
    title: 'Capital Growth Signals',
    body: 'Infrastructure news, rezoning approvals, and development announcements surface automatically each morning.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    tone: 'teal',
    title: 'Suburb Intelligence',
    body: 'Median prices, days on market, demand scores, and 12-month growth trends for every suburb you monitor.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    tone: 'navy',
    title: 'Inspection Scheduler',
    body: 'Approve properties and PropSight builds an optimised Saturday route — times, addresses, directions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    tone: 'teal',
    title: 'Daily 6am Digest',
    body: 'Your personalised feed delivered every morning — ranked, scored, and ready to act on immediately.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    tone: 'navy',
    title: 'AU + NZ Coverage',
    body: 'Monitor suburbs across Australia and New Zealand — from Brisbane and Sydney to Auckland and Wellington.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>FEATURES</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#1A3A5C', lineHeight: 1.1, margin: '0 0 16px' }}>
              Everything you need to invest smarter.
            </h2>
            <p style={{ fontSize: 17, color: '#636366', margin: 0 }}>Built for buyers who take property seriously.</p>
          </div>
        </AnimateOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map((f, i) => (
            <AnimateOnScroll key={f.title} delay={i * 0.08}>
              <div
                style={{
                  background: '#fff', border: '1px solid #E4ECF7',
                  borderRadius: 16, padding: 28,
                  transition: 'all 250ms ease', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,58,92,0.10)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: 20,
                  background: f.tone === 'teal' ? '#E6FFF7' : '#E8EEF5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A3A5C', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#636366', lineHeight: 1.6, margin: 0 }}>{f.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
