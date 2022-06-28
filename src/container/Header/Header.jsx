import React from 'react'
import Heading from '../../components/Heading/Heading'
import { BsDownload } from "react-icons/bs"
import images from '../../constants/images'
import './Header.css'
const Header = () => {
      return (
            <div className="section__padding app__header">
                  <div className="row">
                        <div className="col-6 app__header-left">
                              <div className="app__header-left_info">
                                    <p className='subHeading'>Hello, I am</p>
                                    <h3 className='mainHeading'>CALEB NYONG</h3>
                                    <p className='app__header-underHeading'>UI/UX & Product Designer</p>
                                    <p className='app__header-content'>
                                          I’m a top online marketer and branding expert, I started my career
                                          by lauching the popular metaverse design, in just a few short
                                          years, I built the brand to millions of social media followers and websites visitors.
                                    </p>
                                    <div className="app__header-btn">
                                          <button type="button" className='custom__button'>Hire me</button>
                                          <a href="#download">
                                                Download CV
                                                <span className='download-icon'><BsDownload /></span>

                                          </a>
                                    </div>
                              </div>
                              <img src={images.profileHeader} alt="portfolio" />
                        </div>

                        {/* RIGHT */}

                        <div className="col-6 app__header-right">
                              <img src={images.manComputer2} alt="man2" />
                        </div>
                  </div>
            </div>
      )
}

export default Header