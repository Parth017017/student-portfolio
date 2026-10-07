import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Student Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Vite showcasing projects and skills with smooth animations and glassmorphism design.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      icon: '💼',
      link: '#'
    },
    {
      id: 2,
      title: 'Telecom Customer Churn Analysis',
      description: 'Analyzed telecom customer data to identify churn patterns using machine learning algorithms. Created predictions and provided actionable insights for retention.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
      icon: '📊',
      link: '#'
    },
    {
      id: 3,
      title: 'House Price Prediction',
      description: 'Developed a regression model to predict house prices based on various features. Implemented data preprocessing, feature engineering, and model optimization.',
      technologies: ['Python', 'NumPy', 'Scikit-learn', 'Machine Learning'],
      icon: '🏠',
      link: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Real-time weather application with current weather, forecasts, and location-based services. Features responsive design and beautiful UI with weather animations.',
      technologies: ['React', 'API Integration', 'CSS3', 'JavaScript'],
      icon: '🌤️',
      link: '#'
    },
    {
      id: 5,
      title: 'Movie Recommendation System',
      description: 'Intelligent movie recommendation engine using collaborative filtering and content-based approaches. Provides personalized movie suggestions based on user preferences.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'Algorithms'],
      icon: '🎬',
      link: '#'
    },
    {
      id: 6,
      title: 'Stock Price Analyzer',
      description: 'Data-driven stock analysis tool with trend prediction and market insights. Visualizes historical data and predicts future trends using time-series analysis.',
      technologies: ['Python', 'Data Visualization', 'Analysis', 'APIs'],
      icon: '📈',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my best work and technical expertise</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1.02-2.44l2.34-2.34a3.37 3.37 0 0 0-1.02-2.44M9 7h6m0 0H9m6 0v6m0 0v-6"></path>
                  </svg>
                  GitHub
                </a>
                <a href={project.link} className="project-btn btn-demo" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1"></circle>
                    <path d="M21 12c0 1.268-.578 2.519-1.595 3.432-2.003 1.708-5.349 2.85-8.405 2.85-3.055 0-6.401-1.142-8.404-2.85C3.578 14.519 3 13.268 3 12c0-1.268.578-2.519 1.595-3.432C6.598 6.86 9.944 5.718 13 5.718c3.055 0 6.401 1.142 8.405 2.85C20.422 9.481 21 10.732 21 12Z"></path>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
