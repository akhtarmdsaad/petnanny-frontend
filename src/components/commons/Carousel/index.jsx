import React,{Children, useEffect} from 'react';
import './index.scss';

const Index = ({children}) => {
    // making the products scroll with arrow click
    useEffect(()=>{
        const rightArrow = document.querySelector('.right-arrow');
        const leftArrow = document.querySelector('.left-arrow');
        const carousel = document.querySelector('.carousel');
        let scrollPerClick = 70;

        rightArrow.addEventListener('click', () => {
            carousel.scrollLeft += scrollPerClick;
        })
        leftArrow.addEventListener('click', () => {
            carousel.scrollLeft -= scrollPerClick;
        })
    })
    
  return (
    <div className='carousel-parent'>
        <div className="left-arrow arrow">
            <i className="fas fa-chevron-left"></i>
        </div>
        <div className="carousel">
            {Children.map(children, child =>
                <div className='carousel-item'>
                    {child}
                </div>
            )}
        </div>
        <div className="right-arrow arrow">
            <i className="fas fa-chevron-right"></i>
        </div>
    </div>
  )
}

export default Index;