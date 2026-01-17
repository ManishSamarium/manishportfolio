import { useTheme } from '../context/ThemeContext';
import linkedinIcon from '../assets/linkedin.jpg';
import githubIcon from '../assets/github.png';

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`min-h-[35vh] flex items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      } px-6 sm:px-8`}
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* Main Footer Content */}
        <div className="text-center space-y-14">

          {/* Brand */}
          <div className="space-y-3">
            <h3
              className={`text-4xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              <span className="text-teal-600">Manish</span> Yadav
            </h3>
            <p
              className={`text-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Full-Stack Developer & Computer Science Student
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4
              className={`text-sm font-semibold uppercase tracking-widest ${
                isDark ? 'text-gray-300' : 'text-gray-900'
              }`}
            >
              Get In Touch
            </h4>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
              <a
                href="tel:+918887435095"
                className={`transition-colors duration-300 ${
                  isDark
                    ? 'text-gray-400 hover:text-teal-400'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                📱 +91 8887435095
              </a>

              <a
                href="mailto:sam68iiitr@gmail.com"
                className={`transition-colors duration-300 ${
                  isDark
                    ? 'text-gray-400 hover:text-teal-400'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                ✉️ sam68iiitr@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4
              className={`text-sm font-semibold uppercase tracking-widest ${
                isDark ? 'text-gray-300' : 'text-gray-900'
              }`}
            >
              Navigation
            </h4>

            <div className="flex flex-wrap justify-center gap-8 text-base">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    isDark
                      ? 'text-gray-400 hover:text-teal-400'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links (Images) */}
          <div className="space-y-5">
            <h4
              className={`text-sm font-semibold uppercase tracking-widest ${
                isDark ? 'text-gray-300' : 'text-gray-900'
              }`}
            >
              Follow Me
            </h4>

            <div className="flex items-center justify-center gap-10">
              <a
                href="https://github.com/ManishSamarium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-125"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/manish-yadav-91a0aa285/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-125"
                />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`} />

          {/* Copyright */}
          <p
            className={`text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            © {currentYear} Manish Yadav. All rights reserved. <br />
            Crafted with ❤️ using React & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}
