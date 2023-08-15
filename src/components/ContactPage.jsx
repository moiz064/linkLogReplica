import React from 'react'

import {
  Footer,
  ContactHero,
  AboutUs,
  ConRegions,
  UserForm

} from '../components'

const ContactPage = () => {
  return (
    <div className='bg-[#efefef]'>
      <ContactHero />
      <AboutUs />
      <ConRegions />
      <UserForm />
      <Footer />
    </div>
  )
}

export default ContactPage