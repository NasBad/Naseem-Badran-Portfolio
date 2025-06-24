
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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactForm = () => {
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
  );
};

export default ContactForm;
