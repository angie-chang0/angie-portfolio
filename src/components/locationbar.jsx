import { useState, useEffect } from "react";

const TimeLocationBar = () => {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        }, 1000);

        return () => clearInterval(interval); // ✅ Cleanup function
    }, []);

    return (
        <div className="w-full bg-gradient-to-r from-blue-700 to-gray-300 py-2 text-center">
            <span className="text-lg font-semibold text-black">
                Based in Pittsburgh → <span className="font-bold">{time}</span>
            </span>
            <hr className="border-t border-black mt-1 w-4/5 mx-auto"/>
        </div>
    );
};

export default TimeLocationBar; // ✅ Ensure default export
