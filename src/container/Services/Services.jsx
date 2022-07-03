import React from 'react'
import './Services.css'
import images from '../../constants/images'
import Heading from '../../components/Heading/Heading'

const Service = () => {
      return (
            <div className="app__services section__padding">
                  <Heading subTitle="SERVICES" mainTitle="Check My Services" />
                  <p className='p-Explore'>Explore All Services</p>
                  <div className="app__services-itemContainer">
                        <div className="row">
                              <div className="col-3">
                                    <div className="app__service-item">
                                          <img src={images.serviceLandingPage} alt="Landing Page" />
                                          <p className='app__service-item-title'>Landing Page Design</p>
                                          <p className='app__service-item-content'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                              </div>
                              <div className="col-3">
                                    <div className="app__service-item">
                                          <img src={images.serviceMoble} alt="Landing Page" />
                                          <p className='app__service-item-title'>Mobile App Design</p>
                                          <p className='app__service-item-content'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                              </div>
                              <div className="col-3">
                                    <div className="app__service-item">
                                          <img src={images.serviceBranding} alt="Landing Page" />
                                          <p className='app__service-item-title'>Branding</p>
                                          <p className='app__service-item-content'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

      )
}

export default Service