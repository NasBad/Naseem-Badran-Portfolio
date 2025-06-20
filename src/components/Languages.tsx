const Languages = () => {
  const languages = [
    {
      language: "German",
      level: "C1 Level",
      duration: "10/2019 – 10/2021",
      location: "Heidelberg, Germany",
      school: "Alpha Active Sprachschule",
      description:
        "Achieved C1 proficiency through intensive language immersion. Lived independently for 2 years, adapting to a new country and culture.",
      flag: "🇩🇪",
    },
    {
      language: "Italian",
      level: "B2 Level",
      duration: "09/2018 – 07/2019",
      location: "Haifa, Israel",
      school: "Istituto Italiano di Cultura – Haifa",
      description:
        "Studied the language up to B2 level, focusing on grammar, conversation, and cultural fluency. Participated in Italian cultural events and language workshops.",
      flag: "🇮🇹",
    },
  ];

  const coreSkills = [
    "Self-discipline and time management",
    "Cultural sensitivity and adaptation",
    "Independent living and responsibility",
    "Communication in multilingual environments",
    "Open-mindedness and personal growth",
  ];

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-midnight-blue text-center mb-12">
          Languages
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Language Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-electric-blue/5 to-midnight-blue/5 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{lang.flag}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-midnight-blue">
                      {lang.language}
                    </h3>
                    <span className="text-electric-blue font-medium text-lg">
                      {lang.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-charcoal">
                    <span className="font-medium mr-2">Duration:</span>
                    <span>{lang.duration}</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="font-medium mr-2">Location:</span>
                    <span>{lang.location}</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="font-medium mr-2">School:</span>
                    <span className="text-sm">{lang.school}</span>
                  </div>
                </div>

                <p className="text-charcoal/80 mb-6 leading-relaxed">
                  {lang.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Skills from Language Studies */}
          <div className="bg-midnight-blue/5 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-midnight-blue text-center mb-8">
              Skills Developed from Language Studies
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-2 h-2 bg-electric-blue rounded-full flex-shrink-0"></div>
                  <span className="text-charcoal">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
