'use client';
import { useState, useEffect } from 'react';

function DigestCard({ address, suburb, score, price, tags, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const tagColors = {
    green:  { bg: '#F0FDF4', color: '#166534' },
    blue:   { bg: '#EFF6FF', color: '#1D4ED8' },
    orange: { bg: '#FFF7ED', color: '#C2410C' },
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      border: '0.5px solid #E4ECF7',
      padding: '12px',
      marginBottom: 8,
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity 400ms ease, transform 400ms ease',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: '#8E8E93', fontWeight: 500 }}>{suburb}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 48, height: 4, background: '#E4ECF7', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              width: `${score}%`, height: '100%',
              background: score >= 80 ? '#1D9E75' : score >= 65 ? '#EF9F27' : '#E24B4A',
              borderRadius: 2,
              transition: 'width 800ms ease',
            }} />
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#1A3A5C' }}>{score}</span>
        </div>
      </div>

      <div style={{ fontSize: 12, fontWeight: 600, color: '#1A3A5C', marginBottom: 4 }}>{address}</div>
      <div style={{ fontSize: 11, color: '#636366', marginBottom: 8, fontWeight: 500 }}>{price}</div>

      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {tags.map((tag, i) => (
          <span key={i} style={{
            fontSize: 9, fontWeight: 600, padding: '2px 6px', borderRadius: 4,
            background: (tagColors[tag.type] || tagColors.blue).bg,
            color: (tagColors[tag.type] || tagColors.blue).color,
          }}>
            {tag.text}
          </span>
        ))}
      </div>
    </div>
  );
}

function SignalCard({ icon, title, subtitle, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{
      background: '#E1F5EE',
      borderRadius: 10,
      padding: '10px 12px',
      marginBottom: 8,
      border: '1px solid #A7F3D0',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(6px)',
      transition: 'opacity 400ms ease, transform 400ms ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 14 }}>{icon}</span>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#065F46' }}>{title}</div>
          <div style={{ fontSize: 9, color: '#047857', marginTop: 1 }}>{subtitle}</div>
        </div>
        <div style={{
          marginLeft: 'auto', fontSize: 8, fontWeight: 700, color: '#fff',
          background: '#1D9E75', padding: '2px 6px', borderRadius: 4,
        }}>
          NEW
        </div>
      </div>
    </div>
  );
}

export default function PhoneMockup({ children, width = 280, className = '' }) {
  const [activeTab, setActiveTab] = useState('digest');

  const PROPERTIES = [
    {
      address: '14 Redfern St', suburb: 'Cannon Hill', score: 91, price: '$785,000',
      tags: [{ text: '↑ 12% growth', type: 'green' }, { text: 'Train 400m', type: 'blue' }, { text: 'Rail upgrade', type: 'orange' }],
      delay: 300,
    },
    {
      address: '22 Florence St', suburb: 'Hawthorne', score: 84, price: '$1,120,000',
      tags: [{ text: '↑ 15% growth', type: 'green' }, { text: 'Café strip 200m', type: 'blue' }],
      delay: 500,
    },
    {
      address: '7 Lambert Rd', suburb: 'Morningside', score: 76, price: '$650,000',
      tags: [{ text: '↑ 9% growth', type: 'green' }, { text: 'School 600m', type: 'blue' }],
      delay: 700,
    },
  ];

  const SIGNALS = [
    { icon: '🚆', title: 'New Cross River Rail stop confirmed', subtitle: 'Cannon Hill · High impact', delay: 400 },
    { icon: '🏗', title: 'Rezoning approved — Coorparoo corridor', subtitle: 'Medium impact · 3 suburbs affected', delay: 600 },
  ];

  const tabs = [
    { id: 'digest',   label: 'Digest',   icon: '🏠' },
    { id: 'signals',  label: 'Signals',  icon: '📡' },
    { id: 'insights', label: 'Insights', icon: '📈' },
  ];

  return (
    <div
      className={className}
      style={{
        width,
        borderRadius: 44,
        border: '2.5px solid #1A3A5C',
        background: '#F5F9FF',
        overflow: 'hidden',
        boxShadow: `
          0 0 0 6px rgba(26,58,92,0.08),
          0 32px 80px rgba(26,58,92,0.25),
          0 8px 20px rgba(0,0,0,0.12)
        `,
        position: 'relative',
      }}
    >
      {/* Dynamic Island */}
      <div style={{ height: 36, background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ width: 90, height: 22, background: '#000', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A1A1A', border: '1.5px solid #333' }} />
          <div style={{ width: 30, height: 4, borderRadius: 2, background: '#1A1A1A' }} />
        </div>
        <div style={{ position: 'absolute', right: 14, display: 'flex', alignItems: 'center', gap: 4 }}>
          {[3, 5, 7, 9].map((h, i) => (
            <div key={i} style={{ width: 2.5, height: h, background: i < 3 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
          ))}
          <div style={{ width: 18, height: 9, border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: 2, marginLeft: 2, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 1, top: 1, width: '75%', height: 'calc(100% - 2px)', background: '#1D9E75', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* App header */}
      <div style={{ padding: '10px 14px 8px', background: '#fff', borderBottom: '0.5px solid #E4ECF7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#1A3A5C', letterSpacing: '-0.3px' }}>PropSight</div>
            <div style={{ fontSize: 9, color: '#1D9E75', fontWeight: 600 }}>
              {activeTab === 'digest' ? '✓ 847 listings scanned today' : activeTab === 'signals' ? '📡 2 new signals in your area' : '📈 6 suburbs tracked'}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 28, height: 28, background: '#F5F9FF', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>🔔</div>
            <div style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, background: '#E24B4A', borderRadius: '50%', border: '1.5px solid #fff' }} />
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ height: 340, overflowY: 'auto', padding: '10px 12px', scrollbarWidth: 'none' }}>
        {activeTab === 'digest' && (
          <>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Today&apos;s top matches</div>
            {PROPERTIES.map((p, i) => <DigestCard key={i} {...p} />)}
          </>
        )}

        {activeTab === 'signals' && (
          <>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Infrastructure signals</div>
            {SIGNALS.map((s, i) => <SignalCard key={i} {...s} />)}
            <div style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', border: '0.5px solid #E4ECF7' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#1A3A5C', marginBottom: 6 }}>Suburb momentum</div>
              {[
                { name: 'Cannon Hill', status: 'Rising',   color: '#1D9E75' },
                { name: 'Morningside', status: 'Peak',     color: '#EF9F27' },
                { name: 'Coorparoo',   status: 'Recovery', color: '#3B82F6' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: i < 2 ? '0.5px solid #F5F9FF' : 'none' }}>
                  <span style={{ fontSize: 10, color: '#1A3A5C' }}>{s.name}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: s.color, background: `${s.color}18`, padding: '2px 6px', borderRadius: 4 }}>{s.status}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'insights' && (
          <>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>Suburb insights</div>
            {[
              { suburb: 'Cannon Hill', match: 91, avg: '$785K', trend: '+2.1%', up: true },
              { suburb: 'Morningside', match: 84, avg: '$820K', trend: '+1.4%', up: true },
              { suburb: 'Coorparoo',   match: 71, avg: '$745K', trend: '-0.3%', up: false },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', marginBottom: 6, border: '0.5px solid #E4ECF7' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#1A3A5C' }}>{s.suburb}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: s.up ? '#1D9E75' : '#E24B4A' }}>{s.trend}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 9, color: '#636366' }}>Avg {s.avg}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 36, height: 3, background: '#E4ECF7', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ width: `${s.match}%`, height: '100%', background: '#1D9E75', borderRadius: 2 }} />
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 700, color: '#1A3A5C' }}>{s.match}%</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Bottom tab bar */}
      <div style={{ display: 'flex', background: '#fff', borderTop: '0.5px solid #E4ECF7', padding: '6px 0 10px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{ flex: 1, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
          >
            <span style={{ fontSize: 14 }}>{tab.icon}</span>
            <span style={{ fontSize: 8, fontWeight: tab.id === activeTab ? 700 : 400, color: tab.id === activeTab ? '#1D9E75' : '#9CA3AF' }}>{tab.label}</span>
            {tab.id === activeTab && <div style={{ width: 16, height: 2, background: '#1D9E75', borderRadius: 1 }} />}
          </button>
        ))}
      </div>
    </div>
  );
}
