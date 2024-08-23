import React, { useState, useEffect } from 'react';

const Page6 = ({ formData, setFormData }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (date && time) {
      const formattedDateTime = formatDateTime(date, time);
      setFormData(prevData => ({
        ...prevData,
        start_date: formattedDateTime
      }));
    }
  }, [date, time, setFormData]);

  const formatDateTime = (date, time) => {
    const dateTimeString = `${date}T${time}:00`;
    const dateObject = new Date(dateTimeString);
    let isoString = dateObject.toISOString();
    return isoString.split('.')[0] + 'Z';
  };

  return (
    <div className='form'>
      <div className="question">Please pick starting date of service?</div>
      <div className="answer">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <br />
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="time">Time</label>
          <br />
          <input
            type="time"
            name="time"
            id="time"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page6;