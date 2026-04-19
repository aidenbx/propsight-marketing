'use client';
import AnimateOnScroll from './ui/AnimateOnScroll';
import PricingToggle from './ui/PricingToggle';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.propsight.com.au';

function CheckIcon({ color = '#1D9E75' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.15" />
      <path d="M6 10l3 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon({ color = '#9CA3AF' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.12" />
      <path d="M7 7l6 6M13 7l-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FeatureRow({ included, text, dark }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      {included
        ? <CheckIcon color={dark ? 'rgba(255,255,255,0.9)' : '#1D9E75'} />
        : <XIcon color={dark ? 'rgba(255,255,255,0.3)' : '#9CA3AF'} />
      }
      <span style={{
        fontSize: 14,
        color: dark
          ? (included ? '#fff' : 'rgba(255,255,255,0.4)')
          : (included ? '#1A3A5C' : '#9CA3AF'),
      }}>
        {text}
      </span>
    </div>
  );
}

export default function Pricing({ billingCycle, onToggle }) {
  const annual = billingCycle === 'annual';

  const cards = [
    {
      id: 'free',
      label: 'Free',
      monthlyPrice: '$0',
      annualPrice: '$0',
      sub: 'Always free',
      features: [
        { included: true,  text: '5 properties per day' },
        { included: true,  text: '3 suburbs monitored' },
        { included: true,  text: 'Daily digest' },
        { included: false, text: 'AI property scoring' },
        { included: false, text: 'Capital growth signals' },
        { included: false, text: 'Inspection scheduler' },
        { included: false, text: 'AU + NZ coverage' },
      ],
      cta: 'Get started free',
      dark: false,
      featured: false,
    },
    {
      id: 'pro',
      label: 'Pro',
      monthlyPrice: '$39',
      annualPrice: '$31',
      annualSub: 'billed $374/yr',
      sub: 'Cancel anytime',
      badge: 'Most popular',
      features: [
        { included: true,  text: 'Full daily digest' },
        { included: true,  text: '8 suburbs monitored' },
        { included: true,  text: 'AI property scoring' },
        { included: true,  text: 'Capital growth signals' },
        { included: true,  text: 'Inspection scheduler' },
        { included: true,  text: 'AU + NZ coverage' },
        { included: false, text: 'Advanced analytics' },
      ],
      cta: 'Get Pro',
      dark: true,
      featured: true,
    },
    {
      id: 'premium',
      label: 'Premium',
      monthlyPrice: '$79',
      annualPrice: '$63',
      sub: 'Serious investors',
      features: [
        { included: true, text: 'Everything in Pro' },
        { included: true, text: '20 suburbs monitored' },
        { included: true, text: 'Advanced analytics' },
        { included: true, text: 'Predictive insights' },
        { included: true, text: 'Priority data refresh' },
        { included: true, text: 'Early feature access' },
      ],
      cta: 'Get Premium',
      dark: false,
      featured: false,
    },
  ];

  return (
    <section id="pricing" style={{ background: '#F5F9FF', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>PRICING</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#1A3A5C', lineHeight: 1.1, margin: '0 0 16px' }}>
              Start free. Scale when ready.
            </h2>
            <p style={{ fontSize: 17, color: '#636366', margin: 0 }}>No contracts. No credit card. Cancel anytime.</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <PricingToggle billingCycle={billingCycle} onToggle={onToggle} />
        </AnimateOnScroll>

        {/* Cards */}
        <div style={{
          display: 'flex', gap: 20, marginTop: 48,
          alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {cards.map((card, i) => {
            const price = annual ? card.annualPrice : card.monthlyPrice;
            const isDesktopFeatured = card.featured;

            return (
              <AnimateOnScroll key={card.id} delay={i * 0.12}>
                <div style={{
                  position: 'relative',
                  flex: '1 1 280px', maxWidth: 320,
                  borderRadius: 20,
                  padding: 36,
                  background: card.dark ? '#1A3A5C' : '#fff',
                  border: card.dark ? 'none' : '1px solid #E4ECF7',
                  boxShadow: card.dark ? '0 24px 56px rgba(26,58,92,0.30)' : 'none',
                  transform: isDesktopFeatured ? 'scale(1.04) translateY(-8px)' : 'none',
                  transition: 'transform 200ms ease',
                  display: 'flex', flexDirection: 'column',
                  cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = isDesktopFeatured ? 'scale(1.05) translateY(-8px)' : 'scale(1.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = isDesktopFeatured ? 'scale(1.04) translateY(-8px)' : 'scale(1)'; }}
                >
                  {/* Badge */}
                  {card.badge && (
                    <div style={{
                      position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                      background: '#EF9F27', color: '#fff', fontSize: 11, fontWeight: 700,
                      padding: '5px 20px', borderRadius: 20,
                      boxShadow: '0 4px 12px rgba(239,159,39,0.4)',
                      whiteSpace: 'nowrap',
                    }}>
                      {card.badge}
                    </div>
                  )}

                  {/* Label */}
                  <div style={{
                    fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px',
                    color: card.dark ? 'rgba(255,255,255,0.7)' : '#9CA3AF',
                    marginBottom: 4,
                  }}>
                    {card.label}
                  </div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, color: card.dark ? '#fff' : '#1A3A5C' }}>
                      {price}
                    </span>
                    <span style={{ fontSize: 18, color: card.dark ? 'rgba(255,255,255,0.6)' : '#9CA3AF' }}>/mo</span>
                  </div>

                  {annual && card.annualSub && (
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{card.annualSub}</div>
                  )}
                  <div style={{ fontSize: 12, color: card.dark ? 'rgba(255,255,255,0.6)' : '#9CA3AF', marginTop: 4 }}>
                    {card.sub}
                  </div>

                  <div style={{ height: 1, background: card.dark ? 'rgba(255,255,255,0.15)' : '#E4ECF7', margin: '24px 0' }} />

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                    {card.features.map(f => (
                      <FeatureRow key={f.text} included={f.included} text={f.text} dark={card.dark} />
                    ))}
                  </div>

                  {/* CTA */}
                  <a href={`${APP_URL}/register`} rel="noopener noreferrer"
                    style={{
                      display: 'block', textAlign: 'center', marginTop: 28,
                      width: '100%', height: 48, lineHeight: '48px',
                      borderRadius: 12, textDecoration: 'none',
                      fontSize: 15, fontWeight: 600,
                      transition: 'all 200ms ease',
                      ...(card.dark
                        ? { background: '#1D9E75', color: '#fff', border: 'none' }
                        : card.id === 'free'
                          ? { background: 'transparent', color: '#1D9E75', border: '1.5px solid #1D9E75' }
                          : { background: '#1A3A5C', color: '#fff', border: 'none' }
                      ),
                    }}
                    onMouseEnter={e => {
                      if (card.dark) e.currentTarget.style.background = '#0F6E56';
                      else if (card.id === 'free') e.currentTarget.style.background = '#E6FFF7';
                      else e.currentTarget.style.background = '#0F2236';
                    }}
                    onMouseLeave={e => {
                      if (card.dark) e.currentTarget.style.background = '#1D9E75';
                      else if (card.id === 'free') e.currentTarget.style.background = 'transparent';
                      else e.currentTarget.style.background = '#1A3A5C';
                    }}
                  >
                    {card.cta}
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
