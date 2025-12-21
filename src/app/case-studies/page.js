import Link from 'next/link';

export const metadata = {
    title: 'Case Studies | GMP Payroll',
    description: 'Real-world examples of successful global payroll implementations. See how we solved complex challenges for clients.',
};

export default function CaseStudiesPage() {
    const cases = [
        {
            title: 'Multi-Country SaaS Consolidation',
            slug: 'saas-consolidation',
            client: 'Tech Unicorn (Series D)',
            impact: '12 countries consolidated to 1 platform',
            result: '40% cost reduction',
            image: '🦄'
        },
        {
            title: 'Legacy System Migration',
            slug: 'legacy-migration',
            client: 'Financial Services Firm',
            impact: 'Migrated from On-Prem to Cloud',
            result: '100% data accuracy',
            image: '🏦'
        },
        {
            title: 'Rapid Implementation Turnaround',
            slug: 'rapid-implementation',
            client: 'Retail Chain',
            impact: 'Recovered stalled project in 4 weeks',
            result: 'Live before fiscal year end',
            image: '⚡'
        },
        {
            title: 'Compliance Remediation Project',
            slug: 'compliance-remediation',
            client: 'Manufacturing Giant',
            impact: 'Fixed 5+ years of statutory errors',
            result: 'Zero penalties in subsequent audit',
            image: '🛡️'
        }
    ];

    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: 'clamp(24px, 6vw, 36px)', marginBottom: '16px' }}>Proven Results</h1>
                    <p className="animate-fade-in delay-100" style={{ fontSize: 'clamp(14px, 3vw, 18px)', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
                        We don't just give advice. We deliver tangible outcomes. Here are a few examples of our work in the wild.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-8">
                        {cases.map((project, index) => (
                            <Link key={index} href={`/case-studies/${project.slug}`} style={{ display: 'block' }}>
                                <div className="hover:translate-y-1" style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    transition: 'all 0.2s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ height: '200px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px' }}>
                                        {project.image}
                                    </div>
                                    <div style={{ padding: '32px', background: 'white', flex: 1 }}>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                                            {project.client}
                                        </div>
                                        <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-navy)' }}>{project.title}</h3>
                                        <div style={{ marginBottom: '24px', color: '#475569' }}>
                                            <div style={{ marginBottom: '8px' }}><strong>Challenge:</strong> {project.impact}</div>
                                            <div><strong>Outcome:</strong> {project.result}</div>
                                        </div>
                                        <span style={{ color: 'var(--color-blue)', fontWeight: '600' }}>Read Full Case Study →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
