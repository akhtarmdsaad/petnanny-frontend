import React from 'react'

const AddLocation = ({formData, setFormData}) => {
    const handleTextInputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
  return (
    <div>
        <h4>Add Location</h4>
        <p>Listing Location</p>
        <small>Pet parents will only get your full address once they've booked a reservation with you.</small>
        <br />
        <input type="text" name="Apartment, house number" onChange={handleTextInputChange} placeholder="Enter Apartment, house number" /> <br />
        <input type="text" name="Street Name" onChange={handleTextInputChange} placeholder="Enter Street Name" /> <br />
        <input type="text" name="City" onChange={handleTextInputChange} placeholder="Enter City" /> <br />
        <input type="text" name="State" onChange={handleTextInputChange} placeholder="Enter State" /> <br />
        <input type="text" name="Zip Code" onChange={handleTextInputChange} placeholder="Enter Zip Code" /> <br />
        <input type="text" name="Country" onChange={handleTextInputChange} placeholder="Enter Country" />
    </div>
  )
}

export default AddLocation;