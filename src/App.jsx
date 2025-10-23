import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, Database, Terminal, Globe, ExternalLink, Folder } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'C++', icon: Code2, level: 85 },
    { name: 'Java', icon: Code2, level: 85 },
    { name: 'JavaScript', icon: Code2, level: 80 },
    { name: 'HTML/CSS', icon: Globe, level: 90 },
    { name: 'MySQL', icon: Database, level: 75 },
    { name: 'Git/GitHub', icon: Terminal, level: 80 }
  ];

  const projects = [
    {
      title: 'Sistema de Gestión de Inventario',
      description: 'Aplicación web para gestionar inventarios con CRUD completo, búsqueda y filtros. Incluye autenticación de usuarios y generación de reportes.',
      technologies: ['Java', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Algoritmos de Ordenamiento Visualizados',
      description: 'Herramienta educativa que visualiza diferentes algoritmos de ordenamiento (QuickSort, MergeSort, BubbleSort) de forma interactiva.',
      technologies: ['C++', 'JavaScript', 'HTML/CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Calculadora de Redes IP',
      description: 'Aplicación para calcular subredes, máscaras y rangos de IP. Útil para aprender conceptos de redes y subnetting.',
      technologies: ['JavaScript', 'HTML/CSS'],
      github: '#',
      demo: '#'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              OC
            </h1>
            <div className="flex gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'home' ? 'Inicio' : section === 'about' ? 'Sobre mí' : section === 'skills' ? 'Habilidades' : section === 'projects' ? 'Proyectos' : 'Contacto'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl text-center">
          <div className="mb-8 inline-block">
            <img
              src="/src/img/cv.jpg"
              alt="Oriana Castro"
              className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg shadow-cyan-500/50"
            />
          </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Oriana Castro
            </h1>
            <p className="text-3xl text-gray-300 mb-6">Estudiante de Ingeniería en Sistemas</p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Apasionada por la tecnología y el desarrollo de software. Buscando mi primera experiencia en IT para seguir aprendiendo y creciendo profesionalmente.
            </p>
            <div className="flex gap-6 justify-center">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Github size={24} />
          </a>
          <a href="mailto:orianacastro.e@gmail.com"
             className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Mail size={24} />
          </a>
            </div>
          </div>
        </section>

        {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Perfil</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Estudiante de 5.º semestre de Ingeniería en Sistemas en la Universidad ORT Uruguay, con sólidos conocimientos académicos en programación, estructuras de datos, bases de datos y sistemas operativos.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Me destaco por ser proactiva, responsable y comprometida con los desafíos. Busco mi primera experiencia en IT para continuar aprendiendo y desarrollarme en el rubro.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Educación</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Universidad ORT Uruguay</h4>
                    <p className="text-gray-400">Ingeniería en Sistemas</p>
                    <p className="text-sm text-gray-500">2021 - Actualidad (5to semestre)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Escuela y Liceo Elbio Fernández</h4>
                    <p className="text-gray-400">Bachillerato de Ingeniería</p>
                    <p className="text-sm text-gray-500">2008 - 2020</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Idiomas</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">🇺🇾 Español - Nativo</p>
                  <p className="text-gray-300">🇬🇧 Inglés - B2</p>
                  <p className="text-gray-300">🇧🇷 Portugués - Básico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <skill.icon className="text-cyan-400" size={24} />
                  <span className="font-semibold text-lg">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/*Tec logos*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            <img src="/src/img/tech/CSS.png" alt="CSS" className="w-16 h-16 mx-auto" />
            <img src="/src/img/tech/JS.png" alt="JS" className="w-16 h-16 mx-auto" />
            <img src="/src/img/tech/HTML5.png" alt="HTML5" className="w-16 h-16 mx-auto" />
            <img src="/src/img/tech/MYSQL.png" alt="MYSQL" className="w-16 h-16 mx-auto" />
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Conocimientos Adicionales</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Estructuras de datos y algoritmos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Sistemas operativos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Redes y direccionamiento IP</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Metodologías ágiles (Scrum)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Control de versiones con Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Proyectos
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado durante mi formación académica
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all hover:scale-105 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Folder className="text-cyan-400" size={28} />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 min-h-[80px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github size={20} />
                      <span className="text-sm">Código</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">¿Quieres ver más proyectos?</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
              <Github size={20} />
              <span>Ver en GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            ¿Tienes una oportunidad o quieres colaborar? ¡Hablemos!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:orianacastro.e@gmail.com" 
               className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all hover:scale-105">
              <Mail className="mx-auto mb-4 text-cyan-400" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">orianacastro.e@gmail.com</p>
            </a>

            <a href="tel:+59899323321"
               className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all hover:scale-105">
              <MapPin className="mx-auto mb-4 text-cyan-400" size={32} />
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-400 text-sm">+598 99 323 321</p>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all hover:scale-105">
              <Linkedin className="mx-auto mb-4 text-cyan-400" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Conectemos</p>
            </a>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 inline-block">
            <p className="text-gray-400 flex items-center gap-2">
              <MapPin size={20} className="text-cyan-400" />
              Rambla Rep. de México 5565, Montevideo, Uruguay
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <p>© 2025 Oriana Castro. Diseñado con pasión por el desarrollo.</p>
      </footer>
    </div>
  );
}