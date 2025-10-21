import React from 'react'
import './NewsLetters.css';

const NewsLetters = () => {
  return (
    <div className='NewsLetters'>
      <h2>Get Exclusive Offers on Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="newsletter-form">
        <input type="email" placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetters