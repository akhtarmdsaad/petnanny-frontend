import React,{useState} from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Title from '../../commons/Title';
import './index.scss';
import Summary from './Summary';

// class PetBoardingRequest(models.Model):
//     service = models.CharField(max_length=50, default='Pet Boarding')
//     num_pets = models.PositiveIntegerField()
//     pet_type = models.TextField()
//     pet_breed = models.CharField(max_length=50, blank=True, null=True)
//     pet_size = models.TextField()
//     additional_notes = models.TextField(blank=True, null=True)
//     start_date = models.DateTimeField()
//     num_nights = models.PositiveIntegerField()
//     location = models.CharField(max_length=100)
//     pickup_required = models.BooleanField(default=False)



const Index = () => {
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({
        num_pets: 1,
        pet_type: '',
        pet_breed: '',
        pet_size: '',
        additional_notes: '',
        start_date: new Date(),
        num_nights: 1,
        location: '',
        pickup_required: false
    });
    const forms = [
      <Page1 formData={formData} setFormData={setFormData} />, <Page2 formData={formData} setFormData={setFormData} />, 
      <Page3 formData={formData} setFormData={setFormData} />, <Page4 formData={formData} setFormData={setFormData} />, 
      <Page5 formData={formData} setFormData={setFormData} />, <Page6 formData={formData} setFormData={setFormData} />, 
      <Page7 formData={formData} setFormData={setFormData} />, <Page8 formData={formData} setFormData={setFormData} />, 
      <Page9 formData={formData} setFormData={setFormData} />, <Summary service="Pet Boarding" formData={formData} />
    ];
  return (
    <div className='petboarding-form-parent'>
        <Title name='Pet Boarding' />
        {/* top bar */}
        <div className="top-bar">
            <div className="steps">
              {forms.map((item,idx)=>{
                return <div className={`step ${index === idx ? 'active' : ''}`}>{idx+1}</div>
              })}
            </div>
        </div>
        <div className="petboarding-form-top">
          <div className="petboarding-form">
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