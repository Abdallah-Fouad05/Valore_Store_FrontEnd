import React from 'react'
import bestseller1 from '../../assets/BestSeller1.jpg'
import bestseller2 from '../../assets/BestSeller2.jpg'
import bestseller3 from '../../assets/BestSeller3.jpg'
import bestseller4 from '../../assets/BestSeller4.jpg'
import './BestSaller.css'
import { IoCartOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";


function BestSaller() {
    const products =[
        {   ID : 1,
            Name : "Wool Jacket",
            Price : 32,
            Category : "Women",
            ImageUrl : bestseller1
        },
        {
            ID : 2,
            Name : "The Trucker",
            Price : 32,
            Category : "Men",
            ImageUrl : bestseller2
        },
        {
            ID : 3,
            Name : "Grey T-shirt",
            Price : 939,
            Category : "Women",
            ImageUrl : bestseller3
        },
        {
            ID : 4,
            Name : "Kids Shirt",
            Price : 189,
            Category : "Men",
            ImageUrl : bestseller4
        }
    ]

    const renderBestSeller = ()=>{
        return products.map((product)=>(
            <div  className='product-item col-3' key={product.ID}>
                <img className='product-img' src={product.ImageUrl} />
                <h3 className='product-title'>{product.Name}</h3>
                <p className='product-category'>{product.Category}</p>
                <p className='product-price'>{product.Price}$</p>
                <a href='#' className='AddToCart'>
                    <IoCartOutline></IoCartOutline>Add To Cart 
                    
                </a>
            </div>
        ))
    }
  return (
    <div className='BestSaller'>
        <div className='container'>
            <h3 className='BestSaller-title'><span>Our Best </span> Seller</h3>
            <div className='row algin-center'>
                {renderBestSeller()}
            </div>
            <div className='viewAllProduct'>
                <p>View All Deals  
                    <FaArrowCircleRight className='icon'></FaArrowCircleRight>
                </p>
            </div>
        </div>

    </div>
  )
}

export default BestSaller