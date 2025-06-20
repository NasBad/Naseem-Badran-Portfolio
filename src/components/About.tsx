const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-midnight-blue text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-charcoal leading-relaxed">
                I'm a dedicated Computer Science student at the Open University
                of Israel, with a passion for backend development and software
                architecture. My journey in tech has been enriched by hands-on
                experience as a Backend Developer Intern at Circles.ai and as an
                IT Instructor at MOONA.
              </p>

              <p className="text-lg text-charcoal leading-relaxed">
                My expertise spans across multiple programming languages and
                frameworks, with a particular focus on Java, Spring Boot, and
                database management. I believe in the power of clean, efficient
                code and enjoy tackling complex problems that challenge my
                technical abilities.
              </p>

              <p className="text-lg text-charcoal leading-relaxed">
                Beyond coding, I'm passionate about education and knowledge
                sharing. As an instructor, I've had the privilege of guiding
                aspiring developers and witnessing their growth, which
                continually motivates me to stay at the forefront of technology
                trends.
              </p>
            </div>

            <div className="bg-gradient-to-br from-electric-blue/10 to-midnight-blue/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-midnight-blue mb-6">
                Quick Facts
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-charcoal">
                    📍 Based in Sheikh Danun, Israel
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-charcoal">
                    🎓 B.Sc. Computer Science Student
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-charcoal">
                    💼 Full-Stack Developer & Instructor
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-charcoal">
                    🌍 Fluent in Arabic, English, Hebrew
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
