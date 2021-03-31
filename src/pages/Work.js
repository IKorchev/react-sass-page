import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Container, Col, Card, Row } from "react-bootstrap"
import Footer from "../components/Footer"
const Work = () => {
  useEffect(() => {
    const fetchImages = async () => {
      const _data = await fetch("/images")
      const json = await _data.json()
      setData(Array.from(json))
    }
    fetchImages()
  }, [])
  const [data, setData] = useState([])

  return (
    <Container fluid id='my-work' className='p-0 bg-light'>
      <Navbar />
      <Container fluid className='py-5'>
        <h1 className='text-center text-dark my-4'>My work</h1>
        <Container>
          <Row>
            {data.map((item) => (
              <Col className='card-col my-3' lg={4}>
                <Card>
                  <Card.Body>
                    <Card.Img
                      id='picture'
                      src={item.url}
                      alt='A drawing that Hai Anh created'
                    />
                  </Card.Body>
                  <Card.Header className='text-right p-2'>
                    <h5>{item.title}</h5>
                  </Card.Header>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Footer />
    </Container>
  )
}

export default Work
