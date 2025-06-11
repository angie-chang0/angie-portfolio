import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get current section based on scroll position
      const bookSection = document.getElementById('book');
      const homeSection = document.getElementById('home');
      const projectsSection = document.getElementById('projects');
      
      if (bookSection && homeSection && projectsSection) {
        const bookTop = bookSection.offsetTop;
        const homeTop = homeSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        
        // Determine text color based on current section background
        // Book section has light abstract cement background - use black text
        // Home section and others might have darker backgrounds - use white text
        if (scrollY >= bookTop - 100 && scrollY < homeTop - 100) {
          setIsLight(false); // Black text for light cement background
        } else if (scrollY >= homeTop - 100 && scrollY < projectsTop - 100) {
          setIsLight(true); // White text for dark home background
        } else if (scrollY >= projectsTop - 100) {
          setIsLight(false); // Black text for light project backgrounds
        } else {
          setIsLight(false); // Default to black text
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    navigate('/angie-portfolio/');
    setTimeout(() => {
      const bookSection = document.getElementById('book');
      if (bookSection) {
        bookSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  };

  const handleSectionClick = (sectionId) => {
    navigate('/angie-portfolio/');
    window.scrollTo(0, 0);
    setTimeout(() => {
      const element = document.getElementById(sectionId === 'projects' ? 'projrevamp' : sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const textColorClass = isLight ? 'text-white' : 'text-black';
  const hoverColorClass = isLight ? 'hover:text-gray-300' : 'hover:text-gray-700';

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-40"
      style={{
        background: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid black',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-8">
          
          {/* Home - Far Left */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleHomeClick}
              className={`font-serif italic ${textColorClass} ${hoverColorClass} transition-colors`}
              style={{ fontSize: '12px' }}
            >
              home
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div 
            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${textColorClass}`}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: '12px' }}
          >
            &#9776;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            
            {/* Middle Section - Work, Resume, About */}
            <div className="flex items-center space-x-8 mx-auto">
              <button
                onClick={() => handleSectionClick('projects')}
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
                style={{ fontSize: '12px' }}
              >
                Work
              </button>
              <a
                href="https://drive.google.com/file/d/1CymbbP6uWLsR5ok8FVtQJ4RRbhsjXORM/view?usp=sharing"
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '12px' }}
              >
                Resume
              </a>
              <button
                onClick={() => handleSectionClick('about')}
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
                style={{ fontSize: '12px' }}
              >
                About
              </button>
            </div>
            
            {/* Right Section - Contact */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleSectionClick('contacts')}
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
                style={{ fontSize: '12px' }}
              >
                Contact
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
