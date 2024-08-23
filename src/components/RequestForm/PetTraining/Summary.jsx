import React, { useEffect } from 'react';
import axios from '../../../interceptors/axios';

const Summary = ({service,formData}) => {

  const handleSubmit = () => {
    console.log('Form Data:',formData)
    axios.post('pettraining_requests/', formData)
    .then(res => {
      if(res.status === 201){
        console.log('Request submitted successfully')
        window.location.href = '/requests'
      }
      else{
        console.log('Request failed')
      }
    })
    .catch(err => {
      console.log(err)
    })

    
  }
  return (
    <div className='summary-parent'>
        <div>
          {/* {data÷} */}

        </div>
        <h3>Request Summary</h3>
        <p>Confirm or edit the details of your request before sending it out to service provider.</p>
        <div className="details">
            <div className="detail">
                <h5>Service Selected</h5>
                <p>{service}</p>
            </div>
            {formData && Object.keys(formData).map((key,idx) => (
                <div key={idx} className="detail">
                  <h5>{key}</h5>
                  {/* handle list separately */}
                    {/* <p>{formData[key]}</p> */}
                    {Array.isArray(formData[key]) ? (
                      <ul>
                        {formData[key].map((item,idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{formData[key]}</p>
                    )}
                </div>
            ))}

        </div>
        {/* submit button  */}
        <button className="submit" onClick={handleSubmit}>Submit Request</button>
    </div>
  )
}

export default Summary;
