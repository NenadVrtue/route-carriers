import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ComHero from '../components/ComHero'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Values from '../components/values'

const Company = () => {
    return (
        <Layout>
            <Seo title="Company" description="This is a meta description"></Seo>

            <ComHero></ComHero>

            {/* First About Section */}

            <section className='overflow-hidden mb-8  sm:mb-12 md:mt-8 lg:mt-16  flex flex-1 flex-col-reverse md:flex-row gap-x-8 gap-y-4 lg:gap-12 relative'>

                <div className="absolute w-full md:w-8/12 -z-10 h-full bg-gray-100 bottom-0 right-0"></div> 
                <StaticImage src="../images/About1.png" alt="truck in the about section"
                placeholder="blurred"
                className="md:w-2/4 md:my-16"
                quality="100"
                
                />
            <div className="px-8 flex-col my-12 py-4 md:w-2/4 md:px-0">
                <h2 data-sal="slide-left"
                  data-sal-delay="700"
                  data-sal-easing="ease"
                  data-sal-duration= "700"
                  className="font-display text-4xl  lg:text-5xl text-main-blue">
                    ABOUT US
                </h2>
                <div  className="bg-main-red w-24 h-2 my-7"></div>
                <p data-sal="slide-left"
                  data-sal-delay="700"
                  data-sal-easing="ease"
                 data-sal-duration= "700"
                   className="font-body font-main max-w-prose pr-2 text-main-blue mb-10 sm:mb-12">
                    Route Carriers is a trucking company dedicated to providing reliable, affordable and secure transportation and logistics services throughout the United States. Our focus is customer satisfaction from the moment you order our services, all the way to the last box unloaded from our trailers.  We are offering a breath of fresh air in a stale industry that has forgotten about customer service and going above and beyond for their clients.  We are different,and that’s a good thing.
                </p>
                 <Link
                    to="/apply-now"
                    className="w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Apply Now
                  </Link>
            </div>
        </section>

        {/* Second About Section */}
        <section className='overflow-hidden mb-8  sm:mb-12 md:mt-8 lg:mt-16  flex flex-1 flex-col-reverse md:flex-row-reverse gap-x-8 gap-y-4 lg:gap-12 relative '>

                
                <StaticImage src="../images/About2.png" alt="truck in the about section"
                placeholder="tracedSVG"
                className="md:w-2/4 md:my-16"
                quality="100"
                
                />
            <div className="px-8 flex-col my-12 py-4 md:w-2/4 xl:pl-20 2xl:pl-20 md:px-4 xl:transform xl:translate-x-20  2xl:translate-x-1/5 2xl:-ml-32 3xl:translate-x-1/4 3xl:-ml-2 ">
                <h2 data-sal="slide-right"
                  data-sal-delay="700"
                  data-sal-easing="ease"
                  data-sal-duration= "700"
                  className="font-display text-4xl  lg:text-5xl text-main-blue">
                    OUR MISSION
                </h2>
                <div  className="bg-main-red w-24 h-2 my-7"></div>
                <p data-sal="slide-right"
                  data-sal-delay="700"
                  data-sal-easing="ease"
                 data-sal-duration= "700"
                   className="font-body font-main max-w-prose pr-2 2xl:pr-16 text-main-blue mb-10 sm:mb-12">
                    Our mission is to delivery our cargo and freight in a safe and timely manner. We are a reliable transportation partner for
                    your business, and always deliver.
                </p>
                 <Link
                    to="/apply-now"
                    className="w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Apply Now
                  </Link>
            </div>
        </section>
        <Values></Values>
        {/* CTA */}
        <section className="py-16 flex flex-col items-center">
            <h2 className="font-display text-4xl  lg:text-5xl text-main-blue mt-4">
                JOIN OUR TEAM, we value drivers!
            </h2>
             <Link
                    to="/apply-now"
                    className=" mt-7 w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover  mb-8 "
                  >
                    Apply Now
                  </Link>
        </section>

        </Layout>
    )
}

export default Company
