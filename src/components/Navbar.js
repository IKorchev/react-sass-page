import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
const MyNav = () => {
  return (
    <Navbar className='bg-light' expand='lg'>
      <Link exact='true' to='/'>
        <Navbar.Brand className='text-primary'>Home</Navbar.Brand>
      </Link>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse className='justify-content-end'>
        <Link to='/aboutme' className='px-4 d-block text-center  lead'>
          About
        </Link>
        <Link to='/work' className='px-4 d-block text-center  lead'>
          Work
        </Link>
        <Link to='/contact' className='px-4 d-block text-center lead'>
          Submit
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
