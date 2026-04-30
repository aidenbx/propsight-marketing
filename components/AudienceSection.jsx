'use client';
import AnimateOnScroll from './ui/AnimateOnScroll';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.propsight.com.au';

function CheckItem({ text, light }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
        <circle cx="10" cy="10" r="10" fill={light ? '#1D9E75' : '#1A3A5C'} fillOpacity="0.15" />
        <path d="M6 10l3 3 5-5" stroke={light ? '#1D9E75' : '#1A3A5C'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: 14, color: '#1A3A5C', lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

export default function AudienceSection() {
  return (
    <section style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', gap: 24, flexWrap: 'wrap',
      }}>
        {/* LEFT — First home buyers */}
        <AnimateOnScroll delay={0} style={{ flex: '1 1 320px' }}>
          <div style={{
            background: '#E6FFF7',
            border: '1px solid #9FE1CB',
            borderRadius: 20, padding: 36,
            height: '100%', display: 'flex', flexDirection: 'column',
          }}>
            <span style={{
              display: 'inline-flex',
              background: '#1D9E75', color: '#fff',
              fontSize: 11, fontWeight: 700, letterSpacing: '1px',
              padding: '5px 14px', borderRadius: 20,
              alignSelf: 'flex-start',
            }}>
              FOR FIRST HOME BUYERS
            </span>

            <h3 style={{
              fontSize: 26, fontWeight: 800, color: '#1A3A5C',
              lineHeight: 1.2, margin: '16px 0 0',
            }}>
              Struggling with the housing crisis?
            </h3>

            <p style={{ fontSize: 15, color: '#636366', lineHeight: 1.65, marginTop: 12 }}>
              Properties sell in days. Open homes book out. By the time you find something worth inspecting, it&apos;s gone. PropSight monitors your target suburbs 24/7 and alerts you the moment something matching your budget appears — before the weekend rush.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20, flex: 1 }}>
              <CheckItem text="Daily digest of new listings matching your budget" light />
              <CheckItem text="AI scoring so you focus only on the best matches" light />
              <CheckItem text="Instant alerts — never miss a new listing again" light />
              <CheckItem text="Inspection scheduler so you see more in less time" light />
            </div>

            <a href={`${APP_URL}/register`} rel="noopener noreferrer"
              style={{
                display: 'block', textAlign: 'center', marginTop: 24,
                height: 48, lineHeight: '48px', borderRadius: 12,
                background: '#1D9E75', color: '#fff',
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
                transition: 'background 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0F6E56'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1D9E75'; }}
            >
              Start your free search →
            </a>
          </div>
        </AnimateOnScroll>

        {/* RIGHT — Investors */}
        <AnimateOnScroll delay={0.1} style={{ flex: '1 1 320px' }}>
          <div style={{
            background: '#EEF2F7',
            border: '1px solid #B8C9DC',
            borderRadius: 20, padding: 36,
            height: '100%', display: 'flex', flexDirection: 'column',
          }}>
            <span style={{
              display: 'inline-flex',
              background: '#1A3A5C', color: '#fff',
              fontSize: 11, fontWeight: 700, letterSpacing: '1px',
              padding: '5px 14px', borderRadius: 20,
              alignSelf: 'flex-start',
            }}>
              FOR PROPERTY INVESTORS
            </span>

            <h3 style={{
              fontSize: 26, fontWeight: 800, color: '#1A3A5C',
              lineHeight: 1.2, margin: '16px 0 0',
            }}>
              Find growth before the market does.
            </h3>

            <p style={{ fontSize: 15, color: '#636366', lineHeight: 1.65, marginTop: 12 }}>
              Infrastructure announcements, rezoning approvals, and demographic shifts all signal suburb momentum — weeks before prices move. PropSight aggregates these signals daily so you can position ahead of the curve, not behind it.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20, flex: 1 }}>
              <CheckItem text="📡 Infrastructure signals — get alerted when new train lines, rezoning approvals or major employers are announced in your target suburbs before prices move" />
              <CheckItem text="📈 Suburb momentum scores — track which suburbs are Rising, Peak, Declining or in Recovery" />
              <CheckItem text="💰 Rental yield estimates on every listing" />
              <CheckItem text="🔍 Suburb comparison tool — compare up to 3 suburbs side by side across price, yield, schools and transport" />
            </div>

            <a href={`${APP_URL}/register`} rel="noopener noreferrer"
              style={{
                display: 'block', textAlign: 'center', marginTop: 24,
                height: 48, lineHeight: '48px', borderRadius: 12,
                background: '#1A3A5C', color: '#fff',
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
                transition: 'background 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0F2236'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1A3A5C'; }}
            >
              Start investing smarter →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
