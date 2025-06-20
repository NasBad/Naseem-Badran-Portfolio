import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-midnight-blue">
            Naseem Badran
          </h1>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-charcoal hover:text-electric-blue transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-charcoal hover:text-electric-blue transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-charcoal hover:text-electric-blue transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-charcoal hover:text-electric-blue transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("languages")}
              className="text-charcoal hover:text-electric-blue transition-colors"
            >
              Languages
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-charcoal hover:text-electric-blue transition-colors"
            >
              Skills
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-electric-blue hover:bg-electric-blue/90 text-white"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
