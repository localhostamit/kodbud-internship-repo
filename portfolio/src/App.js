import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css'; // Import your styles

// Navigation Component
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  );
};

// Section Components
const Home = () => (
  <section id="home" className="section">
    <h1>Welcome to My Portfolio</h1>
    <p>I am a passionate Frontend Developer.</p>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <p>I specialize in building interactive, responsive user interfaces using ReactJS.</p>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="grid">
      <div className="card">
        <h3>Project 1</h3>
        <p>A cool React app.</p>
      </div>
      <div className="card">
        <h3>Project 2</h3>
        <p>A responsive website.</p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <h2>Contact</h2>
    <p>Let's build something together! Email: developer@example.com</p>
  </section>
);

// Main Content Wrapper
const AppContent = () => (
  <div className="app-container">
    <Navbar />
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  </div>
);

// Root App Component wrapped with Context Provider
const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;