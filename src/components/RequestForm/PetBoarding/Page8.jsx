import React from 'react'

const Page8 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      "Where do you need the service?": e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">Where do you need the service?</div>
        <div className="answer">
          <div className="form-group">
            <select onChange={handleChange}>
            <option>Select Location</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Bangalore</option>
              <option>Gurgaon</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default Page8