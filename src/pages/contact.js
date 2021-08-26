import * as React from "react"
import ContactForm from '../components/contactForm'
import ContactHero from '../components/contactHero'
import Seo from "../components/seo" 
import Layout from '../components/layout'


const  ContactPage = () => {
    return (
        <Layout>
            <Seo title="Contact" description="This is a meta description"></Seo>
            <ContactHero></ContactHero>
            <ContactForm></ContactForm>
           
        </Layout>
    )
}

export default ContactPage
