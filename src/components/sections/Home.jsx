import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GradientBackground } from "../ReactiveBackground";

export const Home = () => {
    const [catImage, setCatImage] = useState("/angie-portfolio/rcat.gif"); // Initialize state

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">
            {/* Animated Gradient Background */}
            <GradientBackground />

            {/* Foreground Content */}
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6">
                    {/* Text Content */}
                    <div className="text-center md:text-left flex-1 relative">
                        {/* Black Bar with Text */}
                        <div className="absolute -top-4 left-0 w-full h-0.5 bg-black"></div>
                        <p className="absolute -top-10 left-0 text-black text-md "> 
                             <span className=" font-semibold">Currently</span> ⟶ looking for work!
                             <span className="absolute -right-65 bg-gradient-to-r from-blue-600 to-gray-500 bg-clip-text text-transparent leading-tight ">♡ Pittsburgh, PA</span> 
                        </p>
                        
                        <p className="text-black md:text-2xl mb-8 max-w-lg pt-6">
                            <span className="bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent leading-tight">Angie Chang </span>
                            is passionate about <span className="font-bold font-serif italic">Code, Design,</span> and <span className="font-bold font-serif italic">Art</span> and putting them all together. 
                            She is currently studying Computer Science and Art at <span className="font-bold font-serif italic">Carnegie Mellon University</span> ᯓ★
                        </p>
                    </div>

                    {/* Image on the right */}
                    <div className="flex-1 flex justify-end">
                        <img 
                            src={catImage} 
                            alt="Angie's Cat" 
                            className="w-112 h-92 transition-all duration-300"
                            onMouseEnter={() => setCatImage("/angie-portfolio/rcatb.gif")} // Change image on hover
                            onMouseLeave={() => setCatImage("/angie-portfolio/rcat.gif")} // Revert back
                        />
                    </div>
                </div>
        <div className="mt-50 w-full text-center">
          <h1 className="text-2xl text-blue-900">
          ↓↓↓
          </h1>
        </div>
            </RevealOnScroll>
        </section>
    );
};
