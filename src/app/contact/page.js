"use client";

import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState(""); // "", "sending", "success", "error"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);

        // Fixed access key
        formData.append("access_key", "37f8beb5-3174-4734-b61f-51a0fffa06af");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                e.target.reset();
            } else {
                console.log("Error", data);
                setStatus("error");
            }
        } catch (error) {
            console.log("Error", error);
            setStatus("error");
        }
    };

    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '120px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-in" style={{ fontSize: 'clamp(32px, 8vw, 48px)', marginBottom: '24px' }}>Let's Talk Payroll</h1>
                    <p className="animate-fade-in delay-100" style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
                        Ready to de-risk your implementation? Schedule a no-obligation discovery call.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-cols-2 gap-8 items-start">

                        {/* Contact Form / Info */}
                        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '32px' }}>Get in Touch</h2>
                            <p style={{ marginBottom: '40px', color: '#475569', fontSize: '18px' }}>
                                Fill out the form below or email directly at <a href="mailto:chetansharma@gmppayroll.com" style={{ color: 'var(--color-teal)', fontWeight: '600' }}>chetansharma@gmppayroll.com</a>.
                            </p>

                            {status === "success" ? (
                                <div style={{ padding: '40px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                                    <h3 style={{ color: '#166534', marginBottom: '8px' }}>Message Sent!</h3>
                                    <p style={{ color: '#166534' }}>Thank you, Chetan will get back to you within 24 hours.</p>
                                    <button onClick={() => setStatus("")} className="btn btn-secondary" style={{ marginTop: '20px', height: '40px' }}>Send Another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                                        <input name="name" required type="text" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px' }} placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Work Email</label>
                                        <input name="email" required type="email" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px' }} placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Company Name</label>
                                        <input name="company" type="text" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px' }} placeholder="Acme Corp" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>How can I help?</label>
                                        <textarea name="message" required style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '4px', minHeight: '120px' }} placeholder="Tell me about your project..."></textarea>
                                    </div>

                                    {status === "error" && <p style={{ color: '#EF4444' }}>Something went wrong. Please try again or email directly.</p>}

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="btn btn-primary"
                                        style={{ width: '100%', maxWidth: '200px', opacity: status === "sending" ? 0.7 : 1 }}
                                    >
                                        {status === "sending" ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Google Calendar Embed (Fixed Link) */}
                        <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📅</div>
                            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Book Directly</h3>
                            <p style={{ color: '#64748B', marginBottom: '24px' }}>Secure your 30-minute discovery call instantly.</p>

                            <div style={{ width: '100%', height: '600px', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                <iframe
                                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29HXg8mXNHcVf1qDy97f191uoljRIfN2zdYkMtiWQqm532vAhCp3k8H8HMaj8-3XH5S0Ij1CwF?gv=true"
                                    style={{ border: 0, width: '100%', height: '100%' }}
                                    frameBorder="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
