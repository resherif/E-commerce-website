// import { createContext } from "react";
// import all_products from '../assets/all_product'
// export const ShopContext = createContext();
// const ShopContextProvider = ({ children }) => {
//     return (
//         <ShopContext.Provider value={{ all_products }}>
//             {children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;
import {  createContext, useState } from "react";
import all_products from '../assets/all_product';
   const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < all_products.length+1; i++){
            cart[i] = 0;
        }
        return cart;
    }
export const ShopContext = createContext();
const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    console.log(cartItems);
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    }
    const RemoveFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmont = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];

            }
           
        }
         return totalAmount;
    }
    const getTotaalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    return (
        <ShopContext.Provider value={{getTotaalCartItems,getTotalCartAmont,all_products,cartItems,addToCart,RemoveFromCart}}>
        {children}
    </ShopContext.Provider>
   )
}
export default ShopContextProvider;