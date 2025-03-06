import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/loadingScreen';
import "./index.css";
import { Navbar } from './components/sections/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/skills';
import { Projects } from './components/sections/Projects';
import { Project1 } from './components/sections/project1'; // projOne component
import { Contact } from './components/sections/contacts';
import { New } from './components/sections/new.jsx';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showProject, setShowProject] = useState(false); // Controls visibility of projOne

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "} 
            <div 
                className={`min-h-screen transition-opacity duration-700 ${
                  isLoaded ? "opacity-100" : "opacity-0"} 
                  bg-black text-gray-100`}
            >
                {!showProject ? (
                    <>
                        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        <Home />
                        <Projects setShowProject={setShowProject} />
                        <About />
                        <New />
                        <Contact />
                    </>
                ) : (
                    <Project1 setShowProject={setShowProject} />
                )}
            </div>
        </>
    );
}

export default App;
