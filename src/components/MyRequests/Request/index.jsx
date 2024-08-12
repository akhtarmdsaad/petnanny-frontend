import React, { useEffect, useState } from 'react'
import './index.scss'

import ButtonFade from '../../commons/ButtonFade'
import axios from '../../../interceptors/axios';
let location, duration, service, item_id, status;

const Request = ({key,request}) => {
  // request object: created_at: "2024-08-10T14:41:22.079692Z"
  // ​​
  // data: Object { saad: "me" }
  // ​​
  // id: 1
  // ​​
  // service: "Pet Service"
  // ​​
  // updated_at: "2024-08-10T14:41:22.079719Z"
  // ​​
  // user: 1
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

  function delete_item(){
    axios.delete(`requests/${item_id}`).then(response => {
      console.log(response);
      alert("Deleted Successfully")
      window.location.reload();
    }
    ).catch(error=>{
      console.error(error)
      alert("Error in deleting the request")
    })
  }

  useEffect(()=>{
    console.log(request)
    setServiceName(request.service || "Service Name")
  },[])

  return (
    <div className='request-parent'>
        <div className="request">
            <div className="top">
              <h2>{serviceName}, {item_id}</h2>
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
                <button className="delete" onClick={(e)=>{
                  e.preventDefault();
                  delete_item();
                }}>Delete</button>
            </div>
        </div>
        <div className="right_arrow" onClick={
          ()=>{window.location.href = `/requests/${item_id}`}
          }>
                <img src="/assets/images/right_arrow.png" alt="right_arrow" />
        </div>
    </div>
    </div>
  )
}

export default Request;