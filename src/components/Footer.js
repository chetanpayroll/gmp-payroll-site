import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#0F172A', color: '#F8FAFC', padding: '80px 0 40px', borderTop: '1px solid #1E293B' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', marginBottom: '64px' }}>
                    <div style={{ flex: '2 1 300px' }}>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '24px' }}>
                            <img src="/logo-white.svg" alt="GMP Payroll" style={{ height: '40px', width: 'auto' }} />
                        </Link>
                        <p style={{ color: '#94A3B8', maxWidth: '300px', marginBottom: '32px' }}>
                            World-class independent payroll implementation consulting. Zero-error cutovers for global enterprises.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155', color: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>in</div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155', color: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📧</div>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                        <h4 style={{ color: '#F8FAFC', marginBottom: '24px', fontSize: '18px', fontWeight: 'bold' }}>Services</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#94A3B8' }}>
                            <Link href="/services/readiness-assessment" className="hover:text-teal-400 transition-colors">Readiness Assessment</Link>
                            <Link href="/services/cutover-planning" className="hover:text-teal-400 transition-colors">Cutover Planning</Link>
                            <Link href="/services/compliance-audit" className="hover:text-teal-400 transition-colors">Compliance Audit</Link>
                            <Link href="/services/automation" className="hover:text-teal-400 transition-colors">Automation Solutions</Link>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                        <h4 style={{ color: '#F8FAFC', marginBottom: '24px', fontSize: '18px', fontWeight: 'bold' }}>Company</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#94A3B8' }}>
                            <Link href="/about" className="hover:text-teal-400 transition-colors">About Me</Link>
                            <Link href="/case-studies" className="hover:text-teal-400 transition-colors">Case Studies</Link>
                            <Link href="/expertise" className="hover:text-teal-400 transition-colors">Expertise</Link>
                            <Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                        <h4 style={{ color: '#F8FAFC', marginBottom: '24px', fontSize: '18px', fontWeight: 'bold' }}>Resources</h4>
                        <div className="flex flex-col gap-3" style={{ color: '#94A3B8' }}>
                            <Link href="/blog" className="hover:text-teal-400 transition-colors">Blog (Coming Soon)</Link>
                            <Link href="/newsletter" className="hover:text-teal-400 transition-colors">Newsletter</Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-mobile-col" style={{ borderTop: '1px solid #1E293B', paddingTop: '32px', justifyContent: 'space-between', color: '#94A3B8', fontSize: '14px', gap: '24px' }}>
                    <div className="text-center">© {new Date().getFullYear()} Chetan Sharma. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-teal-400 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
