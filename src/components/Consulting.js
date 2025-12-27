import React from 'react';

const Consulting = () => {
    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '10%', right: '0%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <div className="badge badge-purple mb-6">CORPORATE CONSULTING</div>
                        <h2 className="text-4xl font-bold mb-6" style={{ lineHeight: 1.2 }}>
                            Need Custom <span className="text-gradient">AI Solutions</span> <br />
                            for Your Enterprise?
                        </h2>
                        <p className="text-gray text-lg mb-8">
                            This isn't just another discovery call. It's a high-level strategy session designed to uncover massive ROI opportunities in your operations.
                        </p>

                        <div style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderLeft: '4px solid #7c3aed',
                            padding: '2rem',
                            borderRadius: '0 12px 12px 0'
                        }}>
                            <h4 className="font-bold text-white mb-4 text-xl">In this 30-minute Strategy Session, we will:</h4>
                            <ul className="space-y-4">
                                {[
                                    "Audit your current manual workflows for bottlenecks",
                                    "Identify 'Low Hanging Fruit' for immediate AI automation",
                                    "Map out a phased implementation roadmap",
                                    "Calculate projected time & cost savings"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start text-gray-300">
                                        <div style={{ background: '#7c3aed', borderRadius: '50%', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', marginTop: '3px', flexShrink: 0 }}>✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-6 mt-8 p-4 bg-white/5 rounded-xl border border-white/10 w-fit">
                            <div className="text-3xl">👨‍💼</div>
                            <div>
                                <div className="font-bold text-white">Consulting Partner</div>
                                <div className="text-sm text-gray">Chetan Sharma</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="consulting-form-card" style={{
                        background: 'rgba(15, 23, 42, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Session</h3>
                            <p className="text-sm text-gray">Complimentary for qualified businesses</p>
                        </div>

                        <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="space-y-5">
                            <input type="hidden" name="_subject" value="New Consulting Inquiry" />
                            <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray uppercase mb-1 block">Name</label>
                                    <input type="text" name="Name" required placeholder="John Doe" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray uppercase mb-1 block">Work Email</label>
                                    <input type="email" name="Email" required placeholder="john@company.com" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray uppercase mb-1 block">Company Name</label>
                                <input type="text" name="Company" placeholder="Acme Inc." className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray uppercase mb-1 block">Biggest Challenge</label>
                                <select name="Challenge" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" style={{ cursor: 'pointer' }}>
                                    <option style={{ color: 'black' }} value="" disabled selected>Select your main challenge...</option>
                                    <option style={{ color: 'black' }} value="Where to start">Understanding where to start with AI</option>
                                    <option style={{ color: 'black' }} value="Manual tasks">Automating repetitive manual tasks</option>
                                    <option style={{ color: 'black' }} value="Team training">Upskilling/Training my team</option>
                                    <option style={{ color: 'black' }} value="Custom solution">Need a custom software solution</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1 rounded-xl">
                                Book My Strategy Call →
                            </button>
                        </form>

                        <div className="flex justify-center items-center gap-2 mt-6 text-xs text-gray opacity-70">
                            <span>🔒 Your information is 100% confidential</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Consulting;
