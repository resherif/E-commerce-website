import { useContext } from 'react';
import {ShopContext, type ShopContextType} from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescribtionBox from '../components/DescribtionBox/DescribtionBox'
import RelativeProducts from '../components/RelativeProducts/RelativeProducts';
const Product = () => {
  const context = useContext<ShopContextType | undefined>(ShopContext);
  if (!context) {
    throw new Error("Product must be used within ShopProvider");
    
  }
  const { all_products } = context;
  const { productId } = useParams<{productId:string}>();
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