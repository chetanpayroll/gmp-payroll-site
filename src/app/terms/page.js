import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service | GMP Payroll',
    description: 'Terms of Service for GMP Payroll consulting services.',
};

export default function TermsOfService() {
    return (
        <main className="container" style={{ padding: '120px 20px 80px', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '40px', textAlign: 'center' }}>Terms of Service</h1>

            <div style={{ color: '#475569', fontSize: '18px', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '24px' }}>Last Updated: December 21, 2025</p>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>1. Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and GMP Payroll ("we," "us" or "our"),
                        concerning your access to and use of the gmppayroll.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content")
                        and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete;
                        (2) you will maintain the accuracy of such information and promptly update such registration information as necessary;
                        (3) you have the legal capacity and you agree to comply with these Terms of Service.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>4. Disclaimer</h2>
                    <p>
                        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>5. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:chetansharma@gmppayroll.com" style={{ color: '#0891B2', textDecoration: 'underline' }}>chetansharma@gmppayroll.com</a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
