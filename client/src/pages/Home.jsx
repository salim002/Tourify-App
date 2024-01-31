import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'

import heroimg from '../assets/images/hero-img01.jpg'
import herovideo02 from '../assets/videos/hero-video02.mp4'
import herovideo03 from '../assets/videos/hero-video03.mp4'
import worldImg from '../assets/images/world.png'
import SearchingBar from '../shared/SearchingBar'
import TourList from '../components/Tours/TourList'
import ServiceList from '../shared/ServiceList'
import ImageGallery from '../components/image-gallery/ImageGallery'
import Subtitle from '../shared/Subtitle'

const Home = () => {
  return (
    <>
      <section >
        <Container>
          <Row>
            <div className='top-box d-flex align-items-center mb-3'>
              <Subtitle title={`Know before you go`} />
              <img className='worldImg my-auto' src={worldImg} />
            </div>
            <Col lg='6'>
              <div>

                <h3 className='heading'>Travelling opens the doors for creating memories</h3>
                <div className="">

                  <p className='para mb-0'>Traveling provides us with the opportunity to create unforgettable memories and experiences that will last a lifetime. When we travel, we are exposed to new cultures, traditions, and ways of life, and this broadens our perspective and helps us grow as individuals. </p><p className='para mt-0'>

                    Whether it's trying new foods, exploring historical landmarks, or simply relaxing on a beautiful beach, every moment of a trip has the potential to become a cherished memory. 
                    So, if you're looking to create lasting memories, there's no better way to do it than by traveling and exploring the world!
                  </p>
                </div>
              </div>
            </Col>

            <Col lg='2'>
              <div className='heroimg-box box1'>
                {/* <img src={heroimg} /> */}
                <video src={herovideo02} controls autoPlay muted loop />

              </div>
            </Col>

            <Col lg='2'>
              <div className='heroimg-box box2'>
                {/* <video src={herovideo03} controls autoPlay muted loop /> */}
                <img src={heroimg} />
              </div>
            </Col>

            <Col lg='2' className='mb-5'>
              <div className='heroimg-box last-box box3 '>
                <video src={herovideo03} controls autoPlay muted loop />
              </div>
            </Col>

          </Row>


        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col lg='3' className=''>
              <Subtitle title={'What we serve?'} />
              <h3 className='mt-4 services'>We offer our best services</h3>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle title={'Search a tour'} />
              <SearchingBar />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-3'>
              <Subtitle title={'Our Featured Tours'} />
            </Col>
            <TourList />
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4'>
              <Subtitle title={'Visit our customers tours gallery'} />
            </Col>
            <Col lg='12' id='gallery'>
              <ImageGallery />
            </Col>
          </Row>
        </Container>
      </section>


    </>
  )
}

export default Home
