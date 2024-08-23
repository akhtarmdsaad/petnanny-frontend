import React, { useEffect, useState } from 'react'
import './index.scss'

// import ButtonFade from '../../commons/ButtonFade';
import axios from '../../../interceptors/axios';
// let location, duration, service, item_id, status;
let service;

const Request = ({key,request, url}) => {
  const [serviceName, setServiceName] = useState(service);
  let item_id;

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
    let service;
    // get service name from request
    setServiceName(request.service)

    // request.data.map((item)=>{
    //   if (item.question === "Service"){
    //     service = item.answer;
    //     setServiceName(service);
    //   }
    // }
    // )

  },[request])

  return (
    <div className='request-parent'>
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
                <button className="delete" onClick={(e)=>{
                  e.preventDefault();
                  delete_item();
                }}>Delete</button>
            </div>
        </div>
        <div className="right_arrow" onClick={
          ()=>{window.location.href = `requests/${url}/${request.id}`}
          }>
                <img src="/assets/images/right_arrow.png" alt="right_arrow" />
        </div>
    </div>
    </div>
  )
}

export default Request;