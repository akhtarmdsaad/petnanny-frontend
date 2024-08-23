import React from 'react'

        // num_pets: 1,
        // pet_type: '',
        // pet_breed: '',
        // pet_size: '',
        // additional_notes: '',
        // start_date: new Date(),
        // num_nights: 1,
        // location: '',
        // pickup_required: false

const Page5 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      additional_notes: e.target.value
    })
  }
  return (
    <div className='form'>
        <div className="question">Anything else the sitter needs to know? (optional)</div>
        <div className="answer">
          <div className="form-group">
            <input type="text" name='description' onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}

export default Page5