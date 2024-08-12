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
import Summary from '../Summary';

const Index = () => {
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({
      service: 'Pet Boarding',
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
                <div className={`step ${index === idx ? 'active' : ''}`}>{idx+1}</div>
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