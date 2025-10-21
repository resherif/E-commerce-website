// import React from 'react'
// import './offers.css'
// import execlusive_image from '../assets/exclusive_image.png'
// const Offers = () => {
//   return (
//       <div className='offers'>
//           <div className="offers-left">
//               <h1>EXECLUSIVE</h1>
//               <h2>OFFERS FOR YOU</h2>
//               <p>ONLY ON BEST SELLER PRODUCTS</p>
//               <button>CHECk NOW</button>
//           </div>
//           <div className="offers-right">
//               <img src={execlusive_image} alt="" />
//           </div>
//     </div>
//   )
// }
// export default Offers
import React from 'react'
import './offers.css'
import execlusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h2>OFFERS FOR YOU</h2>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>CHECK NOW</button>
      </div>
      <div className="offers-right">
        <img src={execlusive_image} alt="Exclusive offers" />
      </div>
    </div>
  )
}

export default Offers