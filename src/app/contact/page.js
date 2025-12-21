export const metadata = {
    title: 'Contact GMP Payroll | Schedule a Consultation',
    description: 'Book a free 30-minute consultation with a global payroll implementation expert. Zero commitment, 100% value.',
};

export default function ContactPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '100px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Let's Talk Payroll</h1>
                    <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
                        Ready to de-risk your implementation? Schedule a no-obligation discovery call.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr', gap: '64px' }}>

                        {/* Contact Form / Info */}
                        <div>
                            <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Get in Touch</h2>
                            <p style={{ marginBottom: '40px', color: '#475569', fontSize: '18px' }}>
                                Fill out the form below or email directly at <a href="mailto:chetansharma@gmppayroll.com" style={{ color: 'var(--color-teal)', fontWeight: '600' }}>chetansharma@gmppayroll.com</a>.
                            </p>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                                    <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px' }} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Work Email</label>
                                    <input type="email" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px' }} placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Company Name</label>
                                    <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px' }} placeholder="Acme Corp" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>How can I help?</label>
                                    <textarea style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px', minHeight: '120px' }} placeholder="Tell me about your project..."></textarea>
                                </div>
                                <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
                            </form>
                        </div>

                        {/* Calendly Embed Placeholder */}
                        <div>
                            <div style={{ backgroundColor: '#F8FAFC', padding: '40px', borderRadius: '8px', border: '1px solid #E2E8F0', height: '100%', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', marginBottom: '24px' }}>📅</div>
                                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Book Directly</h3>
                                <p style={{ color: '#64748B', marginBottom: '32px' }}> skip the email tag. Choose a time that works for you.</p>

                                {/* In a real app, this would be a Calendly iframe */}
                                <div style={{ width: '100%', height: '400px', background: 'white', borderRadius: '8px', border: '1px dashed #CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>
                                    [Calendly Widget Would Load Here]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
