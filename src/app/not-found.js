export const metadata = {
    title: 'Page Not Found',
};

export default function Custom404() {
    return (
        <div style={{ padding: '100px 0', textAlign: 'center', height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '72px', color: 'var(--color-navy)', marginBottom: '24px' }}>404</h1>
            <p style={{ fontSize: '24px', color: '#94A3B8', marginBottom: '40px' }}>
                Oops. It seems you've ventured into a jurisdiction we don't cover.
            </p>
            <a href="/" className="btn btn-primary">Return to Home</a>
        </div>
    );
}
