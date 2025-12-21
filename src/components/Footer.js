import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#F8FAFC', color: '#1E293B', padding: '80px 0 40px', borderTop: '1px solid #E2E8F0' }}>
            <div className="container">
                <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>
                    <div>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '24px' }}>
                            <span style={{ fontFamily: 'var(--font-inter)', fontWeight: '700', color: '#0F172A', fontSize: '24px', borderBottom: '3px solid #0891B2', lineHeight: '1.2' }}>GMP</span>
                            <span style={{ fontFamily: 'var(--font-inter)', fontWeight: '400', color: '#0F172A', fontSize: '24px', marginLeft: '6px', lineHeight: '1.2' }}>PAYROLL</span>
                        </Link>
                        <p style={{ color: '#64748B', maxWidth: '300px', marginBottom: '32px' }}>
                            World-class independent payroll implementation consulting. Zero-error cutovers for global enterprises.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E2E8F0', color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>in</div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E2E8F0', color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📧</div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: '#0F172A', marginBottom: '24px', fontSize: '18px', fontWeight: 'bold' }}>Services</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#64748B' }}>
                            <Link href="/services/readiness-assessment" className="hover:text-teal-600">Readiness Assessment</Link>
                            <Link href="/services/cutover-planning" className="hover:text-teal-600">Cutover Planning</Link>
                            <Link href="/services/compliance-audit" className="hover:text-teal-600">Compliance Audit</Link>
                            <Link href="/services/automation" className="hover:text-teal-600">Automation Solutions</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: '#0F172A', marginBottom: '24px', fontSize: '18px', fontWeight: 'bold' }}>Company</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#64748B' }}>
                            <Link href="/about" className="hover:text-teal-600">About Me</Link>
                            <Link href="/case-studies" className="hover:text-teal-600">Case Studies</Link>
                            <Link href="/expertise" className="hover:text-teal-600">Expertise</Link>
                            <Link href="/contact" className="hover:text-teal-600">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: '#0F172A', marginBottom: '24px', fontSize: '18px', fontWeight: 'bold' }}>Resources</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#64748B' }}>
                            <Link href="/blog" className="hover:text-teal-600">Blog (Coming Soon)</Link>
                            <Link href="/newsletter" className="hover:text-teal-600">Newsletter</Link>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '14px' }}>
                    <div>© {new Date().getFullYear()} Chetan Sharma. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-teal-600">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-teal-600">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-teal-600">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
