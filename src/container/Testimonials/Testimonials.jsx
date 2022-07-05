import React from 'react'
import './Testimonials.css'
import Heading from '../../components/Heading/Heading'
import Data from '../../constants/data'
import images from '../../constants/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const TestimonialsContainer = ({ testimonial: { name, comment, job } }) => (
      <div className="app__testimonials--container">

            <img src={images.quoteLeft} alt="quote" className='quote-left' />
            <img src={images.Ellipse2} alt="Ellipse" className='Ellipse' />
            <div className="app__testimonials--actorInfo">
                  <p className='app__testimonials-comment'>
                        {comment}
                  </p>
                  <h5 className='testimonial-nameActor'>
                        {name}
                  </h5>
                  <p className='testimonials-major'>
                        {job}
                  </p>
            </div>
            <img src={images.quoteRight} alt="quote" className='quote-right' />
      </div>
)
const Testimonials = () => {
      return (
            <div className="app__testimonials section__padding">
                  <Heading subTitle="TESTIMONIALS" mainTitle="What People Says" />
                  <img src={images.boxColor} alt="boxcolor1" className='box1' />
                  <img src={images.boxColor2} alt="boxcolor2" className='box2' />
                  <Swiper
                        modules={[A11y, Autoplay]}
                        loop={true}
                        autoplay={true}
                        slidesPerView={1}
                        grabCursor={true}
                        className='app__testimonials--wrapper'>
                        {
                              Data.map((testimonial) => (
                                    <SwiperSlide>
                                          <TestimonialsContainer testimonial={testimonial} key={testimonial.name} />
                                    </SwiperSlide>
                              ))
                        }
                  </Swiper>
            </div>

      )
}

export default Testimonials