import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GradientBackground } from "../ReactiveBackground";

export const Home = () => {
    const [catImage, setCatImage] = useState("/angie-portfolio/rcat.gif"); // Initialize state

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">
            <GradientBackground />

            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6">
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-5xl md:text-4xl mb-6 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent leading-tight">
                            
                        </h1>

                        <p className="text-black  md:text-2xl mb-8 max-w-lg">
                            <span className="bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent leading-tight">Angie Chang </span>
                            is passionate about <span className="font-bold font-serif italic">Code, Design,</span> and <span className="font-bold font-serif italic">Art</span> and putting them all together. 
                            She is currently studying Computer Science and Art at <span className="font-bold font-serif italic">Carnegie Mellon University</span> ᯓ★
                        </p>
                    </div>


                    <div className="flex-1 flex justify-end">
                        <img 
                            src={`${import.meta.env.BASE_URL}rcat.gif`}
                             alt="Angie's Cat"
                            className="w-112 h-92 transition-all duration-300"
                            onMouseEnter={() => setCatImage(/angie-portfolio/rcatb.gif`)} 
                            onMouseLeave={() => setCatImage(/angie-portfolio/rcat.gif`)}
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
