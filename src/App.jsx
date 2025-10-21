import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategories from './pages/ShopCategories'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Shop/>} />
        <Route path='/men' element={ <ShopCategories banner={men_banner} Category="men"/>} />
        <Route path='/women' element={ <ShopCategories banner={women_banner} Category="women"/>} />
        <Route path='/kids' element={ <ShopCategories  banner={kid_banner} Category="kid"/>} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup/> } />
        
      </Routes>
      <Footer/>
       
    </>
  )
}

export default App
