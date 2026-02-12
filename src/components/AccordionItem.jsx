import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, content, accentColor = 'var(--accent-forest)' }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    transition: 'color 0.2s ease'
                }}
            >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: accentColor }}>▸</span>
                    {title}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            paddingBottom: '1.5rem',
                            color: 'var(--text-muted)',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            paddingLeft: '1.5rem'
                        }}>
                            {content}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
