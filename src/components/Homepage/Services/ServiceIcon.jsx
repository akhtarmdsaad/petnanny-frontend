import React from 'react';
import './ServiceIcon.scss';

const ServiceIcon = ({path, title}) => {
  return (
    <div className='service-icon'>
        <img src={path}/>
        <p>{title}</p>
    </div>
  )
}

export default ServiceIcon