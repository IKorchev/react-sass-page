import React, { useState } from "react"
import { Container, Form, Alert } from "react-bootstrap"
import AlertComponent from "./AlertComponent"

const FormComponent = () => {
  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [alert, setAlert] = useState({
    className: "visually-hidden"
    
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const data = await fetch(`/submit`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ name: nameValue, email: emailValue, message: messageValue }),
    })
    if (data.status === 200) {
      setAlert("")
    } else {
    }
  }

  return (
    <Container fluid id='form-container' className='my-5 p-0'>
      <Form action='/submit' method='POST' onSubmit={handleFormSubmit}>
        <Form.Group controlId='formGroupTitle'>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type='name'
            className='mx-auto'
            placeholder='Name'
            onChange={(e) => {
              setNameValue(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId='formGroupURL'>
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type='email'
            className='mx-auto'
            placeholder='example@email.com'
            onChange={(e) => {
              setEmailValue(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            className='mx-auto'
            placeholder='Your message'
            onChange={(e) => {
              setMessageValue(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Control className='btn-primary' type='submit' />
      </Form>
      <AlertComponent
        show={alert}
        variant='success'
        message='Message sent successfully'
      />
      <AlertComponent
        show={alert}
        variant='danger'
        message='Could not send the message, please try again later.'
      />
    </Container>
  )
}

export default FormComponent
