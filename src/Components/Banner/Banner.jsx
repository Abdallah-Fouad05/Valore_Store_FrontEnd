import React, { useState } from 'react'
import './Banner.css'
import silde1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Banner() {
  const [Index , setIndex] = useState(0);
  const slides = [
  {
    title: "Upgrade Your Style",
    description: "Discover a new collection designed to match your vibe. From casual basics to standout outfits, we bring you quality pieces that make every day feel stylish and confident.",
    image: silde1
  },
  {
    title: "Wear What Defines You",
    description: "Your outfit speaks before you do. Choose from our latest trends crafted with premium fabrics and modern cuts to help you express your true identity in every moment.",
    image: slide2
  },
  {
    title: "Fresh Looks Every Season",
    description: "Stay ahead of the fashion game with collections that drop all year round. Whether you're into streetwear, classy fits, or everyday essentials — we've got styles that keep you looking fresh effortlessly.",
    image: slide3
  }
  ];
  const forwardSilde = () =>{
    setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  const backSilde = () =>{
  setIndex(prev => prev === 0 ? slides.length - 1 : prev - 1);
  }



  return (
    <>
      <div className="banner">
        <div className='container'>
          <IoIosArrowForward  className="tp-leftarrow tparrows metis" onClick={backSilde}></IoIosArrowForward>
          <IoIosArrowBack className="tp-rightarrow tparrows metis" onClick={forwardSilde}></IoIosArrowBack>
          <div className='row align-items-center' key={Index}>
            <div className='col-md-6'>
              <h1 className="fade fade1">{slides[Index].title}</h1>
              <p className="fade fade2">{slides[Index].description}</p>
              <button className='btn btn-primary fade fade3'>Shop Now</button>
            </div>

            <div className='col-md-6'>
              <img src={slides[Index].image} alt="Banner" className='img-fluid fade fade4 w-100'/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Banner