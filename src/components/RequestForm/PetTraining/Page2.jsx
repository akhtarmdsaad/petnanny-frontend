import React from 'react'

const Page2 = ({formData, setFormData}) => {

  // format: 
  //petType: Dog, Cat

  const handleChange = (e) => {
    let value = e.target.value;
    let petType = formData["What type of pet it is?"] || [];
    if (petType.includes(value)) {
      petType = petType.filter(type => type !== value);
    } else {
      petType.push(value);
    }
    setFormData({...formData, 
      pet_type: petType.join(", ")
    });
  }
  return (
    <div className='form'>
        <div className="question">What type of pet it is?</div>
        <form className="answer">
            <div className="form-group">
              <input type="checkbox" name="dog" value="dog" onChange={handleChange} />
              <label htmlFor="dog">Dog</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="cat" value="cat"  onChange={handleChange} />
            <label htmlFor="cat">Cat</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="rabbit" value="rabbit"  onChange={handleChange} />
            <label htmlFor="rabbit">Rabbit</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="bird" value="bird"  onChange={handleChange} />
            <label htmlFor="bird">Bird</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="guinea pig" value="guinea pig"  onChange={handleChange} />
            <label htmlFor="guinea pig">Guinea Pig</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="ferret" value="ferret"  onChange={handleChange} />
            <label htmlFor="ferret">Ferret</label></div>

            <div className="form-group">
            <input type="checkbox" name="reptile" value="reptile"  onChange={handleChange} />
            <label htmlFor="reptile">Reptile</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="others" value="others"  onChange={handleChange} />
            <label htmlFor="others">Others</label>
            </div>

        </form>
    </div>
  )
}

export default Page2

