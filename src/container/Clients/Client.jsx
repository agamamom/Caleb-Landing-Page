import React from 'react'
import './Clients.css'
import images from '../../constants/images'
import Heading from '../../components/Heading/Heading'
const Client = () => {
      return (
            <div className="app__clients section__padding">
                  <Heading subTitle="OUR CLIENTS" mainTitle="Who Makes Me Proud" />
                  <div className="row">
                        <div className="col-3">
                              <img src={images.slackLogo} alt="slack" />
                        </div>
                        <div className="col-3">
                              <img src={images.vectorLogo} alt="vector" />
                        </div>
                        <div className="col-3">
                              <img src={images.googleLogo} alt="google" />
                        </div>
                        <div className="col-3">
                              <img src={images.teslaLogo} alt="tesla" />
                        </div>
                  </div>
            </div>
      )
}

export default Client