import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleHomeClick = () => {
    navigate('/');
    // Force scroll to top immediately
    window.scrollTo(0, 0);
  };

  const handleSectionClick = (sectionId) => {
    navigate('/');
    // Scroll to top first, then to section
    window.scrollTo(0, 0);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(216,218,215, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={handleHomeClick}
            className="font-serif italic font-bold text-xl text-black flex items-center space-x-3"
          >
            <span>✮⋆˙angie</span>
          </button>

          <div 
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-gray-900 hover:text-black transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleSectionClick('about')}
              className="text-gray-900 hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick('contacts')}
              className="text-gray-900 hover:text-black transition-colors"
            >
              Contact
            </button>
            <a
              href="https://drive.google.com/file/d/1CymbbP6uWLsR5ok8FVtQJ4RRbhsjXORM/view?usp=sharing"
              className="text-gray-900 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
