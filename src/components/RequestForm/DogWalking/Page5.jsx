import React from 'react'

const Page1 = ({formData, setFormData}) => {
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      "How many pets do you need to board?": e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">How many pet walk do you need per day?</div>
        <form className="answer">
            {/* upto 8 */}
            <div className="form-group">
              <input type="radio" name="pets" value="1 walk per day" onChange={handleRadioChange} /> 
              <label htmlFor='1'>1 walk per day</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="2 walk per day" onChange={handleRadioChange} />
            <label htmlFor='2'>2 walk per day</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="3 walk per day" onChange={handleRadioChange} />
            <label htmlFor='3'>3 walk per day</label>
            </div>
        </form>
    </div>
  )
}

export default Page1