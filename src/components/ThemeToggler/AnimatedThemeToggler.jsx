import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './AnimatedThemeToggler.css';

const AnimatedThemeToggler = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            className="theme-toggler"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={false}
                animate={isDark ? "dark" : "light"}
                style={{
                    cursor: 'pointer',
                    color: 'var(--color-text-primary)',
                    originX: 0.5,
                    originY: 0.5
                }}
            >
                <motion.circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="currentColor"
                    variants={{
                        dark: { r: 5 },
                        light: { r: 8 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />

                <motion.g
                    variants={{
                        dark: { opacity: 1 },
                        light: { opacity: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="20" r="1.5" fill="currentColor" />
                    <circle cx="20" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="17.6569" cy="6.34315" r="1.5" transform="rotate(45 17.6569 6.34315)" fill="currentColor" />
                    <circle cx="6.34315" cy="17.6569" r="1.5" transform="rotate(45 6.34315 17.6569)" fill="currentColor" />
                    <circle cx="17.6569" cy="17.6569" r="1.5" transform="rotate(-45 17.6569 17.6569)" fill="currentColor" />
                    <circle cx="6.34315" cy="6.34315" r="1.5" transform="rotate(-45 6.34315 6.34315)" fill="currentColor" />
                </motion.g>

                <motion.circle
                    cx="18"
                    cy="6"
                    r="4"
                    fill="var(--color-bg-primary)"
                    variants={{
                        dark: { cx: 24, cy: 0 },
                        light: { cx: 16, cy: 8 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
            </motion.svg>
        </button>
    );
};

export default AnimatedThemeToggler;
