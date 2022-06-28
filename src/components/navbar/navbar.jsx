import React from 'react'
import images from '../../constants/images'
import './navbar.css'

const navbar = () => {
      return (
            <div className="app__navbar flex__center section__padding">
                  <a href="#home"><img src={images.logo} alt="logo" className='app__navbar-img' /></a>
                  <ul className='flex__center app__navbar-ul'>
                        <li>
                              <a href="#aboutMe">ABOUT ME
                              </a>
                        </li>
                        <li>
                              <a href="#service">SERVICES
                              </a>
                        </li>
                        <li>
                              <a href="#portfolio">PORTFOLIO
                              </a>
                        </li>
                        <li>
                              <a href="#testimonials">TESTIMONIALS
                              </a>
                        </li>
                        <li>
                              <a href="#contactMe">CONTACT ME
                              </a>
                        </li>
                  </ul>
                  <button type='button' className='custom__button'>Hire me</button>
            </div>
      )
}

export default navbar