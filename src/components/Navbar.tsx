
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  sections: { id: string; title: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const current = sections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            visible: rect.top <= 200 && rect.bottom >= 200
          };
        }
        return { id: section.id, visible: false };
      }).find(section => section.visible);
      
      if (current) {
        setActiveSection(current.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-dark-purple/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            <span className="text-portfolio-light-purple">HA</span>
          </div>
          
          <ul className="hidden md:flex space-x-8">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-2 py-1 text-sm transition-colors duration-300 ${
                    activeSection === section.id ? 'text-portfolio-light-purple' : 'text-white hover:text-portfolio-light-purple'
                  }`}
                >
                  {section.title}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-light-purple rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="md:hidden">
            {/* Mobile menu button - can be expanded if needed */}
            <button className="text-white focus:outline-none">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
