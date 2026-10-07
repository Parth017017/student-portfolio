import ContactComponent from '../components/Contact'

function ContactPage({ personalInfo }) {
  return (
    <main>
      <ContactComponent personalInfo={personalInfo} />
    </main>
  )
}

export default ContactPage
