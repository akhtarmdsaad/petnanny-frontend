import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="sections">
            <h4>Petnanny</h4>
            <p>Careers</p>
            <p>About us</p>
            <p>Blog</p>
            <p>Testimonials</p>
            <p>Help Center</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
        </div>
        <div className="sections">
            <h4>Pet Lover</h4>
            <p><a href="petbacker-form">Be a pet sitter</a></p>
            <p><a href="petbacker-form">Be a dog walker</a></p>
            <p>Pet care App</p>
        </div>
        <div className="sections">
            <h4>Pet Services</h4>
            <p>Pet Grooming</p>
            <p>Dog Walking</p>
            <p>Pet Taxi</p>
            <p>Pet Sitting</p>
        </div>
        <div className="sections">
            <h4>Contact us</h4>
            <p><a href="">Facebook</a></p>
            <p><a href="">Twitter</a></p>
            <p><a href="">Instagram</a></p>
            <p><a href="">Youtube</a></p>
        </div>
    </div>
  )
}

export default Footer