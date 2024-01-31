import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import '../styles/thankyou.css'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ThankYou = () => {
  const navigate=useNavigate()
  const returnHome=()=>{
      navigate('/')
  }

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                    <div className='thank-you'>
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1 className='mb-3 fw-semibold'>Thank You</h1>
                        <h3 className='mb-4'>Your tour is booked</h3>

                        <Button onClick={returnHome}  className='btn primary_btn homeBtn w-25'><Link to='/home'>Back to Home</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou
