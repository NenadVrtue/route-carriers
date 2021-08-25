import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className="bg-main-blue w-full text-white pt-12 flex flex-col  items-center">
            <div className="flex flex-col space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto pb-11">
                <div className="flex flex-col items-start mr-4 sm:pb-8 lg:pb-0 justify-between">
                    <StaticImage
                    src="../images/logo-transparent.png"
                    alt="logo"
                    className="w-56 ">
                        
                    </StaticImage>
                    <div className="space-x-6 flex ml-20 md:ml-8 mt-10 ">
                        <a href="https://www.facebook.com/routecarriers" target="_blank" rel="noreferrer">
                            <StaticImage src="../images/fb-icon.png" alt="facebook icon"></StaticImage>
                        </a>
                         
                    
                         <a href="https://www.instagram.com/routecarriers/" target="_blank" rel="noreferrer">
                            <StaticImage src="../images/ig-icon.png" alt="instagram icon"></StaticImage>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center space-y-2 md:pl-16 pt-4 sm:pt-0 sm:pb-8 sm:pl-6 lg:pb-0">
                    <Link to="/" className="uppercase font-body font-medium" activeClassName="font-bold">Home</Link>
                    <Link to="/company" className="uppercase font-body font-medium" activeClassName="font-bold" >Company</Link>
                    <Link to="/careers" className="uppercase font-body font-medium" activeClassName="font-bold" >Careers</Link>
                      <Link to="/privacy-policy" className="uppercase font-body font-medium" activeClassName="font-bold" >Privacy Policy</Link>
                    
                </div>

                <div className="flex flex-col justify-between items-center ">
                     <Link to="/contact" className="uppercase font-body font-bold" activeClassName="font-bold">Contact</Link>
                     <p className="font-body font-bold">+123 456 789</p>
                     <p className="font-body font-bold">hello@routecarriers.com</p>
                </div>

                <div className="flex flex-col justify-between items-center sm:pl-16">
                    <p className="font-body font-medium uppercase pb-4">Work with us</p>
                    <Link
                    to="/apply-now"
                    className="w-48 flex items-center justify-center px-4 py-1 border-4 border-main-red text-sub font-medium font-body text-white bg-main-red hover:bg-main-red-hover hover:border-main-red-hover   "
                  >
                    Apply Now
                  </Link>
                </div>

            </div>
           <div className="mt-4 mb-2">
            
            © {new Date().getFullYear()} Route Carriers, made by <a href="https://libertetech.com/" target="blank">@libertetech</a>
            </div>
        </footer>
        
    )
}

export default Footer
