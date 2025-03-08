
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  sections: { id: string; title: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            <span className="text-[#7851A9]">HA</span>
          </div>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                    activeSection === section.id ? 'text-[#7851A9]' : 'text-white hover:text-[#7851A9]'
                  }`}
                >
                  {section.title}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7851A9] rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 py-4 px-2 rounded-lg">
            <ul className="space-y-4">
              {sections.map(section => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                      activeSection === section.id ? 'bg-[#7851A9]/20 text-[#7851A9]' : 'text-white hover:bg-[#7851A9]/10 hover:text-[#7851A9]'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
