"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    const toggleSearch = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // Focus input when opening (timeout to wait for render)
            setTimeout(() => document.getElementById('search-input')?.focus(), 100);
        }
    };

    // Mock search data - in a real app this would be more dynamic
    const searchData = [
        { title: "Prompt Engineering Guide", url: "/blog/prompt-engineering-guide", cat: "Blog" },
        { title: "Automation Agency Case Study", url: "/blog/automation-agency-case-study", cat: "Blog" },
        { title: "Zapier vs Make vs n8n", url: "/blog/zapier-vs-make-vs-n8n", cat: "Blog" },
        { title: "About Us", url: "/about", cat: "Page" },
        { title: "Courses", url: "/#courses", cat: "Section" },
        { title: "Pricing", url: "/#pricing", cat: "Section" },
        { title: "Contact", url: "/contact", cat: "Page" },
    ];

    const results = query
        ? searchData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
        : [];

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={toggleSearch}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                🔍
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    width: '300px',
                    background: 'rgba(10, 22, 40, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1rem',
                    zIndex: 2000,
                    mt: '0.5rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <input
                            id="search-input"
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white'
                            }}
                        />
                        <button onClick={toggleSearch} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>✕</button>
                    </div>

                    {query && (
                        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                            {results.length > 0 ? (
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {results.map((item, index) => (
                                        <li key={index} style={{ marginBottom: '0.5rem' }}>
                                            <Link href={item.url} onClick={toggleSearch} style={{ display: 'block', padding: '0.25rem', color: 'white', fontSize: '0.9rem' }}>
                                                <span style={{ fontSize: '0.7em', color: '#7C3AED', marginRight: '0.5rem', textTransform: 'uppercase', fontWeight: 'bold' }}>{item.cat}</span>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ color: '#94A3B8', fontSize: '0.8rem' }}>No results found.</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
