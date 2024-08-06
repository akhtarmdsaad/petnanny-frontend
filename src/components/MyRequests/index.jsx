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
      console.log(response.data.requests)
      setData(response.data.requests);
    }).catch(error=>{
      console.error(error)
    })
  },[]);

  return (
    <div className='myrequests-parent-top'>
        <Navbar />
        <div style={{display: 'flex', alignItems:'center',justifyContent:'space-between', padding:20}}>
            <Title name="My Requests" />
            <Button text="Make Request" />
        </div>
        <div className="myRequests">
          {data.map((item, index) => {
            return <Request key={index} service={item.service} status={item.status} location={item.location} duration={item.duration} item_id={item.id} />
          })}
        </div>
        <Footer />
    </div>
  )
}

export default MyRequests;