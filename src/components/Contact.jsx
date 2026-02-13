import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const Contact = () => {
    const { openBooking } = useBooking();

    return (
        <section id="contact" style={{ padding: 'var(--spacing-xxl) 0', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)', textAlign: 'center' }}>
                    Let’s Build Something Together
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    Book a consultation or tell us about your project.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openBooking}
                        style={{
                            padding: '1rem 2rem',
                            background: 'var(--accent-forest)',
                            color: 'white',
                            fontWeight: '600',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '1.1rem',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Schedule a Consultation
                    </motion.button>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                        <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                        <input
                            type="text"
                            placeholder="Jane Doe"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'var(--bg-surface)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'var(--font-body)'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                        <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                        <input
                            type="email"
                            placeholder="jane@example.com"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'var(--bg-surface)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'var(--font-body)'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                        <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Project Brief (Optional)</label>
                        <input
                            type="file"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'var(--bg-surface)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'var(--font-body)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                        <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                        <textarea
                            rows="5"
                            placeholder="Tell us about your project..."
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'var(--bg-surface)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'var(--font-body)',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            marginTop: 'var(--spacing-md)',
                            padding: 'var(--spacing-md)',
                            background: 'var(--gradient-forest)',
                            color: 'white',
                            fontWeight: '600',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '1rem'
                        }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
