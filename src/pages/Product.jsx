import React from 'react'
import { useContext } from 'react';
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescribtionBox from '../components/DescribtionBox/DescribtionBox'
import RelativeProducts from '../components/RelativeProducts/RelativeProducts';
const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescribtionBox />
      <RelativeProducts currentProduct={product}/>
    </div>
  )
}
export default Product