import { Facebook, Eye } from "lucide-react";
import logoImg from "/assets/Joe_mulligan_for_middletown_City_council_logo_1751735108116.png";

export default function Footer() {
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
  };

  return (
    <footer className="bg-campaign-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src={logoImg}
              alt="Joe Mulligan for Middletown City Council"
              className="h-20 w-auto mb-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <p className="text-white/90 text-lg">
              Experienced Leadership for Middletown!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('about')} className="block text-white/90 hover:text-campaign-yellow transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block text-white/90 hover:text-campaign-yellow transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('priorities')} className="block text-white/90 hover:text-campaign-yellow transition-colors text-left">
                Priorities
              </button>
              <button onClick={() => scrollToSection('leadership')} className="block text-white/90 hover:text-campaign-yellow transition-colors text-left">
                Leadership
              </button>
              <button 
                onClick={() => {
                  // Trigger EqualWeb accessibility tools
                  if (window.interdeal && window.interdeal.loadAccessibility) {
                    window.interdeal.loadAccessibility();
                  }
                }} 
                className="flex items-center gap-2 text-white/90 hover:text-campaign-yellow transition-colors text-left"
              >
                <Eye size={16} />
                Accessibility Tools
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-white/90">
              <p>1054 N University Blvd</p>
              <p>Middletown, OH 45042</p>
              <a href="tel:+15134224638" className="block hover:text-campaign-yellow transition-colors">(513) 422-4638</a>
              <a href="mailto:joe@joemulligan.com" className="block hover:text-campaign-yellow transition-colors">joe@joemulligan.com</a>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/VoteMulligan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-campaign-blue/50 rounded-lg flex items-center justify-center hover:bg-campaign-blue/70 transition-colors">
                <Facebook className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/90">
          <p>&copy; 2025 Joe Mulligan for Middletown City Council. All Rights Reserved.</p>
          <p className="mt-2">Paid for by Friends of Joe Mulligan</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            <a href="#" className="hover:text-campaign-yellow transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/accessibility-statement" className="hover:text-campaign-yellow transition-colors">Accessibility Statement</a>
            <span>•</span>
            <a href="#" className="hover:text-campaign-yellow transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
