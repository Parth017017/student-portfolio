import './Education.css'

function Education({ personalInfo }) {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-card glass-card">
          <div className="education-header">
            <div className="education-icon">🎓</div>
            <div className="education-info">
              <h3>{personalInfo.college}</h3>
              <p className="degree">{personalInfo.degree}</p>
            </div>
          </div>

          <div className="education-details">
            <div className="detail-item">
              <span className="detail-label">Current Year:</span>
              <span className="detail-value">{personalInfo.year}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Field:</span>
              <span className="detail-value">Computer Science and Engineering</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className="status-badge">Pursuing</span>
            </div>
          </div>

          <div className="education-description">
            <p>
              Pursuing a comprehensive education in Computer Engineering with a focus on data science, 
              machine learning, and web development. Actively engaged in learning practical skills through 
              internships and project-based work.
            </p>
          </div>

          <div className="coursework">
            <h4>Key Coursework:</h4>
            <div className="coursework-list">
              <span className="course-badge">Data Structures</span>
              <span className="course-badge">Algorithms</span>
              <span className="course-badge">Database Management</span>
              <span className="course-badge">Web Development</span>
              <span className="course-badge">Machine Learning</span>
              <span className="course-badge">Software Engineering</span>
            </div>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content glass-card">
                <h4>Expected Graduation</h4>
                <p>{personalInfo.expectedGraduation || '2028'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
