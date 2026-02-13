import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Custom Software',
        description: 'Scalable web apps, rigorous APIs, and dashboards built for performance and longevity.',
        link: '/services/software'
    },
    {
        icon: <Cpu size={32} />,
        title: 'Automation Systems',
        description: 'Streamlined workflows and integrations that reduce manual effort and error.',
        link: '/services/automation'
    },
    {
        icon: <PenTool size={32} />,
        title: 'Product Design',
        description: 'User-centric interfaces and design systems that prioritize clarity and function.',
        link: '/services/design'
    }
];

const Services = () => {
    return (
        <section id="services" style={{ padding: 'var(--spacing-xxl) 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    marginBottom: 'var(--spacing-xl)',
                    textAlign: 'center'
                }}>
                    Core Offerings
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {services.map((service, index) => (
                        <Link to={service.link} key={index} style={{ textDecoration: 'none' }}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: 'var(--spacing-xl)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--border-subtle)',
                                    transition: 'border-color var(--transition-normal)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent-forest)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                }}
                            >
                                <div style={{
                                    color: 'var(--accent-sand)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--text-primary)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)', flex: 1 }}>
                                    {service.description}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent-river)',
                                    fontWeight: '500',
                                    fontSize: '0.9rem'
                                }}>
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
