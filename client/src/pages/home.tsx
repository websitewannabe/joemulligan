import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Priorities from "@/components/priorities";
import Leadership from "@/components/leadership";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Priorities />
      <Leadership />
      <ContactForm />
      <Footer />
    </div>
  );
}
