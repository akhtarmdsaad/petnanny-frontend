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
            <input type="text" name="location" onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}

export default Page8