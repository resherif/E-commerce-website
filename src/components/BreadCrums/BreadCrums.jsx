import React from 'react'
import './BreadCrums.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
export const BreadCrums = (props) => {
    const { product } = props;
  return (
      <div className='BreadCrums'>
          HOME 
          <img src={arrow_icon} alt="" />
          SHOP <img src={arrow_icon} alt='' />
          {product.category} <img src={arrow_icon} alt='' />
          {product.name} <img src={arrow_icon} alt=''/>
    </div>
  )
}
export default BreadCrums;