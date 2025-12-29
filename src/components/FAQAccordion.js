
"use client";
import React, { useState } from 'react';

// Metadata needs to be exported from a layout or server component if using "use client" in page. 
// However, since we are mixing, let's keep it simple. We can use a separate layout or just accept no metadata export here if strict, 
// but Next.js App Router allows metadata in server components. 
// To fix this correctly: I will separate the client component part or just make the whole page client side and handle metadata in layout if possible, 
// OR just use a simple client-side toggle and accept that I can't export metadata from a client component file.
// BETTER APPROACH: Make a separate FAQ component and import it into a Server Component page.

// Let's create the internal component here for simplicity, but strictly speaking, page.js should be server for metadata.
// I'll make the Accordion a separate internal component.

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (i) => {
        if (activeIndex === i) {
            setActiveIndex(null);
        } else {
            setActiveIndex(i);
        }
    };

    const faqs = [
        {
            q: "Do I need coding experience to take these courses?",
            a: "Not at all. Our 'AI Foundations' and 'Automation Architect' courses are designed specifically for non-technical professionals. We focus on no-code tools like ChatGPT, Make.com, and Zapier. However, we do offer advanced modules for those who want to get into Python scripting later."
        },
        {
            q: "How long do I have access to the course material?",
            a: "You have lifetime access to the course content, including all future updates. We regularly update our lessons to keep up with the fast-changing AI landscape."
        },
        {
            q: "Is there a certificate upon completion?",
            a: "Yes! Upon successfully completing all lessons and the final project, you will receive a verified industry-recognized certificate from AI Gravity Academy that you can showcase on LinkedIn and your resume."
        },
        {
            q: "What is the community support like?",
            a: "You'll get access to our private Discord community where students and instructors interact daily. You can ask questions, share wins, and network with other AI professionals. We also host weekly live Q&A sessions."
        },
        {
            q: "Do you offer corporate training for teams?",
            a: "Yes, we specialize in upskilling teams. We offer custom training packages, bulk enrollment discounts, and dedicated workshops for enterprises. Please contact us for a quote."
        },
        {
            q: "What if I'm not satisfied with the course?",
            a: "We offer a risk-free 30-day money-back guarantee. If you don't find value in the course, simply email us within 30 days of purchase for a full refund, no questions asked."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className={`bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === i ? 'border-purple-500/50 bg-white/10' : 'border-white/10 hover:border-white/20'}`}
                >
                    <button
                        onClick={() => toggle(i)}
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                        <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                        <span className={`text-2xl text-purple-400 transition-transform duration-300 ${activeIndex === i ? 'rotate-45' : ''}`}>
                            +
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                            {faq.a}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
