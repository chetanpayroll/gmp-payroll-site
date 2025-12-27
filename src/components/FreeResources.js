import React from 'react';

import TiltCard from './TiltCard';

const FreeResources = () => {
    return (
        <section className="section bg-animated">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge badge-cyan mb-4">FREE RESOURCES</div>
                    <h2 className="mb-4">Start Your AI Journey Today <br /> <span className="text-gray text-2xl font-normal block mt-2">No Credit Card Required</span></h2>
                </div>

                <div className="max-w-5xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Resource 1 */}
                    <TiltCard className="group glass-card-enhanced relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-white select-none">01</div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-700"></div>
                        <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-10 relative z-10">
                            {/* Icon Section */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-900/50 border border-blue-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">📚</span>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold mb-2 text-white">Free AI Starter Course</h3>
                                <p className="text-gray-400 text-sm max-w-md">5 video lessons covering AI fundamentals & prompt engineering basics. Start learning immediately.</p>
                            </div>

                            {/* Form Section */}
                            <div className="flex-shrink-0 w-full md:w-auto min-w-[300px]">
                                <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="flex flex-col gap-3">
                                    <input type="hidden" name="_subject" value="New Request: Free AI Starter Course" />
                                    <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="Resource" value="Free AI Starter Course" />

                                    <div className="relative">
                                        <input type="email" name="Email" placeholder="Enter your email" required className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-hover-effect w-full text-sm py-3 font-semibold shadow-lg shadow-blue-900/20">
                                        Get Free Access →
                                    </button>
                                </form>
                            </div>
                        </div>
                    </TiltCard>

                    {/* Resource 2 */}
                    <TiltCard className="group glass-card-enhanced relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-white select-none">02</div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-700"></div>
                        <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-10 relative z-10">
                            {/* Icon Section */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">📋</span>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold mb-2 text-white">100+ Prompt Templates</h3>
                                <p className="text-gray-400 text-sm max-w-md">Battle-tested prompts for marketing, sales, and HR operations. Copy-paste ready.</p>
                            </div>

                            {/* Form Section */}
                            <div className="flex-shrink-0 w-full md:w-auto min-w-[300px]">
                                <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="flex flex-col gap-3">
                                    <input type="hidden" name="_subject" value="New Request: 100+ Prompt Templates" />
                                    <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="Resource" value="100+ Prompt Templates" />

                                    <div className="relative">
                                        <input type="email" name="Email" placeholder="Enter your email" required className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none" />
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-hover-effect w-full text-sm py-3 font-semibold hover:bg-purple-500/10">
                                        Download PDF →
                                    </button>
                                </form>
                            </div>
                        </div>
                    </TiltCard>

                    {/* Resource 3 */}
                    <TiltCard className="group glass-card-enhanced relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-white select-none">03</div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-cyan-700"></div>
                        <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-10 relative z-10">
                            {/* Icon Section */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-slate-900/50 border border-cyan-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">🔧</span>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold mb-2 text-white">Automation Starter Kit</h3>
                                <p className="text-gray-400 text-sm max-w-md">5 ready-to-use automation workflows for Make & Zapier. Plug and play.</p>
                            </div>

                            {/* Form Section */}
                            <div className="flex-shrink-0 w-full md:w-auto min-w-[300px]">
                                <form action="https://formsubmit.co/chetansharma@gmppayroll.com" method="POST" className="flex flex-col gap-3">
                                    <input type="hidden" name="_subject" value="New Request: Automation Starter Kit" />
                                    <input type="hidden" name="_next" value="https://chetanpayroll.github.io/gmp-payroll-site/" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="Resource" value="Automation Starter Kit" />

                                    <div className="relative">
                                        <input type="email" name="Email" placeholder="Enter your email" required className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-hover-effect w-full text-sm py-3 font-semibold shadow-lg shadow-cyan-900/20">
                                        Get Starter Kit →
                                    </button>
                                </form>
                            </div>
                        </div>
                    </TiltCard>
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
