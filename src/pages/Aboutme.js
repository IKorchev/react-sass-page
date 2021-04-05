import React from "react"
import Footer from "../components/Footer"
import MyNav from "../components/Navbar"
import { Container } from "react-bootstrap"

const Aboutme = () => {
  return (
    <Container fluid className='p-0'>
      <MyNav />
      <Container fluid id='about-me'>
        <h1 className='header-text text-center p-5'>About me</h1>
      </Container>
      <Footer />
    </Container>
  )
}

export default Aboutme
