import React from 'react';
import './index.scss';

const Header = () => {
  return (
    <div className='chat-header-parent'>
        <div className="profile_pic">
            {/* back button */}
            <a href="" className="back_button">
                <i className="fas fa-arrow-left"></i>
            </a>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile_pic" />
        </div>
        <div className="name_of_reciever">
            <h1>John Doe</h1>
        </div>
    </div>
  )
}

export default Header;