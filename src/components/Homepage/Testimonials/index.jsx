import React from 'react'
import Title from '../../commons/Title';
import Card from './Card';
import './index.scss';
import Button from '../../commons/Button';



const Index = () => {
    let desc = `Tess took great care of my pets while I was away. The daily journal and  pictures were reassuring, especially since I was worried about my older  cat. This service is great, and so much better than boarding. Thank you!`
    let desc1 = `Tess took great care of my pets while I was away. The daily journal and  pictures were reassuring, especially since I was worried about my older  cat. This service is great, and so much better than boarding. Thank you!, Tess took great care of my pets while I was away. The daily journal and  pictures were reassuring, especially since I was worried about my older  cat. This service is great, and so much better than boarding. Thank you!`
    let name = 'John Doe'
    let profile_pic = '/assets/images/profile_pic.jpg'
    let rating = 5
    let date = 'April 11th, 2024'


  return (
    <div className='testimonials-parent '>
        <Title name="Testimonials" />
        <div className='testimonials'>
            <Card profile_pic={profile_pic} desc={desc} name={name} date={date} rating={rating} />
            <Card profile_pic={profile_pic} desc={desc1} name={name} date={date} rating={rating} />
            <Card profile_pic={profile_pic} desc={desc} name={name} date={date} rating={rating} />
        </div>
        <div className="button-parent">
          <Button text='View More' />
        </div>
    </div>
  )
}

export default Index