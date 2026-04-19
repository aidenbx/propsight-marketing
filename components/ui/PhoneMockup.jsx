export default function PhoneMockup({ children, width = 280, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width,
        borderRadius: 40,
        border: '3px solid #1A3A5C',
        background: '#fff',
        overflow: 'hidden',
        boxShadow: '0 32px 64px rgba(26,58,92,0.20)',
      }}
    >
      {/* Notch bar */}
      <div style={{
        height: 32,
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: 60,
          height: 16,
          background: '#000',
          borderRadius: 8,
        }} />
      </div>

      {/* Content */}
      <div style={{ overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}
