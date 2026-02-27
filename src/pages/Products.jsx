import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useBooking } from '../context/BookingContext';


const SunLinkLogo = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="8" fill="#E76F51" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <line key={i}
                x1={20 + 11 * Math.cos((deg * Math.PI) / 180)}
                y1={20 + 11 * Math.sin((deg * Math.PI) / 180)}
                x2={20 + 17 * Math.cos((deg * Math.PI) / 180)}
                y2={20 + 17 * Math.sin((deg * Math.PI) / 180)}
                stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round"
            />
        ))}
        {/* <path d="M8 28 Q14 24 20 26 Q26 28 32 24" stroke="#E76F51" strokeWidth="1.5" fill="none" strokeLinecap="round" /> */}
    </svg>
);

const GridPulseLogo = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <polyline points="4,26 10,26 14,12 18,30 22,20 26,20 30,14 34,14" stroke="#457B9D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="34" cy="14" r="3" fill="#457B9D" />
        <line x1="4" y1="33" x2="36" y2="33" stroke="#457B9D" strokeWidth="1" opacity="0.3" />
    </svg>
);

const ChamaOSLogo = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#0D9488" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="8" stroke="#0D9488" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
        {[0, 72, 144, 216, 288].map((deg, i) => (
            <circle key={i}
                cx={20 + 14 * Math.cos(((deg - 90) * Math.PI) / 180)}
                cy={20 + 14 * Math.sin(((deg - 90) * Math.PI) / 180)}
                r="3" fill="#0D9488"
            />
        ))}
        <circle cx="20" cy="20" r="3" fill="#0D9488" />
    </svg>
);

const PowerWatchLogo = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M20 4C11.2 4 4 11.2 4 20s7.2 16 16 16 16-7.2 16-16S28.8 4 20 4z" stroke="#E9C46A" strokeWidth="1.8" fill="none" />
        <path d="M22 6 L18 20 H24 L18 34" stroke="#E9C46A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="14" r="1.5" fill="#E9C46A" opacity="0.5" />
        <circle cx="9" cy="26" r="1.5" fill="#E9C46A" opacity="0.5" />
        <circle cx="31" cy="14" r="1.5" fill="#E9C46A" opacity="0.5" />
        <circle cx="31" cy="26" r="1.5" fill="#E9C46A" opacity="0.5" />
    </svg>
);


const MazungumzoLogo = ({ size = 40 }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M6 8 H28 C30.2 8 32 9.8 32 12 V22 C32 24.2 30.2 26 28 26 H18 L11 33 V26 H8 C5.8 26 4 24.2 4 22 V12 C4 9.8 5.8 8 8 8 Z" stroke="#9333EA" strokeWidth="1.8" fill="rgba(147,51,234,0.08)" />
        <circle cx="34" cy="10" r="5" fill="rgba(45,106,79,0.15)" stroke="#2D6A4F" strokeWidth="1.5" />
        <path d="M31.5 10 L33 11.5 L36.5 8" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="16" x2="22" y2="16" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="20" x2="18" y2="20" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);


const sunlinkBars = [
    { label: 'Private Schools', pct: 85 },
    { label: 'Hospitals', pct: 72 },
    { label: 'Hotels', pct: 63 },
    { label: 'Factories', pct: 55 },
    { label: 'Retail', pct: 48 },
];

const bentoProducts = [
    {
        key: 'mazungumzo',
        Logo: MazungumzoLogo,
        logoBg: 'rgba(147,51,234,0.12)',
        accent: '#9333EA',
        name: 'Mazungumzo',
        tagline: 'Multilingual AI · Customer Service',
        status: 'Building',
        statusStyle: { background: 'rgba(251,191,36,0.1)', color: '#D97706' },
        desc: 'AI-powered customer service that understands Swahili, Sheng, and English interchangeably. Plug in your catalogue and FAQ — intelligent conversations run 24/7 on WhatsApp.',
        sector: 'AI · NLP · Conversational Commerce',
        wide: true, // spans 2 cols in bento
    },
    {
        key: 'chamaos',
        Logo: ChamaOSLogo,
        logoBg: 'rgba(13,148,136,0.12)',
        accent: '#0D9488',
        name: 'ChamaOS',
        tagline: 'Group Finance Operating System',
        status: 'Building',
        statusStyle: { background: 'rgba(251,191,36,0.1)', color: '#D97706' },
        desc: 'A full financial operating system for savings groups — contributions, loan books, statements, and member alerts, entirely within WhatsApp.',
        sector: 'Fintech · Informal Economy',
        wide: false,
    },
    {
        key: 'powerwatch',
        Logo: PowerWatchLogo,
        logoBg: 'rgba(233,196,106,0.12)',
        accent: '#E9C46A',
        name: 'PowerWatch',
        tagline: 'Grid Intelligence & Outage Alerts',
        status: 'Building',
        statusStyle: { background: 'rgba(251,191,36,0.1)', color: '#D97706' },
        desc: 'Real-time Kenya Power outage intelligence for businesses. Predicted and planned outage alerts by area, delivered before the lights go out.',
        sector: 'Energy · SME Tools',
        wide: false,
    },
];

const whyItems = [
    { num: '01', title: 'WhatsApp-Native First', body: "If it doesn't work on WhatsApp, most of Kenya can't use it. We design for the channel people already live in." },
    { num: '02', title: 'M-Pesa Integrated', body: 'Every product that touches money uses M-Pesa as the default payment rail. No bank card required. No friction.' },
    { num: '03', title: 'Zero to One Thinking', body: "We look for problems nobody has framed correctly, then build the first version — not a slightly better version of something that exists." },
    { num: '04', title: 'Execution Over Ideas', body: 'Ideas are worthless. Every product we ship has a 30-day validation plan before a single line of production code is written.' },
];

/* ─────────────────────── TYPEWRITER HOOK ─────────────────────── */

// Cycles forever: type → pause → delete → pause → repeat.
// Starts on first IntersectionObserver trigger.
const useTypewriter = (text, { typeSpeed = 30, deleteSpeed = 18, pauseAfterType = 1800, pauseAfterDelete = 600 } = {}) => {
    const [displayed, setDisplayed] = React.useState('');
    const triggerRef = React.useRef(null);
    const started = React.useRef(false);
    const timerRef = React.useRef(null);

    React.useEffect(() => {
        const el = triggerRef.current;
        if (!el) return;

        const runCycle = () => {
            let i = 0;
            // Phase 1: type forward
            const typeNext = () => {
                i++;
                setDisplayed(text.slice(0, i));
                if (i < text.length) {
                    timerRef.current = setTimeout(typeNext, typeSpeed);
                } else {
                    // Phase 2: pause at full text
                    timerRef.current = setTimeout(deleteNext, pauseAfterType);
                }
            };
            // Phase 3: delete backwards
            const deleteNext = () => {
                i--;
                setDisplayed(text.slice(0, i));
                if (i > 0) {
                    timerRef.current = setTimeout(deleteNext, deleteSpeed);
                } else {
                    // Phase 4: pause empty then restart
                    timerRef.current = setTimeout(runCycle, pauseAfterDelete);
                }
            };
            timerRef.current = setTimeout(typeNext, typeSpeed);
        };

        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                timerRef.current = setTimeout(runCycle, 400);
            }
        }, { threshold: 0.3 });
        obs.observe(el);

        return () => {
            obs.disconnect();
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [text, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

    return { displayed, triggerRef };
};


/* ─────────────────────────── COMPONENT ─────────────────────────── */


const Products = () => {
    const { openBooking } = useBooking();
    const animRefs = useRef([]);

    // Typewriter state for featured cards (tagline text only)
    const sunlinkTW = useTypewriter("Solar installer marketplace for Kenya's commercial and industrial buyers. Vetted installers. Standardised bids. Escrow payments.");
    const gridpulseTW = useTypewriter('The energy data API Africa\'s solar financiers, insurers, and carbon verifiers have been missing. Real-time grid intelligence and CO₂ data.');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.05 });

        animRefs.current.forEach(el => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(28px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                obs.observe(el);
            }
        });
        return () => obs.disconnect();
    }, []);

    const addRef = el => { if (el && !animRefs.current.includes(el)) animRefs.current.push(el); };


    return (
        <div style={{ background: 'var(--bg-dark)', color: 'var(--text-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
            <SEO
                title="Products"
                description="Kynara Product Lab builds software for Africa — WhatsApp-native, M-Pesa-integrated, designed for the informal economy."
                path="/products"
            />
            <Navbar />
            <style>{`
                @keyframes tw-blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }

                /* ── HERO ── */
                .p-hero { padding-top: 120px; padding-bottom: 64px; }
                @media (max-width: 640px) {
                    .p-hero { padding-top: 88px; padding-bottom: 48px; }
                    .p-hero-sub { font-size: 0.95rem !important; }
                    .p-hero-cta { flex-direction: column !important; align-items: stretch !important; }
                    .p-hero-cta a, .p-hero-cta button { text-align: center; }
                }

                /* ── FEATURED ROWS ── */
                .p-feat-row {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    min-height: 380px;
                }
                @media (max-width: 900px) {
                    .p-feat-row {
                        grid-template-columns: 1fr 1.6fr;
                        min-height: 300px;
                    }
                }
                @media (max-width: 640px) {
                    .p-feat-row {
                        grid-template-columns: 1fr !important;
                        min-height: unset !important;
                    }
                    .p-feat-logo-panel {
                        padding: 2.5rem 2rem 1.5rem !important;
                        min-height: 180px;
                    }
                    .p-feat-logo-panel svg { width: 72px !important; height: 72px !important; }
                    .p-feat-text-panel {
                        padding: 1.8rem 1.4rem 2.4rem !important;
                    }
                    .p-feat-name { font-size: 2rem !important; }
                    .p-feat-tagline { font-size: 0.93rem !important; min-height: unset !important; }
                }

                /* ── PIPELINE BENTO ── */
                .p-bento {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }
                @media (max-width: 780px) {
                    .p-bento { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 480px) {
                    .p-bento { grid-template-columns: 1fr; }
                }

                /* ── WHY KYNARA ── */
                .p-why-outer {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 5rem;
                    align-items: start;
                }
                .p-why-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2.5rem;
                }
                @media (max-width: 900px) {
                    .p-why-outer { grid-template-columns: 1fr; gap: 2.5rem; }
                    .p-why-grid { gap: 2rem; }
                }
                @media (max-width: 480px) {
                    .p-why-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                }

                /* ── CTA ── */
                .p-cta-block {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 700px) {
                    .p-cta-block {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                        text-align: center;
                    }
                    .p-cta-block button { width: 100%; }
                }

                /* ── GENERAL TOUCH-FRIENDLINESS ── */
                @media (max-width: 640px) {
                    .p-pills-wrap { gap: 0.45rem !important; }
                    .p-section-header { flex-wrap: wrap; gap: 0.6rem !important; }
                }
            `}</style>



            {/* ── HERO ── */}
            <section className="p-hero">
                <div className="container">
                    <div style={{ maxWidth: 720, marginBottom: '3.5rem' }}>
                        <h1 style={{
                            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem,5vw,4rem)',
                            fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.04em',
                        }}>
                            Products built for the way{' '}
                            <em style={{ fontStyle: 'normal', color: 'var(--accent-sunrise)' }}>Africa</em>{' '}
                            actually works.
                        </h1>
                        <p className="p-hero-sub" style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '1.2rem', maxWidth: 540 }}>
                            Kynara Product Lab builds and ships software that solves real problems — WhatsApp-native, M-Pesa-integrated, designed for the informal economy.
                        </p>
                        <div className="p-hero-cta" style={{ display: 'flex', gap: '0.8rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a href="#featured" style={S.btnDark}>Explore Products</a>
                            <button onClick={openBooking} style={S.btnOutline}>Work With Us</button>
                        </div>
                    </div>

                    {/* Product name strip */}
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                        {[
                            { L: SunLinkLogo, name: 'SunLink', href: '#sunlink', c: '#E76F51' },
                            { L: GridPulseLogo, name: 'GridPulse', href: '#gridpulse', c: '#457B9D' },
                            { L: MazungumzoLogo, name: 'Mazungumzo', href: '#pipeline', c: '#9333EA' },
                            { L: ChamaOSLogo, name: 'ChamaOS', href: '#pipeline', c: '#0D9488' },
                            { L: PowerWatchLogo, name: 'PowerWatch', href: '#pipeline', c: '#E9C46A' },
                        ].map(({ L, name, href, c }) => (
                            <a key={name} href={href} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                                padding: '0.4rem 0.9rem', borderRadius: 100,
                                fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', color: 'var(--text-secondary)',
                                transition: 'border-color 0.2s, color 0.2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = c; e.currentTarget.style.color = c; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                            >
                                <L size={16} />
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FEATURED PRODUCTS ── */}
            <section id="featured" style={{ paddingBottom: '96px' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
                        <span style={S.eyebrow}>Flagship Products</span>
                        <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)', opacity: 0.5 }} />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>Live &amp; Building</span>
                    </div>

                    {/* ── SUNLINK ROW ── */}
                    <div id="sunlink" className="p-feat-row" style={S.featRow}>
                        {/* Logo panel */}
                        <div className="p-feat-logo-panel" style={S.featLogoPanel}>
                            <SunLinkLogo size={120} />
                            <span style={{ ...S.featLogoLabel, color: 'var(--accent-sunrise)' }}>SunLink</span>
                        </div>
                        {/* Text panel */}
                        <div ref={sunlinkTW.triggerRef} className="p-feat-text-panel" style={S.featTextPanel}>
                            <div className="p-section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                                <span style={{ ...S.featTag, background: 'rgba(231,111,81,0.1)', color: 'var(--accent-sunrise)' }}>Energy · Kenya</span>
                                <span style={S.statusLive}>Live</span>
                            </div>
                            <div className="p-feat-name" style={{ ...S.featName, fontSize: '2.8rem' }}>SunLink</div>
                            <p className="p-feat-tagline" style={{ ...S.featTagline, minHeight: '3.6em', fontSize: '1.05rem' }}>
                                {sunlinkTW.displayed}<span style={S.cursor}>|</span>
                            </p>
                            <div className="p-pills-wrap" style={S.pills}>
                                {['Solar Marketplace', 'C&I Buyers', 'Installer Vetting', 'Escrow Payments'].map(t => (
                                    <span key={t} style={S.pill}>{t}</span>
                                ))}
                            </div>
                            <div style={{ ...S.featActions, marginTop: '0.5rem' }}>
                                <button onClick={openBooking}
                                    style={{ ...S.featBtn, background: 'var(--accent-sunrise)', boxShadow: '0 4px 20px rgba(231,111,81,0.28)' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = '#c55a3e'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-sunrise)'; e.currentTarget.style.transform = 'none'; }}>
                                    Book a Demo →
                                </button>
                                <a href="https://sunlink-xi.vercel.app/" target="_blank" rel="noopener noreferrer"
                                    style={{ ...S.featBtnGhost, color: 'var(--accent-sunrise)', textDecoration: 'none' }}>
                                    Visit SunLink ↗
                                </a>
                                <button onClick={openBooking} style={{ ...S.featBtnGhost, color: 'var(--text-muted)' }}>
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: 1, background: 'var(--border-subtle)', opacity: 0.3, margin: '0 0' }} />

                    {/* ── GRIDPULSE ROW ── */}
                    <div id="gridpulse" className="p-feat-row" style={S.featRow}>
                        {/* Logo panel */}
                        <div className="p-feat-logo-panel" style={S.featLogoPanel}>
                            <GridPulseLogo size={120} />
                            <span style={{ ...S.featLogoLabel, color: 'var(--accent-river)' }}>GridPulse</span>
                        </div>
                        {/* Text panel */}
                        <div ref={gridpulseTW.triggerRef} className="p-feat-text-panel" style={S.featTextPanel}>
                            <div className="p-section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                                <span style={{ ...S.featTag, background: 'rgba(69,123,157,0.1)', color: 'var(--accent-river)' }}>Data Infrastructure · Africa</span>
                                <span style={S.statusBuilding}>Building</span>
                            </div>
                            <div className="p-feat-name" style={{ ...S.featName, fontSize: '2.8rem' }}>GridPulse</div>
                            <p className="p-feat-tagline" style={{ ...S.featTagline, minHeight: '3.6em', fontSize: '1.05rem' }}>
                                {gridpulseTW.displayed}<span style={S.cursor}>|</span>
                            </p>
                            <div className="p-pills-wrap" style={S.pills}>
                                {['Energy API', 'Grid Intelligence', 'Carbon Verification', 'IoT Network'].map(t => (
                                    <span key={t} style={S.pill}>{t}</span>
                                ))}
                            </div>
                            <div style={{ ...S.featActions, marginTop: '0.5rem' }}>
                                <button onClick={openBooking}
                                    style={{ ...S.featBtn, background: 'var(--accent-river)', boxShadow: '0 4px 20px rgba(69,123,157,0.28)' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = '#356080'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-river)'; e.currentTarget.style.transform = 'none'; }}>
                                    Get API Access →
                                </button>
                                <button onClick={openBooking} style={{ ...S.featBtnGhost, color: 'var(--accent-river)' }}>
                                    Book a demo ↗
                                </button>
                                <a href="https://gridpulse-sand.vercel.app/" target="_blank" rel="noopener noreferrer"
                                    style={{ ...S.featBtnGhost, color: 'var(--accent-sunrise)', textDecoration: 'none' }}>
                                    Visit GridPulse ↗
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* ── PRODUCT PIPELINE — BENTO GRID ── */}
            <section id="pipeline" style={{ paddingBottom: '96px' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={S.eyebrow}>Product Pipeline</span>
                        <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)', opacity: 0.5 }} />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>In Development</span>
                    </div>

                    {/* BENTO GRID — centered, constrained */}
                    <div style={{ maxWidth: 880, margin: '0 auto' }}>
                        <div className="p-bento">

                            {/* ── WIDE CARD: Mazungumzo ── */}
                            {(() => {
                                const p = bentoProducts[0];
                                const Logo = p.Logo;
                                return (
                                    <div ref={addRef} key={p.key} style={{ ...S.bentoCard, borderTop: `2px solid ${p.accent}` }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div style={{ ...S.bentoIcon, background: p.logoBg }}>
                                                <Logo size={26} />
                                            </div>
                                            <span style={{ ...S.smallStatus, ...p.statusStyle }}>{p.status}</span>
                                        </div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.accent }}>
                                            {p.tagline}
                                        </div>
                                        <div style={S.bentoName}>{p.name}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.5rem' }}>
                                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>{p.sector}</span>
                                            <button onClick={openBooking} style={{ ...S.bentoBtn, borderColor: p.accent, color: p.accent }}
                                                onMouseEnter={e => { e.currentTarget.style.background = p.accent; e.currentTarget.style.color = '#fff'; }}
                                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = p.accent; }}
                                            >
                                                Join Waitlist →
                                            </button>
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* ── SMALL CARDS ── */}
                            {bentoProducts.slice(1).map((p) => {
                                const Logo = p.Logo;
                                return (
                                    <div ref={addRef} key={p.key} style={{ ...S.bentoCard, borderTop: `2px solid ${p.accent}` }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div style={{ ...S.bentoIcon, background: p.logoBg }}>
                                                <Logo size={22} />
                                            </div>
                                            <span style={{ ...S.smallStatus, ...p.statusStyle }}>{p.status}</span>
                                        </div>
                                        <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.accent, marginTop: '0.6rem' }}>
                                            {p.tagline}
                                        </div>
                                        <div style={S.bentoName}>{p.name}</div>
                                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: 'auto', paddingTop: '0.5rem' }}>
                                            {p.sector}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* ── PLACEHOLDER ── */}
                            <div style={{ ...S.bentoCard, borderStyle: 'dashed', background: 'transparent', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                    <div style={{ opacity: 0.35, fontSize: '1.4rem', marginBottom: '0.3rem' }}>+</div>
                                    <div style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>More in 2026</div>
                                    <button onClick={openBooking} style={{ color: 'var(--accent-sunrise)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', padding: 0, marginTop: '0.3rem', fontWeight: 600 }}>
                                        Let's talk →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY KYNARA ── */}
            <section style={{ paddingBottom: '96px' }}>
                <div className="container">
                    <div className="p-why-outer">
                        <div>
                            <span style={S.eyebrow}>Why Kynara</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '0.8rem' }}>
                                We build for the 80% the tech world ignores.
                            </h2>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '1rem' }}>
                                Most software is built for the formally employed, bank-account-holding, English-speaking minority.
                                We build for everyone else.
                            </p>
                        </div>
                        <div className="p-why-grid">
                            {whyItems.map(w => (
                                <div key={w.num} ref={addRef}>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.6rem', color: 'var(--border-subtle)', lineHeight: 1, marginBottom: '0.5rem' }}>{w.num}</div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{w.title}</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{w.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ paddingBottom: '96px' }}>
                <div className="container">
                    <div ref={addRef} className="p-cta-block" style={S.ctaBlock}>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.4rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.8rem' }}>
                                Want us to build something like this for your business?
                            </h2>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: 520 }}>
                                We work with companies, NGOs, and investors to build, validate, and launch products across Kenya and East Africa.
                                Book a 30-minute conversation and let's figure out if we're a fit.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center', flexShrink: 0 }}>
                            <button onClick={openBooking} style={S.ctaBtn}
                                onMouseEnter={e => { e.currentTarget.style.background = '#c55a3e'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-sunrise)'; e.currentTarget.style.transform = 'none'; }}>
                                Book a Call →
                            </button>
                            <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>← Back to Home</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

/* ─────────────────────────── STYLE MAP ─────────────────────────── */

const S = {
    btnDark: {
        background: 'var(--text-primary)', color: 'var(--bg-dark)',
        padding: '0.8rem 1.8rem', borderRadius: 'var(--radius-md)',
        fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
    },
    btnOutline: {
        background: 'transparent', color: 'var(--text-primary)',
        padding: '0.78rem 1.8rem', borderRadius: 'var(--radius-md)',
        fontSize: '0.9rem', fontWeight: 500, border: '1.5px solid var(--border-subtle)',
        cursor: 'pointer', transition: 'all 0.2s',
    },
    eyebrow: {
        display: 'inline-block', fontSize: '0.72rem', fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)',
    },

    // Featured products — horizontal row layout (logo left, text right)
    featRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        minHeight: 380,
    },
    featLogoPanel: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '1.4rem', padding: '3.5rem',
    },
    featLogoLabel: {
        fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700,
        letterSpacing: '-0.01em',
    },
    featTextPanel: {
        padding: '3.5rem 3.5rem 3.5rem 4rem',
        display: 'flex', flexDirection: 'column', gap: '1.1rem', justifyContent: 'center',
    },

    // Featured card — large square, no border, subtle gradient bg

    featCard: {
        background: 'var(--bg-card)',
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        aspectRatio: '1 / 1',
        boxShadow: '0 2px 24px rgba(0,0,0,0.18)',
        transition: 'box-shadow 0.3s, transform 0.3s',
    },
    featBody: { padding: '2.8rem', display: 'flex', flexDirection: 'column', gap: '1.3rem', height: '100%' },
    logoBox: { width: 52, height: 52, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    featTag: { display: 'inline-flex', padding: '0.28rem 0.75rem', borderRadius: 100, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' },
    statusLive: { fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.22rem 0.6rem', borderRadius: 100, background: 'rgba(22,163,74,0.1)', color: '#16A34A', whiteSpace: 'nowrap' },
    statusBuilding: { fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.22rem 0.6rem', borderRadius: 100, background: 'rgba(251,191,36,0.1)', color: '#D97706', whiteSpace: 'nowrap' },
    featName: { fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 },
    featTagline: { fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 },
    cursor: { display: 'inline-block', width: 2, height: '1em', background: 'var(--text-muted)', marginLeft: 1, verticalAlign: 'middle', animation: 'tw-blink 0.7s step-end infinite' },
    pills: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
    pill: { background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '0.3rem 0.8rem', borderRadius: 100, fontSize: '0.76rem', fontWeight: 500, color: 'var(--text-secondary)' },
    featActions: { display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '0.6rem' },
    featBtn: { padding: '0.75rem 1.6rem', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer', color: '#fff', transition: 'all 0.2s' },
    featBtnGhost: { fontSize: '0.88rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' },
    featVisual: { borderLeft: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.5rem', minHeight: 300 },

    // Bar chart
    vizTitle: { fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.4rem', textAlign: 'center' },
    barRow: { display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.9rem' },
    barLabel: { fontSize: '0.74rem', color: 'var(--text-muted)', width: 108, flexShrink: 0, textAlign: 'right', fontWeight: 500 },
    barTrack: { flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 100, overflow: 'hidden' },
    barFill: { height: '100%', borderRadius: 100 },
    barVal: { fontSize: '0.74rem', fontWeight: 600, width: 34, flexShrink: 0 },

    // API block
    apiBlock: {
        background: '#080d1a', borderRadius: 10, padding: '1.2rem 1.4rem', width: '100%',
        fontFamily: "'Courier New', monospace", fontSize: '0.72rem', lineHeight: 1.9,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)', whiteSpace: 'pre',
    },

    // Bento grid
    bento: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
    },
    bentoCard: {
        background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 14,
        padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
    },
    bentoWide: { gridColumn: 'span 2' },
    bentoBigIcon: { width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    bentoIcon: { width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    bentoName: { fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', lineHeight: 1.15 },
    bentoDesc: { fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.65 },
    bentoBtn: { fontSize: '0.78rem', fontWeight: 600, padding: '0.35rem 0.9rem', borderRadius: 100, border: '1px solid', background: 'transparent', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' },
    smallStatus: { fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.22rem 0.6rem', borderRadius: 100, whiteSpace: 'nowrap' },
    sector: { fontSize: '0.74rem', fontWeight: 500 },

    // CTA / Why
    ctaBlock: {
        background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 20,
        padding: '3.5rem 4rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center',
    },
    ctaBtn: {
        background: 'var(--accent-sunrise)', color: '#fff',
        padding: '0.95rem 2.2rem', borderRadius: 'var(--radius-md)',
        fontSize: '0.95rem', fontWeight: 700, border: 'none', cursor: 'pointer',
        whiteSpace: 'nowrap', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(231,111,81,0.35)',
    },
};

export default Products;
