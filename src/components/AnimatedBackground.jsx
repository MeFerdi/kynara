import React from 'react';

const AnimatedBackground = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)', // Deep Blue-Grey to Black (similar to ref)
        }}>
            {/* SVG Wave Pattern */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.8
                }}
                preserveAspectRatio="none"
                viewBox="0 0 1440 900"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" /> {/* Pink */}
                        <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" /> {/* Orange */}
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" /> {/* Pink */}
                    </linearGradient>
                </defs>

                {/* Wave 1 - Top/Left Flow */}
                <path
                    d="M-50,200 C300,400 600,0 900,300 C1200,600 1500,400 1600,500"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="1.5"
                />
                <path
                    d="M-50,220 C320,420 620,20 920,320 C1220,620 1520,420 1620,520"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="1"
                    opacity="0.8"
                />
                <path
                    d="M-50,240 C340,440 640,40 940,340 C1240,640 1540,440 1640,540"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                />
                <path
                    d="M-50,260 C360,460 660,60 960,360 C1260,660 1560,460 1660,560"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="1"
                    opacity="0.4"
                />

                {/* Wave 2 - Bottom/Right Flow */}
                <path
                    d="M-100,600 C400,800 600,400 1000,700 C1300,900 1600,600 1700,700"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="1.5"
                />
                <path
                    d="M-100,620 C420,820 620,420 1020,720 C1320,920 1620,620 1720,720"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="1"
                    opacity="0.8"
                />
                <path
                    d="M-100,640 C440,840 640,440 1040,740 C1340,940 1640,640 1740,740"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                />
            </svg>

            {/* Subtle Gradient Overlay to fade edges */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, transparent 60%, #020617 100%)',
                pointerEvents: 'none'
            }} />
        </div>
    );
};

export default AnimatedBackground;
