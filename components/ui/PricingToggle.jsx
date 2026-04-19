'use client';

export default function PricingToggle({ billingCycle, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
      <div style={{
        display: 'inline-flex',
        background: '#fff',
        border: '1px solid #E4ECF7',
        borderRadius: 10,
        padding: 4,
      }}>
        {['monthly', 'annual'].map(cycle => (
          <button
            key={cycle}
            onClick={() => onToggle(cycle)}
            style={{
              padding: '8px 20px',
              borderRadius: 8,
              border: 'none',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              background: billingCycle === cycle ? '#1A3A5C' : 'transparent',
              color: billingCycle === cycle ? '#fff' : '#9CA3AF',
            }}
          >
            {cycle === 'monthly' ? 'Monthly' : 'Annual (save 20%)'}
          </button>
        ))}
      </div>
      {billingCycle === 'annual' && (
        <span style={{
          background: '#EF9F27',
          color: '#fff',
          fontSize: 11,
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: 20,
          letterSpacing: '0.5px',
        }}>
          SAVE 20%
        </span>
      )}
    </div>
  );
}
