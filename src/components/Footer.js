import React from "react"
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap"

const Footer = () => {
  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      haianh@gmail.com
    </Tooltip>
  )

  return (
    <Container fluid className='bg-dark py-3 text-center text-light' id='footer'>
      <h3>Social media</h3>
      <Container fluid className="mt-3">
        <a
          href='https://www.instagram.com/hai.sketch/'
          target='_blank'
          rel='noreferrer'
          className='mx-3'>
          <i class='fab fa-instagram'></i>
        </a>
        <a
          href='https://www.instagram.com/hai.sketch/'
          target='_blank'
          rel='noreferrer'
          className='mx-3'>
          <i class='fab fa-pinterest'></i>
        </a>
        <OverlayTrigger
          placement='top'
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>
          <a className='mx-3' href='#a' variant='success'>
            <i class='far fa-envelope'></i>
          </a>
        </OverlayTrigger>
      </Container>
      <p className='mt-5'> 2021 &copy; All rights reserved</p>
    </Container>
  )
}

export default Footer
