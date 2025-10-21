import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext';

import remove_icon from '../assets/cart_cross_icon.png';
export const CartItems = () => {
    const {getTotalCartAmont ,all_products, cartItems, RemoveFromCart } = useContext(ShopContext);
  return (
      <div className='CartItems'>
          <div className="cart-item-format-main">
              <p>Products </p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>remove</p>
              </div>
              <hr />
              {all_products.map((e) => {
                  if (cartItems[e.id] > 0) {
                      return <div>
                  <div className="cartItems-format cart-item-format-main">
                      <img src={e.image} alt="" className='cartIconProductIcon' />
                              <p>{ e.name}</p>
                              < p style={{marginLeft:'20px'}}>${e.new_price}</p>
                              <button className='cart-iitems-quantity'>{ cartItems[e.id]}</button>
                              <p>${e.new_price*cartItems[e.id] }</p>
                      <img src={remove_icon} className='cartItems-remove-icon' onClick={()=>{RemoveFromCart(e.id)}} alt="" />
                          </div>
                          <hr />
              </div>
                  }
                  return null;
                  
              })}
          <div className="cartItems-down">
              <div className="cartItems-total">
                  <h3>cart Totals</h3>
                  <div>
                      <div className="cartItem-total-item">
                          <p>subtotal</p>
                          <p>${ getTotalCartAmont()}</p>
                      </div>
                      <hr />
                      <div className="cartItem-total-item">
                          <p>Shipping fee</p>
                          <p>free</p>
                      </div>
                      <hr />
                      <div className="cartItem-total-item">
                          <h6>Total</h6>
                          <h6>${getTotalCartAmont()}</h6>
                      </div>

                  </div>
                  <button>Proceed to checkout</button>
              </div>
              <div className="cartItems-promocode">
                  <p>If you have a promocode enter it here</p>
                  <div className="cartItems-promobox">
                      <input type="text" placeholder='promocode' />
                      <button>SUBMIT</button>
                  </div>
              </div>
          </div>

          
    </div>
  )
}
export default CartItems