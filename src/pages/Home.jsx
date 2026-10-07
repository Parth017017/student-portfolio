import Hero from '../components/Hero'

function Home({ personalInfo }) {
  return (
    <main>
      <Hero personalInfo={personalInfo} />
    </main>
  )
}

export default Home
