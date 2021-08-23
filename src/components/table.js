import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Table = () => {
    return (
        <section className="  relative px-8 py-16 bg-main-blue text-white font-body ">
           <div className="absolute hidden lg:block  -bottom-16 right-0 " data-sal="slide-left"
            data-sal-delay="500"
             data-sal-easing="ease"
             data-sal-duration= "700"
             >
            <StaticImage src="../images/truckcrop.png" alt="truck in are you a driver"
            className=""
            placeholder="tracedSVG"
            
            objectFit="contain"
            quality="100"
            />
             </div>
          


            <div className="md:grid md:grid-cols-3 mx-auto max-w-7xl md:gap-x-8 md:divide-x-2 md:divide-dashed">

             {/* fIRST Column */}
            <div className=" pb-16" >
                <h2 className="text-2xl font-medium">Expectations</h2>  
                <div className="bg-main-red w-24 h-1 mt-6 mb-8"></div>
                <ul className="list-inside list-disc">
                    <li className="font-normal pb-4">Perform pre-and post-trip safety inspections </li>
                    
                    <li className="font-normal pb-4">Maintain and clean equipment regularly </li>

                    <li className="font-normal pb-4">Verify paperwork for completeness and 
                    accuracy </li>

                    <li className="font-normal pb-4">Ability to follow written and/or oral instructions</li>
                    
                    <li className="font-normal pb-4">Ability to read, interpret and apply laws, rules,   
                    regulations policies, and/or procedures</li>
                     
                </ul>
            </div>

            {/* Second Column */}
            <div className="md:px-8 pb-16 md:pb-0 ">
                <h2 className="text-2xl font-medium">Requirements</h2>  
                <div className="bg-main-red w-24 h-1 mt-6 mb-8"></div>
                <ul className="list-inside list-disc">
                    <li className="font-normal pb-4">2 year of Class A driving experience </li>
                    
                    <li className="font-normal pb-4">Valid Class A, Commercial Driver’s License</li>

                    <li className="font-normal pb-4">No endorsements required, but highly  
                    preferred </li>

                    <li className="font-normal pb-4">Ability to pass a drug test</li>
                    
                    <li className="font-normal pb-4">No DUI/DWI within the past 3 years</li>
                     
                    <li className="font-normal pb-4">No more than 2 moving violations in the past 3 years</li>

                    <li className="font-normal pb-4">Minimum 23 years of age</li>

                    <li className="font-normal pb-4">Must be able to pass both the hair follicle and urine test</li>

                    <li className="font-normal pb-4">Must be eligible to work in the US</li>
                </ul>
            </div>

            {/* tHIRD Column */}
            <div className="md:px-8">
                <h2 className=" text-2xl font-medium">Benefits</h2>  
                <div className="bg-main-red w-24 h-1 mt-6 mb-8"></div>
                <ul className="list-inside list-disc">
                    <li className="font-normal pb-4">Starting pay $.60 per mile </li>
                    
                    <li className="font-normal pb-4">Great Pay – Steady Work – New Equipment</li>

                    <li className="font-normal pb-4">$1,000 sign-on Bonus </li>

                    <li className="font-normal pb-4">$500 Bonus for Every Driver Referral</li>
                
                     
                </ul>
            </div>
            </div>
        </section>
    )
}

export default Table
