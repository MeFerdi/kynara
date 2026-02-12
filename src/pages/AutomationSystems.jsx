import React from 'react';
import OfferingPage from './OfferingPage';
import { Bot } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';

const AutomationSystems = () => {
    return (
        <OfferingPage
            title="Automation Systems"
            subtitle="Streamlined workflows and integrations that reduce manual effort and error."
            content={
                <div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                        Stop wasting time on repetitive tasks. We build intelligent automation systems that connect your favorite tools (CRM, Email, Slack, Databases) into a seamless, self-driving workflow.
                    </p>
                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                        <AccordionItem
                            title="Turn-key Integrations (Zapier/Make)"
                            content="We rapidly connect your existing tools to eliminate manual data entry, saving your team hundreds of hours per month."
                            accentColor="var(--accent-river)"
                        />
                        <AccordionItem
                            title="Custom Webhook Handlers"
                            content="When off-the-shelf tools fail, we write custom code to handle complex data transformation and logic between your systems."
                            accentColor="var(--accent-river)"
                        />
                        <AccordionItem
                            title="Error-Proof Data Pipelines"
                            content="Our systems include robust error handling and logging, so you never lose a lead or an order due to a technical glitch."
                            accentColor="var(--accent-river)"
                        />
                    </div>
                </div>
            }
            diagram={
                <div style={{ color: 'var(--accent-river)' }}>
                    <Bot size={140} strokeWidth={1} />
                </div>
            }
        />
    );
};

export default AutomationSystems;
