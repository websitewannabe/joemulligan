import { Button } from "@/components/ui/button";
import joeBackgroundImg from "@assets/imgi_14_DSC06398-2048x1365_1751732730505.jpg";

export default function Hero() {
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
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${joeBackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-campaign-blue/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="text-white">
          {/* Floating Contribute Button - positioned like in reference */}
          <div className="flex justify-end mb-8">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-campaign-blue hover:bg-gray-100 font-bold px-8 py-3 rounded-lg shadow-lg"
            >
              GET INVOLVED
            </Button>
          </div>
          
          {/* Main Hero Content */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow leading-tight">
              <span className="text-campaign-yellow block mb-4">Experienced Leadership</span>
              <span className="text-white">for Middletown!</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-shadow font-medium leading-relaxed">
              Small Business Owner • Attorney At Law • Community Leader • Fighter for Better Government
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-campaign-yellow text-campaign-blue hover:bg-yellow-300 text-lg font-bold px-10 py-6 hover-transform rounded-lg shadow-lg"
              >
                Learn About Joe
              </Button>
              <Button
                onClick={() => scrollToSection('priorities')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-campaign-blue text-lg font-bold px-10 py-6 hover-transform rounded-lg"
              >
                See His Priorities
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent with campaign tagline */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-campaign-blue/90 to-transparent p-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-campaign-yellow text-lg md:text-xl font-semibold">
            "Ready to win the fight for Middletown's future"
          </p>
        </div>
      </div>
    </section>
  );
}
