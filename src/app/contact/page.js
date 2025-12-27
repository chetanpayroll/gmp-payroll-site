import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <section className="section pt-32">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="badge badge-cyan mb-4">CONTACT US</div>
                            <h1 className="text-4xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h1>
                            <p className="text-gray mb-8">
                                Have questions about our courses, corporate training, or just want to say hello?
                                We'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">📧</div>
                                    <div>
                                        <h4 className="font-bold">Email Us</h4>
                                        <p className="text-gray text-sm">support@aigravity.academy</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">💬</div>
                                    <div>
                                        <h4 className="font-bold">Live Chat</h4>
                                        <p className="text-gray text-sm">Available Mon-Fri, 9am - 5pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">🏢</div>
                                    <div>
                                        <h4 className="font-bold">Headquarters</h4>
                                        <p className="text-gray text-sm">Tech Hub, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="form-input" />
                                    <input type="text" placeholder="Last Name" className="form-input" />
                                </div>
                                <input type="email" placeholder="Email Address" className="form-input" />
                                <select className="form-select">
                                    <option>Subject...</option>
                                    <option>Course Inquiry</option>
                                    <option>Corporate Training</option>
                                    <option>Technical Support</option>
                                    <option>Partnership</option>
                                </select>
                                <textarea rows="4" placeholder="Your Message" className="form-input"></textarea>
                                <button className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
