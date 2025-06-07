import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        setMenuOpen(false);
        navigate('/');
        window.scrollTo(0, 0);
    };

    const handleSectionClick = (sectionId) => {
        setMenuOpen(false);
        navigate('/');
        window.scrollTo(0, 0);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return ( 
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex justify-center items-center
                         transition-all duration-300 ease-in-out
                         ${menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto scale-y-100" 
                            : "h-0 opacity-0 pointer-events-none scale-y-0"
                          }
                        `}
        >
            <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
                <button 
                    onClick={() => setMenuOpen(false)} 
                    className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
                    &times;
                </button>

                <nav className="flex flex-col space-y-6 text-white text-2xl">
                    <button
                        onClick={handleHomeClick}
                        className="hover:text-gray-300 text-left"
                    >
                        Home
                    </button>
                        
                    <button 
                        onClick={() => handleSectionClick('about')}
                        className="hover:text-gray-300 text-left"
                    >
                        About
                    </button>

                    <button 
                        onClick={() => handleSectionClick('projects')}
                        className="hover:text-gray-300 text-left"
                    >
                        Projects
                    </button>

                    <button 
                        onClick={() => handleSectionClick('contacts')}
                        className="hover:text-gray-300 text-left"
                    >
                        Contact
                    </button>

                    <a
                        href="https://drive.google.com/file/d/1CymbbP6uWLsR5ok8FVtQJ4RRbhsjXORM/view?usp=sharing"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-300 text-left"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </div>
    );
};
