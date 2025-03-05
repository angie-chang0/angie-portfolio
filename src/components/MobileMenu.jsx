import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return ( 
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out
                         ${menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto scale-y-100" 
                            : "h-0 opacity-0 pointer-events-none scale-y-0"
                          }
                        `}
        >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
                &times;
            </button>

            <nav className="flex flex-col space-y-6 text-white text-2xl">
                <a href="#home"
                 onClick={() => setMenuOpen(false)}
                 className="hover:text-gray-300">Home
                 </a>
                       
                <a href="#about" 
                   onClick={() => setMenuOpen(false)}
                   className="hover:text-gray-300">About
                 </a>

                <a href="#projects" 
                   onClick={() => setMenuOpen(false)}
                   className="hover:text-gray-300">Projects
                 </a>

                <a href="#contacts" 
                   onClick={() => setMenuOpen(false)}
                   className="hover:text-gray-300">Contacts
                </a>
            </nav>
        </div>
    );
};
