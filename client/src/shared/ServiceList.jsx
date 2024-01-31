import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData=[
    
    {
        img:guideImg,
        title:'Best Tour Guide',
        desc:'We provide best tour guide accross the world'
    },
    {
        img:customizationImg,
        title:'Customization',
        desc:'Customize tour with location & budget'
    },
    {
        img:weatherImg,
        title:'Calculate Weather',
        desc:'Know about the weather conditions'
    }
]

const ServiceList = () => {
  return (
    <>
        {serviceData.map((service,index)=><Col lg='3' className='mb-3' key={index}><ServiceCard service={service}/></Col>)}
    </>
  )
}

export default ServiceList
