import React, { useEffect, useState } from 'react'
import './index.scss'

import ButtonFade from '../../commons/ButtonFade'
import axios from '../../../interceptors/axios';
let location, duration, service, item_id, status;

const Request = ({key_id,request}) => {
  const [serviceName, setServiceName] = useState(service);
  const data = {

  }
  let item_id;
  if (item_id === undefined){
    item_id = request.id;
    location = request.data.location;
    duration = request.data.duration;
    service = request.service;
    status = request.status;
  }

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
              {/* <p className='status'>{status}</p>
              <p className="description">At {location}, for {duration} {duration===1?"day":"days"}</p>
              <div className="users">
                  <div className="profile_pic">
                      <img src="/assets/images/profile_pic.jpg" alt="profile_pic" />
                  </div>
                  <p>We will reach out to you soon</p>
              </div>
            </div>
            <div className="line"></div> */}
            <div className="buttons">
                <button className="view" onClick={(e)=>{
                  e.preventDefault();
                  window.location.href = `/request-detail-to-backer/${item_id}`
                }}>View</button>
            </div>
        </div>
        <div className="right_arrow" onClick={
          ()=>{window.location.href = `/request-detail-to-backer/${item_id}`}
          }>
                <img src="/assets/images/right_arrow.png" alt="right_arrow" />
        </div>
    </div>
    </div>
  )
}

export default Request;