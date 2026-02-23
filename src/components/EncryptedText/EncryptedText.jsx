import React, { useState, useEffect } from 'react';

// Removed space and very thin characters to maintain more consistent width
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+={}[];:<>/?";

const EncryptedText = ({
    text,
    revealDelayMs = 150,
    flipDelayMs = 50,
    charset = CHARACTERS,
    className = "",
    encryptedClassName = "opacity-50",
    revealedClassName = ""
}) => {
    const [displayText, setDisplayText] = useState("");
    const [revealedLength, setRevealedLength] = useState(0);

    useEffect(() => {
        let interval;

        // Start revealing characters
        interval = setInterval(() => {
            setRevealedLength((prev) => {
                if (prev >= text.length) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, revealDelayMs);

        return () => clearInterval(interval);
    }, [text, revealDelayMs]);

    useEffect(() => {
        let interval;
        if (revealedLength < text.length) {
            interval = setInterval(() => {
                let currentText = "";
                for (let i = 0; i < text.length; i++) {
                    if (i < revealedLength) {
                        currentText += text[i];
                    } else if (text[i] === ' ') {
                        currentText += ' '; // Preserve spaces to avoid word-wrap jumping
                    } else {
                        currentText += charset[Math.floor(Math.random() * charset.length)];
                    }
                }
                setDisplayText(currentText);
            }, flipDelayMs);
        } else {
            setDisplayText(text);
        }

        return () => clearInterval(interval);
    }, [text, revealedLength, flipDelayMs, charset]);

    return (
        <span className={className} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            <span className={revealedClassName}>{displayText.slice(0, revealedLength)}</span>
            <span className={encryptedClassName}>{displayText.slice(revealedLength)}</span>
        </span>
    );
};

export default EncryptedText;
