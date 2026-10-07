import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({ personalInfo }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Parth Prajapati</h3>
            <p>A passionate developer and data scientist building amazing things on the web.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tech Stack</h4>
            <div className="footer-tech">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`}>Email</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p>Built with <span className="heart">❤️</span> using React + Vite</p>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration"></div>
      </div>
    </footer>
  )
}

export default Footer
