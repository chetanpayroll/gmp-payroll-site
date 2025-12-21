export const metadata = {
    title: 'Rapid Implementation Turnaround | Case Study',
    description: 'Saving a stalled payroll project. From "Red" status to Go-Live in 4 weeks.',
};

export default function CaseStudy3() {
    return (
        <>
            <section style={{ background: 'linear-gradient(135deg, var(--color-navy) 0%, #1e293b 100%)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--color-teal)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Case Study</span>
                    <h1 style={{ fontSize: '48px', marginTop: '16px', marginBottom: '32px' }}>Rapid Implementation Turnaround</h1>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>CLIENT</div>
                            <div style={{ fontWeight: '600' }}>National Retail Chain</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>SITUATION</div>
                            <div style={{ fontWeight: '600' }}>Stalled Project</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>TIMELINE</div>
                            <div style={{ fontWeight: '600' }}>4 Weeks to Deadline</div>
                        </div>
                        <div>
                            <div style={{ opacity: 0.7, fontSize: '14px', marginBottom: '8px' }}>OUTCOME</div>
                            <div style={{ fontWeight: '600', color: 'var(--color-teal)' }}>Successful Go-Live</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>Crisis Mode</h2>
                    <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '40px' }}>
                        The client was 8 months into a 9-month implementation with a major vendor.
                        The project was rated "Red". UAT had failed twice. The vendor was blaming the client's data;
                        the client was blaming the vendor's configuration.
                    </p>

                    <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-navy)' }}>The Rescue</h2>
                    <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '24px' }}>
                        We stepped in as Interim Project Lead.
                    </p>
                    <ul style={{ paddingLeft: '24px', fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '40px' }}>
                        <li>• <strong>Day 1-3:</strong> Triaged all 150+ open defects. Closed 80% as "won't fix" (cosmetic) to focus on showstoppers.</li>
                        <li>• <strong>Day 4-10:</strong> Re-wrote the UAT test scripts to matching actual business scenarios, not generic templates.</li>
                        <li>• <strong>Day 11-20:</strong> Ran a dedicated "War Room" for 10 days straight to clear critical configuration bugs.</li>
                    </ul>

                    <div style={{ backgroundColor: '#F8FAFC', padding: '48px', borderRadius: '12px', borderLeft: '4px solid var(--color-success-green)' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-navy)' }}>Mission Accomplished</h3>
                        <p style={{ fontSize: '18px', color: '#475569' }}>
                            The project went live on the original target date. The client avoided a $50k extension fee and a potential lawsuit.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
