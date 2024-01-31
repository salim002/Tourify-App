import React from 'react'
import tourData from '../../assets/data/tour'
import { Col } from 'reactstrap'
import TourCard from './TourCard'

import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import Spinner from '../../shared/Spinner/Spinner'




const TourList = () => {

  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)

  // console.log(allTours);

  return (
    <>
      {loading && <h4 className='text-center pt-5'>{loading && <Spinner />}</h4>}
      {error && <h4 className='text-center pt-5'>{error}</h4>}
      {!loading && !error && featuredTours?.map(tour => (<Col lg='3' key={tour._id}><TourCard tour={tour} /></Col>))}
    </>
  )
}

export default TourList
