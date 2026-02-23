import React, { useEffect, useRef, useState } from 'react';

const Highlighter = ({ children, color = 'var(--color-accent)', className = '', delay = 100 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                } else {
                    // Uncomment next line if you want it to hide again when scrolling up
                    // setIsVisible(false);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [delay]);

    return (
        <span ref={ref} className={`highlighter-wrapper ${className}`} style={{ whiteSpace: 'nowrap', position: 'relative', display: 'inline-block' }}>
            <svg
                className="highlighter-svg pointer-events-none"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    overflow: 'visible'
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M -5,70 Q 50,55 105,65"
                    fill="none"
                    stroke={color}
                    strokeWidth="70"
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: '120',
                        strokeDashoffset: isVisible ? '0' : '120',
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                        opacity: 0.6,
                        filter: 'url(#roughness)'
                    }}
                />
                <defs>
                    <filter id="roughness">
                        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>
            <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
        </span>
    );
};

export default Highlighter;
