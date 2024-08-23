import React, { useEffect, useState } from 'react'
import './index.scss'

import ButtonFade from '../../commons/ButtonFade'
import axios from '../../../interceptors/axios';
let location, duration, service, item_id, status;

const Request = ({key_id,request, service_name}) => {
  const [serviceName, setServiceName] = useState(service);
  
  

  useEffect(()=>{
    console.log(request)
    setServiceName(request.service || "Service Name")
  },[])

  return (
    <div className='request-parent' key={key_id}>
        <div className="request">
            <div className="top">
              <h2>{serviceName}</h2>
              <p className='status'>Created at: {request.created_at}</p>
            <div className="buttons">
                <button className="view" onClick={(e)=>{
                  e.preventDefault();
                  window.location.href = `/request-detail-to-backer/${service_name}/${request.id}`
                }}>View</button>
            </div>
        </div>
        <div className="right_arrow" onClick={
          ()=>{window.location.href = `/request-detail-to-backer/${service_name}/${request.id}`}
          }>
                <img src="/assets/images/right_arrow.png" alt="right_arrow" />
        </div>
    </div>
    </div>
  )
}

export default Request;