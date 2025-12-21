export const metadata = {
    title: 'Compliance Remediation Project | Case Study',
    description: 'Fixing 5 years of statutory errors in APAC region. Audit defense and process correction.',
};

export default function CaseStudy4() {
    return (
        <>
            <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, #1e293b 100%)', color: 'white', padding: '100px 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--color-teal)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Case Study</span>
                    <h1 style={{ fontSize: '48px', marginTop: '16px', marginBottom: '32px' }}>Compliance Remediation Project</h1>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>CLIENT</div>
                            <div style={{ fontWeight: '600' }}>Manufacturing Giant</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>REGION</div>
                            <div style={{ fontWeight: '600' }}>APAC (8 Countries)</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>RISK</div>
                            <div style={{ fontWeight: '600' }}>High (Regulatory Audit)</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>OUTCOME</div>
                            <div style={{ fontWeight: '600', color: 'var(--color-teal)' }}>Zero Penalties</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>The Risk</h2>
                    <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '40px' }}>
                        An internal audit revealed that the client had been miscalculating overtime rates in China and social security contributions in the Philippines for 5 years.
                        The potential liability was in the millions.
                    </p>

                    <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>The Fix</h2>
                    <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                        We performed a forensic payroll audit using our <strong>Automated Validation Framework</strong>.
                    </p>
                    <ul style={{ paddingLeft: '24px', fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '40px' }}>
                        <li>• Re-calculated 60 months of payroll for 2,000 employees.</li>
                        <li>• Created a detailed "True-up" matrix showing exactly who was owed what.</li>
                        <li>• Handled the sensitive communication plan to employees and local tax authorities.</li>
                    </ul>

                    <div style={{ backgroundColor: '#F8FAFC', padding: '48px', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-navy)' }}>The Verdict</h3>
                        <p style={{ fontSize: '18px', color: '#475569' }}>
                            The client voluntarily disclosed the errors. Due to the thoroughness of our remediation report, the authorities
                            waived all punitive fines, accepting only the back-payment of taxes. A massive win for the CFO.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
