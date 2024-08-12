import React from 'react';
import './index.scss';

const Button = ({text, onClick}) => {
  if(!onClick){
    return (
      <div className='button'>
          <a href='#' className='text'>{text}</a>
      </div>
    )
  }
  else{
    return (
      <div className='button'>
          <a href='#' className='text' onClick={onClick}>{text}</a>
      </div>
    )
  }
}

export default Button