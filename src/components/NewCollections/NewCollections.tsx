import React from 'react'
import './NewCollections.css'
import New_Collections from '../assets/new_collections'
import Item from "../items/items"
import '../items/items.css'

export const NewCollections = () => {
  return (
    <div className='NewCollections'>
      <h2>New Collections</h2>
      <hr />
      <div className="Collections">
        {New_Collections.map((items, i) => {
          return (
            <Item 
              key={i} 
              id={items.id} 
              name={items.name} 
              image={items.image} 
              new_price={items.new_price} 
              old_price={items.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewCollections