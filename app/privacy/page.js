export const metadata = {
  title: 'Privacy Policy — PropSight',
  description: 'PropSight privacy policy. How we collect, use, and protect your data.',
};

const HEADING_STYLE = {
  fontSize: 20, fontWeight: 700, color: '#1A3A5C',
  marginTop: 40, marginBottom: 12,
};

const BODY_STYLE = {
  fontSize: 16, color: '#636366', lineHeight: 1.8, marginTop: 0, marginBottom: 0,
};

function Section({ title, children, id }) {
  return (
    <div id={id}>
      <div style={{ height: 1, background: '#E4ECF7', margin: '40px 0 0' }} />
      <h2 style={HEADING_STYLE}>{title}</h2>
      <div style={BODY_STYLE}>{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px' }}>
        {/* Back link */}
        <a href="/" style={{
          display: 'inline-block', marginBottom: 48,
          color: '#1D9E75', fontSize: 14, textDecoration: 'none',
          fontWeight: 500,
        }}>
          ← Back to PropSight
        </a>

        {/* Page heading */}
        <h1 style={{ fontSize: 40, fontWeight: 800, color: '#1A3A5C', margin: 0 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: '#9CA3AF', marginTop: 8 }}>Last updated: April 2026</p>

        <Section title="1. Who we are">
          <p>PropSight is an AI-powered property search tool for Australian and New Zealand property buyers and investors. We are operated by PropSight (ABN pending registration), based in Brisbane, Queensland, Australia.</p>
          <p style={{ marginTop: 12 }}>Contact: <a href="mailto:hello@propsight.com.au" style={{ color: '#1D9E75' }}>hello@propsight.com.au</a></p>
        </Section>

        <Section title="2. What information we collect">
          <p><strong style={{ color: '#1A3A5C' }}>Account information:</strong> When you register, we collect your name and email address. We store a hashed (encrypted) version of your password — we cannot read your actual password.</p>
          <p style={{ marginTop: 12 }}><strong style={{ color: '#1A3A5C' }}>Search preferences:</strong> The suburbs, budget range, bedroom requirements, and property types you set in your preferences.</p>
          <p style={{ marginTop: 12 }}><strong style={{ color: '#1A3A5C' }}>Usage data:</strong> Which properties you save, schedule, or dismiss. We use this to improve the relevance of your digest over time.</p>
          <p style={{ marginTop: 12 }}><strong style={{ color: '#1A3A5C' }}>Contact form submissions:</strong> If you contact us via the website form, we store your name, email, and message.</p>
          <p style={{ marginTop: 12 }}><strong style={{ color: '#1A3A5C' }}>We do not collect:</strong> payment card details (handled directly by Stripe), government identifiers, health information, or precise location data.</p>
        </Section>

        <Section title="3. How we use your information">
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>To deliver your daily property digest matched to your preferences.</li>
            <li style={{ marginBottom: 8 }}>To score and rank properties using our AI system (Claude by Anthropic).</li>
            <li style={{ marginBottom: 8 }}>To send you email notifications if you have opted in.</li>
            <li style={{ marginBottom: 8 }}>To respond to your support or contact enquiries.</li>
            <li style={{ marginBottom: 8 }}>To improve PropSight&apos;s matching accuracy and features.</li>
          </ul>
          <p style={{ marginTop: 12 }}>We do not sell your personal information to any third party. We do not use your information for advertising targeting.</p>
        </Section>

        <Section title="4. AI and third-party data processing">
          <p>PropSight uses Claude (developed by Anthropic) to score and analyse property listings. Your search preferences are sent to Anthropic&apos;s API to generate property scores. No personally identifiable information (name, email, contact details) is sent to Anthropic — only your search criteria (suburbs, budget, property type).</p>
          <p style={{ marginTop: 12 }}>Anthropic&apos;s privacy policy is available at <a href="https://anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#1D9E75' }}>anthropic.com/privacy</a>.</p>
        </Section>

        <Section title="5. Property data sources">
          <p>Property listing data is sourced from Domain.com.au and other Australian and New Zealand property platforms. We display this data to help you find properties — we do not store or republish listing data beyond what is needed to deliver your digest.</p>
        </Section>

        <Section title="6. Data storage and security">
          <p>Your data is stored on secure servers. Passwords are hashed using bcrypt and are never stored in plain text. API keys and secrets are stored in environment variables and are never exposed to the client. We use JWT tokens for authentication with 7-day expiry.</p>
          <p style={{ marginTop: 12 }}>While we take reasonable steps to protect your data, no system is completely secure. We recommend using a unique password for PropSight.</p>
        </Section>

        <Section title="7. Data retention">
          <p>We retain your account data for as long as your account is active. If you delete your account, your personal data is deleted within 30 days. Property search history and saved properties are deleted immediately on account deletion.</p>
        </Section>

        <Section title="8. Your rights (Australian Privacy Act + NZ Privacy Act 2020)">
          <p>You have the right to:</p>
          <ul style={{ paddingLeft: 20, margin: '12px 0 0' }}>
            <li style={{ marginBottom: 8 }}>Access the personal information we hold about you.</li>
            <li style={{ marginBottom: 8 }}>Correct inaccurate information.</li>
            <li style={{ marginBottom: 8 }}>Request deletion of your account and data.</li>
            <li style={{ marginBottom: 8 }}>Opt out of marketing emails at any time (unsubscribe link in every email).</li>
            <li style={{ marginBottom: 8 }}>Lodge a complaint with the <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: '#1D9E75' }}>Office of the Australian Information Commissioner</a> or the <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" style={{ color: '#1D9E75' }}>New Zealand Privacy Commissioner</a>.</li>
          </ul>
          <p style={{ marginTop: 12 }}>To exercise any of these rights, email <a href="mailto:hello@propsight.com.au" style={{ color: '#1D9E75' }}>hello@propsight.com.au</a>.</p>
        </Section>

        <Section title="9. Cookies" id="cookies">
          <p>PropSight uses minimal cookies — only what is required for authentication (storing your login session). We do not use advertising cookies or third-party tracking cookies.</p>
        </Section>

        <Section title="10. Children">
          <p>PropSight is not intended for users under 18. We do not knowingly collect data from minors.</p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>We may update this policy as the product evolves. We will notify registered users of material changes via email. Continued use of PropSight after changes constitutes acceptance.</p>
        </Section>

        <Section title="12. Contact">
          <p>For any privacy questions: <a href="mailto:hello@propsight.com.au" style={{ color: '#1D9E75' }}>hello@propsight.com.au</a></p>
          <p style={{ marginTop: 8 }}>Postal: PropSight, Brisbane, Queensland, Australia</p>
        </Section>
      </div>
    </div>
  );
}
