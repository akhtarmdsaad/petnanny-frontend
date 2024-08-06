import React from 'react'
import Title from '../../commons/Title';
import Carousel from '../../commons/Carousel';
import './index.scss';


const index = () => {
  return (
    <div className='products'>
        <Title name="Top Products" />
        <Carousel>
            <div>
                <img src="/assets/images/prod1.webp" />
                <p className="legend">Sheba</p>
            </div>
            <div>
                <img src="/assets/images/prod1.webp" />
                <p className="legend">Sheba</p>
            </div>
            <div>
                <img src="/assets/images/cat_food.avif" />
                <p className="legend">Cat food</p>
            </div>
            <div>
                <img src="/assets/images/prod1.webp" />
                <p className="legend">Sheba</p>
            </div>
            <div>
                <img src="/assets/images/cat_food.avif" />
                <p className="legend">Cat food</p>
            </div>
            <div>
                <img src="/assets/images/cat_food.avif" />
                <p className="legend">Cat food</p>
            </div>
            <div>
                <img src="/assets/images/prod1.webp" />
                <p className="legend">Sheba</p>
            </div>
            <div>
                <img src="/assets/images/cat_food.avif" />
                <p className="legend">Cat food</p>
            </div>
            <div>
                <img src="/assets/images/prod1.webp" />
                <p className="legend">Sheba</p>
            </div>
            <div>
                <img src="/assets/images/cat_food.avif" />
                <p className="legend">Cat food</p>
            </div>
            <div>
                <img src="/assets/images/prod1.webp" />
                <p className="legend">Sheba</p>
            </div>
            <div>
                <img src="/assets/images/cat_food.avif" />
                <p className="legend">Cat food</p>
            </div>
            <div>
                <img src="/assets/images/prod1.webp" />
                <p className="legend">Sheba</p>
            </div>
            <div>
                <img src="/assets/images/cat_food.avif" />
                <p className="legend">Cat food</p>
            </div>
        </Carousel>
    </div>
  )
}

export default index