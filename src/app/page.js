"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <ServicesPreviewSection />
      <SuccessMetricsSection />
      <TestimonialsSection />
      <ProcessSection />
      <FinalCTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '40px 0' }}>
      {/* Background World Map Animation Placeholder */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(248,250,252,1) 100%)',
        opacity: 0.5
      }}>
        {/* Abstract Map Dots */}
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 90 + 5}%`,
            width: '6px', height: '6px',
            background: 'var(--color-teal)',
            borderRadius: '50%',
            opacity: 0.4,
            animation: `pulse ${2 + Math.random() * 2}s infinite`
          }} />
        ))}
      </div>

      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="animate-fade-in" style={{ fontSize: 'clamp(32px, 8vw, 56px)', marginBottom: '24px', color: '#0F172A' }}>
          Global Payroll Implementation<br />Excellence
        </h1>
        <p className="animate-fade-in delay-100" style={{ fontSize: 'clamp(18px, 4vw, 22px)', color: 'var(--color-text-secondary)', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
          Zero-Error Cutover Management | Multi-Country Compliance | Automated Validation Frameworks
        </p>

        {/* Trust Badges */}
        <div className="animate-fade-in delay-200" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '48px',
          marginTop: '24px'
        }}>
          <TrustBadge number="13+" label="Years Exp." icon="🗓️" />
          <TrustBadge number="122+" label="Projects" icon="🚀" />
          <TrustBadge number="99.8%" label="Accuracy" icon="🎯" />
          <TrustBadge number="50+" label="Countries" icon="🌍" />
        </div>

        <div className="flex flex-mobile-col justify-center gap-4 animate-fade-in delay-300">
          <a href="/contact" className="btn btn-primary btn-large" style={{ backgroundColor: '#0891B2', color: 'white' }}>Schedule Free Consultation</a>
          <a href="/services" className="btn btn-secondary btn-large">Explore Services</a>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ number, label, icon }) {
  return (
    <div className="text-center" style={{ minWidth: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: '28px', marginBottom: '12px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>{icon}</div>
      <div style={{ fontSize: '36px', fontWeight: '800', color: '#0F172A', lineHeight: '1', marginBottom: '4px' }}>{number}</div>
      <div style={{ fontSize: '13px', letterSpacing: '1px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

function ValuePropositionSection() {
  const cards = [
    { title: "Zero-Error Go-Lives", desc: "99.8% accuracy rate across 122+ implementations. Systematic parallel run methodology.", icon: "🛡️" },
    { title: "25% Faster Cutover", desc: "Proprietary automation framework reducing average cutover from 10 days to 6 days.", icon: "⚡" },
    { title: "50+ Countries", desc: "Deep statutory expertise across APAC, EMEA, and Americas. Navigate MPF, CPF, etc.", icon: "🌍" },
    { title: "Automation-First", desc: "Custom Google Apps Script solutions eliminating 80% of manual reconciliation work.", icon: "🤖" },
    { title: "SOC 1 Audit Ready", desc: "Process documentation and controls meeting SOC 1/2 audit requirements.", icon: "🔒" },
    { title: "Vendor-Agnostic", desc: "Experience with 20+ payroll platforms including Workday, SAP, Oracle, ADP.", icon: "🔄" },
  ];

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 className="text-center" style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginBottom: '60px' }}>Why Choose GMP Payroll?</h2>
        <div className="grid grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} style={{ padding: '32px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s' }} className="hover:translate-y-1">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{card.icon}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{card.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreviewSection() {
  const services = [
    { title: "Implementation Readiness", price: "From $1,200", icon: "📋" },
    { title: "Cutover Planning", price: "From $2,500", icon: "🚀" },
    { title: "Compliance Audit", price: "From $1,800", icon: "🌐" },
    { title: "Data Migration Validation", price: "From $1,000", icon: "💾" },
    { title: "Payroll Automation", price: "From $1,500", icon: "⚙️" },
    { title: "Fractional Leadership", price: "Custom Quote", icon: "👑" },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-navy)', padding: '80px 0', color: 'white' }}>
      <div className="container">
        <div className="text-center mb-10">
          <h2 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 36px)' }}>Core Services</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginTop: '16px' }}>Comprehensive implementation support from planning to post-go-live stabilization</p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-10">
          {services.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{s.icon}</div>
              <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ color: 'var(--color-teal)', fontWeight: '600' }}>{s.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/services" className="btn btn-primary" style={{ minWidth: '180px' }}>View All Services →</a>
        </div>
      </div>
    </section>
  );
}

function SuccessMetricsSection() {
  const metrics = [
    { val: "122+", label: "Implementations" },
    { val: "50+", label: "Countries" },
    { val: "99.8%", label: "Accuracy Rate" },
    { val: "25%", label: "Faster Cutover" },
    { val: "13+", label: "Years Exp." },
    { val: "100%", label: "Audit Compliance" },
    { val: "2k+", label: "Employees Migrated" },
    { val: "0", label: "Errors (Last 12)" },
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '40px' }}>Track Record of Excellence</h2>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {metrics.map((m, i) => (
            <div key={i} className="text-center" style={{ padding: '24px', background: 'white', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-teal)', marginBottom: '8px' }}>{m.val}</div>
              <div style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: '500' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Chetan's systematic approach to our 12-country payroll consolidation was exceptional. Every parallel run achieved <0.5% variance, and we went live with zero errors.",
      role: "VP of Global HR",
      company: "Technology Company (2,500 employees)",
      stars: 5
    },
    {
      quote: "The automated validation tools built by GMP Payroll reduced our monthly reconciliation time by 40%. A complete game changer for our 4-person payroll operations team.",
      role: "Director of Payroll Ops",
      company: "Mfg. Enterprise (5,000+ employees)",
      stars: 5
    },
    {
      quote: "Our Workday implementation was at risk of delay. Chetan stepped in, identified the critical data gaps, and guided us to a flawless go-live in just 3 months.",
      role: "Global HRIS Lead",
      company: "FinTech Scale-up",
      stars: 5
    },
    {
      quote: "Compliance risk was my top concern entering different LATAM markets. The audit revealed potential exposures we fixed before they became liabilities. Worth every penny.",
      role: "CFO",
      company: "Logistics Giant",
      stars: 5
    },
    {
      quote: "Managing expat shadow payrolls was a nightmare. The new process flow designed by GMP is elegant, compliant, and actually understandable for our local partners.",
      role: "Head of Rewards",
      company: "Pharma Multinational",
      stars: 5
    },
    {
      quote: "Legacy data migration is usually a disaster. With the custom scripts provided, we achieved 100% data integrity match for 15,000 employee records.",
      role: "IT Project Manager",
      company: "Retail Group",
      stars: 5
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '60px' }}>Client Success Stories</h2>

        {/* Carousel Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* Active Slide Card */}
          <div className="animate-fade-in" key={activeIndex} style={{
            padding: '48px',
            background: 'white',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            border: '1px solid #F1F5F9',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '64px', color: 'var(--color-teal)', lineHeight: '1', fontFamily: 'serif' }}>“</div>
            <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#475569', margin: '16px 0 32px', lineHeight: '1.6' }}>
              {testimonials[activeIndex].quote}
            </p>
            <div>
              <div style={{ fontWeight: '700', fontSize: '18px', color: '#0F172A' }}>{testimonials[activeIndex].role}</div>
              <div style={{ color: '#64748B', fontSize: '15px' }}>{testimonials[activeIndex].company}</div>
              <div style={{ color: '#FBBF24', fontSize: '20px', marginTop: '8px' }}>
                {'★'.repeat(testimonials[activeIndex].stars)}
              </div>
            </div>
          </div>

          {/* Navigation Dots/Numbers */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: activeIndex === i ? '2px solid var(--color-teal)' : '2px solid transparent',
                  background: activeIndex === i ? 'var(--color-teal)' : '#F1F5F9',
                  color: activeIndex === i ? 'white' : '#64748B',
                  fontWeight: '600',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '16px' }}>How We Work Together</h2>
        <p className="text-center" style={{ fontSize: '18px', color: '#64748B', marginBottom: '60px' }}>Transparent, structured, results-focused engagement</p>

        <div className="flex flex-col gap-4">
          {/* Steps would go here */}
          <div style={{ padding: '32px', background: 'white', borderLeft: '4px solid var(--color-teal)' }}>
            <h3 style={{ fontSize: '24px' }}>1. Discovery Call (30 min)</h3>
            <p>Understand challenges • Assess scope • Determine fit</p>
          </div>
          <div style={{ padding: '32px', background: '#F8FAFC', borderLeft: '4px solid var(--color-navy)' }}>
            <h3 style={{ fontSize: '24px' }}>2. Scoping & Proposal</h3>
            <p>Deliverables • Timeline • Investment</p>
          </div>
          <div style={{ padding: '32px', background: 'white', borderLeft: '4px solid var(--color-teal)' }}>
            <h3 style={{ fontSize: '24px' }}>3. Execution</h3>
            <p>Weekly updates • Progress tracking • Risk management</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-teal) 100%)',
      padding: '40px 0',
      textAlign: 'center',
      color: 'white'
    }}>
      <div className="container">
        <h2 style={{ fontSize: '42px', color: 'white', marginBottom: '24px' }}>Ready to Transform Your Payroll Implementation?</h2>
        <p style={{ fontSize: '20px', opacity: 0.9, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
          Schedule a free 30-minute consultation to discuss your project and explore how we can help you achieve zero-error go-lives.
        </p>
        <a href="/contact" className="btn" style={{
          background: 'white',
          color: 'var(--color-navy)',
          fontSize: '20px',
          height: '64px',
          padding: '0 48px'
        }}>
          Schedule Free Consultation
        </a>
        <div style={{ marginTop: '32px', opacity: 0.7 }}>
          Or email: <a href="mailto:chetansharma@gmppayroll.com" className="underline">chetansharma@gmppayroll.com</a> | +91 8619495587
        </div>
      </div>
    </section>
  );
}
