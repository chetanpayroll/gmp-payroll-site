export const metadata = {
    title: 'Implementation Readiness Assessment | GMP Payroll',
    description: 'Evaluate your global payroll implementation readiness. Identify gaps, define scope, and ensure a risk-free start.',
};

export default function ReadinessAssessmentPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ color: 'var(--color-teal)', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Service Overview
                        </div>
                        <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Implementation Readiness Assessment</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px' }}>
                            Avoid the common pitfalls of global payroll projects. We analyze your data, processes, and team capability to give you a definitive Go/No-Go before you sign with a vendor.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr', gap: '64px' }}>
                        {/* Main Content */}
                        <div>
                            <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>What We Analyze</h2>

                            <div style={{ marginBottom: '48px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-teal)', marginRight: '16px' }}>01.</span> Data Health
                                </h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                                    We scan your existing HRIS and payroll data for completeness, accuracy, and formatting consistency across all in-scope countries.
                                </p>
                                <ul style={{ listStyle: 'none', paddingLeft: '24px', color: '#475569' }}>
                                    <li style={{ marginBottom: '8px' }}>✓ Unique ID consistency check</li>
                                    <li style={{ marginBottom: '8px' }}>✓ Statutory field completeness (Tax IDs, SSNs)</li>
                                    <li style={{ marginBottom: '8px' }}>✓ Address and bank format validation</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '48px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-teal)', marginRight: '16px' }}>02.</span> Process Documentation
                                </h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                                    Review of current payroll SOPs, approval workflows, and vendor interactions to identify gaps that will cause issues during implementation.
                                </p>
                            </div>

                            <div style={{ marginBottom: '48px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-teal)', marginRight: '16px' }}>03.</span> Team Capacity
                                </h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                                    Assessment of your internal project team's bandwidth and expertise to handle the workload of a global implementation.
                                </p>
                            </div>

                        </div>

                        {/* Sidebar / deliverables */}
                        <div>
                            <div style={{ backgroundColor: '#F8FAFC', padding: '32px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                                <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Key Deliverables</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--color-teal)', marginRight: '12px', fontWeight: 'bold' }}>→</span>
                                        <span>Executive Readiness Scorecard</span>
                                    </li>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--color-teal)', marginRight: '12px', fontWeight: 'bold' }}>→</span>
                                        <span>Gap Analysis Report</span>
                                    </li>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--color-teal)', marginRight: '12px', fontWeight: 'bold' }}>→</span>
                                        <span>Risk Mitigation Plan</span>
                                    </li>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--color-teal)', marginRight: '12px', fontWeight: 'bold' }}>→</span>
                                        <span>Resource & Budget Estimate</span>
                                    </li>
                                </ul>
                                <div style={{ marginTop: '32px', textAlign: 'center' }}>
                                    <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Request Assessment</a>
                                    <div style={{ marginTop: '16px', fontSize: '14px', color: '#64748B' }}>From $1,200 (One-time)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
