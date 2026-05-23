import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      id: 0,
      title: "Programming",
      items: ["C", "C++", "Python", "JavaScript"],
    },
    {
      id: 1,
      title: "Frontend (MERN)",
      items: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vite"],
    },
    {
      id: 2,
      title: "Backend Engineering",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      id: 3,
      title: "Databases & Tools",
      items: ["MongoDB", "MySQL", "Git", "Postman"],
    },
    {
      id: 4,
      title: "AI / ML / Deep Learning",
      items: ["Scikit-learn", "Random Forest", "OpenCV", "Model Development"],
    },
    {
      id: 5,
      title: "Core CS Fundamentals",
      items: ["DSA", "DBMS", "Operating Systems", "Computer Networks"],
    },
  ];

  return (
    <section
      id="skills"
      className={`min-h-[90vh] flex items-center justify-center px-6 ${
        isDark ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      <div className="w-full max-w-7xl py-16">
        <h2
          className={`text-5xl md:text-6xl max-sm:text-4xl font-bold text-center mb-6 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}
        >
          Technical <span className="text-teal-600">Expertise</span>
          <span></span>
           <span></span>
        </h2>
        

    
     

        <div className="grid grid-cols-12 gap-8 max-sm:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center"
            >
              <SkillCard category={category} isDark={isDark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, isDark }) {
  return (
    <div
      className={`w-80 min-h-[300px] rounded-2xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        isDark
          ? 'bg-gray-900 border-gray-800 hover:border-teal-500'
          : 'bg-white border-gray-200 hover:border-teal-500'
      }`}
    >
      <h3
        className={`text-xl max-sm:text-lg font-bold text-center mb-8 tracking-wide ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`}
      >
        {category.title}
      </h3>

      <div className="flex flex-col gap-4">
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className={`w-full text-center px-4 py-3 rounded-xl text-sm max-sm:text-xs font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-gray-800 text-teal-300 hover:bg-teal-600 hover:text-white'
                : 'bg-gray-50 text-teal-600 border border-teal-200 hover:bg-teal-600 hover:text-white'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
