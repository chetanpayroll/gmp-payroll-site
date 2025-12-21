import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | GMP Payroll',
    description: 'Privacy Policy for GMP Payroll. How we handle your data and protect your privacy.',
};

export default function PrivacyPolicy() {
    return (
        <main className="container" style={{ padding: '120px 20px 80px', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '40px', textAlign: 'center' }}>Privacy Policy</h1>

            <div style={{ color: '#475569', fontSize: '18px', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '24px' }}>Last Updated: December 21, 2025</p>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>1. Introduction</h2>
                    <p>
                        Welcome to GMP Payroll ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                        and use our payroll implementation consulting services.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>2. Information We Collect</h2>
                    <p style={{ marginBottom: '16px' }}>
                        We collect information that you strictly provide to us when expressing interest in obtaining information about us or our services.
                        The personal information that we collect depends on the context of your interactions with us and the choices you make.
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
                        <li><strong>Personal Info:</strong> Names, email addresses, phone numbers, and job titles.</li>
                        <li><strong>Business Info:</strong> Company name, employee count, and project requirements.</li>
                        <li><strong>Technical Data:</strong> IP address, browser type, and operating system (via cookies).</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>3. How We Use Your Information</h2>
                    <p>We use the information we collect or receive:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '16px' }}>
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you marketing and promotional communications (with your consent).</li>
                        <li>To deliver targeted advertising to you.</li>
                        <li>To protect our Services.</li>
                        <li>To enforce our terms, conditions, and policies.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>4. Data Security</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designing to protect the security of any personal information we process.
                        However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', color: '#0F172A', marginBottom: '16px' }}>5. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at <a href="mailto:chetansharma@gmppayroll.com" style={{ color: '#0891B2', textDecoration: 'underline' }}>chetansharma@gmppayroll.com</a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
