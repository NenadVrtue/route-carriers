import React from 'react'
import ApplyCTA from '../components/applyCTA'
import ApplyFAQ from '../components/applyFAQ'
import ApplyForm from '../components/applyForm'
import ApplyHero from '../components/applyHero'
import Layout from "../components/layout"

const ApplyNow = () => {
    return (
        <Layout>
            
            <ApplyHero></ApplyHero>
            <ApplyForm></ApplyForm>
            <ApplyFAQ></ApplyFAQ>
            <ApplyCTA></ApplyCTA>
        </Layout>
    )
}

export default ApplyNow
