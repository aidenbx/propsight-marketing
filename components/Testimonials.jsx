'use client';
import AnimateOnScroll from './ui/AnimateOnScroll';

const TESTIMONIALS = [
  {
    quote: "Finally an app that does the research for me. I used to spend Sunday afternoons scrolling through Domain — now I get a ranked list every morning.",
    name: 'Sarah C.',
    role: 'First home buyer',
    location: 'Brisbane',
    initials: 'SC',
  },
  {
    quote: "The suburb growth signals are genuinely useful. Found a property in Cannon Hill before anyone else because of the rail upgrade alert.",
    name: 'Marcus R.',
    role: 'Property investor',
    location: 'Gold Coast',
    initials: 'MR',
  },
  {
    quote: "I was sceptical about AI property scoring but the match scores are surprisingly accurate. Saved me from two properties that looked great but flagged poorly.",
    name: 'Jamie L.',
    role: 'Buyer',
    location: 'Auckland',
    initials: 'JL',
  },
];

function StarRow() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#1D9E75">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>
              EARLY FEEDBACK
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#1A3A5C', lineHeight: 1.1, margin: 0 }}>
              What our beta users say.
            </h2>
          </div>
        </AnimateOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div style={{
                background: '#fff', border: '1px solid #E4ECF7',
                borderRadius: 16, padding: 28,
                transition: 'all 250ms ease', height: '100%',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,58,92,0.10)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <StarRow />
                <div style={{ fontSize: 32, fontWeight: 800, color: '#1D9E75', lineHeight: 0.8, marginBottom: 12 }}>"</div>
                <p style={{ fontSize: 15, color: '#1A3A5C', lineHeight: 1.7, margin: '0 0 20px', flex: 1 }}>
                  {t.quote}
                </p>
                <div style={{ height: 1, background: '#E4ECF7', marginBottom: 16 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#1D9E75', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 700, flexShrink: 0,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1A3A5C' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#9CA3AF' }}>{t.role} · {t.location}</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
