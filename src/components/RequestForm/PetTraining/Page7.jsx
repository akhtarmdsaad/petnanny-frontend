import React from 'react'

const Page7 = ({formData, setFormData}) => {
    const handleRadioChange = (e) => {
        setFormData({
        ...formData,
        training_type: e.target.value
        })
    }
  return (
    <div className='form'>
        <div className="question">Are you looking for private lessons, group training or board and train programs?</div>
        <div className="answer">
        <div className="form-group">
              <input type="radio" name="pets" value="Private Dog Training lessons" onChange={handleRadioChange} /> 
              <label htmlFor='Private Dog Training lessons'>Private Dog Training lessons</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="Group Dog Training lessons" onChange={handleRadioChange} />
            <label htmlFor='Group Dog Training lessons'>Group Dog Training lessons</label>
            </div>
            <div className="form-group">
            <input type="radio" name="pets" value="Board and train programs" onChange={handleRadioChange} />
            <label htmlFor='Board and train programs'>Board and train programs</label>
            </div>
        </div>
    </div>
  )
}

export default Page7