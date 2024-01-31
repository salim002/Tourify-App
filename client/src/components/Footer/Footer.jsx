import React from 'react'
import './Footer.css'
import { Container,Row,Col,ListGroupItem,ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'


const nav_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About',
  },
  {
    path:'/tours',
    display:'Tours'
  }
]

const quick_links=[
  {
    path:'/login',
    display:'Login',
  },
  {
    path:'/register',
    display:'Register'
  }
]



const Footer = () => {

  const year=new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo}/>
              <p className='pe-5'>Explore our website and start planning your next journey today</p>

              <div className='social-links d-flex align-items-center gap-4'>
                  <span><Link to='#'><i className="ri-youtube-line"></i></Link></span>
                  <span><Link to='#'><i className="ri-github-fill"></i></Link></span>
                  <span><Link to='#'><i className="ri-instagram-line"></i></Link></span>
                  <span><Link to='#'><i className="ri-facebook-box-fill"></i></Link></span>

              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='discover'>Discover</h5>
            <ListGroup className='footer-quick-links'>
              {
                nav_links.map((link,idx)=><ListGroupItem className=' underline ps-0 border-0 py-1'  key={idx}><Link to={link.path}>{link.display}</Link></ListGroupItem>)
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
          <h5 className='quickLinks'>Quick Links</h5>
            <ListGroup className='footer-quick-links'>
              {
                quick_links.map((link,idx)=><ListGroupItem className='underline ps-0 border-0 py-1'  key={idx}><Link to={link.path}>{link.display}</Link></ListGroupItem>)
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
          <h5 className='contact'>Contact</h5>
            <ListGroup className='footer-quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className="ri-map-pin-line"></i></span>
                Address :
                </h6>
                <p className='mb-0'>Darbhanga, Bihar</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className='footer-quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className="ri-mail-line"></i></span>
                Email :
                </h6>
                <p className='mb-0'>mdsalim.iiitr@gmail.com</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup className='footer-quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i className="ri-phone-fill"></i></span>
                Phone :
                </h6>
                <p className='mb-0'>+91-8873314455</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>&#169; {year}, Crafted with ❤ by Md Salim. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
