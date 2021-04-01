import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Container, Row, Col } from "react-bootstrap"

const Main = () => {
  return (
    <Container fluid className='m-0 p-0'>
      <Navbar />
      <Container fluid className='bg-light p-0 pt-5' id='main'>
        <Row id='main-header' className='m-0 justify-content-center'>
          <Col
            lg={5}
            className='main-column bg-light d-flex flex-column justify-content-start align-items-center '>
            <Container className='text-center mt-5 pt-5 bg-light' id='main-header'>
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
          <Col lg={4} id='main-picture' className='bg-light main-column p-0'></Col>
        </Row>
        <Footer />
      </Container>
    </Container>
  )
}

export default Main
