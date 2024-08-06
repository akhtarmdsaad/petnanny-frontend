import React from 'react'
import Title from '../../commons/Title';
import ServiceIcon from './ServiceIcon';
import './index.scss';


const Index = () => {
  return (
    <>
        <Title name="Services we offer" />
    <div className='services-parent'>
        <div>
            <ServiceIcon path='/assets/images/icons/image(5).png'/>
            <ServiceIcon path='/assets/images/icons/image(6).png'/>
            <ServiceIcon path='/assets/images/icons/image(7).png'/>
        </div>
        <div>
            <ServiceIcon path='/assets/images/icons/image(8).png' />
            <ServiceIcon path='/assets/images/icons/image(9).png' />
            <ServiceIcon path='/assets/images/icons/image(10).png' />
        </div>
    </div>
    </>
  )
}

export default Index