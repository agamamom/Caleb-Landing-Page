import React from 'react'
import images from '../../constants/images'
import Heading from '../../components/Heading/Heading'
import './CaseStudy.css'

const CaseStudy = () => {
      return (
            <div className="app__caseStudy section__padding">
                  <Heading subTitle="CASE STUDY" mainTitle="My Case Studies" />
                  <div className="app__caseStudy--caseOne">
                        <div className="row">
                              <div className="col-6 caseOne__img">
                                    <img src={images.case1} alt="case1" />
                              </div>
                              <div className="col-6 caseOne__content-wrap">
                                    <div className="caseOne__content">
                                          <Heading subTitle="01" mainTitle=" Bakery Landing Page Design" />
                                          <p className='caseOne__content-p'>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                          <div className="custom__button-outline">Details</div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="app__caseStudy--caseTwo">
                        <div className="row">
                              <div className="col-6 caseTwo__content-wrap">
                                    <div className="caseTwo__content">
                                          <Heading subTitle="02" mainTitle="Shoe Store Ecommerce Landing Page" />
                                          <p className='caseTwo__content-p'>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                          <div className="custom__button-outline">Details</div>
                                    </div>
                              </div>
                              <div className="col-6 caseTwo__img">
                                    <img src={images.case1} alt="case1" />
                              </div>
                        </div>
                  </div>
                  <div className="app__caseStudy--caseThree">
                        <div className="row">
                              <div className="col-6 caseThree__img">
                                    <img src={images.case1} alt="case1" />
                              </div>
                              <div className="col-6 caseThree__content-wrap">
                                    <div className="caseThree__content">
                                          <Heading subTitle="03" mainTitle="ClearMix Landing page" />
                                          <p className='caseThree__content-p'>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                          <div className="custom__button-outline">Details</div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default CaseStudy