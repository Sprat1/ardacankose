import React, { useEffect, useRef, useState } from "react";
import "./CometCard.css";

const CometCard = ({ children, className = "" }) => {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Use CSS vars instead of framer motion to track mouse
        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate 3D tilt
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees tilt
            const rotateY = ((x - centerX) / centerX) * 10;

            setRotation({ x: rotateX, y: rotateY });

            container.style.setProperty("--mouse-x", `${x}px`);
            container.style.setProperty("--mouse-y", `${y}px`);
            container.style.setProperty("--opacity", 1);
        };

        const handleMouseLeave = () => {
            container.style.setProperty("--opacity", 0);
            // Reset rotation when mouse leaves
            setRotation({ x: 0, y: 0 });
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
        <div
            ref={containerRef}
            className={`comet-card-wrapper ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
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
