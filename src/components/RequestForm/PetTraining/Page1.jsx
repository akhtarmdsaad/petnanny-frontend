import React from 'react'

const Page1 = ({formData, setFormData}) => {
    const handleRadioChange = (e) => {
        setFormData({
        ...formData,
        num_pets: parseInt(e.target.value)
        })
    }
  return (
    <div className='form'>
        <div className="question">How many pets would you like trained?</div>
        <div className="answer">
        <div className="form-group">
              <input type="radio" name="pets" value="1" onChange={handleRadioChange} /> 
              <label htmlFor='1'>1</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="2" onChange={handleRadioChange} />
            <label htmlFor='2'>2</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="3" onChange={handleRadioChange} />
            <label htmlFor='3'>3</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="4" onChange={handleRadioChange} />
            <label htmlFor='4'>4</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="5" onChange={handleRadioChange} />
            <label htmlFor='5'>5</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="6" onChange={handleRadioChange} />
            <label htmlFor='6'>6</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="7" onChange={handleRadioChange} />
            <label htmlFor='7'>7</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="8" onChange={handleRadioChange} />
            <label htmlFor='8'>8</label>
            </div>
        </div>
    </div>
  )
}

export default Page1