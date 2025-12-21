import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogData = {
    "common-pitfalls-payroll-cutovers": {
        title: "The 3 Most Common Pitfalls in Multi-Country Payroll Cutovers",
        date: "Dec 15, 2025",
        category: "Implementation Strategy",
        readTime: "5 min read",
        image: "📊",
        content: `
            <p>Multi-country payroll cutovers are notoriously complex. Unlike a single-country implementation where regulations are uniform, a global rollout involves navigating diverse statutory requirements, data formats, and banking protocols simultaneously.</p>
            <p>After analyzing data from over 50 recent projects, we've identified the three most common pitfalls that lead to delayed go-lives and post-go-live errors.</p>
            
            <h3>1. Insufficient Parallel Run Variance Thresholds</h3>
            <p>Many organizations accept a "close enough" mentality during parallel runs. They might sign off on a 98% accuracy rate, assuming the remaining 2% are minor rounding errors. In reality, that 2% often hides systemic configuration issues that will compound over time.</p>
            <p><strong>Recommendation:</strong> Aim for a 99.8% minimum accuracy rate. Use automated comparison tools to validate every single line item, not just net pay. Investigating a $0.05 discrepancy might reveal a fundamental flaw in how a tax bracket is being applied.</p>

            <h3>2. Underestimating "Shadow Payroll" Data Needs</h3>
            <p>Expatriate employees often require "shadow payrolls" in their home or host countries for tax reporting purposes. A common failure mode is realizing too late that the destination system doesn't have the necessary fields to capture home-country social security contributions.</p>
            <p><strong>Recommendation:</strong> Conduct a specific "Expat Data Audit" during the Discovery phase. Map every required field for shadow reporting before you even start configuring the system.</p>

            <h3>3. The "Manual Workaround" Trap</h3>
            <p>When a complex calculation can't be easily configured in the new system, implementation teams often resort to manual workarounds (e.g., "we'll just calculate this bonus in Excel and upload it"). This creates a permanent operational burden and a high risk of human error.</p>
            <p><strong>Recommendation:</strong> If the standard system can't handle a rule, build a robust, automated pre-processor script. Do not accept manual processes as a long-term solution.</p>

            <p>By addressing these three pitfalls proactively, you can significantly reduce the risk profile of your global payroll transformation.</p>
        `
    },
    "shadow-payroll-compliance": {
        title: "Navigating Shadow Payroll Compliance in Southeast Asia",
        date: "Nov 28, 2025",
        category: "Compliance",
        readTime: "8 min read",
        image: "🌏",
        content: `
            <p>Southeast Asia is a dynamic region for business expansion, but it presents unique challenges for global mobility and payroll compliance. For expatriate employees, understanding strict "shadow payroll" obligations is critical to avoiding penalties.</p>
            
            <h3>Singapore: The Deemed Exercise Rule</h3>
            <p>Singapore has specific rules concerning stock options for departing employees. The "Deemed Exercise Rule" can trigger a massive tax liability upon an employee's departure, even if they haven't actually exercised their options. Payroll teams must be prepared to calculate and withhold tax on these notional gains.</p>

            <h3>Malaysia: Monthly Tax Deductions (PCB)</h3>
            <p>Malaysia's tax system requires precise monthly tax deductions (PCB). For expats who are tax residents, ensuring that benefits-in-kind (like housing and car allowances) are correctly valued and taxed on a monthly basis is a frequent stumbling block.</p>

            <h3>Indonesia: BPJS Contributions</h3>
            <p>Indonesia's social security system (BPJS) has distinct programs for healthcare and employment. Foreign employees working in Indonesia for more than six months are generally required to participate. Failing to deduct and remit these contributions is a common compliance gap.</p>

            <p><strong>Key Takeaway:</strong> A "one-size-fits-all" global policy rarely works in Southeast Asia. You need localized logic and deep regulatory expertise to manage shadow payrolls effectively in this region.</p>
        `
    },
    "workday-eib-integration-latam": {
        title: "Why Your 'Standard' WD EIB Integration Isn't Enough for LATAM",
        date: "Nov 10, 2025",
        category: "Integration",
        readTime: "6 min read",
        image: "🔗",
        content: `
            <p>Workday is a powerful HCM, and its Enterprise Interface Builder (EIB) is a standard tool for exporting payroll data. However, when connecting to local payroll engines in Latin America (LATAM), the standard EIB often falls short.</p>

            <h3>The Complexity of PLR and 13th Month Pay</h3>
            <p>In Brazil, profit sharing (PLR) and the 13th-month salary have complex calculation bases and timing rules that standard global data templates often miss. Simply sending a "Bonus" code isn't enough; the local engine needs to know the specific nature of the payment to apply the correct taxation.</p>

            <h3>Retroactive Changes</h3>
            <p>LATAM countries often have strict rules regarding retroactive salary adjustments due to union agreements. A standard EIB might send the current period's data, but handling the "deltas" for previous months requires sophisticated logic to ensure the local payroll engine can calculate the retro activity correctly.</p>

            <h3>The Solution: An Intermediate Transformation Layer</h3>
            <p>Instead of trying to force the standard EIB to do everything, we recommend building a lightweight transformation layer. This middleware can take the standard Workday output, apply region-specific logic (like splitting a generic bonus into specific legal codes), and then format the file for the local provider.</p>

            <p>This approach keeps your Workday configuration clean while ensuring 100% compliance with local requiremenets.</p>
        `
    },
    "fractional-payroll-leadership-roi": {
        title: "The ROI of Fractional Payroll Leadership",
        date: "Oct 22, 2025",
        category: "Leadership",
        readTime: "4 min read",
        image: "💡",
        content: `
            <p>When a global payroll implementation goes off the rails, the cost isn't just financial—it's operational stability and employee trust. Hiring a full-time, seasoned Global Payroll Director can take 6-9 months. In that time, a project can completely collapse.</p>

            <h3>The Speed of Impact</h3>
            <p>A fractional leader brings "been there, done that" expertise immediately. We can step in, assess the project health in 2 weeks, and implement a remediation plan by week 4. There is no ramp-up time.</p>

            <h3>Cost vs. Value</h3>
            <p>While the daily rate of a fractional expert is higher than a full-time salary, the total cost is often lower. You pay for high-intensity, strategic guidance for a specific period (avg. 6-9 months), rather than a loaded permanent headcount cost that includes benefits, equity, and onboarding.</p>

            <h3>Case in Point</h3>
            <p>We recently assisted a FinTech scale-up that was 4 months behind schedule on their UK/US implementation. By restructuring the project governance and validating the data migration strategy, we got them live in 3 months—avoiding an estimated $200k in potential error remediation costs and dual-running fees.</p>

            <p>If your project is at risk, don't wait for a permanent hire. A fractional leader can save the ship now.</p>
        `
    }
};

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogData[slug];

    if (!post) {
        notFound();
    }

    return (
        <main className="blog-post-root" style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
            {/* Styles for article content */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .blog-article-content h3 {
                    font-size: 28px;
                    color: var(--color-navy);
                    font-weight: 700;
                    margin-top: 48px;
                    margin-bottom: 24px;
                    letter-spacing: -0.01em;
                }
                .blog-article-content p {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #334155;
                    margin-bottom: 24px;
                }
                .blog-article-content strong {
                    color: var(--color-teal);
                    font-weight: 700;
                }
                .blog-article-content ul {
                    margin-bottom: 24px;
                    padding-left: 24px;
                }
                .blog-article-content li {
                    margin-bottom: 12px;
                    font-size: 18px;
                    line-height: 1.8;
                    color: #334155;
                }
            `}} />

            {/* Impressive Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                padding: '160px 0 120px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Background Elements */}
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(94, 234, 212, 0.1) 0%, rgba(15, 23, 42, 0) 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(15, 23, 42, 0) 70%)', borderRadius: '50%' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '900px', textAlign: 'center' }}>
                    <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontWeight: '600', marginBottom: '40px', fontSize: '14px', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '100px', backdropFilter: 'blur(4px)' }} className="hover:text-white transition-colors">
                        ← Back to Blog
                    </Link>

                    <div className="animate-fade-in-up" style={{ fontSize: '96px', marginBottom: '32px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}>
                        {post.image}
                    </div>

                    <h1 className="animate-fade-in-up delay-100" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.1', color: 'white', marginBottom: '24px', fontWeight: '800', letterSpacing: '-0.02em' }}>
                        {post.title}
                    </h1>

                    <div className="animate-fade-in-up delay-200" style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', fontSize: '16px', color: '#94A3B8' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ width: '8px', height: '8px', background: 'var(--color-teal)', borderRadius: '50%' }}></span>
                            {post.category}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container" style={{ maxWidth: '800px', marginTop: '-80px', position: 'relative', zIndex: 20 }}>
                <div style={{ background: 'white', padding: '64px', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}>
                    <div className="blog-article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* Footer CTA */}
                    <div style={{ marginTop: '80px', padding: '48px', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#0F172A', fontWeight: 'bold' }}>Facing similar challenges?</h3>
                        <p style={{ marginBottom: '32px', color: '#64748B', fontSize: '18px' }}>I help global enterprises navigate these pitfalls every day.</p>
                        <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                            Book a Strategy Call
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return Object.keys(blogData).map((slug) => ({
        slug,
    }));
}
