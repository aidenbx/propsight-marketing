'use client';

const SIGNALS = [
  { icon: '🚆', text: 'Cross River Rail — $5.4B Brisbane rail project transforming suburb connectivity' },
  { icon: '🏗', text: 'Western Sydney rezoning — Austral and Leppington reshaped by large-scale master-planning' },
  { icon: '📈', text: 'Brisbane forecast — CoreLogic projects 6–7% growth in inner and middle-ring suburbs for 2026' },
  { icon: '🏛', text: 'Queensland infrastructure — $103.9B pipeline over five years, largest in state history' },
  { icon: '🚆', text: 'Beenleigh Rail Upgrade — Double-tracking Kuraby to Beenleigh, $5.75B committed' },
  { icon: '🏅', text: 'Brisbane 2032 Olympics — Infrastructure spend accelerating across inner-city precincts' },
  { icon: '📈', text: 'Wavell Heights — Inner north Brisbane experiencing wave of gentrification in 2026' },
  { icon: '🏗', text: 'Bray Park — New town centre and rail access driving Moreton Bay growth corridor' },
];

// Duplicate for seamless loop
const DOUBLED = [...SIGNALS, ...SIGNALS];

export default function SignalTicker() {
  return (
    <div style={{ background: '#1A3A5C', width: '100%', overflow: 'hidden', padding: '12px 0', position: 'relative' }}>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 55s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Pinned label */}
        <div style={{
          flexShrink: 0,
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '0 16px 0 20px',
          borderRight: '1px solid rgba(29,158,117,0.5)',
          marginRight: 20,
          zIndex: 2,
          background: '#1A3A5C',
        }}>
          <span style={{ fontSize: 12 }}>📡</span>
          <span style={{
            fontSize: 10, fontWeight: 700, color: '#1D9E75',
            textTransform: 'uppercase', letterSpacing: '1.2px', whiteSpace: 'nowrap',
          }}>
            Live Signals
          </span>
        </div>

        {/* Scrolling track */}
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div className="ticker-track">
            {DOUBLED.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, paddingRight: 40, whiteSpace: 'nowrap' }}>
                <span style={{ fontSize: 14 }}>{s.icon}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>{s.text}</span>
                <span style={{ color: '#1D9E75', fontSize: 16, marginLeft: 8 }}>·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Source attribution */}
        <div style={{
          flexShrink: 0, padding: '0 16px',
          fontSize: 10, color: 'rgba(29,158,117,0.7)',
          whiteSpace: 'nowrap',
          background: '#1A3A5C',
          zIndex: 2,
        }}>
          Source: CoreLogic, QLD Gov, Brisbane Times
        </div>
      </div>
    </div>
  );
}
