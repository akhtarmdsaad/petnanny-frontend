import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../interceptors/axios';
import './index.scss';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';


const Index = () => {
  // <Route path='requests/:id' element={<RequestDetailView />} />
    const { id } = useParams();
    const [data, setData] = useState([]);
    // check id is integer
    function is_integer(value){
        if (isNaN(value)) {
            return false;
        }
        var x = parseFloat(value);
        return (x | 0) === x;
    }

    function datetime_format(value){
      // given : 2024-08-10T15:01:52.238729Z
      // to return : 10-08-2024 03:01:52 pm (notice the preceding zeros too)

      // extract data from value
      if (!value) return ''
      let date = value.split('T')[0]
      let time = value.split('T')[1].split('.')[0]

      // extract year, month, day
      let year = date.split('-')[0]
      let month = date.split('-')[1]
      let day = date.split('-')[2]

      // extract hour, minute, second
      let hour = time.split(':')[0]
      let minute = time.split(':')[1]
      let second = time.split(':')[2].split('Z')[0]

      // convert to 12 hour format
      let strTime = ''
      if(hour > 12){
        hour = hour - 12
        // append the zero if reqd
        if(hour < 10){
          hour = `0${hour}`
        }
        strTime = `${hour}:${minute}:${second} pm`

      }else{
        strTime = `${hour}:${minute}:${second} am`
      }

      date = `${day}-${month}-${year}`

      return `${date} ${strTime}`
    }

    useEffect(()=>{
        if(!is_integer(id)){
            alert("Invalid request id")
            window.location.href = '/requests'
        }

        axios.get(`petboarding_requests/${id}`).then(response => {  
            console.log(response.data)
            setData(response.data)
        }
        ).catch(error=>{
            console.error(error)
        })

    },[])
  return (
    <>
    <Navbar />
    <div className='request-detail-view-parent'>
        <h1 className='service-name'>{data.service}</h1>
        <div className="content">
        {/* {data to show} */}
        {/* 'additional_notes: "no"
​
created_at: "2024-08-23T00:39:00.623521Z"
​
id: 1
​
location: "Bangalore"
​
num_nights: 8
​
num_pets: 1
​
pet_breed: "no"
​
pet_size: "10-20kg"
​
pet_type: "rabbit"
​
pickup_required: true
​
service: "Pet Boarding"
​
start_date: "2024-08-08T20:29:00Z"' */}
          <div className="part">
            <div className="question">
              Location
            </div>
            <div className="answer">
              {data.location}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Number of Nights
            </div>
            <div className="answer">
              {data.num_nights}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Number of Pets
            </div>
            <div className="answer">
              {data.num_pets}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Pet Breed
            </div>
            <div className="answer">
              {data.pet_breed}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Pet Size
            </div>
            <div className="answer">
              {data.pet_size}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Pet Type
            </div>
            <div className="answer">
              {data.pet_type}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Pickup Required
            </div>
            <div className="answer">
              {data.pickup_required ? 'Yes' : 'No'}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Start Date
            </div>
            <div className="answer">
              {datetime_format(data.start_date)}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Additional Notes
            </div>
            <div className="answer">
              {data.additional_notes}
            </div>
          </div>
          <div className="part">
            <div className="question">
              Service
            </div>
            <div className="answer">
              {data.service}
            </div>
          </div>
        <div className="part">
            <div className="question">
              Request Created at
            </div>
            <div className="answer">
              {datetime_format(data.created_at)}
            </div>
          </div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default Index;