import React from 'react'

const Page6 = ({formData, setFormData}) => {

  // format: 
  //petType: Potty Training, Obedience Training

  const handleChange = (e) => {
    let value = e.target.value;
    let petType = formData.course?formData.course.split(", "):[];
    if (petType.includes(value)) {
      petType = petType.filter(type => type !== value);
    } else {
      petType.push(value);
    }
    setFormData({...formData, 
      course: petType.join(", ")
    });
  }
  return (
    <div className='form'>
        <div className="question">Which pet course are you interested in?</div>
        <form className="answer">
            <div className="form-group">
              <input type="checkbox" name="Potty Training" value="Potty Training" onChange={handleChange} />
              <label htmlFor="Potty Training">Potty Training</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Obedience Training" value="Obedience Training"  onChange={handleChange} />
            <label htmlFor="Obedience Training">Obedience Training</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Behavioural Training" value="Behavioural Training"  onChange={handleChange} />
            <label htmlFor="Behavioural Training">Behavioural Training</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Agility Training" value="Agility Training"  onChange={handleChange} />
            <label htmlFor="Agility Training">Agility Training</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Tricks Training" value="Tricks Training"  onChange={handleChange} />
            <label htmlFor="Tricks Training">Tricks Training</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Therapy" value="Therapy"  onChange={handleChange} />
            <label htmlFor="Therapy">Therapy</label></div>

        </form>
    </div>
  )
}

export default Page6

