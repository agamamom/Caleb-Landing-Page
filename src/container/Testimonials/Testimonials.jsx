import React from 'react'
import './Testimonials.css'
import Heading from '../../components/Heading/Heading'
import images from '../../constants/images'

const Testimonials = () => {
      return (
            <div className="app__testimonials section__padding">
                  <Heading subTitle="TESTIMONIALS" mainTitle="What People Says" />
                  <img src={images.boxColor} alt="boxcolor1" className='box1' />
                  <img src={images.boxColor2} alt="boxcolor2" className='box2' />


            </div>
      )
}

export default Testimonials