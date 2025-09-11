import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top first for any navigation
    window.scrollTo(0, 0);
    
    // Then handle section-specific scrolling after a delay
    setTimeout(() => {
      switch (pathname) {
        case '/home':
        case '/':
          // Already at top, no additional action needed
          break;
        case '/projects':
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case '/about':
          const aboutMeSection = document.getElementById('about-me');
          if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case '/contact':
          const contactSection = document.getElementById('contacts');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        default:
          // For project pages and any other routes, just stay at top
          break;
      }
    }, 100);
  }, [pathname]);

  return null;
}; 