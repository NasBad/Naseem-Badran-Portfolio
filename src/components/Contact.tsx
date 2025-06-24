import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0ledp7n",
        "template_pss7rku",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "JazwfsdN3yCc4wSAG"
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          className:
            "bg-gray-200 border-midnight-blue shadow-lg text-midnight-blue",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Error",
          description:
            "There was a problem sending your message. Please try again.",
          variant: "destructive",
          className:
            "bg-gray-200 border-midnight-blue shadow-lg text-midnight-blue",
        });
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-midnight-blue text-center mb-12">
          Let's Connect
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray border-midnight-blue shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-br from-electric-blue/5 to-midnight-blue/5 p-6 rounded-t-lg">
              <CardTitle className="text-2xl text-midnight-blue">
                Send me a message
              </CardTitle>
              <CardDescription className="text-charcoal/80 mt-2">
                I'd love to hear from you. Whether you have a project in mind,
                want to collaborate, or just want to say hello!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray border-soft-gray focus:border-electric-blue "
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray border-soft-gray focus:border-electric-blue"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-gray border-soft-gray focus:border-electric-blue"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
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
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white mt-20 pt-8 border-t border-soft-gray text-center">
        <p className="text-charcoal/60">
          © 2024 Naseem Badran. Built with passion
        </p>
      </div>
    </section>
  );
};

export default Contact;
