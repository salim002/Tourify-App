import React, { useRef } from 'react'
import { Conatiner, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'
import './SearchingBar.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SearchingBar = () => {

    const locationRef = useRef("")
    const priceRef = useRef(0)
    // const distanceRef = useRef(0)
    // const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()

    const searchHandler = async (e) => {
        e.preventDefault()
        const location = locationRef.current.value
        const price = priceRef.current.value

        // const distance = distanceRef.current.value
        // const maxGroupSize = maxGroupSizeRef.current.value

        if (location === "" || price <= 0) {
                return toast.error('All fields are required', {
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

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&price=${price}`)

        if (!res.ok) {
            return toast.error(res.message, {
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

        const result = await res.json()

        navigate(`/tours/search?city=${location}&price=${price}`, { state: result.data })
    }

    return (

        <Col lg='12' className='mt-5 searchingBar'>
<ToastContainer />

            <Form onSubmit={searchHandler}>
                <Row className='searchForm d-flex'>
                    <Col lg='3'>
                        <FormGroup className='d-flex'>
                            <span className='icon'><i className="ri-map-pin-line"></i></span>
                            <div className='mb-1'>
                                <h6 className='mb-2'>Location</h6>
                                <input className='p-1 ' type='text' placeholder='Where are you going' required ref={locationRef} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg='3'>
                        <FormGroup className='d-flex'>
                            <span className='icon'><i className="ri-map-pin-line"></i></span>
                            <div>
                                <h6 className='mb-1'>Cost/per person</h6>
                                <input className='p-1' type='number' placeholder='Maximum cost per person' required ref={priceRef} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg='3' className='d-flex align-items-center justify-content-lg-start'>
                            <div className='my-auto'>
                            <Button className="primary_btn searching-btn w-100" type="submit" ><i className="ri-search-line"> </i>Search</Button>
                            </div>
                    </Col>
                    {/* <Col lg='3'>
                        <FormGroup className='d-flex gap-2 '>
                            <span className='icon'><i className="ri-map-pin-time-line"></i></span>
                            <div>
                                <h6>Distance</h6>
                                <input className='p-1' type='number' placeholder='Distance km' ref={distanceRef}/>
                            </div>
                        </FormGroup>
                        </Col>
                        <Col  lg='3'>
                        <FormGroup className='d-flex gap-2 '>
                            <span className='icon'><i className="ri-group-line"></i></span>
                            <div>
                                <h6>Max peolpe</h6>
                                <input className='p-1' type='number' placeholder='0' ref={maxGroupSizeRef} />
                            </div>
                        </FormGroup>
                        </Col> */}

                    {/* <Col lg='1' className='d-flex align-items-center search-btn'>
                        
                        </Col> */}


                </Row>
            </Form>
        </Col>

    )
}

export default SearchingBar
