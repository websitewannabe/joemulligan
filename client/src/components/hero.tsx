import { Button } from "@/components/ui/button";
import joeProfileImg from "@assets/imgi_5_4-2new_1751732730503.png";

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
    <section className="hero-gradient pt-20 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Joe Mulligan for{" "}
              <span className="text-campaign-yellow">Middletown City Council</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              Experienced Leadership for Middletown!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-campaign-yellow text-campaign-blue hover:bg-yellow-300 text-lg px-8 py-6 hover-transform"
              >
                Get Involved
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-campaign-blue text-lg px-8 py-6 hover-transform"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={joeProfileImg}
              alt="Joe Mulligan Professional Photo"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-campaign-blue/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
