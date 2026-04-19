const PEOPLE = [
  { initials: 'SC', name: 'Sarah C.',  location: 'Brisbane' },
  { initials: 'MR', name: 'Marcus R.', location: 'Gold Coast' },
  { initials: 'JL', name: 'Jamie L.',  location: 'Auckland' },
  { initials: 'TP', name: 'Tanya P.',  location: 'Brisbane Northside' },
  { initials: 'AK', name: 'Alex K.',   location: 'Wellington' },
  { initials: 'BN', name: 'Ben N.',    location: 'Sunshine Coast' },
];

function PersonItem({ initials, name, location }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', whiteSpace: 'nowrap' }}>
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        background: '#1D9E75', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700, flexShrink: 0,
      }}>
        {initials}
      </div>
      <div>
        <div style={{ fontSize: 14, color: '#1A3A5C', fontWeight: 500 }}>{name}</div>
        <div style={{ fontSize: 12, color: '#9CA3AF' }}>{location}</div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const doubled = [...PEOPLE, ...PEOPLE]; // duplicate for seamless loop

  return (
    <section style={{
      background: '#fff',
      padding: '32px 0',
      borderTop: '1px solid #E4ECF7',
      borderBottom: '1px solid #E4ECF7',
      overflow: 'hidden',
    }}>
      <div style={{
        textAlign: 'center', marginBottom: 20,
        fontSize: 11, fontWeight: 700, color: '#9CA3AF',
        letterSpacing: '1px', textTransform: 'uppercase',
      }}>
        TRUSTED BY EARLY USERS
      </div>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: 48 }}>
          {doubled.map((p, i) => (
            <PersonItem key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
