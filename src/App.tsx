import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const scrollTo = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const skills = {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C++', 'C', 'C#', 'Bash/Zsh'],
    backend: ['Spring Boot', 'NestJS', 'Express.js', 'FastAPI'],
    frontend: ['React', 'Angular', 'Next.js'],
    mobile: ['React Native', 'Expo', 'Flutter'],
    dataScience: ['Jupyter', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'LangChain'],
    architecture: ['CQRS', 'DDD', 'Clean Architecture', 'Microservices', 'Event-Driven'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
    mlops: ['MLflow', 'Ollama', 'AWS Bedrock', 'RAG']
  }

  const projects = [
    {
      title: '🤖 AI Engineering',
      items: [
        { name: 'LLMOps Framework', desc: '9-phase methodology for LLM app development with prompt engineering & evaluation' },
        { name: 'Multi-Model Evaluation', desc: 'Comparing Llama 3.2 & ChatQA 8B with quality, latency & cost metrics' },
        { name: 'RAG Systems', desc: 'Vector databases, embeddings & chunking strategies for retrieval' },
        { name: 'ML Pipeline (Wine)', desc: 'End-to-end MLOps with MLflow, scikit-learn & Flask API in Docker' }
      ]
    },
    {
      title: '🏗️ Software Architecture',
      items: [
        { name: 'Distributed Rate Limiter', desc: 'Redis-based atomic rate limiting for flash sales & high-concurrency' },
        { name: 'Patient Health Record', desc: 'Clean Architecture with PostgreSQL replication & HAProxy load balancing' },
        { name: 'Load Balancer System', desc: 'Nginx + 3 FastAPI backends with weighted distribution & health checks' },
        { name: 'Event-Driven Messaging', desc: 'Node.js + Kafka + WebSocket real-time messaging app with DDD' }
      ]
    },
    {
      title: '📋 Templates & APIs',
      items: [
        { name: 'CQRS Inventory System', desc: 'Node.js/TypeScript with Docker, PostgreSQL & vertical slice architecture' },
        { name: 'FastAPI CRUD + CI/CD', desc: 'Clean Architecture with GitHub Actions automated testing & deployment' },
        { name: 'Spring Boot REST API', desc: 'Personal Info, Skills, Education, Experience with Docker & JUnit tests' },
        { name: 'ToDo API (JWT)', desc: 'Node.js + Express + PostgreSQL with access/refresh tokens & Swagger docs' }
      ]
    }
  ]

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '159', label: 'Public Repos' },
    { value: '1', label: 'Year Tech Lead' }
  ]

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      {/* Navigation */}
      <nav>
        <div className="nav-content">
          <div className="logo-wrapper">
            <span className="logo">JCHG</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'projects', 'skills'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section}
              </button>
            ))}
            <a 
              href="https://github.com/jcarloshg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-github"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className="hero-avatar">
            <span>JCHG</span>
          </div>
          <h1>Jose Carlos Huerta Garcia</h1>
          <p className="hero-subtitle">Software Engineer</p>
          <p className="hero-info">5 years of experience • Tech Lead</p>
          
          <div className="hero-links">
            <a href="mailto:carlosj12336@gmail.com" className="hero-link">
              <span className="link-icon">✉️</span>
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/" target="_blank" rel="noopener noreferrer" className="hero-link">
              <span className="link-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/jcarloshg" target="_blank" rel="noopener noreferrer" className="hero-link">
              <span className="link-icon">🐙</span>
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-indicator">
          <button onClick={() => scrollTo('about')}>
            <span>↓</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="section-dark" id="about">
        <div class="content">
          <div class="section-header">
            <span class="section-tag">Introduction</span>
            <h2>About Me</h2>
          </div>
          
          <div class="about-grid">
            <div class="about-main">
              <p>
                Specialized in <span class="highlight">Architectural Patterns</span> such as Event-Driven Architecture, Microservices, CQRS, applying Scrum and DDD approaches. Experienced with stacks like <span class="highlight">TypeScript/Node.js</span>, <span class="highlight">Java/Spring Boot</span>, <span class="highlight">Python/FastAPI</span>.
              </p>
              <p>
                <span class="highlight-bold">Leading</span> the development and maintainability of scalable products, aligning development with business strategy. <span class="highlight-bold">Managing communication</span> with stakeholders and <span class="highlight-bold">Guiding/Mentoring</span> FullStack teams.
              </p>
            </div>
            
            <div class="about-cards">
              <div class="info-card">
                <span class="info-icon">🌱</span>
                <div>
                  <span class="info-label">Currently learning</span>
                  <span class="info-value">Data Science</span>
                </div>
              </div>
              <div class="info-card">
                <span class="info-icon">🏍️</span>
                <div>
                  <span class="info-label">Fun fact</span>
                  <span class="info-value">Motorcycle enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-dark" id="projects">
        <div class="content">
          <div class="section-header">
            <span class="section-tag">Work</span>
            <h2>Projects</h2>
          </div>
          
          {projects.map((category) => (
            <div key={category.title} class="projects-category">
              <h3>{category.title}</h3>
              <div class="projects-grid">
                {category.items.map((project) => (
                  <div key={project.name} class="project-card">
                    <div class="project-card-inner">
                      <h4>{project.name}</h4>
                      <p>{project.desc}</p>
                    </div>
                    <div class="project-card-arrow">→</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-dark">
        <div className="content">
          <div className="section-header">
            <span className="section-tag">Expertise</span>
            <h2>Tech Stack</h2>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>
                <span className="skill-icon">💻</span>
                Languages
              </h3>
              <div className="tag-container">
                {skills.languages.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <span className="skill-icon">⚡</span>
                Backend
              </h3>
              <div className="tag-container">
                {skills.backend.map(skill => (
                  <span key={skill} className="tag tag-accent">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <span className="skill-icon">🎨</span>
                Frontend & Mobile
              </h3>
              <div className="tag-container">
                {[...skills.frontend, ...skills.mobile].map(skill => (
                  <span key={skill} className="tag tag-accent">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <span className="skill-icon">🏗️</span>
                Architecture
              </h3>
              <div className="tag-container">
                {skills.architecture.map(skill => (
                  <span key={skill} className="tag tag-purple">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <span className="skill-icon">🗄️</span>
                Databases
              </h3>
              <div className="tag-container">
                {skills.databases.map(skill => (
                  <span key={skill} className="tag tag-green">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <span className="skill-icon">🚀</span>
                DevOps & Cloud
              </h3>
              <div className="tag-container">
                {skills.devops.map(skill => (
                  <span key={skill} className="tag tag-orange">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <span className="skill-icon">🤖</span>
                Data Science & MLOps
              </h3>
              <div className="tag-container">
                {[...skills.dataScience, ...skills.mlops].map(skill => (
                  <span key={skill} className="tag tag-blue">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <span className="footer-logo">JCHG</span>
          <p>Built with React + Vite</p>
          <p className="footer-year">© 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App