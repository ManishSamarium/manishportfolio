import { useTheme } from "../context/ThemeContext";
import myCV from "../assets/Manish_Kumar_CV.pdf";

export default function About() {
  const { isDark } = useTheme();

  const focusAreas = [
    "Full-Stack Web Development",
    "AI & Machine Learning",
    "System Design & Architecture",
  ];

  return (
    <section
      id="about"
      className={`min-h-[90vh] flex items-center justify-center px-6 ${
        isDark ? "bg-gray-950" : "bg-white-100"
      }`}
    >
      <div className="w-[80vw] h-[80vh] max-sm:w-[95vw] max-sm:h-auto">
        <div className="h-full px-24 py-20 max-sm:px-6 max-sm:py-10">
          <div className="text-center mb-10">
            <h2
              className={`text-[7rem] max-sm:text-5xl font-bold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              About <span className="text-teal-600">Me</span>
            </h2>
          </div>

          <br />
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 items-start h-full mt-14 max-sm:mt-6">
            <div className="justify-self-end max-w-xl space-y-20 max-sm:space-y-10 max-sm:justify-self-auto">
              <p
                className={`text-2xl max-sm:text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-700"}`}
              >
                I'm a Computer Science student and full-stack developer
                passionate about building web applications that solve real
                problems. I've worked on diverse projects spanning web
                development, AI, and backend systems.
              </p>

              <p
                className={`text-2xl max-sm:text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-700"}`}
              >
                I believe in clean code, user-first design, and continuous
                learning. My focus is on creating scalable solutions with modern
                technologies.
              </p>
            </div>

            <div className="flex justify-center mt-10 max-sm:mt-14">
              <div className="max-w-sm">
                <h3
                  className={`text-lg max-sm:text-base font-semibold uppercase tracking-widest mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  My Focus Areas
                </h3>

                <br />

                <ul className="space-y-6 max-sm:space-y-4">
                  {focusAreas.map((area, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 leading-tight"
                    >
                      <span className="w-3 h-3 rounded-full bg-teal-600 shrink-0" />
                      <span
                        className={`text-xl max-sm:text-base ${isDark ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>

                <br />

                <div className="pt-6">
                  <a
                    href={myCV}
                    download="Manish_Yadav_CV.pdf"
                    className="
                            inline-block px-16 py-6 max-sm:px-8 max-sm:py-4
                            rounded-xl text-2xl max-sm:text-lg font-semibold
                            bg-teal-400 text-white
                            hover:bg-teal-500 hover:text-white
                            no-underline hover:no-underline
                            transition-all duration-300 shadow-xl
                          "
                  >
                    ⬇ Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
