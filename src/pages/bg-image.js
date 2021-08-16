import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { getImage} from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image-es5'

const GbiBridged = () => {
    const { backgroundImage123} = useStaticQuery(
        graphql`
           query {
               backgroundImage123: file(relativePath: {eq: "hero.png"}) {
            childImageSharp {
            gatsbyImageData(
                width: 2000
                quality: 50
       
                webpOptions: {quality: 70}
      )
    }
  }
}    
        `
    )
    
    const image = getImage(backgroundImage123)
    const bgImage = convertToBgImage(image)
    
    
    return (
       <BackgroundImage Tag="section" 
       {...bgImage}>
           <div className="h-screen">
               ajsdasd
           </div>
       </BackgroundImage>
    )
}

export default GbiBridged
