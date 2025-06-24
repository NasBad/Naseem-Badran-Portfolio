
const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated Computer Science student at the Open University
                of Israel, with a passion for backend development and software
                architecture. My journey in tech has been enriched by hands-on
                experience as a Backend Developer Intern at Circles.ai and as an
                IT Instructor at MOONA.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across multiple programming languages and
                frameworks, with a particular focus on Java, Spring Boot, and
                database management. I believe in the power of clean, efficient
                code and enjoy tackling complex problems that challenge my
                technical abilities.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond coding, I'm passionate about education and knowledge
                sharing. As an instructor, I've had the privilege of guiding
                aspiring developers and witnessing their growth, which
                continually motivates me to stay at the forefront of technology
                trends.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Quick Facts
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">
                    📍 Based in Sheikh Danun, Israel
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">
                    🎓 B.Sc. Computer Science Student
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">
                    💼 Full-Stack Developer & Instructor
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">
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
