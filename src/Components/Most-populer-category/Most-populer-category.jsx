import React from 'react'
import MenCategory from '../../../public/assets/MenCategory.jpg'
import WomenCategory from '../../../public/assets/womenCategory.jpg'
import KidCategory from '../../../public/assets/KidCategory.jpg'
import './Most-populer-category.css'
import { Link } from 'react-router-dom'
function MostCopulerCategory() {
const Categorylist = [
    {
        ID: 1,
        Name: "Men",
        ImageUrl: MenCategory
    },
    {
        ID: 2,
        Name: "Women",
        ImageUrl: WomenCategory
    },
    {
        ID: 3,
        Name: "Kids",
        ImageUrl: KidCategory
    }
];

    const renderCategories = () => {
    return Categorylist.map((item) => (
        <div className='col-4'>
            <Link key={item.ID} to={`/store/${item.Name.toLowerCase()}`}>
                <div className='Category-item'>
                    <img src={item.ImageUrl} alt={item.Name} className='img-category' />
                    <h3 className='title-category'>{item.Name}<span>Collections</span></h3>
                </div>
            </Link>
        </div>
    ));
};


  return (
    <div className='Most-populer-category'>
        <div className='container'>
            <h2 className='title'>
                <span>Most popular</span> Categories</h2>
            <div className='row g-3 align-items-center'>
                {renderCategories()}
            </div>
        </div>
    </div>
  )
}

export default MostCopulerCategory