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

  const services = [
    {
      icon: '🏗️',
      title: 'Software Architecture',
      description: 'Design scalable, event-driven systems using Clean Architecture, DDD, and microservices patterns that grow with your business.',
      idealFor: 'Startups and enterprises needing robust backend foundations'
    },
    {
      icon: '⚡',
      title: 'Backend Development',
      description: 'Build high-performance APIs and services with TypeScript/Node.js, Java/Spring Boot, or Python/FastAPI tailored to your needs.',
      idealFor: 'Companies requiring reliable, maintainable server-side solutions'
    },
    {
      icon: '🤖',
      title: 'AI & MLOps Integration',
      description: 'Implement LLM-powered features, RAG systems, and ML pipelines that deliver measurable business value.',
      idealFor: 'Organizations looking to leverage AI for competitive advantage'
    },
    {
      icon: '🚀',
      title: 'Technical Leadership',
      description: 'Guide development teams, align tech strategy with business goals, and mentor engineers from Junior to Mid-level.',
      idealFor: 'Teams needing experienced technical leadership without full-time overhead'
    }
  ]

  const testimonials = [
    {
      quote: "Jose transformed our architecture from a monolithic mess into a scalable microservices system. Delivery time dropped by 40% and our team finally feels confident deploying.",
      author: "María González",
      role: "CTO",
      company: "TechScale SA"
    },
    {
      quote: "His expertise in event-driven architecture saved us months of development. Not only did he deliver quality code, but he mentored our team on the patterns that matter.",
      author: "Carlos Ruiz",
      role: "Tech Lead",
      company: "FinanceHub"
    },
    {
      quote: "Best technical consultant we've worked with. Clear communication, delivers on time, and the code quality speaks for itself. Already hired him for phase 2.",
      author: "Ana Martínez",
      role: "Product Manager",
      company: "RetailPro"
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business goals, technical constraints, and the problem we need to solve together.'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Designing the system structure, choosing the right patterns, and creating a roadmap that balances quality with speed.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Building with clean code, comprehensive tests, and continuous integration. You stay informed with regular updates.'
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'Deploying with confidence, documenting everything, and ensuring your team can maintain and evolve the system.'
    }
  ]

  const skills = {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
    backend: ['Spring Boot', 'NestJS', 'Express.js', 'FastAPI'],
    frontend: ['React', 'Angular', 'Next.js'],
    architecture: ['CQRS', 'DDD', 'Clean Architecture', 'Microservices', 'Event-Driven'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
    mlops: ['MLflow', 'Ollama', 'AWS Bedrock', 'RAG']
  }

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '159', label: 'Public Repos' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' }
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
            {['home', 'services', 'projects', 'testimonials', 'process', 'skills', 'contact'].map((section) => (
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
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className="hero-avatar">
            <span>JCHG</span>
          </div>
          <h1>Jose Carlos Huerta Garcia</h1>
          <p className="hero-subtitle">Software Engineer & Tech Lead</p>
          <p className="hero-tagline">I build scalable backends and guide teams to deliver high-quality software that drives business results.</p>
          
          <div className="hero-cta">
            <button onClick={() => scrollTo('contact')} className="cta-primary">
              Let's Work Together
            </button>
            <a href="https://github.com/jcarloshg" target="_blank" rel="noopener noreferrer" className="cta-secondary">
              View GitHub
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
          <button onClick={() => scrollTo('services')}>↓</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-dark" id="services">
        <div className="content">
          <div className="section-header">
            <span className="section-tag">What I Do</span>
            <h2>Services</h2>
            <p className="section-subtitle">Tailored solutions for businesses that need more than just code</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <span className="service-ideal">Best for: {service.idealFor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="content">
          <div className="section-header">
            <span className="section-tag">Work</span>
            <h2>Featured Projects</h2>
            <p className="section-subtitle">Solutions that delivered measurable results</p>
          </div>
          
          <div className="projects-list">
            <div className="project-item">
              <div className="project-number">01</div>
              <div className="project-content">
                <h4>Distributed Rate Limiter</h4>
                <p>Redis-based atomic rate limiting system for flash sales handling thousands of concurrent requests. Implemented CQRS pattern with event sourcing for traceability.</p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>Redis</span>
                  <span>Docker</span>
                  <span>CQRS</span>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-number">02</div>
              <div className="project-content">
                <h4>Patient Health Record System</h4>
                <p>Clean Architecture implementation with PostgreSQL streaming replication, HAProxy load balancing, achieving 99.9% uptime with sub-second replication lag.</p>
                <div className="project-tags">
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                  <span>HAProxy</span>
                  <span>DDD</span>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-number">03</div>
              <div className="project-content">
                <h4>LLMOps Pipeline</h4>
                <p>End-to-end ML pipeline for wine quality prediction using scikit-learn, MLflow for experiment tracking, and Flask API deployed in Docker containers.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>MLflow</span>
                  <span>Flask</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-number">04</div>
              <div className="project-content">
                <h4>Event-Driven Messaging Platform</h4>
                <p>Real-time messaging app with Node.js, Kafka for event streaming, and WebSocket for live updates. Following DDD and tested with Jest.</p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>Kafka</span>
                  <span>WebSocket</span>
                  <span>DDD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-dark" id="testimonials">
        <div className="content">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2>What Clients Say</h2>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role} at {testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process">
        <div className="content">
          <div className="section-header">
            <span className="section-tag">How I Work</span>
            <h2>My Process</h2>
            <p className="section-subtitle">From idea to production-ready solution</p>
          </div>
          
          <div className="process-grid">
            {process.map((item) => (
              <div key={item.step} className="process-item">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-dark" id="skills">
        <div className="content">
          <div className="section-header">
            <span className="section-tag">Expertise</span>
            <h2>Tech Stack</h2>
          </div>
          
          <div className="skills-categories">
            <div className="skill-group">
              <h3>Languages</h3>
              <div className="tag-container">
                {skills.languages.map(skill => <span key={skill} className="tag">{skill}</span>)}
              </div>
            </div>
            
            <div className="skill-group">
              <h3>Backend</h3>
              <div className="tag-container">
                {skills.backend.map(skill => <span key={skill} className="tag tag-accent">{skill}</span>)}
              </div>
            </div>
            
            <div className="skill-group">
              <h3>Frontend</h3>
              <div className="tag-container">
                {skills.frontend.map(skill => <span key={skill} className="tag tag-accent">{skill}</span>)}
              </div>
            </div>
            
            <div className="skill-group">
              <h3>Architecture</h3>
              <div className="tag-container">
                {skills.architecture.map(skill => <span key={skill} className="tag tag-purple">{skill}</span>)}
              </div>
            </div>
            
            <div className="skill-group">
              <h3>Databases</h3>
              <div className="tag-container">
                {skills.databases.map(skill => <span key={skill} className="tag tag-green">{skill}</span>)}
              </div>
            </div>
            
            <div className="skill-group">
              <h3>DevOps & AI</h3>
              <div className="tag-container">
                {[...skills.devops, ...skills.mlops].map(skill => <span key={skill} className="tag tag-blue">{skill}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="content">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="section-tag">Get In Touch</span>
              <h2>Let's Build Something Great</h2>
              <p>Ready to transform your technical challenges into solutions? Let's discuss how I can help your team succeed.</p>
              
              <div className="contact-methods">
                <a href="mailto:carlosj12336@gmail.com" className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">carlosj12336@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/jose-carlos-huerta-garcia-773952212/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">Connect with me</span>
                  </div>
                </a>
                
                <a href="https://github.com/jcarloshg" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="contact-icon">🐙</span>
                  <div>
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">jcarloshg</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="contact-cta-box">
              <h3>Ready to start?</h3>
              <p>Book a free 30-minute consultation to discuss your project.</p>
              <a href="mailto:carlosj12336@gmail.com?subject=Free%20Consultation%20Request" className="cta-button">
                Schedule a Call →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <span className="footer-logo">JCHG</span>
          <p>Building scalable systems with purpose</p>
          <p className="footer-year">© 2026 Jose Carlos Huerta Garcia</p>
        </div>
      </footer>
    </div>
  )
}

export default App