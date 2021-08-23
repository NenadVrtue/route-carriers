import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { VscThreeBars } from "react-icons/vsc";

const Header = ({toggleSidebar}) => (
  <header className="absolute top-0 z-20 w-full">
    <div
    className="  mx-auto max-w-7xl  px-4 xl:px-0  flex justify-between items-end "
    >
      <Link to="/">
        <StaticImage 
        src="../images/logo-transparent.png" 
        width={190}
        loading="eager"
        placeholder="tracedSVG"
        alt="Route Carriers logo"
        quality="100"
        className="md:-ml-4">

        </StaticImage>
        
      </Link>
     <nav className="hidden space-x-2 md:block font-body text-white font-bold text-base md:space-x-2 lg:space-x-4  mt-11 ">
       <Link to="/" className="font-body pt-12 pb-4 px-4 hover:bg-main-red" activeClassName="bg-main-red">HOME</Link>
       <Link to="/company" className="font-body pt-12 pb-4 px-4 hover:bg-main-red" activeClassName="bg-main-red" >COMPANY</Link>
       <Link to="/careers" className="font-body pt-12 pb-4 px-4 hover:bg-main-red" activeClassName="bg-main-red" >CAREERS</Link>
       <Link to="/apply-now" className="font-body pt-12 pb-4 px-4 hover:bg-main-red" activeClassName="bg-main-red" >APPLY NOW</Link>
       <Link to="/contact" className="font-body pt-12 pb-4 px-4 hover:bg-main-red" activeClassName="bg-main-red" >CONTACT</Link>
     </nav>
     
    <button className="md:hidden mt-7 px-4 z-20" onClick={toggleSidebar}>
      <VscThreeBars size="2.5em" className="text-white hover:text-main-red"/>
    </button>
        
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
