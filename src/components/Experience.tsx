const Experience = () => {
  const experiences = [
    {
      title: "IT Instructor",
      company: "MOONA",
      period: "09/2024 - Present",
      description:
        "Teaching programming fundamentals and advanced concepts to aspiring developers, creating curriculum content and mentoring students in their coding journey.",
      skills: [
        "Teaching",
        "Curriculum Development",
        "Programming Fundamentals",
        "Mentoring",
      ],
    },
    {
      title: "Backend Developer Intern",
      company: "Circles.ai",
      period: "06/2023 - 12/2023",
      description:
        "Developing robust backend systems and APIs, working with modern technologies to build scalable solutions for AI-powered applications.",
      skills: [
        "Spring Boot",
        "Java",
        "API Development",
        "Database Design",
        "System Architecture",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-midnight-blue text-center mb-12">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric-blue/30"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-electric-blue rounded-full border-4 border-white shadow-md"></div>

                {/* Content */}
                <div className="ml-16 bg-gradient-to-br from-electric-blue/5 to-midnight-blue/5 p-6 rounded-lg w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-midnight-blue">
                      {experience.title}
                    </h3>
                    <span className="text-electric-blue font-medium">
                      {experience.period}
                    </span>
                  </div>

                  <h4 className="text-lg text-charcoal font-medium mb-3">
                    {experience.company}
                  </h4>

                  <p className="text-charcoal/80 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
