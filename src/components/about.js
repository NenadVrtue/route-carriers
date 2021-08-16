import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const About = () => {
    return (
        <section className='overflow-hidden mb-8  sm:mb-12 md:mt-8 lg:mt-16  flex flex-1 flex-col-reverse md:flex-row gap-x-8 gap-y-4 lg:gap-12 relative'>

            <div className="absolute w-full md:w-8/12 -z-10 h-full bg-gray-100 bottom-0 right-0"></div> 
            <StaticImage src="../images/AboutImage.png" alt="truck in the about section"
            placeholder="tracedSVG"
            className="md:w-2/4 md:my-16"
            quality="100"
            
            />
            <div className="px-8 flex-col my-12 py-4 md:w-2/4 md:px-0">
                <h2 data-sal="slide-left"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                  className="font-display text-4xl  lg:text-5xl text-main-blue">
                    TRANSPORTATION YOU CAN TRUST
                </h2>
                <div  className="bg-main-red w-24 h-2 my-7"></div>
                <p data-sal="slide-left"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                 
                   className="font-body font-main max-w-prose pr-2 text-main-blue mb-10 sm:mb-12">
                    At Route Carriers our focus is 100% customer satisfaction.  Our team of professional and experienced drivers ensure freight is delivered safe and on time.  We maintain the highest standards and transparency in everything we do. We are also committed to offering the best driving jobs in the industry.  If you’re looking for a transportation company that has room to grow and is committed to your success, apply today!
                </p>
                 <Link
                    to="/company"
                    className="w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Learn More
                  </Link>
            </div>
        </section>
    )
}

export default About
