import React from 'react'
import './AboutMe.css'
import images from '../../constants/images'
import { BsDownload } from "react-icons/bs"

const AboutMe = () => {
      return (
            <div className="section__padding app__aboutMe">
                  <div className="row">
                        <div className="col-6 app__aboutMe-left">
                              <img src={images.manComputer} alt="man1" />
                        </div>
                        <div className="col-6 app__aboutMe-right">
                              <div className="app__aboutMe-right_info">
                                    <p className='app__aboutMe-subHeading'>A BIT</p>
                                    <h2 className="app__aboutMe-mainHeading">
                                          About Me
                                    </h2>
                                    <p className='app__aboutMe-content'>
                                          I’m a top online marketer and branding expert, I started my career
                                          by lauching the popular metaverse design, in just a few short
                                          years, I built the brand to millions of social media followers and websites visitors. I also created award-winning online products with millions of dolloars in online sales you want, you never get personalized experiences and they can be upwards of $1000 on hour.
                                    </p>
                                    <div className="app__aboutMe-achievement">
                                          <div className="row">
                                                <div className="col-4 app__aboutMe-achievement--experience">
                                                      <img src={images.iconMedal} alt="" />
                                                      <div className="app__aboutMe-achievement--experienceInfo">
                                                            <p>5 years +</p>
                                                            <p>Experience</p>
                                                      </div>
                                                </div>
                                                <div className="col-8 app__aboutMe-achievement--experience">
                                                      <img src={images.iconList} alt="" />
                                                      <div className="app__aboutMe-achievement--experienceInfo">
                                                            <p>700 +</p>
                                                            <p>Project</p>
                                                      </div>
                                                </div>
                                                <div className="col-12 app__aboutMe-achievement--experience">
                                                      <img src={images.iconPerson} alt="" />
                                                      <div className="app__aboutMe-achievement--experienceInfo">
                                                            <p>24/7</p>
                                                            <p>Customer Support</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="app__aboutMe-btn">
                                          <button type="button" className='custom__button'>Hire me</button>
                                          <a href="#download">
                                                Download CV
                                                <span className='download-icon'><BsDownload /></span>
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default AboutMe