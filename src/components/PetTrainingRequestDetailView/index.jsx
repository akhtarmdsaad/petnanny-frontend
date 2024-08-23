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
      let second = time.split(':')[2]

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

        axios.get(`pettraining_requests/${id}`).then(response => {  
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

          {/* 'additional_notes: "nope"
​
available_sessions: "Weekday afternoons"
​
course: "Obedience Training"
​
created_at: "2024-08-23T01:16:33.761946Z"
​
id: 1
​
location: "Gurgaon"
​
num_pets: 1
​
pet_age: "6-12 months old"
​
pet_breed: "none"
​
pet_size: "5-10kg"
​
pet_type: "reptile"
​
service: "Pet Training"
​
start_date: "2024-08-08T02:16:00Z"
​
training_type: "Private Dog Training lessons"' */}

        
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
            Pet Type
          </div>
          <div className="answer">
            {data.pet_type}
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
            Pet Age
          </div>
          <div className="answer">
            {data.pet_age}
          </div>
        </div>
        <div className="part">
          <div className="question">
            Course
          </div>
          <div className="answer">
            {data.course}
          </div>
        </div>
        <div className="part">
          <div className="question">
            Training Type
          </div>
          <div className="answer">
            {data.training_type}
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
            Available Sessions
          </div>
          <div className="answer">
            {data.available_sessions}
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
            Location
          </div>
          <div className="answer">
            {data.location}
          </div>
        </div>
        <div className="part">
          <div className="question">
            Request ID
          </div>
          <div className="answer">
            {data.id}
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

export default Index