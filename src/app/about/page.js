import Image from 'next/image';

export const metadata = {
    title: 'About Chetan Sharma | Global Payroll Expert',
    description: '13+ years of experience leading complex payroll transformations for Fortune 500 companies.',
};

export default function AboutPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 className="animate-fade-in" style={{ fontSize: 'clamp(24px, 6vw, 36px)', marginBottom: '16px' }}>About Me</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#94A3B8', fontWeight: '300', lineHeight: '1.6' }}>
                            "I bridge the gap between complex technical payroll requirements and strategic business goals."
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-8 items-start">
                        <div>
                            <div style={{ width: '100%', height: 'clamp(250px, 40vw, 400px)', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                                <Image
                                    src="/chetan-sharma.png"
                                    alt="Chetan Sharma - Global Payroll Consultant"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div style={{ marginTop: '32px' }}>
                                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Chetan Sharma</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>Global Payroll Implementation Consultant</p>
                                <p style={{ color: 'var(--color-teal)', fontWeight: '600', marginTop: '8px' }}>13+ Years Experience</p>
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '32px', color: 'var(--color-navy)' }}>Professional Background</h2>
                            <div style={{ fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '48px' }}>
                                <p style={{ marginBottom: '24px' }}>
                                    I started my career deep in the trenches of payroll processing, where I learned firsthand the pain of manual calculations and disconnected systems.
                                    Over the last decade, I've transitioned to leading large-scale implementation projects for multinational corporations.
                                </p>
                                <p style={{ marginBottom: '24px' }}>
                                    My philosophy is simple: <strong>Zero Errors.</strong> In payroll, 99% accuracy is 1% failure.
                                    That's why I've developed proprietary validation frameworks and automation tools that I bring to every engagement.
                                </p>
                                <p>
                                    I don't just "manage projects." I fix data, write code, and design processes that essentially run themselves.
                                </p>
                            </div>

                            <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '32px', color: 'var(--color-navy)' }}>My Approach</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div style={{ padding: '24px', background: '#F8FAFC', borderRadius: '8px' }}>
                                    <h3 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '700' }}>Technically Grounded</h3>
                                    <p style={{ fontSize: '15px' }}>I speak SQL, Python, and API-lingo. I can debug a file format issue faster than you can open a support ticket.</p>
                                </div>
                                <div style={{ padding: '24px', background: '#F8FAFC', borderRadius: '8px' }}>
                                    <h3 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '700' }}>Vendor Agnostic</h3>
                                    <p style={{ fontSize: '15px' }}>I work for YOU, not the software vendor. I ensure they deliver on their sales promises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
