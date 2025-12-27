"use client";
import React, { useState, useEffect, useRef } from 'react';

const CountUpStats = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    // Parse end value (remove non-numeric chars for calculation)
                    const endVal = parseFloat(end.toString().replace(/,/g, ''));
                    let startTime = null;

                    const animate = (currentTime) => {
                        if (!startTime) startTime = currentTime;
                        const progress = currentTime - startTime;

                        // Ease out quart
                        const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

                        const percent = Math.min(progress / duration, 1);
                        const easedPercent = easeOutQuart(percent);

                        const currentCount = easedPercent * endVal;

                        setCount(currentCount);

                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(endVal); // Ensure exact end value
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.2 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) observer.unobserve(countRef.current);
        };
    }, [end, duration]);

    // Format number with commas and decimals
    const formattedCount = count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    return (
        <span ref={countRef}>
            {prefix}{formattedCount}{suffix}
        </span>
    );
};

export default CountUpStats;
