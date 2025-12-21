export const metadata = {
    title: 'Global Payroll Expertise | Chetan Sharma',
    description: '13+ years of experience across 50+ countries. Deep technical knowledge of Workday, SAP, ADP, and local statutory requirements.',
};

export default function ExpertisePage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: 'clamp(24px, 6vw, 36px)', marginBottom: '16px' }}>Deep Domain Expertise</h1>
                    <p className="animate-fade-in delay-100" style={{ fontSize: 'clamp(14px, 3vw, 18px)', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
                        A unique blend of strategic HR knowledge, technical data skills, and multi-country regulatory mastery.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <div style={{ backgroundColor: 'var(--color-teal)', color: 'white', padding: '40px 0' }}>
                <div className="container flex flex-wrap justify-center gap-8 text-center">
                    <div style={{ minWidth: '150px' }}>
                        <div style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700' }}>13+</div>
                        <div style={{ fontSize: '12px', opacity: 0.9 }}>YEARS EXPERIENCE</div>
                    </div>
                    <div style={{ minWidth: '150px' }}>
                        <div style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700' }}>50+</div>
                        <div style={{ fontSize: '12px', opacity: 0.9 }}>COUNTRIES</div>
                    </div>
                    <div style={{ minWidth: '150px' }}>
                        <div style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700' }}>20+</div>
                        <div style={{ fontSize: '12px', opacity: 0.9 }}>PLATFORMS</div>
                    </div>
                    <div style={{ minWidth: '150px' }}>
                        <div style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700' }}>$200M+</div>
                        <div style={{ fontSize: '12px', opacity: 0.9 }}>PAYROLL PROCESSED</div>
                    </div>
                </div>
            </div>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '60px' }}>Technology Stack</h2>

                    <div className="grid grid-cols-3 gap-8">
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

            <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '40px' }}>Geographic Coverage</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#475569', fontSize: '18px', lineHeight: '1.8' }}>
                        <p style={{ fontSize: 'clamp(14px, 4vw, 18px)' }}>
                            <strong>North America:</strong> USA (50 States), Canada, Mexico. <br /><br className="mobile-only" />
                            <strong>EMEA:</strong> UK, Ireland, France, Germany, Netherlands, Nordic Region, UAE, Saudi Arabia, South Africa. <br /><br className="mobile-only" />
                            <strong>APAC:</strong> India, Singapore, China, Hong Kong, Japan, Australia, New Zealand, Philippines, Thailand, Malaysia. <br /><br className="mobile-only" />
                            <strong>LATAM:</strong> Brazil, Argentina, Colombia, Chile.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
