import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Cards from "../components/cards.js"
import Aredriver from "../components/aredriver"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="This is a meta description" />
    
    <Hero/>
    
    <About></About>
    <Cards></Cards>
    <Aredriver></Aredriver>
  </Layout>
)

export default IndexPage
