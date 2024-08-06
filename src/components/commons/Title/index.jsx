import React from 'react';
import './index.scss';

const Index = ({name}) => {
  return (
    <div className='title'>
        <h2 className='text'>{name}</h2>
        <div className='underline'></div>
    </div>
  )
}

export default Index