import { Button } from "@/components/ui/button";
import joeBackgroundImg from "/assets/Joe_Mulligan_PS_hero_image_right_crop_1751736695332.jpg";

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
      <div className="relative z-10 w-full pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            {/* Main Hero Content - Left Justified */}
            <div className="max-w-[600px] text-left"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow leading-tight">
              <span className="text-campaign-yellow block mb-4">Experienced Leadership</span>
              <span className="text-white">for Middletown!</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-shadow font-medium leading-relaxed max-w-[500px]">
              Small Business Owner • Attorney At Law • Community Leader • Fighter for Better Government
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-campaign-yellow text-campaign-blue hover:bg-yellow-300 text-lg font-bold px-10 py-6 hover-transform rounded-lg shadow-lg w-full sm:w-auto min-w-[200px]"
              >
                Learn About Joe
              </Button>
              <Button
                onClick={() => scrollToSection('priorities')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-campaign-blue text-lg font-bold px-10 py-6 hover-transform rounded-lg w-full sm:w-auto min-w-[200px] bg-transparent"
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
