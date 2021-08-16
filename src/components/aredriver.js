import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Aredriver = () => {
    return (
        <section className=' mb-8  xl:mb-24 md:mt-8 lg:mt-16  flex flex-1 flex-col md:flex-row gap-x-8 gap-y-4 lg:gap-12 relative max-w-7xl mx-auto'>

            
            
            <div className="px-8 flex-col my-12 py-4 lg:w-2/6 ">
                <h2 className="font-display text-4xl  lg:text-5xl text-main-blue">
                    Are you a driver?
                </h2>
                <div className="bg-main-red w-24 h-2 my-7"></div>
                <p className="font-body font-main max-w-prose pr-2 text-main-blue mb-10 sm:mb-12">
                    Got Eperience ? Willing to join our team?
                    Hit that apply button and become part of our team today!
                </p>
                 <Link
                    to="/apply-now"
                    className="w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Apply Now
                  </Link>
            </div>

            <StaticImage src="../images/truck-drive.png" alt="truck in are you a driver"
            className=""
            placeholder="tracedSVG"
            objectFit="contain"
            quality="100"
            />
        </section>
    )
}

export default Aredriver
