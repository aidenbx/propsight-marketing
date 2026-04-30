const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.propsight.com.au';

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#1D9E75" />
        <path d="M20 9L8 19.5V32h9v-8h6v8h9V19.5L20 9z" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <line x1="13" y1="22" x2="27" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
        <line x1="13" y1="25" x2="27" y2="25" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      </svg>
      <span style={{ fontSize: 20, fontWeight: 800 }}>
        <span style={{ color: '#fff' }}>Prop</span>
        <span style={{ color: '#1D9E75' }}>Sight</span>
      </span>
    </div>
  );
}

function FooterSocialIcon({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        width: 36, height: 36, borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none', transition: 'all 200ms ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
    >
      {children}
    </a>
  );
}

const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Features',     href: '#features' },
      { label: 'Pricing',      href: '#pricing' },
      { label: 'Sign up free', href: `${APP_URL}/register` },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',   href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',   href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy',    href: '/privacy#cookies' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0F2236', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 40, marginBottom: 40,
        }}>
          {/* Brand column */}
          <div>
            <Logo />
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>
              Find smarter. Move faster.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <FooterSocialIcon href="https://instagram.com/propsightau">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </FooterSocialIcon>
              <FooterSocialIcon href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </FooterSocialIcon>
              <FooterSocialIcon href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </FooterSocialIcon>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map(col => (
            <div key={col.heading}>
              <div style={{
                color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16,
              }}>
                {col.heading}
              </div>
              {col.links.map(link => (
                <a key={link.label} href={link.href}
                  style={{
                    display: 'block', color: 'rgba(255,255,255,0.65)',
                    fontSize: 14, textDecoration: 'none',
                    marginBottom: 10, transition: 'color 200ms ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          color: 'rgba(255,255,255,0.3)', fontSize: 11, fontStyle: 'italic',
          marginBottom: 0,
        }}>
          Not financial advice. Property data only. Always seek independent professional advice before purchasing.
        </p>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '32px 0' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
              © 2026 PropSight Pty Ltd. All rights reserved.
            </span>
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none', transition: 'color 150ms ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >Privacy</a>
            <a href="/terms" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, textDecoration: 'none', transition: 'color 150ms ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >Terms</a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
            Built in Australia 🇦🇺
          </span>
        </div>
      </div>
    </footer>
  );
}
