import React from 'react'
import Footer from './Footer'
import ContactHero from './ContactHero'
import AboutUs from './AboutUs'
import ConRegions from './ConRegions'
import UserForm from './UserForm'

const ContactPage = () => {
    return (
        <div >
          <ContactHero />
          <AboutUs />
          <ConRegions />
          <UserForm />
          <Footer />
        </div>
      )
}

export default ContactPage