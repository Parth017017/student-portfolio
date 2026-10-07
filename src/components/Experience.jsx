import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-card glass-card">
          <div className="experience-header">
            <div className="company-info">
              <h3>Oasis Infobyte</h3>
              <p className="position">Data Science Intern</p>
            </div>
            <span className="badge">Internship</span>
          </div>

          <p className="duration">📅 Currently Working</p>

          <div className="experience-content">
            <h4>Key Responsibilities & Skills:</h4>
            <ul className="responsibilities">
              <li><span className="skill-tag">Data Analysis</span> - Analyzing large datasets to derive meaningful insights</li>
              <li><span className="skill-tag">Machine Learning</span> - Developing and training ML models for predictive analytics</li>
              <li><span className="skill-tag">Python</span> - Writing efficient code for data processing and analysis</li>
              <li><span className="skill-tag">Data Visualization</span> - Creating interactive dashboards with Power BI and Matplotlib</li>
              <li><span className="skill-tag">Model Building</span> - Implementing supervised and unsupervised learning algorithms</li>
            </ul>
          </div>

          <div className="skills-used">
            <h4>Technologies & Tools:</h4>
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Pandas</span>
              <span className="tech-badge">NumPy</span>
              <span className="tech-badge">Scikit-learn</span>
              <span className="tech-badge">Power BI</span>
              <span className="tech-badge">SQL</span>
            </div>
          </div>
        </div>

        <div className="achievements">
          <h3>Achievements</h3>
          <div className="achievement-grid">
            <div className="achievement-item glass-card">
              <h4>📊 Projects Completed</h4>
              <p>Successfully completed multiple data science projects involving analysis and ML model development</p>
            </div>
            <div className="achievement-item glass-card">
              <h4>🎯 Problem Solving</h4>
              <p>Solved complex data problems and provided actionable insights to stakeholders</p>
            </div>
            <div className="achievement-item glass-card">
              <h4>🚀 Continuous Learning</h4>
              <p>Expanded technical expertise in ML, data analysis, and visualization techniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
