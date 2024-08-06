import React, { useState } from 'react'
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faSearch, faHome} from '@fortawesome/free-solid-svg-icons';
import axios from '../../../interceptors/axios';

library.add(faSearch, faHome);


function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const Index = () => {

   const [formData,setFormData] = useState({
      service: '1',
      location: 'Delhi',
      duration: '1',
      start_date: formatDate(new Date()),
   });

   function handleSubmit(event){
    event.preventDefault();
    console.log(formData);

    let url = "shortrequests/";
    axios.post(url, JSON.stringify(formData))
    .then((response) => {
      if(response.status === 201) {
        alert('Request created successfully');
        window.location.href = '/requests';
      }
    })
    .catch((error) => {
      console.error(error);
    });
   }


  return (
    <form className='services-hero' onSubmit={handleSubmit}>
        <div className='form-container'>
          <div>
            <h3>I'm looking for</h3>
            <select name='service' onChange={
              (e) => {
                setFormData({...formData, service: e.target.value})
              }
            }>
              <option value="1">Pet Boarder</option>
              <option value="2">Dog Walker</option>
              <option value="3">Dog Trainer</option>
            </select>
          </div>
          <div>
            <h3>Near</h3>
            <select name='location' onChange={
              (e) => {
                setFormData({...formData, location: e.target.value});
              }
            }>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Bangalore</option>
              <option>Gurgaon</option>
            </select>
          </div>
        </div>
        <button type='submit'><FontAwesomeIcon icon="search" /> Search</button>
    </form>
  )
}

export default Index;