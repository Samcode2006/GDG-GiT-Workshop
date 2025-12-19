import React from 'react';
import './App.css';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar" aria-label="Main navigation">
        <h1 className="logo">Portfolio</h1>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('hero')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section hero">
        <h1>Samarth S</h1>
        <h2>Student</h2>
        <p className="career-goal">
          Passionate about Web Development and Problem Solving | CyberSec | BlockChain 
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="section projects">
        <h3>Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>Project Name 1</h4>
            <p>Brief description of the project, technologies used, and your role.</p>
            <div className="project-links">
              <a href="#" aria-disabled="true" className="disabled-link">Demo</a>
              <a href="#" aria-disabled="true" className="disabled-link">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h4>Project Name 2</h4>
            <p>Brief description of the project, technologies used, and your role.</p>
            <div className="project-links">
              <a href="#" aria-disabled="true" className="disabled-link">Demo</a>
              <a href="#" aria-disabled="true" className="disabled-link">GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <h4>Project Name 3</h4>
            <p>Brief description of the project, technologies used, and your role.</p>
            <div className="project-links">
              <a href="#" aria-disabled="true" className="disabled-link">Demo</a>
              <a href="#" aria-disabled="true" className="disabled-link">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Hackathons */}
      <section id="experience" className="section experience">
        <h3>Experience & Hackathons</h3>
        <div className="experience-item">
          <h4>Hackothsava 2025</h4>
          <span className="date">Nov 2025</span>
          <p>Description of what you built, achieved, or learned.</p>
        </div>
        <div className="experience-item">
          <h4>Club Activity / Competition</h4>
          <span className="date">Month Year - Month Year</span>
          <p>Description of your contribution and impact.</p>
        </div>
      </section>

      {/* Contact & Links */}
      <section id="contact" className="section contact" aria-label="Contact and social links">
        <h3>Contact & Links</h3>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" aria-label="Send email">Email</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">LinkedIn</a>
          <a href="/resume.pdf" download aria-label="Download resume">Resume</a>
        </div>
      </section>
    </div>
  );
}

export default App;
