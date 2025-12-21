export const metadata = {
    title: 'Legacy System Migration | Case Study',
    description: 'Migration from 20-year-old on-premise mainframe to Workday. 100% data accuracy achieved.',
};

export default function CaseStudy2() {
    return (
        <>
            <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, #1e293b 100%)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--color-teal)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Case Study</span>
                    <h1 style={{ fontSize: '48px', marginTop: '16px', marginBottom: '32px' }}>Legacy System Migration</h1>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>CLIENT</div>
                            <div style={{ fontWeight: '600' }}>FinTech Services</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>FROM / TO</div>
                            <div style={{ fontWeight: '600' }}>Mainframe → Workday</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>EMPLOYEES</div>
                            <div style={{ fontWeight: '600' }}>2,500+</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>OUTCOME</div>
                            <div style={{ fontWeight: '600', color: 'var(--color-teal)' }}>100% Data Accuracy</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>The Problem</h2>
                        <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8' }}>
                            The client was stuck on a 20-year-old on-premise system. There was zero documentation.
                            Knowledge was held by two employees retiring in 6 months.
                            The data was "dirty"—formatted inconsistently across decades of patches.
                        </p>
                    </div>

                    <div style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>The Analysis</h2>
                        <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '16px' }}>
                            We deployed our <strong>Data Migration Validation</strong> service.
                        </p>
                        <ul style={{ paddingLeft: '24px', fontSize: '18px', color: '#475569', lineHeight: '1.8' }}>
                            <li>• Extracted 10 years of historical data.</li>
                            <li>• Wrote Python scripts to normalize address formats and tax IDs.</li>
                            <li>• Mapped 500+ legacy pay codes to 50 Workday earning codes.</li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#F8FAFC', padding: '48px', borderRadius: '12px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '32px', color: 'var(--color-navy)' }}>The Result</h2>
                        <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                            The first parallel run matched to the penny for 98% of employees. By the second run, we achieved 100% match.
                            The client went live with zero post-cutover support tickets related to migration errors.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
