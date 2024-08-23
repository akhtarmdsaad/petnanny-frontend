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

const Page2 = ({formData, setFormData}) => {

  // format: 
  //petType: Dog, Cat

  const handleChange = (e) => {
    let value = e.target.value;
    let petType = formData.pet_type?formData.pet_type.split(", "):[];
    if (petType.includes(value)) {
      petType = petType.filter(type => type !== value);
    } else {
      petType.push(value);
    }
    console.log(petType);
    setFormData({
      ...formData,
      pet_type: petType.join(", ")
    });
  }
  return (
    <div className='form'>
        <div className="question">What type of pet it is?</div>
        <form className="answer">
            <div className="form-group">
              <input type="checkbox" name="pet_type" value="dog" onChange={handleChange} />
              <label htmlFor="dog">Dog</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="pet_type" value="cat"  onChange={handleChange} />
            <label htmlFor="cat">Cat</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="pet_type" value="rabbit"  onChange={handleChange} />
            <label htmlFor="rabbit">Rabbit</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="pet_type" value="bird"  onChange={handleChange} />
            <label htmlFor="bird">Bird</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="pet_type pig" value="guinea pig"  onChange={handleChange} />
            <label htmlFor="guinea pig">Guinea Pig</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="pet_type" value="ferret"  onChange={handleChange} />
            <label htmlFor="ferret">Ferret</label></div>

            <div className="form-group">
            <input type="checkbox" name="pet_type" value="reptile"  onChange={handleChange} />
            <label htmlFor="reptile">Reptile</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="pet_type" value="others"  onChange={handleChange} />
            <label htmlFor="others">Others</label>
            </div>

        </form>
    </div>
  )
}

export default Page2

