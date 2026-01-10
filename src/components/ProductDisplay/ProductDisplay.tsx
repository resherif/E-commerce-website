
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
interface Product{
    id: number,
    name: string,
    image: string,
    old_price: number,
    new_price:number
}
interface ProductDisplayProps {
  product: Product;
}
export const ProductDisplay = (props:ProductDisplayProps) => {
    const { product } = props;
    // const { addToCart } = useContext(ShopContext);
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error("ProductDisplay must be used within ShopProvider")
    }
    const {addToCart} = context;
  return (
      <div className='ProductDisplay'>
          <div className="product-display-left">
              <div className="display-img-list">
                  <img src={product.image} alt=""  />
                  <img src={product.image} alt=""  />
                  <img src={product.image} alt=""  />
                  <img src={product.image}  alt=""  />
              </div>
              <div className="display-img">
                  <img className='product-display-main-img' src={product.image} alt="" />
              </div>
          </div>
          <div className="product-display-right">
              <h3>{product.name}</h3>
              <div className="product-display-right-star">
                  <img src={star_icon} alt=''/>
                  <img src={star_icon} alt=''/>
                  <img src={star_icon} alt=''/>
                  <img src={star_icon} alt=''/>
                  <img src={star_dull_icon} alt='' />
                  <p>{ 122}</p>
              </div>
              <div className="product-display-right-prices">
                  <div className="old-price">${ product.old_price}</div>
                  <div className="new-price">${product.new_price}</div>
                  
              </div>
              <div className="product-display-right-description">
                  A lightweight , usually pullover shirt , close-fitting amd wj around neckline and short sleeves , worn as an undershirt or outer garment
              </div>
              <div className="product-display-right-size">
                  <h3>Select size</h3>
                  <div className="product-display-right-sizes">
                      <div>S</div>
                      <div>M</div>
                      <div>L</div>
                      <div>XL</div>
                      <div>XXL</div>
                  </div>
              </div>
              <button onClick={()=>{addToCart(product.id)}}>ADD To Cart</button>
              <p className="product-display-right-category"><span>Category : </span> Women,T-shirt , cropTop </p>
              <p className="product-display-right-category"><span>Tags : </span> modern,latest  </p>
          </div>
    </div>
  )
}
export default ProductDisplay;