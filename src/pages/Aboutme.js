import React from "react"
import Footer from "../components/Footer"
import MyNav from "../components/Navbar"
import { Container } from "react-bootstrap"

const Aboutme = () => {
  return (
    <div id='about-me'>
      <MyNav />
      <Container fluid className='bg-light p-5'>
        <h1 className='text-center p-5'>This page is under construction</h1>
      </Container>
      <Footer />
    </div>
  )
}

export default Aboutme
