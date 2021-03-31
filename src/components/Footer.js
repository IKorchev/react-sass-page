import React from "react"
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap"

const Footer = () => {
  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      haianh@gmail.com
    </Tooltip>
  )

  return (
    <Container fluid className='bg-dark p-5 text-center text-light' id='footer'>
      <h3>Find me on social media:</h3>
      <Container>
        <a href='#a' className='mx-3'>
          <i className='bi bi-instagram'></i>
        </a>
        <a href='#a' className='mx-3'>
          <i className='bi bi-facebook'></i>
        </a>
        <OverlayTrigger
          placement='top'
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>
          <a className='mx-3' href='#a' variant='success'>
            <i className='bi bi-envelope'></i>
          </a>
        </OverlayTrigger>
      </Container>
    </Container>
  )
}

export default Footer
