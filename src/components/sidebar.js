import React from 'react'
import { Link } from 'gatsby'
import { VscClose } from "react-icons/vsc";
const Sidebar = ({isOpen, toggleSidebar}) => {
    
    return (
        <div className={isOpen? "fixed z-20 top-0 w-full  h-screen right-0 bg-red-800"  : 'hidden'}>
          
          <button className="fixed top-8 font-body text-white right-8" onClick={toggleSidebar}>
            <VscClose size="2.5em" className="text-white"></VscClose>
          </button>
          
           <nav className=" space-x-2 flex flex-col font-body text-white font-bold text-2xl items-center mt-32  ">
            
            <Link to="/" className="font-body py-8 px-4 " activeClassName="  ">HOME</Link>

            <Link to="/company" className="font-body py-8 px-4  " activeClassName="" >COMPANY</Link>

            <Link to="/careers" className="font-body py-8 px-4 " activeClassName="" >CAREERS</Link>
            <Link to="/apply-now" className="font-body py-8 px-4 " activeClassName="" >APPLY NOW</Link>
            <Link to="/contact" className="font-body py-8 px-4 " activeClassName="" >CONTACT</Link>
            
     </nav>

        </div>
    )
}

export default Sidebar
