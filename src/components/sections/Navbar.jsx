import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, setShowProject }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(216,218,215, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            onClick={() => setShowProject(null)}
            className="font-serif italic font-bold text-xl text-black flex items-center space-x-3"
          >
            <span>✮⋆˙angie</span>
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={() => setShowProject(null)}
              className="text-gray-900 hover:text-black transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setShowProject(null)}
              className="text-gray-900 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#contacts"
              onClick={() => setShowProject(null)}
              className="text-gray-900 hover:text-black transition-colors"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1CymbbP6uWLsR5ok8FVtQJ4RRbhsjXORM/view?usp=sharing"
              className="text-gray-900 hover:text-black transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
