import React from 'react'

const Page9 = ({formData, setFormData}) => {

  // format: 
  //petType: Dog, Cat

  const handleChange = (e) => {
    let value = e.target.value;
    let petType = formData.available_sessions?formData.available_sessions.split(", "):[];
    if (petType.includes(value)) {
      petType = petType.filter(type => type !== value);
    } else {
      petType.push(value);
    }
    setFormData({...formData, 
      available_sessions: petType.join(", ")
    });
  }
  return (
    <div className='form'>
        <div className="question">Pick the sessions you are available for.</div>
        <form className="answer">
            <div className="form-group">
              <input type="checkbox" name="Weekday mornings" value="Weekday mornings" onChange={handleChange} />
              <label htmlFor="Weekday mornings">Weekday mornings</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Weekday afternoons" value="Weekday afternoons"  onChange={handleChange} />
            <label htmlFor="Weekday afternoons">Weekday afternoons</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Weekday evenings" value="Weekday evenings"  onChange={handleChange} />
            <label htmlFor="Weekday evenings">Weekday evenings</label>
            </div>
            <div className="form-group">
            <input type="checkbox" name="Saturday/Sunday" value="Saturday/Sunday"  onChange={handleChange} />
            <label htmlFor="Saturday/Sunday">Saturday/Sunday</label>
            </div>
        </form>
    </div>
  )
}

export default Page9

