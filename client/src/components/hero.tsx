import { Button } from "@/components/ui/button";
import joeProfileImg from "@assets/imgi_14_DSC06398-2048x1365_1751732730505.jpg";

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
    <section className="hero-gradient pt-20 pb-16 md:pb-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
              <span className="text-campaign-yellow">Joe Mulligan</span>
              <br />
              <span className="text-3xl md:text-4xl">for Middletown City Council</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-shadow font-medium">
              Experienced Leadership for Middletown!
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
              Small Business Owner • Attorney At Law • Community Leader • Fighter for Better Government
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-campaign-yellow text-campaign-blue hover:bg-yellow-300 text-xl font-bold px-12 py-8 hover-transform rounded-lg"
              >
                Get Involved
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="border-3 border-campaign-yellow text-campaign-yellow hover:bg-campaign-yellow hover:text-campaign-blue text-xl font-bold px-12 py-8 hover-transform rounded-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="relative">
              <img
                src={joeProfileImg}
                alt="Joe Mulligan Professional Photo"
                className="w-full max-w-lg mx-auto rounded-full shadow-2xl border-8 border-campaign-yellow"
              />
              <div className="absolute -bottom-8 -right-8 bg-campaign-yellow p-6 rounded-lg shadow-lg transform rotate-3">
                <div className="text-campaign-blue font-bold text-center">
                  <div className="text-3xl">2025</div>
                  <div className="text-lg">VOTE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
