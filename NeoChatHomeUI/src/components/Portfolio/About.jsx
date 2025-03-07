import React from "react";

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Python", level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 5 years of experience in web development, I specialize
              in creating responsive and user-friendly applications. My passion
              lies in solving complex problems through clean and efficient code
              while ensuring an exceptional user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">5+</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">50+</h4>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">30+</h4>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
