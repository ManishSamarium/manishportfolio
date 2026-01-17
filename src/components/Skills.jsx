import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    { id: 0, title: "Programming Languages", items: ["C", "C++", "Python", "JavaScript"] },
    { id: 1, title: "Frontend Development", items: ["HTML", "CSS", "React", "Tailwind CSS", "Vite"] },
    { id: 2, title: "Backend Development", items: ["Node.js", "Express.js", "Flask", "REST APIs"] },
    { id: 3, title: "Databases", items: ["MongoDB", "MySQL", "Supabase", "Firebase"] },
    { id: 4, title: "AI & Machine Learning", items: ["Scikit-learn", "Random Forest", "OpenCV", "Face Recognition"] },
  ];

  return (
    <section
      id="skills"
      className={`min-h-[80vh] flex items-center justify-center px-6 ${
        isDark ? 'bg-gray-950' : "bg-gray-100"
      }`}
    >
      <div className="w-full max-w-7xl">
        <br />

        <h2 className={`text-5xl md:text-6xl max-sm:text-4xl font-bold text-center mb-20 max-sm:mb-12 ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`}>
         
          Technical <span className="text-teal-600">Skills</span>
        </h2>

        <div className="grid grid-cols-12 gap-8 max-sm:gap-6">

          {skillCategories.slice(0, 3).map((category) => (
            <div key={category.id} className="col-span-12 md:col-span-4 flex justify-center">
              <SkillCard category={category} isDark={isDark} />
            </div>
          ))}

          <div className="col-span-12 md:col-start-3 md:col-span-4 flex justify-center">
            <SkillCard category={skillCategories[3]} isDark={isDark} />
          </div>

          <div className="col-span-12 md:col-start-7 md:col-span-4 flex justify-center">
            <SkillCard category={skillCategories[4]} isDark={isDark} />
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, isDark }) {
  return (
    <div
      className={`w-72 h-[240px] max-sm:h-auto rounded-2xl border-2 p-6 flex flex-col ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}
    >
      <h3 className={`text-xl max-sm:text-lg font-bold text-center mb-6 ${
        isDark ? 'text-gray-100' : 'text-gray-900'
      }`}>
        {category.title}
      </h3>

      <div className="flex flex-col gap-3 mt-auto">
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className={`w-full text-center px-4 py-2 rounded-lg text-sm max-sm:text-xs font-semibold transition ${
              isDark
                ? 'bg-gray-700 text-teal-300 hover:bg-teal-600 hover:text-white'
                : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
