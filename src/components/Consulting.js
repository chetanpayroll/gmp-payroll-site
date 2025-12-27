import React from 'react';

const Consulting = () => {
    return (
        <section className="section bg-animated">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left: Content */}
                    <div>
                        <div className="badge badge-purple mb-4">CONSULTING</div>
                        <h2 className="mb-4">Need Custom AI Solutions <br /> for Your Business?</h2>
                        <p className="text-gray mb-8">Book a strategy session to discuss your specific automation challenges.</p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                            <h4 className="font-bold mb-4">What We'll Cover:</h4>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-sm text-gray-300"><span>✓</span> Analyze your current workflows and pain points</li>
                                <li className="flex gap-2 text-sm text-gray-300"><span>✓</span> Identify quick-win automation opportunities</li>
                                <li className="flex gap-2 text-sm text-gray-300"><span>✓</span> Map out your AI implementation roadmap</li>
                                <li className="flex gap-2 text-sm text-gray-300"><span>✓</span> Calculate potential ROI and time savings</li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray">
                            <div className="font-bold text-white">30 Min Strategy Call</div>
                            <div>|</div>
                            <div>Complimentary for qualified businesses</div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="consulting-form">
                        <h3 className="text-xl font-bold mb-6">Schedule Your Session</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Full Name" className="form-input" />
                                <input type="email" placeholder="Work Email" className="form-input" />
                            </div>
                            <input type="text" placeholder="Company Name" className="form-input" />
                            <select className="form-select">
                                <option>What's your biggest AI challenge?</option>
                                <option>Understanding where to start</option>
                                <option>Automating manual tasks</option>
                                <option>Training my team</option>
                            </select>
                            <button className="btn btn-primary w-full">Book My Strategy Call →</button>
                        </form>
                        <div className="text-center mt-4 text-xs text-gray">
                            🔒 Your information is confidential
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Consulting;
