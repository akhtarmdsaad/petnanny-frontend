import React from 'react'

const Page5 = ({formData, setFormData}) => {
  // format 0-6 months old, 40+kg (include all checkboxes selected)

  const handleChange = (e) => {
    let value = e.target.value;
    let size = formData["How old are your pets?"] || [];
    if (size.includes(value)) {
      size = size.filter(type => type !== value);
    } else {
      size.push(value);
    }
    setFormData({...formData, "How old are your pets?":size});
  }

  return (
    <div className='form'>
        <div className="question">How old are your pets?</div>
        <div className="answer">
            <div className="form-group"><input type="checkbox" name="0-6 months old" value="0-6 months old" onChange={handleChange} />
            <label htmlFor="0-6 months old">0-6 months old</label></div>
            <div className="form-group"><input type="checkbox" name="6-12 months old" value="6-12 months old" onChange={handleChange} />
            <label htmlFor="6-12 months old">6-12 months old</label></div>
            <div className="form-group"><input type="checkbox" name="1-2 years old" value="1-2 years old" onChange={handleChange} />
            <label htmlFor="1-2 years old">1-2 years old</label></div>
            <div className="form-group"><input type="checkbox" name="2-10 years old" value="2-10 years old" onChange={handleChange} />
            <label htmlFor="2-10 years old">2-10 years old</label></div>
            <div className="form-group"><input type="checkbox" name="10 years+" value="10 years+" onChange={handleChange} />
            <label htmlFor="10 years+">10 years+</label></div>
        </div>
    </div>
  )
}

export default Page5