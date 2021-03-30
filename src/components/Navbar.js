import React, { useState } from "react"

const Navbar = () => {
  const [isActive, setIsActive] = useState(true)

  const handleResize = () => {
    if (window.innerWidth > 599) {
      setIsActive(true)
    }
  }
  const handleToggle = () => {
    if (!isActive) {
      setIsActive(true)
      console.log(isActive)
    } else {
      setIsActive(false)
      console.log(isActive)
    }
  }
  window.onresize = handleResize
  return (
    <div id='navbar-container'>
      <div id='hamburger' onClick={handleToggle}>
        <i className={`bi ${isActive ? "bi-list" : "bi-x"}`}></i>
      </div>
      <div className='collapsible' id={`${isActive ? "collapse" : "collapsed"}`}>
        <a href='/'>Home</a>
        <a href='/aboutme'>About me</a>
        <a href='/work'>My work</a>
        <a href='/contact'>Contact</a>
      </div>
      <div id='navbar'>
        <a id='title' href='/'>
          Home
        </a>
        <div id='nav'>
          <a href='/aboutme'>About me</a>
          <a href='/work'>My work</a>
          <a href='/contact'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
