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
  const [isBacker, setIsBacker] = useState(false);
  console.log("render")
  useEffect(()=>{
    let url = "requests/";
    axios.get(url).then(response => {
      console.log(response.data)
      setData(response.data)
    }).catch(error=>{
      console.error(error)
    });

    axios.get('is-backer/')
        .then(response => {
            console.log(response.data);
            setIsBacker(response.data.is_backer);
        })
        .catch(error => {
            console.log(error);
            setIsBacker(false);
        });
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
        <div className="container">
          {!isBacker? <Button text="Become a Petbacker" onClick={
            () => {
              window.location.href = '/petbacker-form';
            }
          } /> : 
                    <Button text="Search Jobs near me" onClick={(e)=>{
                      window.location.href = '/jobs';
                    }} />
                  }
          </div>
        <Footer />
    </div>
  )
}

export default MyRequests;