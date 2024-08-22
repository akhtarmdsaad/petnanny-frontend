import React, { useEffect, useState } from 'react'
import './index.scss'

// import ButtonFade from '../../commons/ButtonFade';
import axios from '../../../interceptors/axios';
// let location, duration, service, item_id, status;
let service;

const Request = ({key,request}) => {
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
      /*Object { id: 10, , data: (9) […], created_at: "2024-08-14T16:00:26.608719Z", updated_at: "2024-08-14T16:00:26.608789Z", user: 5 }
  ​
  created_at: "2024-08-14T16:00:26.608719Z"
  ​
  data: Array(9) [ {…}, {…}, {…}, … ]
  // 0: Object { question: "Service", answer: "Dog Walking" }
  ​
  id: 10
  ​
  
  ​
  updated_at: "2024-08-14T16:00:26.608789Z"
  ​
  user: 5
  ​
  <prototype>: Object { … }
  index.jsx:44
*/

    request.data.map((item)=>{
      if (item.question === "Service"){
        service = item.answer;
        setServiceName(service);
      }
    }
    )

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
          ()=>{window.location.href = `/requests/${item_id}`}
          }>
                <img src="/assets/images/right_arrow.png" alt="right_arrow" />
        </div>
    </div>
    </div>
  )
}

export default Request;