import React from 'react'
import {Row, Col, Container } from 'reactstrap'
import img from '../assets/images/about.jpg'
import '../styles/about.css'

const About = () => {
  return (
    <Container>
        <Row>
            <Col lg='6'> 
                <div className="img-box">
                    <img src={img}/>
                </div>
            </Col>
            <Col lg='6'>
            <div className='cont'>
            <p className='about'>Welcome to our traveling website, your ultimate destination for all your travel needs. Whether you're planning a relaxing getaway or an exciting adventure, our website offers a wealth of information, inspiration, and resources to help you plan the perfect trip.</p><p className='about'>
From breathtaking natural wonders to vibrant cities and cultural landmarks, our website showcases a diverse range of travel destinations around the world. Our team of experienced travel writers and experts has carefully curated a selection of top-rated hotels, restaurants, and activities to help you make the most of your trip.</p><p className='about'>
We believe that travel is about more than just checking off a list of tourist attractions. It's about experiencing new cultures, meeting new people, and creating memories that will last a lifetime.</p>


<p className='about'>
So, whether you're a seasoned traveler or embarking on your first adventure, we invite you to explore our website and start planning your next journey today! </p>
            </div>
                

            </Col>
        </Row>

        <Row>
            <Col lg='4'>

            </Col>
            <Col lg='8'>

            </Col>
        </Row>
    </Container>
  )
}

export default About
