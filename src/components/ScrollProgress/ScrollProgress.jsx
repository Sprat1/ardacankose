import React, { useEffect, useState } from "react";

const ScrollProgress = ({ className = "" }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight;
                const winHeight = window.innerHeight;

                const scrollPercent = scrollTop / (docHeight - winHeight);
                setScrollProgress(Math.min(Math.max(scrollPercent, 0), 1));
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`scroll-progress-container ${className}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                zIndex: 10000,
                transformOrigin: '0%',
                pointerEvents: 'none',
            }}
        >
            <div
                className="scroll-progress-bar"
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'var(--color-accent)',
                    transform: `scaleX(${scrollProgress})`,
                    transformOrigin: '0%',
                    transition: 'transform 0.1s ease-out',
                }}
            />
        </div>
    );
};

export default ScrollProgress;
