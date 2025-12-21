export const metadata = {
    title: 'Cutover Planning & Execution | GMP Payroll',
    description: 'Exit legacy systems and go live with zero errors. Detailed minute-by-minute cutover management.',
};

export default function CutoverPlanningPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ color: 'var(--color-teal)', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Service Overview
                        </div>
                        <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Cutover Planning & Execution</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px' }}>
                            The most critical phase of any payroll project. We manage the transition from "Old" to "New" with military precision.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr', gap: '64px' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Our Cutover Methodology</h2>
                            <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
                                A successful go-live isn't just about flipping a switch. It requires orchestrating hundreds of tasks across HR, Payroll, Finance, and IT.
                            </p>

                            <div style={{ borderLeft: '4px solid var(--color-teal)', paddingLeft: '24px', marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Strategy</h3>
                                <p style={{ color: '#475569' }}>We build a detailed "Runbook" that defines every single step, owner, and dependency for the cutover period (typically 2-3 weeks).</p>
                            </div>

                            <div style={{ borderLeft: '4px solid var(--color-teal)', paddingLeft: '24px', marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Rehearsal</h3>
                                <p style={{ color: '#475569' }}>We conduct "Mock Cutovers" to test timings and data flows, ensuring no surprises on the actual go-live date.</p>
                            </div>

                            <div style={{ borderLeft: '4px solid var(--color-teal)', paddingLeft: '24px', marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Execution</h3>
                                <p style={{ color: '#475569' }}>We provide 24/7 command center support during critical windows to resolve issues instantly.</p>
                            </div>
                        </div>

                        <div>
                            <div style={{ backgroundColor: '#F8FAFC', padding: '32px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                                <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Deliverables</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    <li style={{ marginBottom: '16px' }}>• Minute-by-Minute Cutover Plan</li>
                                    <li style={{ marginBottom: '16px' }}>• Communication Templates</li>
                                    <li style={{ marginBottom: '16px' }}>• Go/No-Go Decision Criteria</li>
                                    <li style={{ marginBottom: '16px' }}>• Contingency/Rollback Plans</li>
                                </ul>
                                <a href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>Get Support</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
