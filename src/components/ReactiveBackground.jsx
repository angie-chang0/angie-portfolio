import { useEffect, useRef } from "react";

export const GradientBackground = () => {
    const interactiveRef = useRef(null);
    const curPos = useRef({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const interBubble = interactiveRef.current;
        if (!interBubble) return;

        const move = () => {
            curPos.current.x += (targetPos.current.x - curPos.current.x) / 10;
            curPos.current.y += (targetPos.current.y - curPos.current.y) / 10;

            if (interBubble) {
                interBubble.style.transform = `translate3d(${Math.round(curPos.current.x)}px, ${Math.round(curPos.current.y)}px, 0)`;
            }

            requestAnimationFrame(move);
        };

        const handleMouseMove = (event) => {
            targetPos.current.x = event.clientX;
            targetPos.current.y = event.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        move();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="gradient-bg">
            <svg>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                        result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>

            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div ref={interactiveRef} className="interactive"></div>
            </div>
        </div>
    );
};
