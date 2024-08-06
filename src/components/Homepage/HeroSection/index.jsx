import React from 'react'
import './index.scss';

const index = () => {
  return (
    <div className='homepage-hero'>
        <div className='hero-text'>
            <h1>Find Everything Your pet needs</h1>
            <p>Book a pet nanny today and get the best care for your pet</p>
            <button className='button1'>Shop Now</button>
            <button className='button2' onClick={()=>{
              window.location.href = '/services';
            }}>Book Services ›</button>
        </div>
    </div>
  )
}

export default index;