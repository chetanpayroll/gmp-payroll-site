export const metadata = {
    title: 'Global Payroll Expertise | Chetan Sharma',
    description: '13+ years of experience across 50+ countries. Deep technical knowledge of Workday, SAP, ADP, and local statutory requirements.',
};

export default function ExpertisePage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '100px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Deep Domain Expertise</h1>
                    <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
                        A unique blend of strategic HR knowledge, technical data skills, and multi-country regulatory mastery.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <div style={{ backgroundColor: 'var(--color-teal)', color: 'white', padding: '40px 0' }}>
                <div className="container flex justify-between text-center">
                    <div>
                        <div style={{ fontSize: '32px', fontWeight: '700' }}>13+</div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>YEARS EXPERIENCE</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '32px', fontWeight: '700' }}>50+</div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>COUNTRIES</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '32px', fontWeight: '700' }}>20+</div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>PLATFORMS</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '32px', fontWeight: '700' }}>$200M+</div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>PAYROLL PROCESSED</div>
                    </div>
                </div>
            </div>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '60px' }}>Technology Stack</h2>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                        <div style={{ padding: '32px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-navy)' }}>HCM Platforms</h3>
                            <ul style={{ listStyle: 'none', color: '#475569', lineHeight: '2' }}>
                                <li>Workday</li>
                                <li>SAP SuccessFactors</li>
                                <li>Oracle HCM</li>
                                <li>BambooHR</li>
                                <li>Rippling</li>
                            </ul>
                        </div>

                        <div style={{ padding: '32px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-navy)' }}>Payroll Engines</h3>
                            <ul style={{ listStyle: 'none', color: '#475569', lineHeight: '2' }}>
                                <li>ADP Celergo / GlobalView</li>
                                <li>CloudPay</li>
                                <li>Payslip</li>
                                <li>Papaya Global</li>
                                <li>Local Providers (multiple)</li>
                            </ul>
                        </div>

                        <div style={{ padding: '32px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--color-navy)' }}>Technical Tools</h3>
                            <ul style={{ listStyle: 'none', color: '#475569', lineHeight: '2' }}>
                                <li>Advanced Excel / VBA</li>
                                <li>SQL / Database Management</li>
                                <li>Python for Automation</li>
                                <li>Google Apps Script</li>
                                <li>Power BI / Tableau</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#F8FAFC', padding: '100px 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '60px' }}>Geographic Coverage</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#475569', fontSize: '18px', lineHeight: '1.8' }}>
                        <p>
                            <strong>North America:</strong> USA (50 States), Canada, Mexico. <br />
                            <strong>EMEA:</strong> UK, Ireland, France, Germany, Netherlands, Nordic Region, UAE, Saudi Arabia, South Africa, Nigeria, Kenya. <br />
                            <strong>APAC:</strong> India, Singapore, China, Hong Kong, Japan, South Korea, Australia, New Zealand, Philippines, Vietnam, Thailand, Malaysia, Indonesia. <br />
                            <strong>LATAM:</strong> Brazil, Argentina, Colombia, Chile.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
