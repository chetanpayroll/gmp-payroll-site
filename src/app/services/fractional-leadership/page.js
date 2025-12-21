export const metadata = {
    title: 'Fractional Implementation Leadership | GMP Payroll',
    description: 'Expert payroll implementation leadership on demand. Steering committee representation and vendor management.',
};

export default function FractionalLeadershipPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ color: 'var(--color-teal)', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Service Overview
                        </div>
                        <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Fractional Implementation Leadership</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px' }}>
                            You don't need a full-time implementation director forever. You just need one for right now.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr', gap: '64px' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>The Gap We Fill</h2>
                            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
                                Most companies rely on the Vendor's Project Manager to lead the project. This is a conflict of interest.
                                The vendor's PM focuses on <em>their</em> software. We focus on <em>your</em> business success.
                            </p>

                            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>What We Do</h3>
                            <ul style={{ listStyle: 'none', spaceY: '16px' }}>
                                <li style={{ marginBottom: '16px' }}><strong>Steering Committee Representation:</strong> We speak "Executive" and "Technical". We translate risks into business impact for your C-Suite.</li>
                                <li style={{ marginBottom: '16px' }}><strong>Vendor Accountability:</strong> We know the tricks. We ensure the vendor delivers what was sold, not just "standard functionality".</li>
                                <li style={{ marginBottom: '16px' }}><strong>Change Management:</strong> Guiding your internal teams through the cultural shift of a new system.</li>
                            </ul>
                        </div>

                        <div>
                            <div style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '32px', borderRadius: '8px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Engagement Models</h3>
                                <div style={{ marginBottom: '24px' }}>
                                    <h4 style={{ color: 'var(--color-teal)', fontWeight: '700' }}>Advisory Retainer</h4>
                                    <p style={{ fontSize: '14px', color: '#CBD5E1' }}>5-10 hours/month. Strategic guidance, document review, and escalation support.</p>
                                </div>
                                <div style={{ marginBottom: '24px' }}>
                                    <h4 style={{ color: 'var(--color-teal)', fontWeight: '700' }}>Project Lead</h4>
                                    <p style={{ fontSize: '14px', color: '#CBD5E1' }}>20-30 hours/week. Acting customized project manager driving day-to-day execution.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--color-teal)', fontWeight: '700' }}>Crisis Rescue</h4>
                                    <p style={{ fontSize: '14px', color: '#CBD5E1' }}>Full-time intensive support for 4-8 weeks to save a failing project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
