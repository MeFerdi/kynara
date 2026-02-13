import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { useBooking } from '../context/BookingContext';

const Hero = () => {
    const { openBooking } = useBooking();

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <AnimatedBackground />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                        lineHeight: 1,
                        marginBottom: 'var(--spacing-lg)',
                        background: 'linear-gradient(to bottom, #ffffff, #a0a0a0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.04em'
                    }}
                >
                    From Concepts<br />to Real Products
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto var(--spacing-xl)',
                        fontWeight: '300',
                        lineHeight: 1.6
                    }}
                >
                    At Kynara Product Lab, we transform ideas into fully engineered solutions. From software and automation to product design, our mixed-level engineering teams craft systems that scale with your business, streamline operations, and deliver measurable impact. Every product we build is designed with precision, performance, and purpose so your ideas don’t just exist, they thrive.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <button
                        onClick={openBooking}
                        style={{
                            display: 'inline-block',
                            padding: '1.2rem 2.5rem',
                            background: 'white',
                            color: 'black',
                            fontWeight: '600',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            border: '1px solid white'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(255,255,255,0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Book a Consultation
                    </button>
                    <a
                        href="#workflow"
                        style={{
                            display: 'inline-block',
                            padding: '1.2rem 2.5rem',
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: 'white',
                            fontWeight: '600',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(5px)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = 'white';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                            e.currentTarget.style.background = 'transparent';
                        }}
                    >
                        See Our Process
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
