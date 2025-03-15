import { useState, useEffect } from 'react';
import './App.css';
import { LoadingScreen } from './components/loadingScreen';
import "./index.css";
import { Navbar } from './components/sections/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/skills';
import { Projects } from './components/sections/projects.jsx';
import { Project1 } from './components/sections/project1';
import { Project2 } from './components/sections/project2';
import { Project3 } from './components/sections/project3';
import { Contact } from './components/sections/contacts';
import { New } from './components/sections/new.jsx';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // Scroll to top when a project is selected
  useEffect(() => {
    if (currentProject) {
      window.scrollTo(0, 0);
    }
  }, [currentProject]);

  const renderProject = () => {
    switch (currentProject) {
      case "project1":
        return (
          <>
            <Navbar 
              menuOpen={menuOpen} 
              setMenuOpen={setMenuOpen} 
              setShowProject={setCurrentProject} 
            />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Project1 setShowProject={setCurrentProject} />
          </>
        );
      case "project2":
        return (
          <>
            <Navbar 
              menuOpen={menuOpen} 
              setMenuOpen={setMenuOpen} 
              setShowProject={setCurrentProject} 
            />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Project2 setShowProject={setCurrentProject} />
          </>
        );
      case "project3":
        return (
          <>
            <Navbar 
              menuOpen={menuOpen} 
              setMenuOpen={setMenuOpen} 
              setShowProject={setCurrentProject} 
            />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Project3 setShowProject={setCurrentProject} />
          </>
        );
      default:
        return (
          <>
            <Navbar 
              menuOpen={menuOpen} 
              setMenuOpen={setMenuOpen} 
              setShowProject={setCurrentProject} 
            />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <Projects setShowProject={setCurrentProject} />
            <About />
            <New />
            <Contact />
          </>
        );
    }
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        {renderProject()}
      </div>
    </>
  );
}

export default App;
