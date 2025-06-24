
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bank Backend System",
      description:
        "A comprehensive banking backend system built with Spring Boot and MySQL, featuring secure transaction processing, account management, and REST API endpoints.",
      technologies: ["Spring Boot", "MySQL", "Java", "REST API", "Security"],
      githubLink: "#",
      featured: true,
    },
    {
      title: "Assembly Compiler",
      description:
        "A custom compiler for assembly language developed in C on Linux, capable of parsing, analyzing, and generating machine code from assembly instructions.",
      technologies: [
        "C",
        "Linux",
        "Assembly",
        "Compilers",
        "System Programming",
      ],
      githubLink: "#",
      featured: true,
    },
    {
      title: "Disaster Relief Drone",
      description:
        "Arduino-based autonomous drone system designed for disaster relief operations, featuring GPS navigation, sensor integration, and emergency supply delivery capabilities.",
      technologies: ["Arduino", "C++", "GPS", "Sensor Integration", "IoT"],
      githubLink: "#",
      featured: false,
    },
    {
      title: "Environmental AI Solution",
      description:
        "AI-powered application developed during ECOHACK hackathon, focusing on environmental monitoring and sustainable solutions using machine learning algorithms.",
      technologies: ["Python", "AI/ML", "Data Analysis", "Environmental Tech"],
      githubLink: "#",
      featured: false,
    },
    {
      title: "Car Help Android App",
      description:
        "Android mobile application providing roadside assistance and car maintenance tracking, built with modern Android development practices and intuitive UI/UX design.",
      technologies: ["Android Studio", "Java", "Mobile Development", "UI/UX"],
      githubLink: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-white border-gray-900 group hover:shadow-xl transition-all duration-300 border-2 hover:border-gray-600"
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 group-hover:text-black transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-700">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gray-100 text-black"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="bg-white border-black text-black hover:bg-black hover:text-white"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
