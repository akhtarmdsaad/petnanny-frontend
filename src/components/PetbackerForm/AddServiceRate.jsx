import React from 'react'

const AddServiceRate = ({formData, setFormData}) => {
    const handleTextInputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
  return (
    <div>
        <h4>Add Service Rate</h4>
        <p>Service Type</p>
        <select onChange={handleTextInputChange} name='service_type'>
            <option value="Dog Walking">Dog Walking</option>
            <option value="Pet Boarding">Pet Boarding</option>
            <option value="Pet Training">Pet Training</option>
        </select>
        <p>Price</p>
        <input type="number" name='price' onChange={handleTextInputChange} />
        <small>Pet owners will feel more comfortable knowing what is included in this quote</small>
        
        <textarea placeholder="Description" name='additional_description' onChange={handleTextInputChange} />
    </div>
  )
}

export default AddServiceRate