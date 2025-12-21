import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '80px 0 40px' }}>
            <div className="container">
                <div className="grid gap-4" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '24px', fontSize: '24px' }}>GMP Payroll</h3>
                        <p style={{ color: '#94A3B8', maxWidth: '300px', marginBottom: '32px' }}>
                            World-class independent payroll implementation consulting. Zero-error cutovers for global enterprises.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>in</div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📧</div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '18px' }}>Services</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#94A3B8' }}>
                            <Link href="/services/readiness-assessment">Readiness Assessment</Link>
                            <Link href="/services/cutover-planning">Cutover Planning</Link>
                            <Link href="/services/compliance-audit">Compliance Audit</Link>
                            <Link href="/services/automation">Automation Solutions</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '18px' }}>Company</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#94A3B8' }}>
                            <Link href="/about">About Me</Link>
                            <Link href="/case-studies">Case Studies</Link>
                            <Link href="/expertise">Expertise</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '18px' }}>Resources</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#94A3B8' }}>
                            <Link href="/blog">Blog (Coming Soon)</Link>
                            <Link href="/newsletter">Newsletter</Link>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '14px' }}>
                    <div>© {new Date().getFullYear()} Chetan Sharma. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
