import Link from 'next/link';

export const metadata = {
    title: 'Global Payroll Insights Newsletter | GMP Payroll',
    description: 'Subscribe to the only newsletter detailed exclusively to global payroll implementation strategy.',
};

export default function Newsletter() {
    return (
        <main style={{ padding: '120px 0 80px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <span style={{ color: 'var(--color-teal)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Weekly Intelligence</span>
                    <h1 style={{ fontSize: '56px', marginBottom: '24px', lineHeight: '1.1', color: '#0F172A' }}>
                        The Implementation <br /> <span style={{ color: 'var(--color-teal)' }}>Architect</span>
                    </h1>
                    <p style={{ fontSize: '22px', color: '#64748B', lineHeight: '1.6' }}>
                        No fluff. No vendor marketing. Just actionable strategies for managing complex multi-country payroll implementations.
                    </p>
                </div>

                <div style={{ background: 'white', padding: '48px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0', marginBottom: '64px' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0F172A' }}>Work Email Address</label>
                            <input type="email" placeholder="you@company.com" style={{ width: '100%', padding: '16px', fontSize: '16px', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', height: '64px', fontSize: '20px' }}>
                            Join 1,200+ Leaders
                        </button>
                        <p style={{ fontSize: '14px', color: '#94A3B8', textAlign: 'center' }}>
                            We respect your inbox. Unsubscribe at any time. Read our <Link href="/privacy" className="underline hover:text-teal-600">Privacy Policy</Link>.
                        </p>
                    </form>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '32px' }}>What You've Missed Recently</h3>
                    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        <a href="/blog" className="group" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: '#F8FAFC', borderRadius: '12px', textDecoration: 'none' }}>
                            <div style={{ fontSize: '32px' }}>📊</div>
                            <div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px', color: '#0F172A' }} className="group-hover:text-teal-600 transition-colors">The automated variance report template</h4>
                                <p style={{ color: '#64748B', fontSize: '15px' }}>Issue #42 • Sent last Tuesday</p>
                            </div>
                        </a>

                        <a href="/blog" className="group" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: '#F8FAFC', borderRadius: '12px', textDecoration: 'none' }}>
                            <div style={{ fontSize: '32px' }}>🤝</div>
                            <div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px', color: '#0F172A' }} className="group-hover:text-teal-600 transition-colors">Managing stakeholder expectations during parallel runs</h4>
                                <p style={{ color: '#64748B', fontSize: '15px' }}>Issue #41 • Sent 2 weeks ago</p>
                            </div>
                        </a>

                        <a href="/blog" className="group" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: '#F8FAFC', borderRadius: '12px', textDecoration: 'none' }}>
                            <div style={{ fontSize: '32px' }}>⚠️</div>
                            <div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px', color: '#0F172A' }} className="group-hover:text-teal-600 transition-colors">3 signs your cutover date is at risk</h4>
                                <p style={{ color: '#64748B', fontSize: '15px' }}>Issue #40 • Sent 3 weeks ago</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </main>
    );
}
