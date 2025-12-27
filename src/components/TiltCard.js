"use client";
import React, { useRef, useState, useEffect } from 'react';

const TiltCard = ({ children, className = '', disabled = false }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Check for touch capability to disable on mobile
    const [isTouch, setIsTouch] = useState(false);
    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const handleMouseMove = (e) => {
        if (disabled || isTouch || !cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // Calculate mouse position relative to card center
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Max tilt is 10 degrees
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                willChange: 'transform',
                transformStyle: 'preserve-3d'
            }}
        >
            {children}
            {/* Optional Light Reflection */}
            {isHovered && !isTouch && !disabled && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at ${50 + (rotation.y * 2)}% ${50 + (rotation.x * -2)}%, rgba(255,255,255,0.1), transparent 40%)`,
                        pointerEvents: 'none',
                        zIndex: 10,
                        borderRadius: 'inherit'
                    }}
                />
            )}
        </div>
    );
};

export default TiltCard;
