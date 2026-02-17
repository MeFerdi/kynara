import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: 'var(--spacing-xl) 0',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: 'var(--spacing-xxl)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 'var(--spacing-md)'
            }}>
                <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xs)' }}>Kynara.</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} Kynara Product Lab.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>LinkedIn</a>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Twitter</a>
                    <a href="#" style={{ color: 'var(--text-secondary', fontSize: '0.9rem'}}>Instagram</a>
                    <a href="mailto:contact@kynaralabs.com" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
