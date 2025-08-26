import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { MouseFollower } from './components/MouseFollower';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
      <MouseFollower />
      
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full border-4 border-white dark:border-gray-700 shadow-lg overflow-hidden flex items-center justify-center transition-colors duration-300 bg-gray-100 dark:bg-gray-800">
            <img
              src="/profile%20pic.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Wisdom Nimako - DevOps Engineer / 
              <br className="hidden md:block" />
              <span className="text-blue-600 dark:text-blue-400">Tech Lead</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Building exceptional digital experiences with modern web technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              target="_blank" rel="noopener noreferrer"
            >
              <Code2 className="w-4 h-4" />
              View Resume
            </a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 space-y-16">
        {/* About Section */}
        <section className="prose prose-lg max-w-none">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hi! I'm <strong className="text-gray-900 dark:text-gray-100">Wisdom</strong>, a passionate DevOps and tech lead with expertise in modern web technologies, cloud architecture, and team leadership.
              </p>
              <p>
                As a developer, I love building things—especially finding creative ways to combine different technologies into something new and impactful. I thrive on solving complex problems and turning innovative ideas into reality.
              </p>
              <p>
                As a tech lead, I enjoy mentoring other developers, fostering collaboration, and building high-performing teams. I believe in writing clean, maintainable code and creating tools that make developers' lives easier.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
            <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Featured Projects
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-600">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">E-Commerce Platform</h3>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, 
                payment processing, and advanced analytics dashboard for merchants.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-600">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Task Management API</h3>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                RESTful API for team collaboration and project management. Built with Python FastAPI, featuring advanced 
                authentication, real-time notifications, and comprehensive documentation.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-600">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Developer Tools Suite</h3>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Open-source collection of CLI tools and VS Code extensions to improve developer productivity. 
                Used by 10k+ developers worldwide with 500+ GitHub stars.
              </p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Node.js', 'VS Code API', 'CLI', 'NPM'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 text-center transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm currently available for new opportunities and interesting projects. 
              Whether you're looking for a developer, tech lead, or consultant, let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/wisenimako" 
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="GitHub"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/wisdom-nimako-cloud" 
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Your Wisdom. Built with React and Tailwind CSS.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Currently living in Ghana and working on exciting projects.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
