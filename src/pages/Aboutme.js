import React from "react"
import Footer from "../components/Footer"
import MyNav from "../components/Navbar"
import { Container } from "react-bootstrap"

const Aboutme = () => {
  return (
    <Container fluid className='p-0'>
      <MyNav />
      <Container fluid className='p-5' id='about-me'>
        <h1 className='text-center p-5'>This page is under construction</h1>
      </Container>
      <Footer />
    </Container>
  )
}

export default Aboutme
