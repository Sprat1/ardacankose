import React, { useEffect, useRef } from "react";
import "./CometCard.css";

const CometCard = ({ children, className = "" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Use CSS vars instead of framer motion to track mouse
        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            container.style.setProperty("--mouse-x", `${x}px`);
            container.style.setProperty("--mouse-y", `${y}px`);
            container.style.setProperty("--opacity", 1);
        };

        const handleMouseLeave = () => {
            container.style.setProperty("--opacity", 0);
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Initialize opacity to 0
        container.style.setProperty("--opacity", 0);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={containerRef} className={`comet-card-wrapper ${className}`}>
            <div className="comet-card-background"></div>
            <div className="comet-card-glow"></div>
            <div className="comet-card-border-glow"></div>
            <div className="comet-card-inner">
                {children}
            </div>
        </div>
    );
};

export default CometCard;
