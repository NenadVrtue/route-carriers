import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ComHero from '../components/ComHero'
import Header from '../components/header'

import Layout from '../components/layout'

const Company = () => {
    return (
        <Layout>
            <Header></Header>
            <ComHero></ComHero>
        </Layout>
    )
}

export default Company
