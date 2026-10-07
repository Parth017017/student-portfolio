import { useEffect, useState } from 'react'
import './Projects.css'

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Parth017017/repos')

        if (!response.ok) {
          throw new Error(`Failed to load repositories: ${response.status}`)
        }

        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load repositories')
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my GitHub repositories</p>

        <div className="projects-grid">
          {loading && (
            <div className="project-card glass-card">
              <p className="project-description">Loading repositories...</p>
            </div>
          )}

          {error && (
            <div className="project-card glass-card">
              <p className="project-description">Error: {error}</p>
            </div>
          )}

          {!loading && !error && repos.map((repo, index) => (
            <div key={repo.id} className="project-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-header">
                <div className="project-icon">📦</div>
                <h3>{repo.name}</h3>
              </div>

              <div className="project-links">
                <a href={repo.html_url} className="project-btn" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1.02-2.44l2.34-2.34a3.37 3.37 0 0 0-1.02-2.44M9 7h6m0 0H9m6 0v6m0 0v-6"></path>
                  </svg>
                  Repository
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
