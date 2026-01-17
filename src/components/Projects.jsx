import growthhub from "../assets/growthhub.png";
import doctor from "../assets/doctor.png";
import surveillance from "../assets/surveillance.webp";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Growthhub",
      image: growthhub,
      description:
        "A modern task management application with CRUD functionality, clean UI, and backend integration supporting persistent storage. with proper Scheduling.",
      github: "https://github.com/ManishSamarium/growthhub",
      live: "https://growthhub-3xg8.vercel.app/",
    },
    {
      id: 2,
      title: "TheDoctor – AI Healthcare",
      image: doctor,
      description:
        "An AI-powered healthcare platform for disease prediction and patient management using machine learning models. Having functionality to connect doctrs",
      github: "https://github.com/ManishSamarium/thedoctorr",
      live: "https://thedoctorr.vercel.app/",
    },
    {
      id: 3,
      title: "EYeOn – Smart Surveillance",
      image: surveillance,
      description:
        "An AI-powered smart surveillance system performing real-time face recognition using OpenCV and Python with instant alerts.",
      github: "https://github.com/ManishSamarium/EYeOn--An-Automated-Surveillance-System",
      live: "https://e-ye-on-an-automated-surveillance-s.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-[80vh] flex items-center justify-center px-6 ${
        isDark ? "bg-gray-950" : "bg-white-100"
      }`}
    >
      {/* CONTENT ONLY — CARD REMOVED */}
      <div className="w-[80vw] h-[80vh] max-sm:h-auto">
        <div className="h-full px-20 py-14 flex flex-col">

          {/* HEADER */}
          <div className="text-center">
            <br /><br />
            <h2
              className={`text-5xl font-bold ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              My <span className="text-teal-600">Projects</span>
            </h2>
          </div>
          <br /><br />

          {/* PROJECT GRID */}
          <div className="flex-1 flex justify-center overflow-y-auto max-sm:overflow-visible mt-40 max-sm:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30">

              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`w-72 h-96 rounded-xl border overflow-hidden
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  flex flex-col
                  ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
                >
                  {/* IMAGE */}
                  <div className="w-full h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className={`text-xl font-semibold text-center ${
                        isDark ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`mt-3 text-base leading-relaxed min-h-[96px] ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="mt-auto pt-5 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium
                        bg-teal-300 text-black hover:bg-teal-400 transition text-center"
                      >
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-md text-sm font-medium
                        bg-gray-300 text-black hover:bg-gray-400 transition text-center"
                      >
                        Live Link
                      </a>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
