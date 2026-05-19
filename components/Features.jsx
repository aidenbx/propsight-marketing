'use client';
import { useState } from 'react';
import AnimateOnScroll from './ui/AnimateOnScroll';

const TABS = [
  { id: 'buyer',    label: 'First Home Buyer' },
  { id: 'investor', label: 'Investor' },
  { id: 'family',   label: 'Family Buyer' },
];

const FEATURES = {
  buyer: [
    {
      tone: 'teal',
      title: 'Know what you can actually afford',
      body: 'Set your borrowing estimate once. Vestio flags every listing as Within reach, Possible with LMI, or Out of range — before you even open it.',
      metric: 'Know before you look',
      outcome: '💡 Saves hours of false hope',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      tone: 'navy',
      title: 'Your shortlist, every morning',
      body: 'Wake up to 20 pre-scored matches that fit your suburb, budget, and bedroom count — ranked best first. No more scrolling across multiple sites.',
      metric: '3 mins vs 3 hours',
      outcome: '⏱ 3 minutes vs 3 hours',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
      ),
    },
    {
      tone: 'teal',
      title: 'Saturday sorted automatically',
      body: 'Tap Inspect on anything you like. Vestio builds your Saturday inspection route — addresses, times, directions — without a spreadsheet in sight.',
      metric: 'Saturday sorted',
      outcome: '📍 Your route, not your stress',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
    },
  ],
  investor: [
    {
      tone: 'teal',
      title: 'Find out before the suburb does',
      body: 'Vestio scans hundreds of news sources daily. When a train station gets approved, a rezoning passes, or a major employer commits — you get an alert before prices move.',
      metric: 'Before prices move',
      outcome: '🚆 Real signals, real timing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
    {
      tone: 'navy',
      title: 'Suburb momentum at a glance',
      body: 'Every suburb classified as Rising, Peak, Declining, or Recovery — updated daily from price trend and listing volume data. Know the cycle before you commit.',
      metric: '12 metrics per suburb',
      outcome: '📈 Know the cycle',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
    },
    {
      tone: 'teal',
      title: 'Compare suburbs side by side',
      body: 'Avg price, rental yield, school ratings and AI match score across up to 3 suburbs simultaneously. The analysis your broker charges $300 for.',
      metric: '12 metrics per suburb',
      outcome: '🔍 Free suburb analysis',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/>
        </svg>
      ),
    },
  ],
  family: [
    {
      tone: 'teal',
      title: 'School zones that actually matter',
      body: 'Tell Vestio good schools matter. Every property card shows school catchment quality for that suburb — filter your digest to only show zones that meet your standard.',
      metric: '12 metrics per suburb',
      outcome: '🎓 Schools front and centre',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      tone: 'navy',
      title: 'Safety and lifestyle, scored',
      body: 'Low crime, parks nearby, walkability — set these as high priority goals and every AI score reflects what actually matters to your family, not just price per square metre.',
      metric: '91/100 — scored in seconds',
      outcome: '🏡 Scored for your life',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      tone: 'teal',
      title: 'Never inspect the wrong house again',
      body: "Vestio's AI score tells you why a property fits or doesn't before you put it in the calendar — saving you wasted drives and disappointment.",
      metric: 'Saturday sorted',
      outcome: '✓ Qualify before you commit',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
  ],
};

function FeatureCard({ feature, delay, cardIndex }) {
  return (
    <AnimateOnScroll delay={delay}>
      <div
        style={{
          background: '#fff', border: '1px solid #E4ECF7',
          borderRadius: 16, padding: '28px 24px',
          display: 'flex', flexDirection: 'column',
          height: '100%', transition: 'all 250ms ease', cursor: 'default',
          position: 'relative', overflow: 'hidden',
        }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,58,92,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        {/* Background number */}
        <div style={{
          position: 'absolute', top: -8, right: 12,
          fontSize: 72, fontWeight: 800, color: '#F5F9FF',
          userSelect: 'none', zIndex: 0, lineHeight: 1, pointerEvents: 'none',
        }}>
          {cardIndex + 1}
        </div>

        {/* Icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14, marginBottom: 20, flexShrink: 0,
          background: feature.tone === 'teal' ? '#E6FFF7' : '#E8EEF5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 1,
        }}>
          {feature.icon}
        </div>

        {/* Content at zIndex 1 */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Outcome metric */}
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1D9E75', marginBottom: 8 }}>
            {feature.metric}
          </div>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A3A5C', marginBottom: 12, margin: '0 0 12px' }}>{feature.title}</h3>
          <p style={{ fontSize: 14, color: '#636366', lineHeight: 1.7, margin: '0 0 20px', flex: 1 }}>{feature.body}</p>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#E1F5EE', color: '#1D9E75',
            fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 20,
            alignSelf: 'flex-start',
          }}>
            {feature.outcome}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function Features() {
  const [activeTab, setActiveTab] = useState('buyer');

  return (
    <section id="features" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>
              WHY PROPSIGHT
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1A3A5C', lineHeight: 1.08, margin: '0 0 20px' }}>
              Stop browsing. Start deciding.
            </h2>
            <p style={{ fontSize: 17, color: '#636366', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
              Most buyers spend their weekends buried across multiple listing sites, booking inspections for properties that turn out to be the wrong size, wrong street, or wrong price. Vestio reads the market every morning so you don&apos;t have to.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Audience tabs */}
        <AnimateOnScroll delay={0.1}>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 22px', borderRadius: 10, fontSize: 14, fontWeight: 600,
                  border: activeTab === tab.id ? 'none' : '1px solid #E4ECF7',
                  background: activeTab === tab.id ? '#1D9E75' : '#fff',
                  color: activeTab === tab.id ? '#fff' : '#1A3A5C',
                  cursor: 'pointer', transition: 'all 150ms ease',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {FEATURES[activeTab].map((f, i) => (
            <FeatureCard key={`${activeTab}-${i}`} feature={f} delay={i * 0.1} cardIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
