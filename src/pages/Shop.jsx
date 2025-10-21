import React from 'react'
import Hero from '../components/Hero/Hero'
import  Popular  from '../components/popular/popular'
import  Offers from '../components/offers/offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetters from '../components/NewsLetters/NewsLetters'
 const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetters/>
    </div>
  )
}
export default Shop