import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"

const MyNav = () => {
  return (
    <Navbar className='bg-dark' expand='lg'>
      <Link exact='true' to='/'>
        <Navbar.Brand className='text-primary'>Home</Navbar.Brand>
      </Link>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse className='justify-content-end lead text-center '>
        <Link to='/aboutme' className='p-3 d-block'>
          About
        </Link>
        <Link to='/drawings' className='p-3 d-block'>
          Drawings
        </Link>
        <Link to='/contact' className='p-3 d-block'>
          Submit
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
