import React from 'react'
import './Portfolio.css'
import Heading from '../../components/Heading/Heading'
import images from '../../constants/images'

const Portfolio = () => {
      return (
            <div className="app__portfolio section__padding">
                  <Heading subTitle="PORTFOLIO" mainTitle="People Lie Work Don’t" />
                  <p className='p-Explore'>Explore All Services</p>
                  <div className="app__portfolio--item">
                        <div className="row">
                              <div className="col-6">
                                    <img src={images.Portfolio1} alt="Portfolio1" />
                              </div>
                              <div className="col-6">
                                    <img src={images.Portfolio2} alt="Portfolio2" />
                              </div>
                              <div className="col-6">
                                    <img src={images.Portfolio3} alt="Portfolio3" />
                              </div>
                              <div className="col-6">
                                    <img src={images.Portfolio4} alt="Portfolio4" />
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Portfolio