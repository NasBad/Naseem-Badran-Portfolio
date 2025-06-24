
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-midnight-blue mb-6">
          Get in touch
        </h3>
        <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
          I'm always open to discussing new opportunities, interesting
          projects, or just having a chat about technology and
          development. Feel free to reach out!
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="mailto:nbadran68@gmail.com"
          className="flex items-center space-x-4 p-4 bg-gradient-to-r from-electric-blue/5 to-midnight-blue/5 rounded-lg hover:from-electric-blue/10 hover:to-midnight-blue/10 transition-all"
        >
          <div className="p-3 bg-electric-blue/10 rounded-full">
            <Mail size={24} className="text-electric-blue" />
          </div>
          <div>
            <h4 className="font-semibold text-midnight-blue">Email</h4>
            <p className="text-charcoal/80">nbadran68@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/naseem-badran-90317a18b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 p-4 bg-gradient-to-r from-electric-blue/5 to-midnight-blue/5 rounded-lg hover:from-electric-blue/10 hover:to-midnight-blue/10 transition-all"
        >
          <div className="p-3 bg-electric-blue/10 rounded-full">
            <Linkedin size={24} className="text-electric-blue" />
          </div>
          <div>
            <h4 className="font-semibold text-midnight-blue">LinkedIn</h4>
            <p className="text-charcoal/80">
              Connect with me professionally
            </p>
          </div>
        </a>

        <a
          href="https://github.com/NasBad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 p-4 bg-gradient-to-r from-electric-blue/5 to-midnight-blue/5 rounded-lg hover:from-electric-blue/10 hover:to-midnight-blue/10 transition-all"
        >
          <div className="p-3 bg-electric-blue/10 rounded-full">
            <Github size={24} className="text-electric-blue" />
          </div>
          <div>
            <h4 className="font-semibold text-midnight-blue">GitHub</h4>
            <p className="text-charcoal/80">
              Check out my code and projects
            </p>
          </div>
        </a>
      </div>

      <div className="pt-8">
        <Button
          asChild
          className="w-full bg-midnight-blue hover:bg-midnight-blue/90 text-white"
          size="lg"
        >
          <a
            href="../public/Naseem_Badran_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
