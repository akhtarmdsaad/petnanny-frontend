import React from 'react';
import './index.scss';
import Title from '../../commons/Title';
import Button from '../../commons/Button';
import PetSitter from './PetSitter';

const PetSitterReviews = () => {
  return (
    <div className='petsitter-reviews'>
        <Title name='Pet Sitter Reviews' />
        <div className="petsitters">
            <PetSitter src="/assets/images/dog-boarder.jpg" name="Dog Boarder" rating={4} location="Lagos" charge="₹120 / night" />
            <PetSitter src="/assets/images/dog-boarder.jpg" name="Pet Sitter" rating={5} location="Abuja" charge="₹120 / night" />
            <PetSitter src="/assets/images/dog-boarder.jpg" name="Dog Boarder" rating={4} location="Lagos" charge="₹120 / night" />
        </div>
        <div className='button-container'>
            <Button text='Read more reviews' />
        </div>
    </div>
  )
}

export default PetSitterReviews;