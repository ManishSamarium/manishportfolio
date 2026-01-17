import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { isDark } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      
      {/* Sticky Navbar */}
      <Navbar />
      
      {/* Full-page sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
