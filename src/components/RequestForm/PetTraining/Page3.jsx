import React from 'react'

const Page3 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      pet_breed: e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">What breed is it? (optional)</div>
        <div className="answer">
          <div className="form-group">
            <input type="text" name="breed" onChange={handleChange} />
          </div>
        </div>
    </div>
  )
}

export default Page3