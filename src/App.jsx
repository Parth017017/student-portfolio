import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/About'
import EducationPage from './pages/Education'
import ExperiencePage from './pages/Experience'
import SkillsPage from './pages/Skills'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'
import './App.css'

function App() {
  // Personal Information
  const personalInfo = {
    name: 'Parth Prajapati',
    title: 'Data Science Intern | Computer Science and Engineering Student',
    bio: 'I am a 3rd-year Computer Science and Engineering student at CHARUSAT University passionate about Data Science, Machine Learning, and Web Development.',
    college: 'CHARUSAT University',
    degree: 'B.Tech in Computer Science and Engineering',
    year: '3rd Year',
    expectedGraduation: '2028',
    internship: 'Data Science Intern at Oasis Infobyte',
    email: 'parth.prajapati@example.com',
    phone: '+91-XXXXXXXXXX',
    interests: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Web Development'],
    hobbies: ['Cricket', 'Chess']
  }

  // Skills Array
  const skills = [
    'C',
    'C++',
    'Python',
    'Java',
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'SQL',
    'Machine Learning',
    'Data Science',
    'Git',
    'GitHub'
  ]

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home personalInfo={personalInfo} />} />
        <Route path="/about" element={<AboutPage personalInfo={personalInfo} />} />
        <Route path="/education" element={<EducationPage personalInfo={personalInfo} />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage skills={skills} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage personalInfo={personalInfo} />} />
      </Routes>
      <Footer personalInfo={personalInfo} />
    </div>
  )
}

export default App
