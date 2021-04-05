import React from "react"
import Navbar from "../components/Navbar"
import { Container, Col, Card, Row } from "react-bootstrap"
import Footer from "../components/Footer"

const Work = ({ data }) => {
  return (
    <>
      <Navbar />
      <Container fluid id='my-work' className='p-0'>
        <Container fluid className='py-5'>
          <Container>
            <h1 className='header-text text-center'>Artwork</h1>
            <Row>
              {data.map((item) => (
                <Col className='card-col my-3' lg={4}>
                  <Card className='shadow-lg border-1 border-primary'>
                    <Card.Img src={item} alt='A drawing that Hai drew' />
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default Work
