import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "/assets/Joe_mulligan_for_middletown_City_council_logo_1751735108116.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-campaign-blue shadow-xl' : 'bg-campaign-blue/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoImg}
              alt="Joe Mulligan for Middletown City Council"
              className="h-16 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-campaign-yellow px-3 py-2 text-sm font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-campaign-yellow px-3 py-2 text-sm font-medium transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('priorities')} className="text-white hover:text-campaign-yellow px-3 py-2 text-sm font-medium transition-colors">
                Priorities
              </button>
              <button onClick={() => scrollToSection('leadership')} className="text-white hover:text-campaign-yellow px-3 py-2 text-sm font-medium transition-colors">
                Leadership
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-campaign-yellow px-3 py-2 text-sm font-medium transition-colors">
                Get Involved
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-campaign-yellow text-campaign-blue hover:bg-yellow-300">
                Contact
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-campaign-yellow text-campaign-blue hover:bg-yellow-300 hover:text-campaign-blue"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-campaign-blue">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-campaign-yellow block px-3 py-2 text-base font-medium w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-white hover:text-campaign-yellow block px-3 py-2 text-base font-medium w-full text-left">
              Experience
            </button>
            <button onClick={() => scrollToSection('priorities')} className="text-white hover:text-campaign-yellow block px-3 py-2 text-base font-medium w-full text-left">
              Priorities
            </button>
            <button onClick={() => scrollToSection('leadership')} className="text-white hover:text-campaign-yellow block px-3 py-2 text-base font-medium w-full text-left">
              Leadership
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-campaign-yellow block px-3 py-2 text-base font-medium w-full text-left">
              Get Involved
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
