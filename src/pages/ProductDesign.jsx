import React from 'react';
import OfferingPage from './OfferingPage';
import { PenTool } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';

const ProductDesign = () => {
    return (
        <OfferingPage
            title="Product Design"
            subtitle="User-centric interfaces and design systems that prioritize clarity and function."
            content={
                <div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                        Design is how it works. We create product interfaces that are intuitive, beautiful, and strictly functional. No fluff, just pure usability wrapped in a premium aesthetic.
                    </p>
                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                        <AccordionItem
                            title="UX Research & Wireframing"
                            content="We start with structure and user needs, creating low-fidelity blueprints to validate logic before a single pixel is polished."
                            accentColor="var(--accent-sand)"
                        />
                        <AccordionItem
                            title="High-Fidelity Prototypes"
                            content="Interactive, clickable previews of your final product. See exactly how it looks and feels before engineering begins."
                            accentColor="var(--accent-sand)"
                        />
                        <AccordionItem
                            title="Component Libraries & Design Systems"
                            content="We build modular design systems that ensure consistency across your product and dramatically speed up future development."
                            accentColor="var(--accent-sand)"
                        />
                    </div>
                </div>
            }
            diagram={
                <div style={{ color: 'var(--accent-sand)' }}>
                    <PenTool size={140} strokeWidth={1} />
                </div>
            }
        />
    );
};

export default ProductDesign;
