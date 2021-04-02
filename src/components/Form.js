import React, { useState } from "react"
import { Container, Form } from "react-bootstrap"

const FormComponent = () => {
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
    <Container fluid id='form-container' className='my-5 p-0'>
      <Form action='/submit' method='POST' onSubmit={handleFormSubmit}>
        <Form.Group controlId='formGroupTitle'>
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
  )
}

export default FormComponent
