import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({service}) => {
  return (
    <div className='service-item'>
      <div className='service-img'>
        <img src={service.img}/>
      </div>
      <h5>{service.title}</h5>
      <p>{service.desc}</p>
    </div>
  )
}

export default ServiceCard
