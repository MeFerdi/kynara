import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search size={28} />,
        title: 'Discovery',
        description: 'We dive deep into your business logic to understand unique requirements and identify high-impact opportunities. Output: Strategy & Objectives.'
    },
    {
        icon: <PenTool size={28} />,
        title: 'Ideation & Design',
        description: 'Wireframes, prototypes, and system architecture. We blueprint the solution before writing a single line of code. Output: Design Blueprint.'
    },
    {
        icon: <Code size={28} />,
        title: 'Development & Automation',
        description: 'Our engineering team builds robust systems. Backend, frontend, and workflow automations are crafted for scalability. Output: Functional System.'
    },
    {
        icon: <Rocket size={28} />,
        title: 'Delivery & Iteration',
        description: 'We launch with confidence, providing documentation, support, and continuous improvement loops. Output: Scalable Product.'
    }
];

const Approach = () => {
    return (
        <section id="workflow" style={{
            padding: 'var(--spacing-xxl) 0',
            background: 'linear-gradient(180deg, var(--bg-dark) 0%, #0f1210 100%)',
            position: 'relative'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: 'var(--spacing-xxl)',
                    textAlign: 'center',
                    background: 'linear-gradient(to right, #fff, #999)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Our Workflow
                </h2>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {/* Vertical Connecting Line */}
                    <div style={{
                        position: 'absolute',
                        left: '24px',
                        top: '40px',
                        bottom: '40px',
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--accent-river), var(--accent-forest), var(--accent-sand))',
                        opacity: 0.3,
                        zIndex: 0
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                style={{
                                    display: 'flex',
                                    gap: 'var(--spacing-lg)',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                {/* Step Icon Bubble */}
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-subtle)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    color: 'var(--text-primary)',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                                }}>
                                    {step.icon}
                                </div>

                                {/* Content Card */}
                                <div style={{
                                    flex: 1,
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid var(--border-subtle)',
                                    padding: 'var(--spacing-lg)',
                                    borderRadius: 'var(--radius-lg)',
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)', color: 'white' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
