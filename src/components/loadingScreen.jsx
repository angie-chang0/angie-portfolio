import { useState, useEffect } from "react"; // Added useEffect

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<hello world...:)/>";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: '#e2e1df' }}>
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"> | </span>
            </div>

        </div>
    );
};
