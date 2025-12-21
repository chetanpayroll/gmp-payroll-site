import Link from 'next/link';
import { metadata as rootMetadata } from '../layout';

export const metadata = {
    title: 'Global Payroll Services | Chetan Sharma',
    description: 'Comprehensive payroll implementation services: Readiness Assessment, Cutover Planning, Compliance Audits, and Automation.',
};

export default function ServicesPage() {
    const services = [
        {
            title: 'Implementation Readiness Assessment',
            slug: 'readiness-assessment',
            desc: 'Evaluate your current landscape, define the target operating model, and create a risk-free implementation roadmap.',
            icon: '📋'
        },
        {
            title: 'Cutover Planning & Execution',
            slug: 'cutover-planning',
            desc: 'Detailed minute-by-minute cutover plans ensuring zero-disruption during the transition to the new payroll system.',
            icon: '🚀'
        },
        {
            title: 'Multi-Country Compliance Audit',
            slug: 'compliance-audit',
            desc: 'Deep-dive statutory audit across 50+ countries to identify gaps in tax, social security, and labor law compliance.',
            icon: '🌐'
        },
        {
            title: 'Data Migration Validation',
            slug: 'data-migration',
            desc: 'Automated validation frameworks to ensure 100% data accuracy when moving from legacy systems to cloud platforms.',
            icon: '💾'
        },
        {
            title: 'Payroll Automation Solutions',
            slug: 'automation',
            desc: 'Custom scripts and tools to automate repetitive reconciliation, variance analysis, and reporting tasks.',
            icon: '⚙️'
        },
        {
            title: 'Fractional Implementation Leadership',
            slug: 'fractional-leadership',
            desc: 'Expert steering committee representation and project leadership to guide your internal team and vendors.',
            icon: '👑'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '100px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Services</h1>
                    <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
                        Specialized implementation support tailored for multinational enterprises. From strategic planning to technical execution.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {services.map((service, index) => (
                            <Link key={index} href={`/services/${service.slug}`} style={{ display: 'block' }}>
                                <div className="hover:translate-y-1" style={{
                                    backgroundColor: 'white',
                                    padding: '40px',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    transition: 'all 0.2s ease'
                                }}>
                                    <div style={{ fontSize: '48px', marginBottom: '24px' }}>{service.icon}</div>
                                    <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-navy)' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>{service.desc}</p>
                                    <span style={{ color: 'var(--color-teal)', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                                        Learn More <span style={{ marginLeft: '8px' }}>→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ backgroundColor: '#F8FAFC', padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Not sure what you need?</h2>
                    <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
                        Let's discuss your current challenges and design a custom engagement package.
                    </p>
                    <Link href="/contact" className="btn btn-primary">Book a Discovery Call</Link>
                </div>
            </section>
        </>
    );
}
