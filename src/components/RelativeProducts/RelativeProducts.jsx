import React from 'react'
import './RelativeProducts.css';
import data_product from '../assets/data'
import Item from '../items/items'
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
export const RelativeProducts = ({ currentProduct }) => {
  const { all_products } = useContext(ShopContext);
  const relatedProducts = all_products.filter(
    (item) => item.category === currentProduct.category && item.id !== currentProduct.id
  ).slice(0, 4);
  return (
      <div className='RelativeProducts'>
          <h3>related products</h3>
          <hr />
          <div className="related-products-item">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((items) =>
          (<Item
              key={items.id}
            id={items.id}
            name={items.name}
            image={items.image}
            new_price={items.new_price}
            old_price={items.old_price}
          />
                  
          ))
        ) : (
            <p>NO Relatd Products</p>
            )
        }
            
              
          </div>
    </div>
  )
}
export default RelativeProducts;