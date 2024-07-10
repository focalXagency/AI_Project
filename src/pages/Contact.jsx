import React from 'react'
import AskedQuestions from '../components/AskedQuestions/AskedQuestions'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'


function Contact() {
  return (
    <div>
      <ContactInfo/>
      <ContactForm />
      <AskedQuestions />
    </div>
  )
}

export default Contact