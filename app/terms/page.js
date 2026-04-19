export const metadata = {
  title: 'Terms of Service — PropSight',
  description: 'PropSight terms of service. Rules for using PropSight.',
};

const HEADING_STYLE = {
  fontSize: 20, fontWeight: 700, color: '#1A3A5C',
  marginTop: 40, marginBottom: 12,
};

const BODY_STYLE = {
  fontSize: 16, color: '#636366', lineHeight: 1.8,
};

function Section({ title, children }) {
  return (
    <div>
      <div style={{ height: 1, background: '#E4ECF7', margin: '40px 0 0' }} />
      <h2 style={HEADING_STYLE}>{title}</h2>
      <div style={BODY_STYLE}>{children}</div>
    </div>
  );
}

function Callout({ children }) {
  return (
    <div style={{
      background: '#E6FFF7',
      borderLeft: '4px solid #1D9E75',
      borderRadius: 8,
      padding: '16px 20px',
      margin: '16px 0',
      fontSize: 15,
      color: '#1A3A5C',
      lineHeight: 1.7,
    }}>
      {children}
    </div>
  );
}

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: 14, color: '#9CA3AF', marginTop: 8 }}>Last updated: April 2026</p>

        <Section title="1. Acceptance of terms">
          <p>By creating a PropSight account or using our service, you agree to these terms. If you do not agree, please do not use PropSight.</p>
        </Section>

        <Section title="2. What PropSight is — and is not">
          <p>PropSight is a property search and information tool. It provides AI-scored property listings, suburb data, and market signals to help you find properties matching your criteria.</p>
          <Callout>
            <strong>Not financial advice.</strong> Property scores and suburb signals are informational tools only. PropSight is not licensed to provide financial product advice. Please consult a qualified professional before making property investment decisions.
          </Callout>
          <p>IMPORTANT: PropSight is not a financial adviser and does not provide financial advice. Property scores, suburb signals, and digest content are for informational purposes only. They do not constitute a recommendation to buy, sell, or hold any property or financial product. Always seek independent financial and legal advice before making any property purchase decision.</p>
        </Section>

        <Section title="3. Eligibility">
          <p>You must be 18 years or older to use PropSight. By registering you confirm you meet this requirement.</p>
        </Section>

        <Section title="4. Your account">
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>You are responsible for maintaining the security of your account credentials.</li>
            <li style={{ marginBottom: 8 }}>You must not share your account with others.</li>
            <li style={{ marginBottom: 8 }}>You must provide accurate information when registering.</li>
            <li style={{ marginBottom: 8 }}>PropSight reserves the right to suspend accounts that violate these terms.</li>
          </ul>
        </Section>

        <Section title="5. Acceptable use">
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>You may not use PropSight to scrape, copy, or republish property data.</li>
            <li style={{ marginBottom: 8 }}>You may not attempt to reverse engineer, hack, or disrupt the service.</li>
            <li style={{ marginBottom: 8 }}>You may not use PropSight for any unlawful purpose.</li>
            <li style={{ marginBottom: 8 }}>You may not create multiple accounts to circumvent plan limits.</li>
          </ul>
        </Section>

        <Section title="6. Subscription and billing">
          <p><strong style={{ color: '#1A3A5C' }}>Free tier:</strong> Available indefinitely with feature limitations.</p>
          <p style={{ marginTop: 12 }}><strong style={{ color: '#1A3A5C' }}>Paid plans:</strong> Billed monthly or annually via Stripe. You can cancel at any time — cancellation takes effect at the end of the current billing period. No refunds are provided for partial periods.</p>
          <p style={{ marginTop: 12 }}>PropSight reserves the right to change pricing with 30 days notice to existing subscribers.</p>
        </Section>

        <Section title="7. Property data accuracy">
          <p>Property listing data is sourced from third-party platforms and may not always be current or accurate. PropSight does not guarantee the accuracy, completeness, or availability of any listing data. Always verify property details directly with the listing agent before acting.</p>
        </Section>

        <Section title="8. AI scoring disclaimer">
          <p>AI property scores are generated automatically and reflect a match against your stated criteria. They are not valuations, investment recommendations, or predictions of future performance. PropSight makes no warranty regarding the accuracy of AI scores.</p>
        </Section>

        <Section title="9. Intellectual property">
          <p>PropSight&apos;s software, design, and branding are owned by PropSight. Property listing data remains the property of the respective listing platforms and agents. You may not reproduce PropSight&apos;s interface or content without permission.</p>
        </Section>

        <Section title="10. Limitation of liability">
          <p>To the maximum extent permitted by Australian law, PropSight is not liable for any loss or damage arising from your use of the service, reliance on property data or AI scores, or any property purchase decision made using PropSight information.</p>
        </Section>

        <Section title="11. Governing law">
          <p>These terms are governed by the laws of Queensland, Australia. Any disputes will be resolved in the courts of Queensland.</p>
        </Section>

        <Section title="12. Contact">
          <p>Questions about these terms: <a href="mailto:hello@propsight.com.au" style={{ color: '#1D9E75' }}>hello@propsight.com.au</a></p>
        </Section>
      </div>
    </div>
  );
}
