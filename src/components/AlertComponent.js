import React from "react"
import { Container, Alert } from "react-bootstrap"

const AlertComponent = ({ variant, message, show }) => {
  return (
    <Container className={`${show}`} >
      <Alert variant={variant}>
        <h5 className='text-center'>{message}</h5>
      </Alert>
    </Container>
  )
}

export default AlertComponent
