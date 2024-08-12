import React, { useEffect, useState } from 'react';
import './index.scss';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';
import Title from '../commons/Title';
import Button from '../commons/Button';
import Request from './Request';
import axios from '../../interceptors/axios';


const MyRequests = () => {
  const [data,setData] = useState([]);
  console.log("render")
  useEffect(()=>{
    let url = "requests/";
    axios.get(url).then(response => {
      console.log(response.data)
      setData(response.data)
    }).catch(error=>{
      console.error(error)
    })
  },[]);

  return (
    <div className='myrequests-parent-top'>
        <Navbar />
        <div style={{display: 'flex', alignItems:'center',justifyContent:'space-between', padding:20}}>
            <Title name="My Requests" />
            {/* tgis button moves to '/request-form' */}
            <Button text="Make Request" onClick={
              () => {
                window.location.href = '/request-form';
              }
            } />
        </div>
        <div className="myRequests">
          {/* handle data object */}
          {/* {data && (data).map((key,idx) => (
            <div>{data}</div>
          ))} */}
          {/* {typeof(data) == object} */}
          {data && data.map((request,idx) => (
            <Request key={idx} request={request} />
          ))}
        </div>
        <Footer />
    </div>
  )
}

export default MyRequests;