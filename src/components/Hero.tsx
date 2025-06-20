import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-snow-white to-soft-gray/20 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="w-48 h-48 bg-gradient-to-br from-electric-blue to-midnight-blue rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-6xl font-bold text-white">NB</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-midnight-blue mb-6 leading-tight">
            Naseem Badran
          </h1>

          <p className="text-xl md:text-2xl text-charcoal mb-4 max-w-3xl mx-auto">
            Computer Science Student | Full-Stack Developer | Instructor
          </p>

          <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Passionate about building robust backend systems and teaching the
            next generation of developers. Currently pursuing my B.Sc. in
            Computer Science while gaining hands-on experience in the tech
            industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg"
            >
              View My Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="bg-gray border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white px-8 py-3 text-lg"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/NasBad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            >
              <Github size={24} className="text-midnight-blue" />
            </a>
            <a
              href="https://www.linkedin.com/in/naseem-badran-90317a18b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            >
              <Linkedin size={24} className="text-midnight-blue" />
            </a>
            <a
              href="mailto:nbadran68@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            >
              <Mail size={24} className="text-midnight-blue" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
