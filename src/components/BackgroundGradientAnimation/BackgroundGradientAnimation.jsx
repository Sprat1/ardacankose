import React, { useEffect, useRef } from "react";
import "./BackgroundGradientAnimation.css";

const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgba(10, 10, 11, 1)",
    gradientBackgroundEnd = "rgba(10, 10, 11, 1)",
    firstColor = "18, 113, 255",
    secondColor = "221, 74, 255",
    thirdColor = "100, 220, 255",
    fourthColor = "200, 50, 50",
    fifthColor = "180, 180, 50",
    pointerColor = "140, 100, 255",
    size = "100%",
    blendingValue = "hard-light",
    children,
    className = "",
    containerClassName = "",
}) => {
    const interactiveRef = useRef(null);

    useEffect(() => {
        const interBubble = interactiveRef.current;
        if (!interBubble) return;

        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            if (interBubble) {
                interBubble.style.transform = `translate(${Math.round(
                    curX
                )}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(move);
        };

        window.addEventListener("mousemove", (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move();

        return () => {
            window.removeEventListener("mousemove", () => { });
        };
    }, []);

    return (
        <div
            className={`bg-gradient-container ${containerClassName}`}
            style={{
                "--gradient-background-start": gradientBackgroundStart,
                "--gradient-background-end": gradientBackgroundEnd,
                "--first-color": firstColor,
                "--second-color": secondColor,
                "--third-color": thirdColor,
                "--fourth-color": fourthColor,
                "--fifth-color": fifthColor,
                "--pointer-color": pointerColor,
                "--size": size,
                "--blending-value": blendingValue,
            }}
        >
            <svg className="bg-gradient-svg">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={`bg-gradient-gradients ${className}`}>
                <div className="bg-gradient-g1"></div>
                <div className="bg-gradient-g2"></div>
                <div className="bg-gradient-g3"></div>
                <div className="bg-gradient-g4"></div>
                <div className="bg-gradient-g5"></div>
                <div className="bg-gradient-interactive" ref={interactiveRef}></div>
            </div>
            <div className="bg-gradient-content">{children}</div>
        </div>
    );
};

export default BackgroundGradientAnimation;
