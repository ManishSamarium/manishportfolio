import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Rocket, Bot, Code2, BookOpen } from 'lucide-react';

const timelineIcons = {
  'Full-Stack Projects': Rocket,
  'AI & Machine Learning': Bot,
  'Web Development': Code2,
  'Computer Science Foundation': BookOpen,
};

export default function Experience() {
  const { isDark } = useTheme();

  const experiences = [
    {
      title: 'Full-Stack Projects',
      description:
        'Built multiple end-to-end projects involving web development, backend systems, and databases.',
      duration: '2024 - Present',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Developed AI solutions including face recognition and disease prediction systems.',
      duration: '2025 - Present',
    },
    {
      title: 'Web Development',
      description:
        'Learned and mastered React, Node.js, and modern web technologies.',
      duration: '2024 - Present',
    },
    {
      title: 'Computer Science Foundation',
      description:
        'Strong foundation in Data Structures, Algorithms, DBMS, and Operating Systems.',
      duration: '2023 - Present',
    },
  ];

  return (
    <section
      id="experience"
      className={`min-h-[80vh] flex items-center justify-center px-6 py-20 ${
        isDark ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl max-sm:text-4xl font-bold mb-4 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            <span className="text-teal-600">Experience</span> & Journey
          </h2>
          <p
            className={`text-xl max-sm:text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            My learning path and professional growth
          </p>
        </div>

        {/* DESKTOP TIMELINE VIEW */}
        <div className="hidden md:block relative">
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full ${
              isDark
                ? 'bg-gradient-to-b from-teal-600 via-teal-500 to-teal-600/20'
                : 'bg-gradient-to-b from-teal-500 via-teal-400 to-teal-500/20'
            }`}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                exp={exp}
                index={index}
                isDark={isDark}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* MOBILE SIMPLE VIEW */}
        <div className="block md:hidden space-y-6">
          {experiences.map((exp, index) => {
            const Icon = timelineIcons[exp.title] || Rocket;

            return (
              <div
                key={index}
                className={`rounded-2xl p-5 border ${
                  isDark
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      isDark
                        ? 'bg-teal-600 text-white'
                        : 'bg-teal-500 text-white'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-bold ${
                        isDark ? 'text-gray-100' : 'text-gray-900'
                      }`}
                    >
                      {exp.title}
                    </h3>

                    <span className="text-xs text-gray-500">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index, isDark, isLeft }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const Icon = timelineIcons[exp.title] || Rocket;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div
        className={`w-5/12 transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : isLeft
            ? '-translate-x-12 opacity-0'
            : 'translate-x-12 opacity-0'
        }`}
      >
        <div
          className={`rounded-2xl p-6 border transition-all duration-300 ${
            isDark
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <span className="text-xs text-gray-500">{exp.duration}</span>

          <h3
            className={`text-xl font-bold mt-2 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {exp.title}
          </h3>

          <p
            className={`mt-3 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {exp.description}
          </p>
        </div>
      </div>

      <div className="w-2/12" />

      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isDark ? 'bg-gray-800 border-2 border-teal-500' : 'bg-white border-2 border-teal-500'
          }`}
        >
          <Icon size={20} className="text-teal-500" />
        </div>
      </div>

      <div className="w-5/12" />
    </div>
  );
}
