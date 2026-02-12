import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (id) => {
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

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: 'var(--spacing-md) 0',
            background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    <button onClick={() => handleScrollTo('services')} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Services</button>
                    <button onClick={() => handleScrollTo('work')} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Work</button>
                    <button onClick={() => handleScrollTo('workflow')} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Workflow</button>
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
    );
};

export default Navbar;
