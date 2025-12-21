import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Blog | GMP Payroll Implementation Insights',
    description: 'Expert insights on global payroll implementation, compliance, and cutover strategies.',
};

export default function Blog() {
    const posts = [
        {
            title: "The 3 Most Common Pitfalls in Multi-Country Payroll Cutovers",
            slug: "common-pitfalls-payroll-cutovers",
            excerpt: "Why parallel runs fail and how to use automated validation to ensure 100% variance-free go-lives. We analyze data from 50+ recent projects.",
            date: "Dec 15, 2025",
            category: "Implementation Strategy",
            readTime: "5 min read",
            image: "📊"
        },
        {
            title: "Navigating Shadow Payroll Compliance in Southeast Asia",
            slug: "shadow-payroll-compliance",
            excerpt: "A deep dive into the complex tax reporting requirements for expats in Singapore, Malaysia, and Indonesia.",
            date: "Nov 28, 2025",
            category: "Compliance",
            readTime: "8 min read",
            image: "🌏"
        },
        {
            title: "Why Your 'Standard' WD EIB Integration Isn't Enough for LATAM",
            slug: "workday-eib-integration-latam",
            excerpt: "The hidden customization costs of connecting Workday to local payroll engines in Brazil and Mexico.",
            date: "Nov 10, 2025",
            category: "Integration",
            readTime: "6 min read",
            image: "🔗"
        },
        {
            title: "The ROI of Fractional Payroll Leadership",
            slug: "fractional-payroll-leadership-roi",
            excerpt: "How hiring a fractional expert can save 6 months of delay and $200k in potential error remediation costs.",
            date: "Oct 22, 2025",
            category: "Leadership",
            readTime: "4 min read",
            image: "💡"
        }
    ];

    return (
        <main style={{ padding: '120px 0 80px', background: '#F8FAFC' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '80px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '24px', color: '#0F172A' }}>The Payroll Implementation Blog</h1>
                    <p style={{ fontSize: '20px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                        Expert insights, architectural strategies, and trench stories from 13+ years of global payroll transformations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, i) => (
                        <div key={i} className="hover:translate-y-1 transition-transform" style={{
                            background: 'white',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #E2E8F0'
                        }}>
                            <div style={{ height: '240px', background: 'linear-gradient(135deg, #0F172A 0%, #334155 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px' }}>
                                {post.image}
                            </div>
                            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '14px', fontWeight: '600' }}>
                                    <span style={{ color: 'var(--color-teal)' }}>{post.category}</span>
                                    <span style={{ color: '#94A3B8' }}>•</span>
                                    <span style={{ color: '#64748B' }}>{post.readTime}</span>
                                </div>
                                <h2 style={{ fontSize: '24px', marginBottom: '16px', lineHeight: '1.4' }}>
                                    <Link href={`/blog/${post.slug}`} className="hover:text-teal-600 transition-colors">{post.title}</Link>
                                </h2>
                                <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                                    {post.excerpt}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #F1F5F9' }}>
                                    <span style={{ color: '#94A3B8', fontSize: '14px' }}>{post.date}</span>
                                    <Link href={`/blog/${post.slug}`} style={{ color: 'var(--color-teal)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        Read Article →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '80px', padding: '64px', background: 'var(--color-navy)', borderRadius: '16px', color: 'white' }}>
                    <h2 style={{ fontSize: '32px', marginBottom: '16px', color: 'white' }}>Don't Miss an Insight</h2>
                    <p style={{ opacity: 0.8, marginBottom: '32px', fontSize: '18px' }}>Join 1,200+ payroll leaders receiving our monthly deep-dives.</p>
                    <Link href="/newsletter" className="btn btn-primary btn-large" style={{ background: 'white', color: 'var(--color-navy)' }}>
                        Subscribe to Newsletter
                    </Link>
                </div>
            </div>
        </main>
    );
}
