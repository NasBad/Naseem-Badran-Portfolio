
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Naseem
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Badran
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Computer Science Student & Full-Stack Developer passionate about building robust backend systems and teaching the next generation of developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg rounded-full"
              >
                Get In Touch
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-4 text-lg rounded-full"
              >
                <a
                  href="../public/Naseem_Badran_CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/NasBad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-gray-300 hover:border-black transition-all hover:scale-110"
              >
                <Github size={24} className="text-gray-700 hover:text-black" />
              </a>
              <a
                href="https://www.linkedin.com/in/naseem-badran-90317a18b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-gray-300 hover:border-black transition-all hover:scale-110"
              >
                <Linkedin size={24} className="text-gray-700 hover:text-black" />
              </a>
              <a
                href="mailto:nbadran68@gmail.com"
                className="p-4 rounded-full border border-gray-300 hover:border-black transition-all hover:scale-110"
              >
                <Mail size={24} className="text-gray-700 hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
