import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap"

//prettier-ignore
const MyNav = () => {
  return (
    <Navbar expand='lg'>
      <Container id='navbar'>
        <Link exact='true' to='/'><Navbar.Brand className='text-primary h1'>Hai Anh</Navbar.Brand></Link>
        <Navbar.Toggle className='bg-info my-4'></Navbar.Toggle>
        <Navbar.Collapse className=' justify-content-end lead text-center' id='nav-collapse'>
          <Link to='/' exact='true' className='px-4 py-4  d-block'>Home</Link>
          <Link to='/aboutme' className='px-4 py-4 d-block'>About</Link>
          <Link to='/drawings' className='px-4 py-4 d-block'>Drawings</Link>
          <Link to='/contact' className='px-4 py-4 d-block'>Contact</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
