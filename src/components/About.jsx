import './About.css'

function About({ personalInfo }) {
  const skills = ['Problem Solving', 'Data Analysis', 'Web Development', 'Machine Learning']

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am <span className="highlight">{personalInfo.name}</span>, a {personalInfo.year} student at <span className="highlight">{personalInfo.college}</span> pursuing a degree in {personalInfo.degree}.
            </p>

            <p>
              Passionate about <span className="highlight">Data Science</span>, <span className="highlight">Artificial Intelligence</span>, and <span className="highlight">React Development</span>. Currently working as a <span className="highlight">{personalInfo.internship}</span>.
            </p>

            <p>
              Interested in building scalable applications and learning modern technologies. I combine technical expertise with creative problem-solving to deliver impactful solutions. My journey in tech has been driven by curiosity and a passion for continuous learning.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h4>13+</h4>
                <p>Skills</p>
              </div>
              <div className="stat">
                <h4>1+</h4>
                <p>Internships</p>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {skills.map((skill, index) => (
              <div key={index} className="highlight-card glass-card">
                <div className="highlight-icon">
                  {index === 0 && '💭'}
                  {index === 1 && '📊'}
                  {index === 2 && '💻'}
                  {index === 3 && '🤖'}
                </div>
                <h3>{skill}</h3>
                <p>
                  {index === 0 && 'Strong analytical and problem-solving capabilities'}
                  {index === 1 && 'Expertise in data analysis and visualization'}
                  {index === 2 && 'Full-stack web development with React and modern frameworks'}
                  {index === 3 && 'Machine learning model development and deployment'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
