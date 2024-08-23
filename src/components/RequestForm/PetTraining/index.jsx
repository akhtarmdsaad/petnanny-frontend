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
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Summary from './Summary';

// class PetTrainingRequest(models.Model):
//     service = models.CharField(max_length=50, default='Pet Training')
//     num_pets = models.PositiveIntegerField()
//     pet_type = models.TextField()
//     pet_breed = models.CharField(max_length=50)
//     pet_size = models.TextField()
//     pet_age = models.TextField()
//     course = models.TextField()
//     training_type = models.CharField(max_length=50, default='Private Dog Training lessons')
//     additional_notes = models.TextField(blank=True, null=True)
//     available_sessions = models.CharField(max_length=255)
//     start_date = models.DateTimeField()
//     location = models.CharField(max_length=100)
//     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
//     created_at = models.DateTimeField(auto_now_add=True,null=True)
//     updated_at = models.DateTimeField(auto_now=True,null=True)

const Index = () => {
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({
      service: 'Pet Training',
      num_pets: 0,
      pet_type: '',
      pet_breed: '',
      pet_size: '',
      pet_age: '',
      course: '',
      training_type: '',
      additional_notes: '',
      available_sessions: '',
      start_date: '',
      location: ''
    });
    const forms = [
      <Page1 formData={formData} setFormData={setFormData} />, <Page2 formData={formData} setFormData={setFormData} />, 
      <Page3 formData={formData} setFormData={setFormData} />, <Page4 formData={formData} setFormData={setFormData} />, 
      <Page5 formData={formData} setFormData={setFormData} />, <Page6 formData={formData} setFormData={setFormData} />, 
      <Page7 formData={formData} setFormData={setFormData} />, <Page8 formData={formData} setFormData={setFormData} />, 
      <Page9 formData={formData} setFormData={setFormData} />, <Page10 formData={formData} setFormData={setFormData} />,
      <Page11 formData={formData} setFormData={setFormData} />,
      <Summary service="Pet Training" formData={formData} />
    ];
  return (
    <div className='pettraining-form-parent'>
        <Title name='Pet Training' />
        {/* top bar */}
        <div className="top-bar">
            <div className="steps">
            {forms.map((item,idx)=>{
                return <div className={`step ${index === idx ? 'active' : ''}`}>{idx+1}</div>
              })}
            </div>
        </div>
        <div className="pettraining-form-top">
          <div className="pettraining-form">
              {forms[index]}
          </div>
          <div className="buttons">
              <button onClick={() => setIndex(index-1)} disabled={index === 0} className='previous'>Previous</button>
              <button onClick={() => setIndex(index+1)} disabled={index === forms.length-1} className='next'>Next </button>

          </div>
        </div>
    </div>
  )
}

export default Index