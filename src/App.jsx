import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { LoadingScreen } from './components/loadingScreen';
import { ScrollToTop } from './components/ScrollToTop';
import "./index.css";
import { Navbar } from './components/sections/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Book } from './components/sections/Book';
import { Projects } from './components/sections/projects.jsx';
import { Project1 } from './components/sections/project1';
import { Project2 } from './components/sections/project2';
import { Project3 } from './components/sections/project3';
import { Project4 } from './components/sections/project4';
import { Project6 } from './components/sections/project6';
import { Project7 } from './components/sections/project7';
import { Project5 } from './components/sections/project5';
import { Project8 } from './components/sections/project8';
import { Project9 } from './components/sections/project9';
import { Project10 } from './components/sections/project10';
import { Contact } from './components/sections/contacts';
import { New } from './components/sections/new.jsx';
import { ProjRevamp } from './components/sections/projrevamp';
import { Abrev } from './components/sections/abrev';

// Layout component for the main page
const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (isMobile) {
    return (
      <>
        <section id="home">
          <New />
        </section>
        <Projects />
        <Contact />
      </>
    );
  }
  return (
    <>
      <Book />
      <ProjRevamp />
      {/* <Abrev /> */}
      {/* <Projects /> */}
      {/* <About /> */}
      <New />
      <Contact />
    </>
  );
};

// Layout component for project pages
const ProjectLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <ScrollToTop />
        <Navbar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Routes>
          {/* Main page route */}
          <Route path="/" element={<MainLayout />} />
          
          {/* Project routes */}
          <Route path="/project1" element={
            <ProjectLayout>
              <Project1 />
            </ProjectLayout>
          } />
          <Route path="/project2" element={
            <ProjectLayout>
              <Project2 />
            </ProjectLayout>
          } />
          <Route path="/project3" element={
            <ProjectLayout>
              <Project3 />
            </ProjectLayout>
          } />
          <Route path="/project4" element={
            <ProjectLayout>
              <Project4 />
            </ProjectLayout>
          } />
          <Route path="/project5" element={
            <ProjectLayout>
              <Project5 />
            </ProjectLayout>
          } />
          <Route path="/project6" element={
            <ProjectLayout>
              <Project6 />
            </ProjectLayout>
          } />
          <Route path="/project7" element={
            <ProjectLayout>
              <Project7 />
            </ProjectLayout>
          } />
          <Route path="/project8" element={
            <ProjectLayout>
              <Project8 />
            </ProjectLayout>
          } />
          <Route path="/project9" element={
            <ProjectLayout>
              <Project9 />
            </ProjectLayout>
          } />
          <Route path="/project10" element={
            <ProjectLayout>
              <Project10 />
            </ProjectLayout>
          } />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;