import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleScrollTo = (id) => {
        setIsOpen(false); // Close menu on click
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { id: 'services', label: 'Services' },
        { id: 'work', label: 'Work' },
        { id: 'workflow', label: 'Workflow' }
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: 'var(--spacing-md) 0',
                background: scrolled || isOpen ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
                transition: 'all 0.3s ease'
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link
                        to="/"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsOpen(false);
                        }}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: '700',
                            fontSize: '1.25rem',
                            letterSpacing: '-0.02em',
                            zIndex: 101,
                            color: 'var(--text-primary)'
                        }}
                    >
                        Kynara.
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="nav-mobile-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        style={{ zIndex: 101 }}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="nav-desktop">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => handleScrollTo(link.id)}
                                style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}
                            >
                                {link.label}
                            </button>
                        ))}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                onClick={() => handleScrollTo('contact')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: 'var(--text-primary)',
                                    color: 'var(--bg-dark)',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.9rem',
                                    fontWeight: '600'
                                }}
                            >
                                Book Consultation
                            </button>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => handleScrollTo(link.id)}
                        style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-primary)',
                            fontWeight: '600'
                        }}
                    >
                        {link.label}
                    </button>
                ))}
                <button
                    onClick={() => handleScrollTo('contact')}
                    style={{
                        padding: '1rem 2rem',
                        background: 'var(--text-primary)',
                        color: 'var(--bg-dark)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginTop: 'var(--spacing-md)'
                    }}
                >
                    Book Consultation
                </button>
            </div>
        </>
    );
};

export default Navbar;
