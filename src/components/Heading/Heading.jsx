import React from 'react'
import './Heading.css'

const Heading = ({ subTitle, mainTitle }) => {
      return (
            <div className='heading'>
                  <p className='sub-heading'>{subTitle}</p>
                  <h2 className='main-heading'>{mainTitle}</h2>
            </div>
      )
}

export default Heading