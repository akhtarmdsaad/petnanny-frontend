import React from 'react'

const Page9 = ({formData, setFormData}) => {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            pickup_required: e.target.value === 'yes' ? true : false
        })
    }
  return (
    <div className='form'>
        <div className="question">Do you need pet pickup services?</div>
        <div className="answer">
            <div className="form-group"><input type="radio" name="pickup" value="yes" onChange={handleChange} /> 
            <label>Yes</label></div>
            <div className="form-group"><input type="radio" name="pickup" value="no" onChange={handleChange} /> 
            <label>No</label></div>
        </div>
    </div>
  )
}

export default Page9