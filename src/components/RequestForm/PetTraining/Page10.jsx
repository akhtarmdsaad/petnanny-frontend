import React,{useState} from 'react'

const Page10 = ({formData, setFormData}) => {
  // format: {datetime: "hh-mm, dd-mm-yyyy"}
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  
  return (
    <div className='form'>
        <div className="question">Please pick starting date of service?</div>
        <div className="answer">
        <div className="form-group">
            <label htmlFor="date">Date</label> 
            <br></br>
            <input type="date" name="date" id="date" onChange={(e)=>{
              setDate(e.target.value);
              setFormData({...formData, "Please pick starting date of service?":`${time}, ${e.target.value}` });
            }} />
            <label htmlFor="time">Time</label>
            <br></br>
            <input type="time" name="time" id="time" onChange={(e)=>{
              setTime(e.target.value);
              setFormData({...formData, "Please pick starting date of service?":`${e.target.value}, ${date}` });
            }} />
          </div>
        </div>
    </div>
  )
}

export default Page10