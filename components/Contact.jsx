'use client';
import { useState } from 'react';
import AnimateOnScroll from './ui/AnimateOnScroll';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.propsight.com.au';

const INPUT_STYLE = {
  width: '100%', height: 48,
  border: '1.5px solid #E4ECF7',
  borderRadius: 10, padding: '0 16px',
  fontSize: 15, fontFamily: 'inherit',
  outline: 'none', transition: 'border-color 150ms ease, box-shadow 150ms ease',
  background: '#fff',
};

function InfoCard({ icon, title, sub }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #E4ECF7',
      borderRadius: 12, padding: 20,
      display: 'flex', alignItems: 'flex-start', gap: 14,
    }}>
      <div style={{ flexShrink: 0, marginTop: 2 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#1A3A5C' }}>{title}</div>
        <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>{sub}</div>
      </div>
    </div>
  );
}

function EmailIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
}

function MapPinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}

function SocialIcon({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        width: 40, height: 40, borderRadius: '50%',
        background: '#fff', border: '1px solid #E4ECF7',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none', transition: 'all 200ms ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#F5F9FF'; e.currentTarget.style.borderColor = '#1A3A5C'; }}
      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E4ECF7'; }}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function setField(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function onFocus(e) {
    e.target.style.borderColor = '#1D9E75';
    e.target.style.boxShadow = '0 0 0 3px rgba(29,158,117,0.12)';
  }
  function onBlur(e) {
    e.target.style.borderColor = '#E4ECF7';
    e.target.style.boxShadow = 'none';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${APP_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" style={{ background: '#F5F9FF', padding: '96px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 12 }}>GET IN TOUCH</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#1A3A5C', lineHeight: 1.1, margin: '0 0 16px' }}>
              We&apos;d love to hear from you.
            </h2>
            <p style={{ fontSize: 17, color: '#636366', margin: 0 }}>Questions, feedback, or partnership enquiries.</p>
          </div>
        </AnimateOnScroll>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Form */}
          <AnimateOnScroll delay={0.1} className="flex-1" style={{ flex: '1 1 340px', minWidth: 0 }}>
            <div style={{ background: '#fff', border: '1px solid #E4ECF7', borderRadius: 16, padding: 32 }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1A3A5C', marginBottom: 6 }}>Name</label>
                  <input
                    type="text" required placeholder="Your name" value={form.name}
                    onChange={setField('name')} onFocus={onFocus} onBlur={onBlur}
                    style={INPUT_STYLE}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1A3A5C', marginBottom: 6 }}>Email</label>
                  <input
                    type="email" required placeholder="your@email.com" value={form.email}
                    onChange={setField('email')} onFocus={onFocus} onBlur={onBlur}
                    style={INPUT_STYLE}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1A3A5C', marginBottom: 6 }}>Message</label>
                  <textarea
                    required placeholder="How can we help?" value={form.message}
                    onChange={setField('message')} onFocus={onFocus} onBlur={onBlur}
                    style={{ ...INPUT_STYLE, height: 'auto', minHeight: 120, padding: '14px 16px', resize: 'vertical' }}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#E24B4A', fontSize: 13, marginBottom: 12 }}>Something went wrong. Try again.</p>
                )}

                <button type="submit" disabled={status === 'loading' || status === 'success'}
                  style={{
                    width: '100%', height: 48, borderRadius: 12,
                    border: 'none', cursor: status === 'success' ? 'default' : 'pointer',
                    fontSize: 15, fontWeight: 600, fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    background: status === 'success' ? '#22C55E' : '#1D9E75',
                    color: '#fff', transition: 'background 200ms ease',
                  }}
                  onMouseEnter={e => { if (status === 'idle') e.currentTarget.style.background = '#0F6E56'; }}
                  onMouseLeave={e => { if (status === 'idle') e.currentTarget.style.background = '#1D9E75'; }}
                >
                  {status === 'loading' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0110 10" />
                    </svg>
                  )}
                  {status === 'success' && (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10l5 5 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                  {status === 'loading' ? 'Sending…' : status === 'success' ? 'Message sent!' : 'Send message →'}
                </button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Info */}
          <AnimateOnScroll delay={0.2} style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <InfoCard
              icon={<EmailIcon />}
              title="hello@propsight.com.au"
              sub="We reply within 24 hours"
            />
            <InfoCard
              icon={<MapPinIcon />}
              title="Brisbane, Queensland"
              sub="Serving AU + NZ markets"
            />
            {/* Social */}
            <div style={{ background: '#fff', border: '1px solid #E4ECF7', borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1A3A5C', marginBottom: 12 }}>Follow us</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <SocialIcon href="https://instagram.com/propsightau">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A3A5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </SocialIcon>
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', marginTop: 10 }}>Follow @propsightau</div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      {/* Spin keyframe for loading button */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
