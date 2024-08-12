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
import Summary from '../Summary';

const Index = () => {
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({
      service: 'Dog Walking',
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
                <div className={`step ${index === idx ? 'active' : ''}`}>{idx+1}</div>
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