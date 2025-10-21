import React from 'react'
import '../pages/css/ShopCategories.css'
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdoen_icon from '../assets/dropdown_icon.png'
import Items from '../components/items/items';
const ShopCategories = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className='ShopCategories'>
      <img  className='shopcategory-banner' src={props.banner} alt="" />
      <div className="ShopCategories-index-sort">
        <p><span>showing 1-12</span>out of 36 products</p>
        <div className="shopCategories-sort">
          Sort by
          <img src={dropdoen_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
          {all_products
        .filter((item) => item.category === props.Category) 
        .map((product,i) => (
          <Items key={i} id={ product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
export default ShopCategories