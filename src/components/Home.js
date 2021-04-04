import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Image from "../assets/Me..jpg"
import { Container, Row, Col } from "react-bootstrap"

const Home = () => {
  return (
    <Container fluid className='m-0 p-0'>
      <Navbar />
      <Container id='main-content'>
        <Row id='main-header' className='justify-content-center align-items-center'>
          <Col lg={5}>
            <Container className='text-center pt-5'>
              <h1 className='text-dark mb-5'>Hai Anh</h1>
              <Container
                id='quotes'
                className='d-flex flex-column justify-content-center'>
                <figure className='d-flex flex-column justify-content-center'>
                  <blockquote className='blockquote'>
                    <p className='text-wrap p-0 m-0'>
                      <i></i>"Earth" without "art" is just "eh".
                    </p>
                  </blockquote>
                  <figcaption className='blockquote-footer d-flex justify-content-end'>
                    <i>unknown</i>
                  </figcaption>
                </figure>
              </Container>
            </Container>
            <Container className='d-flex justify-content-center'></Container>
          </Col>
          <Col lg={5} id='main-picture' className='main-column p-0'>
            <img src={Image} width='100%' alt='Myself'></img>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  )
}

export default Home
