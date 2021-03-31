import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { Container, Form } from "react-bootstrap"
import Footer from "../components/Footer"
const Contact = () => {
  const [titleValue, setTitleValue] = useState("")
  const [urlValue, setUrlValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    console.log(titleValue, urlValue)

    const data = await fetch(`/submit/${passwordValue}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ title: titleValue, url: urlValue }),
    })
    console.log(data)
  }

  return (
    <Container fluid id='submit' className='p-0 bg-light'>
      <Navbar />
      <h1 className='text-center text-dark my-4'>Submit a drawing</h1>
      <Container id="form-container" className='my-5 '>
        <Form action='/submit' method='POST' onSubmit={handleFormSubmit}>
          <Form.Group controlId='formGroupTitle' >
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              className='mx-auto'
              placeholder='Enter title'
              onChange={(e) => {
                setTitleValue(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group controlId='formGroupURL'>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type='text'
              className='mx-auto'
              placeholder='Image URL'
              onChange={(e) => {
                setUrlValue(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              className='mx-auto'
              placeholder='Admin password'
              onChange={(e) => {
                setPasswordValue(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Control className='btn-primary' type='submit' />
        </Form>
      </Container>
      <Footer />
    </Container>
  )
}

export default Contact
