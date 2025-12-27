import React from 'react';

const Consulting = () => {
    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', right: '0%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* Main Flex Container for Side-by-Side Layout */}
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>

                    {/* Left: Content (Limited width to ensure side-by-side) */}
                    <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                        <div className="badge badge-purple mb-6" style={{ display: 'inline-block' }}>CORPORATE CONSULTING</div>
                        <h2 className="text-4xl font-bold mb-6" style={{ lineHeight: 1.2, fontSize: '3rem' }}>
                            Need Custom <span className="text-gradient">AI Solutions</span> <br />
                            for Your Enterprise?
                        </h2>
                        <p className="text-gray text-lg mb-10" style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
                            This isn't just another discovery call. It's a high-level strategy session designed to uncover massive ROI opportunities in your operations.
                        </p>

                        <div style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
                            borderLeft: '4px solid #7c3aed',
                            padding: '2rem',
                            borderRadius: '0 12px 12px 0',
                            marginBottom: '3rem'
                        }}>
                            <h4 className="font-bold text-white mb-6 text-xl">In this 30-minute Strategy Session, we will:</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Audit your current manual workflows for bottlenecks",
                                    "Identify 'Low Hanging Fruit' for immediate AI automation",
                                    "Map out a phased implementation roadmap",
                                    "Calculate projected time & cost savings"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '1rem' }}>
                                        <div style={{ background: '#7c3aed', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0, marginTop: '2px', color: 'white' }}>✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', width: 'fit-content' }}>
                            <div style={{ fontSize: '2.5rem' }}>👨‍💼</div>
                            <div>
                                <div style={{ fontWeight: 'bold', color: 'white' }}>Consulting Partner</div>
                                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Chetan Sharma</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form - Enterprise Card Style */}
                    <div style={{
                        flex: '1 1 450px',
                        maxWidth: '550px',
                        background: '#0f172a',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        borderRadius: '24px',
                        padding: '3rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Session</h3>
                            <p className="text-sm text-gray">Complimentary for qualified businesses</p>
                        </div>

                        <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <input type="hidden" name="_subject" value="New Consulting Inquiry" />
                            <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Name</label>
                                    <input type="text" name="Name" required placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Work Email</label>
                                    <input type="email" name="Email" required placeholder="john@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Phone Number</label>
                                <input type="tel" name="Phone" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Company Name</label>
                                <input type="text" name="Company" placeholder="Acme Inc." style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem' }} />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Biggest Challenge</label>
                                <div style={{ position: 'relative' }}>
                                    <select name="Challenge" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', outline: 'none', fontSize: '1rem', appearance: 'none', cursor: 'pointer' }}>
                                        <option style={{ color: 'black' }} value="" disabled selected>Select your main challenge...</option>
                                        <option style={{ color: 'black' }} value="Where to start">Understanding where to start with AI</option>
                                        <option style={{ color: 'black' }} value="Manual tasks">Automating repetitive manual tasks</option>
                                        <option style={{ color: 'black' }} value="Team training">Upskilling/Training my team</option>
                                        <option style={{ color: 'black' }} value="Custom solution">Need a custom software solution</option>
                                    </select>
                                    <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }}>▼</div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '50px', marginTop: '1rem', boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.5)', border: 'none', cursor: 'pointer' }}>
                                Book My Strategy Call →
                            </button>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: '#64748b' }}>
                            <span>🔒 Your information is 100% confidential</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Consulting;
