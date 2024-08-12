import React from 'react'

const Page5 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      "Anything else the dog walker needs to know?": e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">Anything else the dog walker needs to know? (optional)</div>
        <div className="answer">
          <div className="form-group">
            <input type="text" name='description' onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}

export default Page5