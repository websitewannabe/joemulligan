
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ExternalLink } from "lucide-react";

export default function Sitemap() {
  const scrollToSection = (sectionId: string) => {
    // Navigate to home page first, then scroll to section
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-campaign-blue mb-8">Sitemap</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-campaign-blue mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-campaign-blue hover:text-campaign-yellow transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/accessibility-statement" className="text-campaign-blue hover:text-campaign-yellow transition-colors">
                    Accessibility Statement
                  </a>
                </li>
                <li>
                  <a href="/sitemap" className="text-campaign-blue hover:text-campaign-yellow transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-campaign-blue mb-4">Home Page Sections</h2>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-campaign-blue hover:text-campaign-yellow transition-colors text-left"
                  >
                    Hero Section
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-campaign-blue hover:text-campaign-yellow transition-colors text-left"
                  >
                    About Joe
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="text-campaign-blue hover:text-campaign-yellow transition-colors text-left"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('priorities')}
                    className="text-campaign-blue hover:text-campaign-yellow transition-colors text-left"
                  >
                    Priorities
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('leadership')}
                    className="text-campaign-blue hover:text-campaign-yellow transition-colors text-left"
                  >
                    Leadership
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('get-involved')}
                    className="text-campaign-blue hover:text-campaign-yellow transition-colors text-left"
                  >
                    Get Involved
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-campaign-blue mb-4">Contact Information</h2>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+15134224638" className="text-campaign-blue hover:text-campaign-yellow transition-colors">
                    Phone: (513) 422-4638
                  </a>
                </li>
                <li>
                  <a href="mailto:joe@joemulligan.com" className="text-campaign-blue hover:text-campaign-yellow transition-colors">
                    Email: joe@joemulligan.com
                  </a>
                </li>
                <li className="text-gray-700">
                  Address: 1054 N University Blvd, Middletown, OH 45042
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-campaign-blue mb-4">Social Media</h2>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.facebook.com/VoteMulligan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-campaign-blue hover:text-campaign-yellow transition-colors flex items-center gap-2"
                  >
                    Facebook
                    <ExternalLink size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-campaign-light rounded-lg">
            <h2 className="text-2xl font-bold text-campaign-blue mb-4">Campaign Information</h2>
            <p className="text-gray-700 mb-4">
              This website is the official campaign site for Joe Mulligan's candidacy for Middletown City Council.
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• Paid for by Friends of Joe Mulligan</li>
              <li>• All content © 2025 Joe Mulligan for Middletown City Council</li>
              <li>• Website designed for accessibility and usability</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
