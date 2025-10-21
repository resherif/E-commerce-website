import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'
 const Items = (props) => {
  return (
      <div className='item'>
         
              <Link to={`/product/${props.id}`}><img onClick={()=>window.scrollTo(0,0)} src={props.image} alt="" /></Link> 
          <p className='item-name'>{props.name}</p>
          <div className='itemPrices'>
              <div className="items-price-new">
                $ {props.new_price}
              </div>
              <div className="items-price-old">
                 $ {props.old_price}
                  
              </div>
          </div>
         </div>
   
  
  )
}
export default Items