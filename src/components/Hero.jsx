import { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 relative overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-gray-100"
      }`}
    >
      {/* Animated Background Gradient */}
      <div className="hero-bg-gradient" />

      {/* GLASSMORPHISM CARD */}
      <div
        className={`w-[80vw] h-[80vh] max-sm:w-full max-sm:h-screen rounded-2xl border shadow-2xl relative z-10
        ${isDark 
          ? "bg-gray-900/70 border-gray-800/50 backdrop-blur-xl" 
          : "bg-white/70 border-gray-200/50 backdrop-blur-xl"}
        `}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="h-full px-24 py-20 max-sm:px-6 max-sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">

            {/* LEFT CONTENT */}
            <div className="justify-self-end max-w-xl space-y-6 max-sm:justify-self-center max-sm:text-center">
              {/* Staggered Animation - Welcome */}
              <p 
                className={`text-sm font-semibold tracking-widest text-teal-600 uppercase hero-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.1s' }}
              >
                Welcome to my portfolio
              </p>

              {/* Staggered Animation - Name */}
              <h1 
                className={`hero-title text-5xl max-sm:text-4xl font-bold leading-tight hero-fade-in ${isVisible ? 'visible' : ''} ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                Hi, I&apos;m <br />
                <span className="text-teal-600 hero-name-gradient">Manish Yadav</span>
              </h1>

              {/* Staggered Animation - Description */}
              <p 
                className={`text-lg max-sm:text-base leading-relaxed hero-fade-in ${isVisible ? 'visible' : ''} ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                Full-Stack Web Developer and AI/ML enthusiast crafting beautiful and scalable web applications.
              </p>

              {/* CONTACT - Staggered Animation */}
              <div 
                className={`grid grid-cols-2 max-sm:grid-cols-1 gap-x-8 gap-y-4 pt-4 text-sm hero-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.7s' }}
              >
                <a 
                  href="tel:8887435095" 
                  className={`magnetic-btn flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? "hover:bg-gray-800/50 hover:text-teal-400" 
                      : "hover:bg-gray-100 hover:text-teal-600"
                  }`}
                >
                  <Phone size={18} className="text-teal-600" /> Phone No.
                </a>
                <a 
                  href="mailto:samiiitr68@gmail.com" 
                  className={`magnetic-btn flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? "hover:bg-gray-800/50 hover:text-teal-400" 
                      : "hover:bg-gray-100 hover:text-teal-600"
                  }`}
                >
                  <Mail size={18} className="text-teal-600" /> Email Id
                </a>

                <a 
                  href="https://github.com/ManishSamarium" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`magnetic-btn flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? "hover:bg-gray-800/50 hover:text-teal-400" 
                      : "hover:bg-gray-100 hover:text-teal-600"
                  }`}
                >
                  <Github size={18} className="text-teal-600" /> GitHub
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`magnetic-btn flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? "hover:bg-gray-800/50 hover:text-teal-400" 
                      : "hover:bg-gray-100 hover:text-teal-600"
                  }`}
                >
                  <Linkedin size={18} className="text-teal-600" /> LinkedIn
                </a>
              </div>
            </div>

            {/* IMAGE with Animated Gradient Background */}
            <div 
              className={`flex justify-center items-center mt-12 md:mt-0 hero-fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: '0.9s' }}
            >
              <div className="relative w-80 h-80 max-sm:w-60 max-sm:h-60">
                {/* Animated Gradient Ring */}
                <div className="absolute inset-0 rounded-full animated-gradient-ring" />
                
                {/* Soft Glow */}
                <div className="absolute inset-0 rounded-full blur-3xl bg-teal-400/30 animate-pulse-slow" />
                
                {/* Outer Ring */}
                <div className={`absolute inset-0 rounded-full border-4 ${isDark ? 'border-gray-700' : 'border-gray-300'}`} />
                
                {/* Inner Accent Ring */}
                <div className="absolute inset-6 rounded-full border-2 border-teal-600/50" />
                
                {/* Profile Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-teal-600/20">
                  <img 
                    src={profile} 
                    alt="Manish" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
