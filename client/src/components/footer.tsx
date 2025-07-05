import { Facebook, Twitter, Linkedin } from "lucide-react";

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
            <div className="text-campaign-yellow mb-4">
              <div className="text-2xl font-bold">Joe Mulligan</div>
              <div className="text-sm font-semibold">for Middletown City Council</div>
            </div>
            <p className="text-white/90">
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
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-white/90">
              <p>1054 N University Blvd</p>
              <p>Middletown, OH 45042</p>
              <p>(513) 422-4638</p>
              <p>joe@joemulligan.com</p>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/VoteMulligan" className="w-10 h-10 bg-campaign-blue/50 rounded-lg flex items-center justify-center hover:bg-campaign-blue/70 transition-colors">
                <Facebook className="text-white" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-campaign-blue/50 rounded-lg flex items-center justify-center hover:bg-campaign-blue/70 transition-colors">
                <Twitter className="text-white" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-campaign-blue/50 rounded-lg flex items-center justify-center hover:bg-campaign-blue/70 transition-colors">
                <Linkedin className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/90">
          <p>&copy; 2024 Joe Mulligan for Middletown City Council. All Rights Reserved.</p>
          <p className="mt-2">Paid for by Friends of Joe Mulligan</p>
        </div>
      </div>
    </footer>
  );
}
