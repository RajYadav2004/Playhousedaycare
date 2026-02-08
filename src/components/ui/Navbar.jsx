import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Activities', href: '#activity-details' },
        { label: 'Programs', href: '#programs' },
        { label: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo">
                    <div style={{ background: '#FFB7C5', padding: '6px', borderRadius: '10px' }}>
                        <Rocket color="white" size={20} />
                    </div>
                    <span>Play House</span>
                </div>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} className="nav-item">
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="menu-btn" onClick={() => setIsOpen(true)}>
                    <Menu size={24} />
                </button>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`nav-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <span className="nav-logo" style={{ fontSize: '1.2rem' }}>Magic Campus</span>
                    <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#4F5D75' }}>
                        <X size={28} />
                    </button>
                </div>

                {navItems.map((item, index) => (
                    <Motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: '#2D3142',
                            padding: '10px 0',
                            borderBottom: '1px solid #F0F0F0'
                        }}
                    >
                        {item.label}
                    </Motion.a>
                ))}

                <div style={{ marginTop: 'auto' }}>
                    <button className="btn-primary" style={{ width: '100%' }}>Enroll Now</button>
                </div>
            </div>
        </>
    );
}
