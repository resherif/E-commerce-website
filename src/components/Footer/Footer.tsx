import React from 'react'
import './Footer.css'
import Footer_logo from "../assets/logo_big.png"
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png';
 const Footer = () => {
  return (
      <div className='Footer'>
          <div className="Footer-logo">
              <img src={Footer_logo} alt="" />
              <p>SHOPPER</p>
          </div>
          <ul className="footerLinks">
              <li>Company</li>
              <li>Products</li>
              <li> Offices</li>
              <li>About us</li>
              <li>Contact</li>
          </ul>
          <div className="footer-social-icons">
              <div className="footer-social-icons-container">
                  <img src={instagram_icon} alt="" />
                  </div>
              <div className="footer-social-icons-container">
                   <img src={pintester_icon} alt="" />
                 </div>
                  <div className="footer-social-icons-container">
                   <img src={whatsapp_icon} alt="" />
                 </div>
              
          </div>
          <div className="footer-copy-rights">
              <hr />
              <p>CopyRights @ 2023 - All Rights reserved</p>
          </div>
    </div>
  )
}
export default Footer