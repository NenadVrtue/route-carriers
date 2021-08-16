import React from 'react'
import {Link} from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const Cards = () => {
    return (
        <section className="flex flex-col items-center relative pb-8 overflow-hidden">
            <h2 className="font-display text-4xl  lg:text-5xl text-main-blue">DRIVE FOR THE BEST</h2>
             <div className="bg-main-red w-24 h-2 my-7"></div>
             
             <div className=" lg:grid lg:grid-cols-3 gap-x-8 lg:gap-x-16 xl:justify-between xl:gap-x-28">
                 <div
                    data-sal="slide-right"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                    data-sal-duration= "700"
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9 justify-between my-8">
                    <StaticImage src="../images/respect.png"
                    alt="respect icon"
                    placeholder="tracedSVG"></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">Support & Respect</h3>
                    <div className="bg-main-red w-24 h-1 mb-4"></div>
                    <p className="text-center font-body text-white leading-6">Drivers are the lifeblood of our company, and we know that.  We’re committed to giving you the support and respect you deserve.</p>
                 </div>
                 
                 
                 <div 
                    data-sal="slide-up"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                    data-sal-duration= "700"
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9 justify-between my-8">
                    <StaticImage src="../images/safety.png"
                    alt="safety icon"
                    placeholder="tracedSVG"
                    ></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">Safety Number One</h3>
                    <div className="bg-main-red w-24 h-1 mb-4"></div>
                    <p className="text-center font-body text-white leading-6">The safety of our cargo and our employees is our number on priority.  We maintain a safe workplace for you to build a successful career. </p>
                 </div>
                 
                 
                 
                 <div 
                    data-sal="slide-left"
                    data-sal-delay="500"
                    data-sal-easing="ease"
                    data-sal-duration= "700"
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9 justify-between my-8">
                    <StaticImage src="../images/pay.png"
                    alt="respect icon"
                    placeholder="tracedSVG"></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">Excellent Pay</h3>
                    <div className="bg-main-red w-24 h-1 mb-4"></div>
                    <p className="text-center font-body text-white leading-6">We value our drivers and to show that, we offer extremely competitive compensation packages including bonuses and benefits. </p>
                 </div>
                 
             </div>

             <Link
                    to="/apply-now"
                    className="w-48 flex items-center justify-center px-4 py-1 border-4 border-main-blue text-sub font-medium font-body text-white bg-main-blue hover:bg-white hover:border-white hover:text-main-red   "
                  >
                      Apply Now
                  </Link>

            <div className="w-full h-1/2 bg-main-red absolute bottom-0 -z-10"></div>
        </section>
    )
}

export default Cards
