import { useState } from 'react'
import './Contact.css'

function Contact({ personalInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.subject && formData.message) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and discuss your ideas</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card glass-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>{personalInfo.phone}</p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">🎓</div>
              <h3>College</h3>
              <p>{personalInfo.college}</p>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">🔗</div>
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
                <a href={`mailto:${personalInfo.email}`} className="social-btn">Email</a>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>

            {isSubmitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
