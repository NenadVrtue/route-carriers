import React from 'react'
import ApplyCTA from '../components/applyCTA'
import ApplyFAQ from '../components/applyFAQ'
import ApplyForm from '../components/applyForm'
import ApplyHero from '../components/applyHero'
import Layout from "../components/layout"
import SEO from '../components/seo'

const ApplyNow = () => {
    return (
        <Layout>
            <SEO title='Apply Now' description='Career Opportunities'></SEO>
            <ApplyHero></ApplyHero>
            <ApplyForm></ApplyForm>
            <ApplyFAQ></ApplyFAQ>
            <ApplyCTA></ApplyCTA>
        </Layout>
    )
}

export default ApplyNow
