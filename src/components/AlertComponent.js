import React from "react"
import { Container, Alert } from "react-bootstrap"

const AlertComponent = ({ show }) => {
  if (show === 200) {
    return (
      <Container className='my-5'>
        <Alert variant='success'>
          <h5 className='text-center'>Your message has been sent</h5>
        </Alert>
      </Container>
    )
  } else if (show === null) {
    return <></>
  } else {
    return (
      <Container className='my-5'>
        <Alert variant='danger'>
          <h5 className='text-center'>Something went wrong, please try again later.</h5>
        </Alert>
      </Container>
    )
  }
}

export default AlertComponent
