import React from "react"
import Navbar from "../components/Navbar"
import { Container} from "react-bootstrap"
import Footer from "../components/Footer"
import FormComponent from "../components/Form"

const Contact = () => {
  return (
    <Container fluid className='p-0'>
      <Navbar />
      <Container className="mt-5">
        <h1 className='text-center text-dark my-4'>Submit a drawing</h1>
        <FormComponent />
      </Container>
      <Footer />
    </Container>
  )
}

export default Contact
