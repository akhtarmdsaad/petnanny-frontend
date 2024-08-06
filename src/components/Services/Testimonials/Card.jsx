import React from 'react';
import Rating from '../../commons/Rating';
import './Card.scss';

const Card = ({profile_pic, desc, name, rating, date}) => {

  console.log(name, rating, date)
  console.log(desc, typeof(desc))

  return (
    <div className='testimonial-card'>
      <img src={profile_pic} />
      <div className='details'>
        <Rating rate={rating} />
        <div className="description">{desc}</div>
        <div className="name_date">
          <div className="name">
            {name}
          </div>
          <div className="date">
            {date}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card