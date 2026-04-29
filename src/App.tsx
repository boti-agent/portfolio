import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const skills = {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C++', 'C', 'C#', 'Bash/Zsh'],
    backend: ['Spring Boot', 'NestJS', 'Express.js', 'FastAPI'],
    frontend: ['React', 'Angular', 'Next.js'],
    mobile: ['React Native', 'Expo', 'Flutter'],
    dataScience: ['Jupyter Notebooks', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'LangChain'],
    architecture: ['CQRS', 'Domain-Driven Design (DDD)', 'Clean Architecture', 'Hexagonal Architecture', 'Microservices', 'Event-Driven Architecture'],
    databases: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'DynamoDB'],
    orms: ['Prisma', 'JPA', 'Spring Data JDBC/JPA'],
    devops: ['Docker', 'Docker Compose', 'Kubernetes', 'AWS (CDK, CloudFormation, VPC, ELB, ASG, Lambda, Route 53, Cognito, Secrets Manager, CodePipeline, SQS, SNS, IAM, EC2, RDS, S3)', 'GitHub Actions', 'Tekton'],
    mlops: ['LangChain', 'FAISS', 'MLflow', 'Ollama', 'AWS Bedrock', 'Prompt Engineering', 'Model Fine-tuning']
  }

  const projects = [
    {
      title: '🤖 AI Engineering',
      items: [
        { name: 'LLMOps Framework', desc: '9-phase methodology for LLM application development' },
        { name: 'Multi-Model Evaluation', desc: 'Compare Llama 3.2 (1B, 3B) and ChatQA 8B with quality, latency, cost metrics' },
        { name: 'RAG Systems', desc: 'Vector Databases, Embeddings, Chunking Strategies' },
        { name: 'ML Pipeline (Wine Quality)', desc: 'End-to-end MLOps with MLflow, scikit-learn, Flask API' }
      ]
    },
    {
      title: '🏗️ Software Architecture',
      items: [
        { name: 'Distributed Rate Limiter', desc: 'Redis-based atomic rate limiting for flash sales & high-concurrency scenarios' },
        { name: 'Patient Health Record (PHR)', desc: 'Clean Architecture with PostgreSQL replication, HAProxy load balancing' },
        { name: 'Load Balancer System', desc: 'Nginx + 3 FastAPI backends with weighted distribution & health checks' },
        { name: 'Event-Driven Messaging', desc: 'Node.js + Kafka + WebSocket real-time messaging app' }
      ]
    },
    {
      title: '📋 Templates',
      items: [
        { name: 'CQRS Inventory System', desc: 'Node.js/TypeScript with Docker & PostgreSQL' },
        { name: 'FastAPI CRUD + CI/CD', desc: 'Clean Architecture with GitHub Actions' },
        { name: 'Spring Boot REST API', desc: 'Personal Info, Skills, Education, Experience + Docker' },
        { name: 'ToDo API (JWT Auth)', desc: 'Node.js + Express + PostgreSQL + Swagger' }
      ]
    }
  ]

  const certifications = [
    'AWS Certified (CDK, Lambda, RDS, S3, EC2, etc.)',
    'Kubernetes (K8s)',
    'Docker & Docker Compose',
    'MLflow & Experiment Tracking',
    'LangChain & Ollama Deployment'
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav>
        <div className="nav-content">
          <span className="logo">JCHG</span>
          <div className="nav-links">
            {['home', 'about', 'skills', 'projects', 'certifications'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Jose Carlos Huerta Garcia</h1>
          <p className="hero-subtitle">Software Engineer</p>
          <p className="hero-info">5 years of experience • 1 year as Tech Lead</p>
          <div className="hero-links">
            <a href="mailto:carlosj12336@gmail.com">📧 carlosj12336@gmail.com</a>
            <a href="https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
            <a href="https://github.com/jcarloshg" target="_blank" rel="noopener noreferrer">
              🐙 GitHub
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <button onClick={() => scrollTo('about')}>↓</button>
        </div>
      </section>

      {/* About Section */}
      <section className="section-dark" id="about">
        <div className="content">
          <h2>About Me</h2>
          <div className="about-text">
            <p>
              Specialized in <span className="highlight">Architectural Patterns</span> such as Event-Driven Architecture, Microservices, CQRS, etc., applying Scrum and DDD approaches. Experienced with stacks like <span className="highlight">TypeScript/Node.js</span>, <span className="highlight">Java/Spring Boot</span>, <span className="highlight">Python/FastAPI</span>.
            </p>
            <p>
              <span className="highlight-white">Leading</span> the development and maintainability of scalable products, aligning development with business strategy. <span className="highlight-white">Managing communication</span> with stakeholders and <span className="highlight-white">Guiding/Mentoring</span> FullStack teams.
            </p>
            <p>
              Focused on designing and building scalable, high-availability systems based on Software Architecture principles, aligning development and architecture with business objectives to ensure value delivery to the end customer.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <p className="card-label">🌱 Currently learning</p>
              <p className="card-value teal">Data Science</p>
            </div>
            <div className="card">
              <p className="card-label">⚡ Fun fact</p>
              <p className="card-value white">Likes to ride motorcycles 🏍️</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="content">
          <h2>Tech Stack</h2>
          
          <div className="skills-group">
            <h3>Languages</h3>
            <div className="tag-container">
              {skills.languages.map(skill => (
                <span key={skill} className="tag tag-teal">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Backend</h3>
            <div className="tag-container">
              {skills.backend.map(skill => (
                <span key={skill} className="tag tag-teal">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Frontend & Mobile</h3>
            <div className="tag-container">
              {[...skills.frontend, ...skills.mobile].map(skill => (
                <span key={skill} className="tag tag-teal">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Architecture & Patterns</h3>
            <div className="tag-container">
              {skills.architecture.map(skill => (
                <span key={skill} className="tag tag-purple">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Databases & ORMs</h3>
            <div className="tag-container">
              {[...skills.databases, ...skills.orms].map(skill => (
                <span key={skill} className="tag tag-green">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>DevOps & Cloud</h3>
            <div className="tag-container">
              {['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'].map(skill => (
                <span key={skill} className="tag tag-orange">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Data Science & MLOps</h3>
            <div className="tag-container">
              {[...skills.dataScience.slice(0, 6), ...skills.mlops.slice(0, 4)].map(skill => (
                <span key={skill} className="tag tag-blue">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-dark" id="projects">
        <div className="content">
          <h2>📂 Projects</h2>
          
          {projects.map((category) => (
            <div key={category.title} className="projects-category">
              <h3>{category.title}</h3>
              <div className="projects-grid">
                {category.items.map((project) => (
                  <div key={project.name} className="project-card">
                    <h4>{project.name}</h4>
                    <p>{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="content">
          <h2>🏅 Certifications</h2>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div key={cert} className="cert-item">
                ✅ {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Built with React + Vite • <a href="https://github.com/jcarloshg" target="_blank" rel="noopener noreferrer">@jcarloshg</a></p>
      </footer>
    </div>
  )
}

export default App