import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300
      ${scrolled ? 'backdrop-blur-xl' : ''}
      ${isDark 
        ? `${scrolled ? 'bg-gray-950/80' : 'bg-gray-950'} border-gray-800` 
        : `${scrolled ? 'bg-white/80' : 'bg-white'} border-gray-200`}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* LOGO */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent"
          >
            Manish Yadav
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`magnetic-btn font-medium transition-all duration-300 relative
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-500 
                  after:transition-all after:duration-300 hover:after:w-full
                  ${isDark
                    ? "text-gray-300 hover:text-teal-400"
                    : "text-gray-700 hover:text-teal-600"
                  }`}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle with Sun/Moon Animation */}
            <button
              onClick={toggleTheme}
              className={`theme-toggle magnetic-btn relative w-12 h-12 rounded-xl transition-all duration-500 overflow-hidden
                ${isDark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
                }`}
              aria-label="Toggle theme"
            >
              <div className={`theme-toggle-inner absolute inset-0 flex items-center justify-center transition-transform duration-500
                ${isDark ? 'rotate-0' : '-rotate-180'}`}>
                <Sun 
                  size={20} 
                  className={`absolute transition-all duration-300 text-yellow-400
                    ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                />
                <Moon 
                  size={20} 
                  className={`absolute transition-all duration-300 text-slate-700
                    ${isDark ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`theme-toggle magnetic-btn relative w-10 h-10 rounded-lg transition-all duration-500 overflow-hidden
                ${isDark
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
                }`}
              aria-label="Toggle theme"
            >
              <div className={`theme-toggle-inner absolute inset-0 flex items-center justify-center transition-transform duration-500
                ${isDark ? 'rotate-0' : '-rotate-180'}`}>
                <Sun 
                  size={18} 
                  className={`absolute transition-all duration-300 text-yellow-400
                    ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                />
                <Moon 
                  size={18} 
                  className={`absolute transition-all duration-300 text-slate-700
                    ${isDark ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
                />
              </div>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-800 hover:text-teal-400"
                    : "text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
