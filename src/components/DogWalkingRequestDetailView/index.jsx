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

        axios.get(`dogwalking_requests/${id}`).then(response => {  
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
created_at: "2024-08-23T01:03:46.885104Z"
​
dog_breed: "husky"
​
dog_size: "5-10kg"
​
id: 1
​
location: "Noida"
​
num_days: 30
​
num_dogs: 1
​
service: "Dog Walking"
​
start_date: "2024-08-23T01:03:46.885035Z"
​
updated_at: "2024-08-23T01:03:46.885119Z"
​
user: 1
​
walks_per_day: 1' */}

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
            Number of Dogs
          </div>
          <div className="answer">
            {data.num_dogs}
          </div>
        </div>
        <div className="part">
          <div className="question">
            Number of Days
          </div>
          <div className="answer">
            {data.num_days}
          </div>
        </div>
        <div className="part">
          <div className="question">
            Dog Breed
          </div>
          <div className="answer">
            {data.dog_breed}
          </div>
        </div>
        <div className="part">
          <div className="question">
            Dog Size
          </div>
          <div className="answer">
            {data.dog_size}
          </div>
        </div>
        <div className="part">
          <div className="question">
            Walks per Day
          </div>
          <div className="answer">
            {data.walks_per_day}
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
            Start Date
          </div>
          <div className="answer">
            {datetime_format(data.start_date)}
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