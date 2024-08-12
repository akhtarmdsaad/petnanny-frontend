import React from 'react'

const Page8 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      "Which location would you prefer?": e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">Which location would you prefer?</div>
        <div className="answer">
        <div className="form-group">
            <input type="text" name="location" onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}

export default Page8