export const metadata = {
    title: 'Payroll Automation Solutions | GMP Payroll',
    description: 'Eliminate manual payroll processing. Custom scripts, macros, and integrations to save 80% of your time.',
};

export default function AutomationPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ color: 'var(--color-teal)', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Service Overview
                        </div>
                        <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Payroll Automation Solutions</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px' }}>
                            Stop copy-pasting data. We build custom automation tools that bridge the gap between your HRIS, Payroll, and Finance systems.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '32px', marginBottom: '60px' }}>What We Can Automate</h2>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }}>
                        <div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Input Validation</h3>
                            <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                                Automatically validate payroll inputs against predefined rules before sending them to the vendor. Catch errors at the source.
                            </p>
                            <ul style={{ listStyle: 'none', color: '#475569' }}>
                                <li>✓ Duplicate check</li>
                                <li>✓ Negative pay prevention</li>
                                <li>✓ Threshold variance alerts</li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Reconciliation (GL/Gross-to-Net)</h3>
                            <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                                Instant comparison between payroll output files and bank files/GL reports. Reduce a 3-day process to 3 minutes.
                            </p>
                            <ul style={{ listStyle: 'none', color: '#475569' }}>
                                <li>✓ Visual variance dashboards</li>
                                <li>✓ Auto-generated journal entries</li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Data Transformation</h3>
                            <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                                Convert any file format (PDF, Excel, CSV, XML) into the exact format your payroll provider demands.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Workflow Triggers</h3>
                            <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                                Automated email reminders, approval chasers, and status updates via Slack/Teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
