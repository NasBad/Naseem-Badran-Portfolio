const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "Open University of Israel",
      period: "2022 - Present",
      description:
        "Pursuing a comprehensive computer science education with focus on software engineering, algorithms, and system design.",
      status: "In Progress",
      type: "degree",
    },
    {
      degree: "Java Development Course",
      institution: "MindoLife",
      period: "2024",
      description:
        "Intensive Java development program focusing on Spring Boot framework and SQL database management.",
      status: "Completed",
      type: "certification",
    },
  ];

  return (
    <section id="education" className="py-20 bg-snow-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-midnight-blue text-center mb-12">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric-blue/30"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-electric-blue rounded-full border-4 border-white shadow-md"></div>

                {/* Content */}
                <div className="ml-16 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-midnight-blue">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-electric-blue font-medium">
                        {edu.period}
                      </span>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          edu.status === "In Progress"
                            ? "bg-electric-blue/10 text-electric-blue"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg text-charcoal font-medium mb-3">
                    {edu.institution}
                  </h4>

                  <p className="text-charcoal/80 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="mt-4">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        edu.type === "degree"
                          ? "bg-midnight-blue/10 text-midnight-blue"
                          : "bg-electric-blue/10 text-electric-blue"
                      }`}
                    >
                      {edu.type === "degree"
                        ? "Academic Degree"
                        : "Professional Course"}
                    </span>
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

export default Education;
