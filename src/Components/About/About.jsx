import React from 'react'
import './About.css'
import cricleText from '../../assets/cricleText.png'
import aboutImage  from '../../assets/about.jpg'
import { MdOutlineSlowMotionVideo } from "react-icons/md";
function About () {
  return (
    <div className='about'>
        <div className='container'>
            <div className='row align-items-center'>
              <div className='col-6'>
                <div className='title'>
                  <h2>
                    <span className='span-title'>
                      Admire
                    </span>
                      Stylish Dresses &     
                    <span>
                      <span className='span-title'>
                        Looks
                      </span>
                    </span>
                  </h2>
                  <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context,
                      of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
                        The term implies a look defined by the fashion industry as that which is trending.
                  </p>
                  <div className='video'>
                    <MdOutlineSlowMotionVideo className='video-icon'></MdOutlineSlowMotionVideo>
                    <div className='text-video'>
                      <h3>WATCH VIDEO</h3>
                      <p>Let`s see our story</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='col-6'>
                  <div className='about-img'>
                      <img src={aboutImage} className='about-image'/>
                      <img src={cricleText} className='cricleText-img'/>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About;
