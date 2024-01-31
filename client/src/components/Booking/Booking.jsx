import React, { useContext, useState } from 'react'
import './Booking.css'
import { Button, Form, FormGroup, List, ListGroup, ListGroupItem } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'
import calculateAvgRatings from '../../utils/avgRatings'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = ({ tour }) => {

    var today = new Date().toISOString().split('T')[0];

    const navigate = useNavigate();
    const { user } = useContext(AuthContext)


    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: tour.title,
        fullName: '',
        phone: '',
        guestSize: 0,
        bookAt: ''
    })

    const handleOnChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = async e => {
        e.preventDefault();
        if (booking.fullName == '') {
            return toast.error('Name is required', {
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
        if (booking.phone.length < 10) {
            return toast.error('Please provide a valid phone number', {
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
        if (booking.bookAt == '') {
            return toast.error('Please select the booking date', {
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
        if (booking.guestSize < 1) {
            return toast.error('Atleast 1 guest should be there', {
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

        // console.log(booking);

        try {

            if (!user || user === undefined || user === null) {
                toast.error('Please sign in', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setTimeout(() => {
                    navigate('/login')
                }, 1500);


            }
            else {
                const res = await fetch(`${BASE_URL}/booking`, {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(booking)
                })

                const result = await res.json()
                if (!res.ok) {
                    return toast.error(result.message, {
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
                else {
                    navigate('/thank-you')
                }

            }

        } catch (err) {
            return toast.error(err.message, {
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



    }

    var avgRating = null
    if (tour && tour.reviews) {

        avgRating = calculateAvgRatings(tour.reviews)
    }

    const serviceFee = booking.guestSize > 0 ? 100 : 0
    const totalAmount = Number(tour.price) * Number(booking.guestSize) + Number(serviceFee)

    return (
        <div className='booking'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            {/* <span className='invisible' id="notify">ghfgh</span> */}
            {/* <span className='invisiblee' id="notify">ghfgh</span> */}
            <h2 className='booking-heading text-center mb-4'>Book your tour</h2>
            {/* <div className='booking-top d-flex align-items-center justify-content-between'> */}
            <h3 className='booking-top'>&#8377;{tour.price}<span>/per preson</span></h3>
            {/* <span className='tour-rating d-flex align-items-center'>
                    <i className="ri-star-fill"></i>{!avgRating?'Not rated':avgRating } {avgRating&&<span>({tour?.reviews.length})</span>} 
                </span> */}
            {/* </div> */}

            <div className='booking-form'>
                <h5>Information</h5>
                <Form className='booking-info' onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id='fullName' onChange={handleOnChange} required />
                    </FormGroup>
                    <FormGroup>
                        <input type='text' placeholder='Mobile Number' id='phone' required onChange={handleOnChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' data-placeholder='Date' id='bookAt' min={today} required onChange={handleOnChange} /> 
                        {/* <input type="date" name="dob" id='bookAt' data-placeholder="Date" required aria-required="true" min={today} onChange={handleOnChange} /> */}



                        <input type='number' placeholder='Guest' id='guestSize' required onChange={handleOnChange} />
                    </FormGroup>
                    <div className='booking-bottom mt-4'>
                        <ListGroup>


                            <ListGroupItem className='border-0 px-0'>
                                <h5 className='d-flex align-items-center gap-1'>
                                    &#8377;{tour.price}<i className='ri-close-line'></i>{booking.guestSize} person
                                </h5>
                                <span>&#8377;{booking.guestSize * tour.price}</span>
                            </ListGroupItem>

                            <ListGroupItem className='border-0 px-0'>
                                <h5>
                                    Service Charge
                                </h5>
                                <span>&#8377;{serviceFee}</span>
                            </ListGroupItem>

                            <ListGroupItem className='border-0 px-0 total'>
                                <h5>
                                    Total
                                </h5>
                                <span>&#8377;{totalAmount}</span>
                            </ListGroupItem>
                        </ListGroup>

                        <Button className='btn primary_btn w-100 mt-2' >Book Now</Button>
                    </div>

                </Form>
            </div>

            {/* <div className='booking-bottom'>
                <ListGroup>


                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>
                            ${tour.price}<i className='ri-close-line'></i>{booking.guestSize} person
                        </h5>
                        <span>${booking.guestSize * tour.price}</span>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 px-0'>
                        <h5>
                            Service Charge
                        </h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>
                            Total
                        </h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary_btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
            </div> */}
        </div>
    )
}

export default Booking
