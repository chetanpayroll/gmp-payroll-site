export const metadata = {
    title: 'Multi-Country SaaS Consolidation | Case Study',
    description: 'How we consolidated 12 countries onto a single payroll platform, reducing costs by 40%.',
};

export default function CaseStudy1() {
    return (
        <>
            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, #1e293b 100%)', color: 'white', padding: '100px 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--color-teal)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Case Study</span>
                    <h1 style={{ fontSize: '48px', marginTop: '16px', marginBottom: '32px' }}>Multi-Country SaaS Consolidation</h1>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>CLIENT</div>
                            <div style={{ fontWeight: '600' }}>Tech Unicorn (Series D)</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>INDUSTRY</div>
                            <div style={{ fontWeight: '600' }}>SaaS / Technology</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>SCOPE</div>
                            <div style={{ fontWeight: '600' }}>12 Countries</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>OUTCOME</div>
                            <div style={{ fontWeight: '600', color: 'var(--color-teal)' }}>40% Cost Reduction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>The Challenge</h2>
                        <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8' }}>
                            The client had expanded rapidly through acquisition, resulting in a fragmented payroll landscape.
                            They were operating with 8 different local vendors, 3 different HRIS instances, and zero consolidated reporting.
                            The finance team spent 10 days every month manually reconciling FX rates and journal entries.
                        </p>
                    </div>

                    <div style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>The Solution</h2>
                        <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                            We led the RFP selection and implementation of a Global Payroll Aggregator (ADP Celergo).
                            Our role involved:
                        </p>
                        <ul style={{ paddingLeft: '24px', fontSize: '18px', color: '#475569', lineHeight: '1.8', spaceY: '16px' }}>
                            <li style={{ marginBottom: '12px' }}>• Standardizing pay codes across all 12 jurisdictions.</li>
                            <li style={{ marginBottom: '12px' }}>• Building a "Global Gross-to-Net" report format.</li>
                            <li style={{ marginBottom: '12px' }}>• Creating automated pre-validation scripts to catch data errors before vendor submission.</li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#F8FAFC', padding: '48px', borderRadius: '12px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '32px', color: 'var(--color-navy)' }}>The Impact</h2>
                        <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                            <div>
                                <div style={{ fontSize: '48px', color: 'var(--color-teal)', fontWeight: '700' }}>40%</div>
                                <div style={{ fontSize: '16px', fontWeight: '600' }}>Reduction in Processing Fees</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '48px', color: 'var(--color-teal)', fontWeight: '700' }}>6 Days</div>
                                <div style={{ fontSize: '16px', fontWeight: '600' }}>Saved on Monthly Close</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '48px', color: 'var(--color-teal)', fontWeight: '700' }}>100%</div>
                                <div style={{ fontSize: '16px', fontWeight: '600' }}>Digital Payslip Adoption</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '48px', color: 'var(--color-teal)', fontWeight: '700' }}>0</div>
                                <div style={{ fontSize: '16px', fontWeight: '600' }}>GDPR Compliance Breaches</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '64px', textAlign: 'center' }}>
                        <a href="/contact" className="btn btn-primary">Schedule a Similar Consultation</a>
                    </div>

                </div>
            </section>
        </>
    );
}
