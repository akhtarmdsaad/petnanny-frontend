import React from 'react';
import './index.scss';

const Button = ({text}) => {
  return (
    <div className='button'>
        <a href='#' className='text'>{text}</a>
    </div>
  )
}

export default Button