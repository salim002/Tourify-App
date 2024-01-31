import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/tourDetails.css'
import { Col, Container, Form, ListGroup, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tour'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'
import calculateAvgRatings from '../utils/avgRatings'
import Spinner from '../shared/Spinner/Spinner'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const TourDetails = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(1)
  const { user } = useContext(AuthContext)

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)
  // console.log(tour.reviews);





  // const tour = tourData.find(tour => tour.id === id)
  const options = { day: "numeric", month: "long", year: "numeric" }

  // submit request to the server
  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value
    


    try {
      if (!user || user === undefined || user === null) {
        return toast.error('Please sign in', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if (!res.ok) {
        return alert(result.message)
      }
      else{
         toast.success('Review submitted successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

          setTimeout(() => {
            window.location.reload()
          }, 350);
      }

    } catch (err) {
      alert(err.message)
    }
  }
  var avgRating = null
  if (tour && tour.reviews) {

    avgRating = calculateAvgRatings(tour.reviews)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tour])

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      var ele = document.getElementById(`rate-${i}`)
      if (i <= tourRating) {
        ele.classList.add('rated-group')
      }
      else {
        ele.classList.remove('rated-group')
      }
    }
  }, [tourRating])

  return (
    <>
      <section>
      {loading && <h4 className='text-center pt-5'>{loading && <Spinner/>}</h4>}
        {error && <h4 className='text-center pt-5'>{error}</h4>}
        <Container>
          {
            !loading && !error && (
              <Row>
                <Col lg='8'>
                  <div className='tour-content'>
                    <img src={tour.photo} />

                    <div className='tour-info'>
                      <h2 className='mb-5 fw-bold'>{tour.title}</h2>

                      <div className='d-flex align-items-center gap-5 mb-3  '>

                        <span className='avgRating'>
                          <i className="ri-star-fill"></i>{!avgRating ? 'Not rated' : avgRating} {avgRating && <span>({tour?.reviews.length})</span>}
                          {/* <i className="ri-star-fill"></i> */}
                          {/* {avgRating===0?null:avgRating}  */}
                          {/* {totalRating===0?'Not rated':<span>({tour.reviews.length})</span>} */}

                          {/* <i className="ri-star-fill"></i>{tour.reviews?.length} */}
                          {/* {avgRating === 0 ? null : avgRating}({tour.reviews?.length}) */}
                        </span>
                        <span className='address'>
                          <i className="ri-map-pin-fill"></i>{tour.address}
                        </span>
                      </div>

                      <div className='tour-extra-details'>
                        <span className='city'>
                          <i className="ri-map-pin-line"></i>{tour.city}
                        </span>
                        <span className='price'>
                          <i className="ri-money-dollar-circle-line"></i>&#8377;{tour.price}/per person
                        </span>
                      </div>

                      <h5 className='fw-bold'>Description</h5>
                      <p>{tour.desc}</p>
                    </div>




                  </div>
                </Col>

                <Col lg='4'>
                  <Booking tour={tour} />
                </Col>

                <Col lg='8'>
                  <div className='tour-reviews mt-4'>
                    <h4>Reviews ({tour.reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className='d-flex align-items-center gap-3 mb-4 ratings-group'>
                        <span onClick={() => setTourRating(1)}>1 <i className="ri-star-fill" id='rate-1'></i></span>
                        <span onClick={() => setTourRating(2)}>2 <i className="ri-star-fill" id='rate-2'></i></span>
                        <span onClick={() => setTourRating(3)}>3 <i className="ri-star-fill" id='rate-3'></i></span>
                        <span onClick={() => setTourRating(4)}>4 <i className="ri-star-fill" id='rate-4'></i></span>
                        <span onClick={() => setTourRating(5)}>5 <i className="ri-star-fill" id='rate-5'></i></span>
                      </div>

                      <div className='reviews-input'>
                        <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required />
                        <button className='primary_btn text-white' type='submit'>Submit</button>
                      </div>
                    </Form>
                  </div>

                  <ListGroup className='user-reviews'>
                    {tour.reviews?.map((review ,idx) => (
                      <div key={idx} className='review-item'>
                        <img src={avatar} />
                        <div className='w-100'>
                          <div >

                            <div className='d-flex align-items-center justify-content-between'>
                              <h5 className='review-username'>{review.username}</h5>
                              <span className='d-flex align-items-center'>
                                {review.rating}<i className="ri-star-fill"></i>
                              </span>
                            </div>
                            <p>
                              {new Date(review.createdAt).toLocaleDateString("en-US", options)}
                            </p>

                            {/* <span className='d-flex align-items-center'>
                                {review.rating}<i className="ri-star-fill"></i>
                              </span> */}
                          </div>
                          <h6>{review.reviewText}</h6>

                        </div>
                      </div>
                    ))}
                  </ListGroup>

                </Col>
              </Row>
            )
          }
        </Container>
      </section>
    </>
  )
}

export default TourDetails
