import React from 'react'
import './ContactUs.css'
import images from '../../constants/images'
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
const ContactUs = () => {
      return (
            <>
                  <div className="app__contactUs section__padding">
                        <div className="row">
                              <div className="col-6 app__contactUs--left">
                                    <h3>
                                          Contact Us
                                    </h3>
                                    <p className='app__contactUs-content'>
                                          We are committed to processing the information in order to contact you and talk about your project.
                                    </p>
                                    <div className="contactUs__info">
                                          <div className="contactUs__info-item">
                                                <MdMarkEmailUnread className='app__contactUs-icon' />
                                                <p>example@teamwebflow.com</p>
                                          </div>
                                          <div className="contactUs__info-item">
                                                <BsPersonLinesFill className='app__contactUs-icon' />
                                                <p>4040 Lekki Summit Suite 402<br />
                                                      Lake Manchester City</p>
                                          </div>
                                          <div className="contactUs__info-item">
                                                <BsPhone className='app__contactUs-icon' />
                                                <p>+44 123 777 5401</p>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-6 app__contactUs--right">
                                    <input class="form-control form-control-lg" type="text" placeholder="Name*" aria-label=".form-control-lg example" />
                                    <input class="form-control form-control-lg" type="text" placeholder="Email*" aria-label=".form-control-lg example" />
                                    <input class="form-control form-control-lg" type="text" placeholder="Website*" aria-label=".form-control-lg example" />
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                                    <a href="#home" className='custom__button'>Submit</a>
                              </div>
                        </div>
                        <div className="app__footer">
                              <div className="row">
                                    <div className="col-3">
                                          <img src={images.logo} alt="logo" />
                                          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                                    </div>
                                    <div className="col-3">
                                          <ul>
                                                <li className='footer-title'>EXPLORE</li>
                                                <li className='footer-content'>SUPPORTS</li>
                                                <li className='footer-content'>ABOUT US</li>
                                                <li className='footer-content'>BLOG</li>
                                          </ul>

                                    </div>
                                    <div className="col-3">
                                          <ul>
                                                <li className='footer-title'>LEGAL</li>
                                                <li className='footer-content'>TERMS OF USE</li>
                                                <li className='footer-content'>PRIVACY POLICY</li>
                                          </ul>
                                    </div>
                                    <div className="col-3">
                                          <ul>
                                                <li className='footer-title'>SOCIALS</li>
                                                <li className='footer-content'>TWITTER</li>
                                                <li className='footer-content'>LINKEDIN</li>
                                                <li className='footer-content'>INSTAGRAM</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="app__end"></div>
            </>
      )
}

export default ContactUs