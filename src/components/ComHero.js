import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const ComHero = () => {
    return (
       
             <section className="relative h-screen overflow-hidden">

               <div className="absolute z-10 bottom-4 left-1/2 -ml-4">
          <svg width={40} height={120} xmlns="http://www.w3.org/2000/svg">
            <path  className="animate-pulse-1" d="m36.282 0.75664c-1.0337-1.0089-2.7096-1.0089-3.7434 0l-14.01 13.673-14.01-13.673c-1.0337-1.0089-2.7097-1.0089-3.7434 0-1.0337 1.0089-1.0337 2.6445 0 3.6534l15.882 15.5c1.0337 1.0089 2.7096 1.0089 3.7433 0l15.882-15.5c1.0337-1.0089 1.0337-2.6445 0-3.6534z"  fill="#EC202B70"/>
            <path className="animate-pulse" d="m36.282 21.423c-1.0337-1.0088-2.7096-1.0088-3.7434 0l-14.01 13.673-14.01-13.673c-1.0337-1.0088-2.7097-1.0088-3.7434 0-1.0337 1.0089-1.0337 2.6446 0 3.6534l15.882 15.5c1.0337 1.0089 2.7096 1.0089 3.7433 0l15.882-15.5c1.0337-1.0088 1.0337-2.6445 0-3.6534z"  fill="#EC202B85" />
            <path className="animate-pulse-2" d="m36.282 42.09c-1.0337-1.0089-2.7096-1.0089-3.7434 0l-14.01 13.673-14.01-13.673c-1.0337-1.0089-2.7097-1.0089-3.7434 0-1.0337 1.0088-1.0337 2.6445 0 3.6533l15.882 15.5c1.0337 1.0089 2.7096 1.0089 3.7433 0l15.882-15.5c1.0337-1.0088 1.0337-2.6445 0-3.6533z"  fill="#EC202B" />
          </svg>
         </div>
            <StaticImage src="../images/HeroCom.png"
                    alt="company page background"
                    placeholder="tracedSVG" 
                    className="h-full w-full"
                    quality="100">
                    
                        
            </StaticImage>

            <main className="absolute top-0 max-w-7xl mx-auto px-8 md:px-4 xl:px-2 flex items-center justify-center h-full  w-full 2xl:w-7xl xl:transform xl:translate-x-20  2xl:translate-x-1/4 2xl:-ml-2 ">
            <div  data-sal="slide-right"
                  data-sal-delay="700"
                  data-sal-easing="ease"
                  data-sal-duration= "700" 
                  className="mt-80 mb-72  w-full text-left"
                  >
              <h1 className="font-display mx-auto  sm:w-full  text-big-m leading-none sm:text-6xl  text-white md:text-big">
                A PARTNER FOR YOUR<br></br>
                LOGISTICS
              </h1>
              <p className="font-body mt-26  sm:w-full text-2xl md:text-sub mx-auto text-white font-medium sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
                Join our team!
              </p>
              <div className="mt-9 sm:mt-10 sm:flex  lg:justify-start">
                <div className="rounded-md shadow">
                  <Link 
                  to="/apply-now"
                  className="w-4/5 sm:w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Apply Now
                 </Link>
                </div>
               
              </div>
            </div>
          </main>
        </section>
        
    )
}

export default ComHero
