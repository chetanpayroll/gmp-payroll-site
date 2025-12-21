export const metadata = {
    title: 'About Chetan Sharma | Global Payroll Expert',
    description: '13+ years of experience leading complex payroll transformations for Fortune 500 companies.',
};

export default function AboutPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '100px 0 80px' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>About Me</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: '24px', color: '#94A3B8', fontWeight: '300', lineHeight: '1.6' }}>
                            "I bridge the gap between complex technical payroll requirements and strategic business goals."
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 2fr', gap: '64px' }}>
                        <div>
                            <div style={{ width: '100%', height: '400px', backgroundColor: '#E2E8F0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Placeholder for Headshot */}
                                <span style={{ fontSize: '80px' }}>👨‍💼</span>
                            </div>
                            <div style={{ marginTop: '32px' }}>
                                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Chetan Sharma</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>Global Payroll Implementation Consultant</p>
                                <p style={{ color: 'var(--color-teal)', fontWeight: '600', marginTop: '8px' }}>13+ Years Experience</p>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '32px', marginBottom: '32px', color: 'var(--color-navy)' }}>Professional Background</h2>
                            <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '48px' }}>
                                <p style={{ marginBottom: '24px' }}>
                                    I started my career deep in the trenches of payroll processing, where I learned firsthand the pain of manual calculations and disconnected systems.
                                    Over the last decade, I've transitioned to leading large-scale implementation projects for multinational corporations.
                                </p>
                                <p style={{ marginBottom: '24px' }}>
                                    My philosophy is simple: <strong>Zero Errors.</strong> In payroll, 99% accuracy is 1% failure.
                                    That's why I've developed proprietary validation frameworks and automation tools that I bring to every engagement.
                                </p>
                                <p>
                                    I don't just "manage projects." I fix data, write code, and design processes that essentially run themselves.
                                </p>
                            </div>

                            <h2 style={{ fontSize: '32px', marginBottom: '32px', color: 'var(--color-navy)' }}>My Approach</h2>
                            <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                                <div style={{ padding: '24px', background: '#F8FAFC', borderRadius: '8px' }}>
                                    <h3 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '700' }}>Technically Grounded</h3>
                                    <p style={{ fontSize: '15px' }}>I speak SQL, Python, and API-lingo. I can debug a file format issue faster than you can open a support ticket.</p>
                                </div>
                                <div style={{ padding: '24px', background: '#F8FAFC', borderRadius: '8px' }}>
                                    <h3 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '700' }}>Vendor Agnostic</h3>
                                    <p style={{ fontSize: '15px' }}>I work for YOU, not the software vendor. I ensure they deliver on their sales promises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
