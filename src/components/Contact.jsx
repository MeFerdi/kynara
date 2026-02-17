import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import FormModal from './FormModal';

const Contact = () => {
    const { openBooking } = useBooking();
    const [modalState, setModalState] = useState({ isOpen: false, type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

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

                <form 
                    style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        const form = e.target;
                        const name = form.name.value;
                        const email = form.email.value;
                        const message = form.message.value;
                        try {
                            const baseUrl = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || 'https://kynara-production.up.railway.app';
                            const API_URL = baseUrl.replace(/\/$/, '');
                            const res = await fetch(`${API_URL}/api/contact`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ name, email, message })
                            });
                            if (res.ok) {
                                setModalState({
                                    isOpen: true,
                                    type: 'success',
                                    message: 'Thanks for reaching out! We\'ll get back to you shortly.'
                                });
                                form.reset();
                            } else {
                                const errorData = await res.json();
                                setModalState({
                                    isOpen: true,
                                    type: 'error',
                                    message: errorData.error || 'Failed to send message. Please try again.'
                                });
                            }
                        } catch (error) {
                            setModalState({
                                isOpen: true,
                                type: 'error',
                                message: 'Network error. Please check your connection and try again.'
                            });
                        } finally {
                            setIsSubmitting(false);
                        }
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                        <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
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
                            name="email"
                            placeholder="yourname@example.com"
                            required
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
                        <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Tell us about your project..."
                            required
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
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        style={{
                            marginTop: 'var(--spacing-md)',
                            padding: 'var(--spacing-md)',
                            background: 'var(--gradient-forest)',
                            color: 'white',
                            fontWeight: '600',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '1rem',
                            opacity: isSubmitting ? 0.6 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </form>
            </div>
            
            <FormModal 
                isOpen={modalState.isOpen}
                type={modalState.type}
                message={modalState.message}
                onClose={() => setModalState({ ...modalState, isOpen: false })}
            />
        </section>
    );
};

export default Contact;
