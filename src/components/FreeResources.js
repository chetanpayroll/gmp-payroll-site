import React from 'react';

const FreeResources = () => {
    return (
        <section className="section bg-animated">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge badge-cyan mb-4">FREE RESOURCES</div>
                    <h2 className="mb-4">Start Your AI Journey Today <br /> <span className="text-gray text-2xl font-normal block mt-2">No Credit Card Required</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Resource 1 */}
                    <div className="resource-card group">
                        <div className="h-40 bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                            <span className="text-4xl group-hover:scale-110 transition-transform">📚</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2">Free AI Starter Course</h3>
                            <p className="text-sm text-gray mb-4">5 video lessons covering AI fundamentals & prompt engineering basics.</p>
                            <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="mt-4 space-y-2">
                                <input type="hidden" name="_subject" value="New Request: Free AI Starter Course" />
                                <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="Resource" value="Free AI Starter Course" />

                                <input type="email" name="Email" placeholder="Enter your email" required className="form-input text-sm" />
                                <button type="submit" className="btn btn-primary w-full text-sm py-2">Get Free Access →</button>
                            </form>
                        </div>
                    </div>

                    {/* Resource 2 */}
                    <div className="resource-card group">
                        <div className="h-40 bg-gradient-to-br from-purple-900 to-slate-900 flex items-center justify-center">
                            <span className="text-4xl group-hover:scale-110 transition-transform">📋</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2">100+ Prompt Templates</h3>
                            <p className="text-sm text-gray mb-4">Battle-tested prompts for marketing, sales, HR operations.</p>
                            <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="mt-4 space-y-2">
                                <input type="hidden" name="_subject" value="New Request: 100+ Prompt Templates" />
                                <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="Resource" value="100+ Prompt Templates" />

                                <input type="email" name="Email" placeholder="Enter your email" required className="form-input text-sm" />
                                <button type="submit" className="btn btn-secondary w-full text-sm py-2">Download PDF →</button>
                            </form>
                        </div>
                    </div>

                    {/* Resource 3 */}
                    <div className="resource-card group">
                        <div className="h-40 bg-gradient-to-br from-cyan-900 to-slate-900 flex items-center justify-center">
                            <span className="text-4xl group-hover:scale-110 transition-transform">🔧</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2">Automation Starter Kit</h3>
                            <p className="text-sm text-gray mb-4">5 ready-to-use automation workflows for Make/Zapier.</p>
                            <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="mt-4 space-y-2">
                                <input type="hidden" name="_subject" value="New Request: Automation Starter Kit" />
                                <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="Resource" value="Automation Starter Kit" />

                                <input type="email" name="Email" placeholder="Enter your email" required className="form-input text-sm" />
                                <button type="submit" className="btn btn-primary w-full text-sm py-2">Get Starter Kit →</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="btn btn-secondary rounded-full px-8 flex items-center gap-2 mx-auto">
                        <span>🎁</span> Join 2,000+ AI Enthusiasts on Discord
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FreeResources;
