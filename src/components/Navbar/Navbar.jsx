import './Navbar.css'
import logo from '../assets/logo.png'
import cartIcon from '../assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import { ShopContext } from '../../context/ShopContext'
export const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotaalCartItems } = useContext(ShopContext);
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        setMobileMenuOpen(false);
    }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ""}`} onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <li onClick={() => { handleMenuClick("Shop") }}>
                    <Link to="/">Shop</Link>
                    {menu==="Shop"? <hr/>: <></>}
                </li>
                <li onClick={() => { handleMenuClick("Women") }}>
                    <Link to="/women">Women</Link>
                    {menu==="Women"? <hr/>: <></>}
                </li>
                <li onClick={() => { handleMenuClick("Men") }}>
                    <Link to="/men">Men</Link>
                    {menu==="Men"? <hr/>: <></>}
                </li>
                <li onClick={() => { handleMenuClick("Kids") }}>
                    <Link to="/kids">Kids</Link>
                    {menu==="Kids"? <hr/>: <></>}
                </li>

            </ul>
             <div className="nav-login-cart">
                 <Link to='/login'> 
                     <button>Login</button>
                 </Link>
                 <Link to='/cart'>
                     <img src={cartIcon} alt="" />
                 </Link>
                <div className="nav-cart-count">{ getTotaalCartItems()}</div>
             </div>
        </div>
    )
}
export default Navbar