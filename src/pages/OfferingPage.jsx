import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfferingPage = ({ title, subtitle, content, diagram }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="app">
            <SEO title={title} description={content?.props?.children} path={window.location.pathname} />
            <Navbar />

            {/* Hero Section */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 'var(--spacing-xxl)'
            }}>
                <AnimatedBackground />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: 'var(--spacing-lg)' }}
                    >
                        <Link to="/" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-xs)',
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                        }}>
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginBottom: 'var(--spacing-md)',
                            lineHeight: 1.1
                        }}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            marginBottom: 'var(--spacing-xl)'
                        }}
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--bg-dark)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'start' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {content}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '300px'
                            }}
                        >
                            {diagram}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
};

export default OfferingPage;
