import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'FinEdge Analytics',
        category: 'FinTech Dashboard',
        description: 'Real-time market data visualization for institutional investors.',
        gradient: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)'
    },
    {
        title: 'Aura Health',
        category: 'MedTech Platform',
        description: 'HIPAA-compliant patient management system with predictive scheduling.',
        gradient: 'linear-gradient(135deg, #1d3557 0%, #0b1a2b 100%)'
    },
    {
        title: 'Terra Logistics',
        category: 'Supply Chain Automation',
        description: 'Automated routing and inventory tracking for a global logistics firm.',
        gradient: 'linear-gradient(135deg, #e76f51 0%, #9a341e 100%)'
    },
    {
        title: 'Nexus API Gateway',
        category: 'Developer Tools',
        description: 'High-throughput API gateway with integrated monetization and analytics.',
        gradient: 'linear-gradient(135deg, #e9c46a 0%, #a68a2d 100%)'
    }
];

const Portfolio = () => {
    return (
        <section id="Our Products" style={{ padding: 'var(--spacing-xxl) 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: 'var(--spacing-xl)',
                    textAlign: 'center'
                }}>
                    Selected Work
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                position: 'relative',
                                height: '300px',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                background: project.gradient,
                                padding: 'var(--spacing-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 'var(--spacing-md)',
                                right: 'var(--spacing-md)',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '8px',
                                borderRadius: '50%',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <ArrowUpRight size={20} color="white" />
                            </div>

                            <div style={{ zIndex: 1 }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    color: 'rgba(255,255,255,0.7)',
                                    marginBottom: 'var(--spacing-xs)',
                                    display: 'block'
                                }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)', color: 'white' }}>
                                    {project.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
