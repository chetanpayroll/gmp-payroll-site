export const metadata = {
    title: 'Page Not Found - AI Gravity',
};

export default function Custom404() {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
            <h1 style={{ fontSize: '72px', fontWeight: 'bold', background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '24px', color: 'var(--text-gray)', marginBottom: '2rem' }}>
                Lost in the void? Let's gravitate back to safety.
            </p>
            <a href="/" className="btn btn-primary">Return Home</a>
        </div>
    );
}
