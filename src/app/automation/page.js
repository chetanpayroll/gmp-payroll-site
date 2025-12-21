export const metadata = {
    title: 'Automation Tools Showcase | GMP Payroll',
    description: 'Explore the proprietary tools we run during implementations. Validation engines, dashboards, and comparison trackers.',
};

export default function AutomationToolsPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '120px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: 'clamp(32px, 8vw, 48px)', marginBottom: '24px' }}>Proprietary Tool Suite</h1>
                    <p className="animate-fade-in delay-100" style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
                        We don't just bring expertise; we bring the software. Our custom-built tools accelerate every phase of the project.
                    </p>
                </div>
            </section>

            {/* Tool 1: Validation Engine */}
            <section style={{ padding: '80px 0' }} id="validation-engine">
                <div className="container">
                    <div className="grid grid-cols-2 gap-8 items-center" style={{ gap: 'clamp(32px, 8vw, 64px)' }}>
                        <div>
                            <div style={{ color: 'var(--color-teal)', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase' }}>Available Tool</div>
                            <h2 style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '24px', color: 'var(--color-navy)' }}>Two-Way Validation Engine</h2>
                            <p style={{ fontSize: '18px', color: '#475569', marginBottom: '32px' }}>
                                A Python-based engine that compares your HRIS source of truth against the Payroll Vendor’s output files.
                                It highlights discrepancies in minutes, not days.
                            </p>
                            <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #E2E8F0' }}>✅ Compares Demographic Data (Name, DOB, ID)</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #E2E8F0' }}>✅ Compares Compensation (Base, Bonus, Allowances)</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #E2E8F0' }}>✅ Generates Excel-based Variance Reports</li>
                            </ul>
                            <a href="/contact" className="btn btn-secondary">Request Demo</a>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
                            height: 'clamp(250px, 40vw, 400px)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            position: 'relative'
                        }}>
                            <img src="/images/dashboard-mockup.png" alt="Payroll Variance Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tool 2: Comparison Dashboard */}
            <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }} id="comparison-tool">
                <div className="container">
                    <div className="grid grid-cols-2 gap-8 items-center" style={{ gap: 'clamp(32px, 8vw, 64px)' }}>
                        <div className="flex-mobile-order-1">
                            <div style={{ color: 'var(--color-teal)', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase' }}>Available Tool</div>
                            <h2 style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '24px', color: 'var(--color-navy)' }}>Vendor Comparison Matrix</h2>
                            <p style={{ fontSize: '18px', color: '#475569', marginBottom: '32px' }}>
                                Stop guessing which vendor is best. Ours is a weighted scoring model based on 150+ criteria specific to global payroll needs.
                            </p>
                            <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #E2E8F0' }}>✅ 20+ Pre-loaded Vendors (ADP, Workday, etc.)</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #E2E8F0' }}>✅ Customizable Weights for Your Priorities</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #E2E8F0' }}>✅ Visual Heatmaps for Executive Presos</li>
                            </ul>
                            <a href="/contact" className="btn btn-secondary">See an Example</a>
                        </div>
                        <div className="flex-mobile-order-2" style={{
                            background: 'white',
                            height: 'clamp(250px, 40vw, 400px)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ fontSize: '80px' }}>📊</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(24px, 5vw, 36px)', marginBottom: '24px' }}>Want to see them in action?</h2>
                    <p style={{ fontSize: '18px', color: '#475569', marginBottom: '40px' }}>
                        These tools are included free of charge in all our implementation engagements.
                    </p>
                    <a href="/contact" className="btn btn-primary btn-large">Book a Demo</a>
                </div>
            </section>
        </>
    );
}
