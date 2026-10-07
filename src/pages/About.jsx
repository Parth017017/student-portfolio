import AboutComponent from '../components/About'

function AboutPage({ personalInfo }) {
  return (
    <main>
      <AboutComponent personalInfo={personalInfo} />
    </main>
  )
}

export default AboutPage
