import React from 'react'
import './TourCard.css'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import calculateAvgRatings from '../../utils/avgRatings'

const TourCard = ({ tour }) => {

    const avgRating=calculateAvgRatings(tour.reviews)
    // const {totalRating, avgRating}=calculateAvgRatings(tour.reviews)

    return ( 
        <div className='tour-card d-flex justify-content-center'>
            <Card> 
                    <div className='imgBox'>
                        <img src={`${tour.photo}`}/>
                        {/* {tour.featured &&<span className='featured'>Featured</span>} */}
                    </div>

                <CardBody>
                    <div className='city-avgRating-box d-flex justify-content-between'>
                        <span className='city'>
                            <i className="ri-map-pin-line"></i>{tour.city}
                        </span>
                        <span className='avgRating'>
                            <i className="ri-star-fill"> </i>{!avgRating?'Not rated': avgRating } {avgRating&&<span>({tour.reviews.length})</span>} 
                            {/* {totalRating===0?'Not rated':<span>({tour.reviews.length})</span>} */}
                        </span>
                    </div>
                    <h5 className='title'>
                        <Link to={`/tours/${tour._id}`}>{tour.title}</Link>
                    </h5>
                    <div className='card-bottom d-flex justify-content-between'>
                        <h5 className='my-auto'>&#8377;{tour.price}<span>/per person</span></h5>
                        <button className='booking-button'><Link to={`/tours/${tour._id}`}>Book Now</Link></button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default TourCard
