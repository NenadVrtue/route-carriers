import React from 'react'
import ContactForm from '../components/contactForm'
import ContactHero from '../components/contactHero'
import Header from '../components/header'
import Layout from '../components/layout'

const  Contact = () => {
    return (
        <Layout>
            <Header></Header>
            <ContactHero></ContactHero>
            <ContactForm></ContactForm>
        </Layout>
    )
}

export default Contact
