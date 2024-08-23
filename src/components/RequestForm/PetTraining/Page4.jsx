import React from 'react'

const Page4 = ({formData, setFormData}) => {
  // format 1-5kg, 40+kg (include all checkboxes selected)

  const handleChange = (e) => {
    let value = e.target.value;
    let size = formData.pet_size?formData.pet_size.split(", "):[];
    if (size.includes(value)) {
      size = size.filter(type => type !== value);
    } else {
      size.push(value);
    }
    setFormData({...formData, 
      pet_size: size.join(", ")
    });
  }

  return (
    <div className='form'>
        <div className="question">What is the size of your pet?</div>
        <div className="answer">
            <div className="form-group"><input type="checkbox" name="1-5kg" value="1-5kg" onChange={handleChange} />
            <label htmlFor="1-5kg">1-5kg</label></div>
            <div className="form-group"><input type="checkbox" name="5-10kg" value="5-10kg" onChange={handleChange} />
            <label htmlFor="5-10kg">5-10kg</label></div>
            <div className="form-group"><input type="checkbox" name="10-20kg" value="10-20kg" onChange={handleChange} />
            <label htmlFor="10-20kg">10-20kg</label></div>
            <div className="form-group"><input type="checkbox" name="20-40kg" value="20-40kg" onChange={handleChange} />
            <label htmlFor="20-40kg">20-40kg</label></div>
            <div className="form-group"><input type="checkbox" name="40kg+" value="40kg+" onChange={handleChange} />
            <label htmlFor="40kg+">40kg+</label></div>
        </div>
    </div>
  )
}

export default Page4