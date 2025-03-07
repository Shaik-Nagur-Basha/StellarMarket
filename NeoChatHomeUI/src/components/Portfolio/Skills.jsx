import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      level: 80,
      icon: "https://www.investopedia.com/thmb/0VrXWhfooj6-RPyyvp7HoCdq1Vo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term_Defination_Financial.Portfolio-367fc73212ac456aa607ad135db4ffa0.jpg",
    },
    {
      name: "HTML",
      level: 90,
      icon: "https://wealthdesk.in/wp-content/uploads/2022/01/Investment-Portfolio-And-Its-Advantages.png",
    },
    {
      name: "CSS",
      level: 85,
      icon: "https://kinsta.com/wp-content/uploads/2019/01/portfolio-website.png",
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl"
            >
              <div className="flex items-center mb-2">
                <img
                  src={skill.icon}
                  alt={`${skill.name} Icon`}
                  className="w-6 h-6 mr-2"
                />
                <span className="font-semibold">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  data-skill={skill.level}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
