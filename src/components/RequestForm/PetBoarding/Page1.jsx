import React from 'react'


// class PetBoardingRequest(models.Model):
//     service = models.CharField(max_length=50, default='Pet Boarding')
//     num_pets = models.PositiveIntegerField()
//     pet_type = models.TextField()
//     pet_breed = models.CharField(max_length=50, blank=True, null=True)
//     pet_size = models.TextField()
//     additional_notes = models.TextField(blank=True, null=True)
//     start_date = models.DateTimeField()
//     num_nights = models.PositiveIntegerField()
//     location = models.CharField(max_length=100)
//     pickup_required = models.BooleanField(default=False)

const Page1 = ({formData, setFormData}) => {
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      num_pets: parseInt(e.target.value)
    })
  }
  return (
    <div className='form'>
        <div className="question">How many pets do you need to board?</div>
        <form className="answer">
            {/* upto 8 */}
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
        </form>
    </div>
  )
}

export default Page1