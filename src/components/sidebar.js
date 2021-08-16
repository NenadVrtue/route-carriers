import React from 'react'

const Sidebar = ({isOpen, toggleSidebar}) => {
    
    return (
        <div className={isOpen? "fixed z-10 top-0 w-1/2  h-screen right-0 bg-red-800" : "hidden"}>
          <h2>This is a Sidebar</h2>  
          <button onClick={toggleSidebar}>Close</button>
        </div>
    )
}

export default Sidebar
