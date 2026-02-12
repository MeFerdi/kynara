import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Triangle, Circle, Square } from 'lucide-react';

// Sample solution notes
const notesData = [
    { problem: "Manual invoicing", solution: "Automated workflow, reduced 80% of time", tag: "Automation", icon: <Hexagon size={20} /> },
    { problem: "Customer data overload", solution: "Scalable CRM system implemented", tag: "Backend", icon: <Triangle size={20} /> },
    { problem: "Slow reporting", solution: "Real-time dashboards built", tag: "Dashboard", icon: <Circle size={20} /> },
    { problem: "API bottleneck", solution: "Optimized API gateway, 40% faster", tag: "Backend", icon: <Square size={20} /> },
    { problem: "Design inconsistency", solution: "Product design system V2", tag: "Design", icon: <Hexagon size={20} /> },
    { problem: "Repetitive tasks", solution: "300+ hours automated per month", tag: "Automation", icon: <Triangle size={20} /> }
];

// Random position generator within bounds
const getRandomPosition = () => ({
    top: `${Math.random() * 50 + 10}%`, // 10%-60% of container height
    left: `${Math.random() * 70 + 5}%`, // 5%-75% of container width
    rotate: `${Math.random() * 8 - 4}deg`
});

const ControlledSolutionFeed = () => {
    const [visibleNotes, setVisibleNotes] = useState([]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            const newNote = notesData[index % notesData.length];
            const pos = getRandomPosition();
            const noteWithId = { ...newNote, ...pos, id: Date.now() + Math.random() };

            setVisibleNotes(prev => {
                // Keep max 6 cards visible
                const next = [...prev, noteWithId];
                if (next.length > 6) next.shift();
                return next;
            });

            index++;
        }, 3000); // every 3 seconds, add a new card

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="work" style={{
            position: 'relative',
            height: '350px',
            background: 'rgba(5,5,5,0.75)',
            overflow: 'hidden',
            marginTop: '-50px',
            marginBottom: '-50px',
        }}>
            <AnimatePresence>
                {visibleNotes.map(note => (
                    <motion.div
                        key={note.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            top: note.top,
                            left: note.left,
                            rotate: note.rotate,
                            minWidth: '220px',
                            maxWidth: '260px',
                            background: '#111111',
                            borderRadius: '12px',
                            padding: '1.2rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            cursor: 'pointer',
                            zIndex: 1
                        }}
                        whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.5)', zIndex: 99 }}
                    >
                        {/* Icon & Tag */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{
                                color: note.tag === "Automation" ? '#4ADE80' :
                                    note.tag === "Backend" ? '#38BDF8' :
                                        note.tag === "Design" ? '#FBBF24' :
                                            '#A78BFA'
                            }}>
                                {note.icon}
                            </div>
                            <span style={{
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.6)',
                                letterSpacing: '0.03em'
                            }}>
                                {note.tag}
                            </span>
                        </div>

                        {/* Problem */}
                        <h4 style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#ffffff',
                            margin: 0
                        }}>
                            {note.problem}
                        </h4>

                        {/* Solution */}
                        <p style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.875rem',
                            color: 'rgba(255,255,255,0.7)',
                            margin: 0
                        }}>
                            {note.solution}
                        </p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </section>
    );
};

export default ControlledSolutionFeed;
