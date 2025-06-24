
import { useState, useEffect } from "react";

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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            NB
          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("languages")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Languages
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
