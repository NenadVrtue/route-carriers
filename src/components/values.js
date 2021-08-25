import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

const Values = () => {
    return (
        <section className=" bg-gray-100 flex flex-col items-center relative pt-8 xl:pt-14 pb-8 xl:pb-20 overflow-hidden">
            <h2 className="font-display text-4xl  lg:text-5xl text-main-blue">OUR VALUES</h2>
             <div className="bg-main-red w-24 h-2 my-7"></div>
             <p className="font-body font-main max-w-prose pr-2 text-main-blue mb-10 sm:mb-12">We are committed to an exceptional customer experience.</p>
             
             <div className=" lg:grid lg:grid-cols-3 gap-x-8 lg:gap-x-16 xl:justify-between xl:gap-x-28">
                
                 <div
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9  my-8">
                    <StaticImage src="../images/family.png"
                    alt="family icon"
                    placeholder="tracedSVG"></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">Family</h3>
                    <div className="bg-main-red w-24 h-1 mb-4 mt-4"></div>
                    <p className="text-center font-body text-white leading-6 px-8">We are a family run business and treat everyone like they’re part of 
                    the family.</p>
                 </div>
                 
                 
                 <div 
                    
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9  my-8">
                    <StaticImage src="../images/integrity.png"
                    alt="integrity icon"
                    placeholder="tracedSVG"
                    ></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">Integrity</h3>
                    <div className="bg-main-red w-24 h-1 mb-4 mt-4"></div>
                    <p className="text-center font-body text-white leading-6">We believe our integrity defines us, and we won’t do anything to damage our trust with you. </p>
                 </div>
                 
                 
                 
                 <div 
                    
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9  my-8">
                    <StaticImage src="../images/respect.png"
                    alt="respect icon"
                    placeholder="tracedSVG"></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">Teamwork</h3>
                    <div className="bg-main-red w-24 h-1 mb-4 mt-4"></div>
                    <p className="text-center font-body text-white leading-6">We are a team of transportation experts, and from drivers to executives, we all work together to ensure your items arrive on time. </p>
                 </div>
                 
                 <div 
                    
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9  my-8">
                    <StaticImage src="../images/safety.png"
                    alt="safety icon"
                    placeholder="tracedSVG"
                    ></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">Safety</h3>
                    <div className="bg-main-red w-24 h-1 mb-4"></div>
                    <p className="text-center font-body text-white leading-6">We maintain strict policies and procedures to ensure cargo and employees are safe. </p>
                 </div>

                <div
                    
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-14  my-8">
                    <StaticImage src="../images/Customers.png"
                    alt="customers icon"
                    placeholder="tracedSVG"></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">CUSTOMERS</h3>
                    <div className="bg-main-red w-24 h-1 mb-4"></div>
                    <p className="text-center font-body text-white leading-6">Customers are always our number one priority, and it’s our goal to make every interaction with our company positive.</p>
                 </div>
                 
                 <div 
                    
                    className="bg-main-blue w-330 flex flex-col items-center px-5 pt-8 pb-9  my-8">
                    <StaticImage src="../images/responsibility.png"
                    alt="responsibility icon"
                    height={116}
                    placeholder="tracedSVG"></StaticImage>
                    <h3 className="text-white font-display text-4xl pt-4 pb-2.5">responsibility</h3>
                    <div className="bg-main-red w-24 h-1 mb-4 "></div>
                    <p className="text-center font-body text-white leading-6">In addition to trucking services, we aim to be a positive part of our community and provide great careers for our employees </p>
                 </div>



             </div>

            
                 
             
             

            
        </section>
    )
}

export default Values