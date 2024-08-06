import React, { useEffect, useState } from 'react'
import './index.scss'

import ButtonFade from '../../commons/ButtonFade'
import axios from '../../../interceptors/axios';

const Request = ({service,status,location, duration,item_id}) => {
  const [serviceName, setServiceName] = useState(service);

  function delete_item(){
    axios.delete(`shortrequests/${item_id}`).then(response => {
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
    if(service === 1){
      setServiceName("Pet Boarder")
    }
    else if(service === 2){
      setServiceName("Dog Walker")
    }
    else if(service === 3){
      setServiceName("Dog Trainer")
    }
    console.log(serviceName)
  },[serviceName, service])

  return (
    <div className='request-parent'>
        <div className="request">
            <div className="top">
              <h2>{serviceName}</h2>
              <p className='status'>{status}</p>
              <p className="description">At {location}, for {duration} {duration===1?"day":"days"}</p>
              <div className="users">
                  <div className="profile_pic">
                      <img src="/assets/images/profile_pic.jpg" alt="profile_pic" />
                  </div>
                  <p>We will reach out to you soon</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="buttons">
                {/* <ButtonFade text="View" /> */}
                <button className="delete" onClick={(e)=>{
                  e.preventDefault();
                  delete_item();
                }}>Delete</button>
            </div>
            
        </div>
        {/* <div className="right_arrow">
                <img src="/assets/images/right_arrow.png" alt="right_arrow" />
        </div> */}
    </div>
  )
}

export default Request