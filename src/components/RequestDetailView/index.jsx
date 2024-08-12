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

        axios.get(`requests/${id}`).then(response => {  
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
        {data && data.data && data.data.map((item,idx)=>{
            return (
                <div className='part' key={idx}>
                    <h4 className="question">
                        {item.question}
                    </h4>
                    <div className='answer'>
                    {Array.isArray(item.answer) ? (
                    <ul>
                      {item.answer.map((sub_item,idx) => (
                        <li key={idx}>{sub_item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                    </div>
                </div>
            )
        })}
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