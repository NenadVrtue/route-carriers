import React from 'react'
import { Link } from 'gatsby'

const ApplyCTA = () => {
    return (
        
           
        <section className="py-24 flex flex-col items-center bg-gray-100">
            <h2 className="font-display text-4xl  text-main-blue ">
                Don’t see the answer you’re looking for?
            </h2>
            <p className="text-center font-body max-w-prose text-main-blue leading-6 my-8 ">If you have more questions, we’re happy to help. Simply submit your questions on our 
                “contact us” page, and we’ll get back to you within 24 hours.</p>
             <Link
                    to="/contact"
                    className="  w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Contact Us
                  </Link>
        </section> 
    
    )
}

export default ApplyCTA
