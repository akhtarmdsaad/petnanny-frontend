import React from 'react';
import './index.scss';

const ButtonFade = ({text}) => {
  return (
    <div className='button-fade'>
        <a href='#' className='text'>{text}</a>
    </div>
  )
}

export default ButtonFade