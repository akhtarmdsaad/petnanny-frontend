import React from 'react'

// class DogWalkingRequest(models.Model):
//     service = models.CharField(max_length=50, default='Dog Walking')
//     num_dogs = models.PositiveIntegerField()
//     dog_breed = models.CharField(max_length=50)
//     dog_size = models.TextField()
//     additional_notes = models.TextField(blank=True, null=True)
//     walks_per_day = models.PositiveIntegerField()
//     num_days = models.PositiveIntegerField()
//     start_date = models.DateTimeField(auto_now=True)
//     location = models.CharField(max_length=100)
//     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
//     created_at = models.DateTimeField(auto_now_add=True,null=True)
//     updated_at = models.DateTimeField(auto_now=True,null=True)



const Page3 = ({formData, setFormData}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      dog_breed: e.target.value
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