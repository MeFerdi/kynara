import React from 'react';
import OfferingPage from './OfferingPage';
import { Terminal } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';

const CustomSoftware = () => {
    return (
        <OfferingPage
            title="Custom Software"
            subtitle="Scalable web apps, rigorous APIs, and dashboards built for performance and longevity."
            content={
                <div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                        We don't just write code; we architect solutions. Our custom software development process is designed to handle complexity while remaining user-friendly. From high-throughput APIs to real-time dashboards, we build the digital backbone of your business.
                    </p>
                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                        <AccordionItem
                            title="Modern React/Node.js Stacks"
                            content="We use the latest stable production frameworks to ensure your application is fast, secure, and easily maintainable by any developer in the future."
                            accentColor="var(--accent-forest)"
                        />
                        <AccordionItem
                            title="Scalable Cloud Architecture"
                            content="Built on AWS/GCP with auto-scaling capabilities, ensuring your system handles 10 users or 10 million without crashing."
                            accentColor="var(--accent-forest)"
                        />
                        <AccordionItem
                            title="Real-time Data Processing"
                            content="Implement WebSockets and event-driven architecture to give your users live updates and instant feedback without page reloads."
                            accentColor="var(--accent-forest)"
                        />
                    </div>
                </div>
            }
            diagram={
                <div style={{ color: 'var(--accent-forest)' }}>
                    <Terminal size={140} strokeWidth={1} />
                </div>
            }
        />
    );
};

export default CustomSoftware;
