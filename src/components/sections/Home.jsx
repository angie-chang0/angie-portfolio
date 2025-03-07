import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GradientBackground } from "../ReactiveBackground";

export const Home = () => {
    const [catImage, setCatImage] = useState("/angie-portfolio/rcat.gif"); // Initialize state

    return (
        <section 
            id="home" 
            className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-x-hidden"
        >
            {/* Animated Gradient Background */}
            <GradientBackground />

            {/* Foreground Content */}
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
                    
                    {/* Text Content */}
                    <div className="text-center md:text-left flex-1 relative">
                        {/* Header Text & Bar */}
                        <div className="relative w-full flex flex-col items-center md:items-start">
                            <p className="text-black text-sm sm:text-md">
                            <span className="font-semibold">Currently →</span>looking for work!
                            </p>
                            <div className="w-3/4 md:w-full h-0.5 bg-black mt-1"></div> {/* Bar under text */}
                            {/* <p className="text-blue-700 text-sm mt-1 md:absolute md:-top-5 md:left-[170px]">
                                Pittsburgh, PA
                            </p> */}
                        </div>
                        
                        {/* Description */}
                        <p className="text-black text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-lg mx-auto md:mx-0 pt-6">
                            <span className="bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent leading-tight">Angie Chang </span>
                            is passionate about <span className="font-bold font-serif italic">Code, Design,</span> and <span className="font-bold font-serif italic">Art</span> and putting them all together. 
                            She is currently studying Computer Science and Art at <span className="font-bold font-serif italic">Carnegie Mellon University</span> ᯓ★
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
                        <img 
                            src={catImage} 
                            alt="Angie's Cat" 
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-112 md:h-92 object-contain transition-all duration-300"
                            onMouseEnter={() => setCatImage("/angie-portfolio/rcatb.gif")} // Change image on hover
                            onMouseLeave={() => setCatImage("/angie-portfolio/rcat.gif")} // Revert back
                        />
                    </div>
                </div>

                {/* Downward Indicator */}
                <div className="mt-10 sm:mt-14 w-full text-center">
                    <h1 className="text-xl sm:text-2xl text-blue-900">
                        ↓↓↓
                    </h1>
                </div>
            </RevealOnScroll>
        </section>
    );
};
