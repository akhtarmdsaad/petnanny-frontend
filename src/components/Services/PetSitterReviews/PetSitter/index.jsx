import React from 'react'
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';

library.add(faLocationDot);

const PetSitter = ({src, name, rating, location, charge}) => {
  return (
    <div className='petsitter'>
        <img src={src} alt="" />
        <div className='top-row'>
            <h3>{name}</h3>
            <Rating name="read-only" value={rating} readOnly size="small" />
        </div>
        <div className='bottom-row'>
            <p><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {location} </p>
            <p className='charge'>{charge}</p>
        </div>
    </div>
  )
}

export default PetSitter;