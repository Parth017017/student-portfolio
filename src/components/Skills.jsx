import './Skills.css'

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Expertise in various programming languages and technologies</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass-card" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="skill-icon">
                {skill.includes('C') && !skill.includes('++') && '🔤'}
                {skill === 'C++' && '⬆️'}
                {skill === 'Python' && '🐍'}
                {skill === 'Java' && '☕'}
                {skill === 'JavaScript' && '⚡'}
                {skill === 'React' && '⚛️'}
                {skill === 'HTML' && '🏗️'}
                {skill === 'CSS' && '🎨'}
                {skill === 'MySQL' && '🗄️'}
                {skill === 'Machine Learning' && '🤖'}
                {skill === 'Data Science' && '📊'}
                {skill === 'Git' && '🌿'}
                {skill === 'GitHub' && '🐙'}
              </div>
              <h3>{skill}</h3>
              <div className="skill-bar">
                <div className="skill-progress"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
