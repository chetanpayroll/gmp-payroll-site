export const metadata = {
    title: 'Multi-Country Compliance Audit | GMP Payroll',
    description: 'Ensure 100% statutory compliance across 50+ countries. Identify risks in tax, social security, and labor law.',
};

export default function ComplianceAuditPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ color: 'var(--color-teal)', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Service Overview
                        </div>
                        <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Multi-Country Compliance Audit</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px' }}>
                            Tax laws change constantly. Is your payroll engine keeping up? We audit your setup against the latest statutory requirements.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                        <div>
                            <h2 style={{ fontSize: '30px', marginBottom: '24px' }}>Regions Covered</h2>
                            <p style={{ marginBottom: '24px' }}>We specialize in complex jurisdictions with frequent regulatory updates.</p>
                            <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '8px' }}>
                                    <h3 style={{ fontWeight: '700', marginBottom: '12px' }}>APAC</h3>
                                    <p style={{ fontSize: '14px' }}>India, Singapore, China, Hong Kong, Australia, Japan, Philippines, Thailand...</p>
                                </div>
                                <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '8px' }}>
                                    <h3 style={{ fontWeight: '700', marginBottom: '12px' }}>EMEA</h3>
                                    <p style={{ fontSize: '14px' }}>UK, Ireland, Germany, France, Netherlands, UAE, Saudi Arabia, South Africa...</p>
                                </div>
                                <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '8px' }}>
                                    <h3 style={{ fontWeight: '700', marginBottom: '12px' }}>Americas</h3>
                                    <p style={{ fontSize: '14px' }}>USA (Federal/State), Canada, Mexico, Brazil...</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '30px', marginBottom: '24px' }}>Audit Scope</h2>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ padding: '16px 0', borderBottom: '1px solid #E2E8F0' }}>
                                    <strong>Gross-to-Net Calculations:</strong> Verifying tax algorithms and social security logic.
                                </li>
                                <li style={{ padding: '16px 0', borderBottom: '1px solid #E2E8F0' }}>
                                    <strong>Fillings & Returns:</strong> Checking accuracy of monthly/annual statutory reports.
                                </li>
                                <li style={{ padding: '16px 0', borderBottom: '1px solid #E2E8F0' }}>
                                    <strong>Payslip Compliance:</strong> Ensuring mandatory fields are present in local languages.
                                </li>
                                <li style={{ padding: '16px 0', borderBottom: '1px solid #E2E8F0' }}>
                                    <strong>Labor Law:</strong> Overtime rules, leave accruals, and termination payouts.
                                </li>
                            </ul>
                            <div style={{ marginTop: '32px' }}>
                                <a href="/contact" className="btn btn-primary">Start Audit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
