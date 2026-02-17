import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FormModal = ({ isOpen, type, message, onClose }) => {
    const isSuccess = type === 'success';

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0, 
            transition: { type: 'spring', stiffness: 100, damping: 15 } 
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        backdropFilter: 'blur(4px)'
                    }}
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'var(--bg-surface)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 'var(--spacing-xxl)',
                            maxWidth: '400px',
                            width: '90%',
                            textAlign: 'center',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            border: '1px solid var(--border-subtle)'
                        }}
                    >
                        <motion.div
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                fontSize: '3.5rem',
                                marginBottom: 'var(--spacing-md)',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {isSuccess ? '✨' : '⚠️'}
                        </motion.div>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            marginBottom: 'var(--spacing-sm)',
                            color: isSuccess ? 'var(--accent-forest)' : '#ff6b6b'
                        }}>
                            {isSuccess ? 'Message Sent!' : 'Oops!'}
                        </h3>

                        <p style={{
                            color: 'var(--text-secondary)',
                            marginBottom: 'var(--spacing-lg)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            {message || (isSuccess 
                                ? 'Thanks for reaching out! We\'ll get back to you soon.' 
                                : 'Something went wrong. Please try again later.')}
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClose}
                            style={{
                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                background: isSuccess ? 'var(--accent-forest)' : '#ff6b6b',
                                color: 'white',
                                fontWeight: '600',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {isSuccess ? 'Awesome!' : 'Try Again'}
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FormModal;
