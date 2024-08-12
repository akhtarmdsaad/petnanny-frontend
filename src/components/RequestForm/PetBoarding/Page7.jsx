import React from 'react'

const Page7 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      "Number of nights required?": e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">Number of nights required?</div>
        <div className="answer">
        <div className="form-group">
            <input type="number" name="days" id="days" onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}

export default Page7