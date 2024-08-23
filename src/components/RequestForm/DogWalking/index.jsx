import React,{useState} from 'react'

import Title from '../../commons/Title';
import './index.scss';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Summary from './Summary';

// class DogWalkingRequest(models.Model):
//     service = models.CharField(max_length=50, default='Dog Walking')
//     num_dogs = models.PositiveIntegerField()
//     dog_breed = models.CharField(max_length=50)
//     dog_size = models.TextField()
//     additional_notes = models.TextField(blank=True, null=True)
//     walks_per_day = models.PositiveIntegerField()
//     num_days = models.PositiveIntegerField()
//     start_date = models.DateTimeField(auto_now=True)
//     location = models.CharField(max_length=100)
//     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
//     created_at = models.DateTimeField(auto_now_add=True,null=True)
//     updated_at = models.DateTimeField(auto_now=True,null=True)


const Index = () => {
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({
        service: 'Dog Walking',
        num_dogs: 0,
        dog_breed: '',
        dog_size: '',
        additional_notes: '',
        walks_per_day: 0,
        num_days: 0,
        start_date: '',
        location: ''
    });
    const forms = [<Page1 formData={formData} setFormData={setFormData} />, <Page2 formData={formData} setFormData={setFormData} />, 
    <Page3 formData={formData} setFormData={setFormData} />, <Page4 formData={formData} setFormData={setFormData} />, 
    <Page5 formData={formData} setFormData={setFormData} />, <Page6 formData={formData} setFormData={setFormData} />, 
    <Page7 formData={formData} setFormData={setFormData} />, <Page8 formData={formData} setFormData={setFormData} />,
    <Summary service="Dog Walking" formData={formData} />
  ];
  return (
    <div className='dogwalking-form-parent'>
        <Title name='Dog Walking' />
        {/* top bar */}
        <div className="top-bar">
            <div className="steps">
            {forms.map((item,idx)=>{
                return <div className={`step ${index === idx ? 'active' : ''}`}>{idx+1}</div>
              })}
            </div>
        </div>
        <div className="dogwalking-form-top">
          <div className="dogwalking-form">
              {forms[index]}
          </div>
          <div className="buttons">
              <button onClick={() => setIndex(index-1)} disabled={index === 0} className='previous'>Previous</button>
              <button onClick={() => setIndex(index+1)} disabled={index === forms.length-1} className='next'>Next</button>
          </div>
        </div>
    </div>
  )
}

export default Index