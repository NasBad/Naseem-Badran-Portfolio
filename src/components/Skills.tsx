const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "Assembly", level: 70 },
      ],
    },
    {
      category: "Frameworks & Technologies",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "React", level: 75 },
        { name: "Arduino", level: 75 },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "SQL", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "Linux", level: 80 },
        { name: "Git", level: 85 },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "Arabic", level: 100 },
        { name: "English", level: 95 },
        { name: "Hebrew", level: 95 },
        { name: "German", level: 80 },
        { name: "Italian", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-snow-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-midnight-blue text-center mb-12">
          Skills & Expertise
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-midnight-blue mb-6">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal font-medium">
                        {skill.name}
                      </span>
                      <span className="text-electric-blue text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-soft-gray/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-electric-blue to-midnight-blue h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-electric-blue/10 to-midnight-blue/10 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-midnight-blue mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Problem Solving",
                "Team Leadership",
                "Fast Learner",
                "Teaching",
                "Communication",
                "Project Management",
                "Critical Thinking",
                "Adaptability",
                "Self-Learning",
                "Mentoring",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-midnight-blue rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
