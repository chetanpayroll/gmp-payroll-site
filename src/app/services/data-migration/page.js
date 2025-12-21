export const metadata = {
    title: 'Data Migration Validation',
    description: '100% accurate data migration. Automated validation tools to compare legacy vs new system data.',
};

export default function DataMigrationPage() {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '40px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ color: 'var(--color-teal)', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Service Overview
                        </div>
                        <h1 className="animate-fade-in" style={{ fontSize: '48px', marginBottom: '24px' }}>Data Migration Validation</h1>
                        <p className="animate-fade-in delay-100" style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '700px' }}>
                            Garbage in, garbage out. We ensure your new payroll system starts with pristine, validated historical and active data.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '32px', marginBottom: '48px' }}>The "One-to-One" Match Promise</h2>

                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                        <div style={{ padding: '32px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '40px', marginBottom: '16px' }}>📥</div>
                            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Extraction & Mapping</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                We define precise mapping rules from your legacy source to the target schema.
                            </p>
                        </div>
                        <div style={{ padding: '32px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '40px', marginBottom: '16px' }}>⚙️</div>
                            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Automated Testing</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                Our proprietary scripts compare millions of data points instantly to flag discrepancies.
                            </p>
                        </div>
                        <div style={{ padding: '32px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '40px', marginBottom: '16px' }}>✅</div>
                            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Sign-Off</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>
                                We provide detailed variance reports that auditors love, enabling confident sign-off.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '80px', backgroundColor: '#F8FAFC', padding: '48px', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Tools We Use</h3>
                        <p style={{ marginBottom: '24px' }}>We don't just rely on VLOOKUPs. We build robust ETL pipelines using:</p>
                        <div className="flex gap-4">
                            <span style={{ padding: '8px 16px', background: 'white', borderRadius: '4px', border: '1px solid #CBD5E1' }}>Python / Pandas</span>
                            <span style={{ padding: '8px 16px', background: 'white', borderRadius: '4px', border: '1px solid #CBD5E1' }}>SQL</span>
                            <span style={{ padding: '8px 16px', background: 'white', borderRadius: '4px', border: '1px solid #CBD5E1' }}>Google Apps Script</span>
                            <span style={{ padding: '8px 16px', background: 'white', borderRadius: '4px', border: '1px solid #CBD5E1' }}>Power Query</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
