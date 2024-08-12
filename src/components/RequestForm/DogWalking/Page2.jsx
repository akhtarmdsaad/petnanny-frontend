import React from 'react'

const Page3 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      "What breed is your dog?": e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">What breed is your dog?</div>
        <div className="answer">
          <div className="form-group">
            <input type="text" required name="breed" onChange={handleChange} />
          </div>
        </div>
    </div>
  )
}

export default Page3