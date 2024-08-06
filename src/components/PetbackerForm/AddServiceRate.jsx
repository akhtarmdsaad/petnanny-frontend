import React from 'react'

const AddServiceRate = () => {
  return (
    <div>
        <h4>Add Service Rate</h4>
        <p>Service Type</p>
        <select>
            <option value="1">Dog Walking</option>
            <option value="2">Pet Boarding</option>
            <option value="3">Dog Training</option>
        </select>
        <p>Price</p>
        <input type="number" />
        <small>Pet owners will feel more comfortable knowing what is included in this quote</small>
        
        <textarea placeholder="Description" />
    </div>
  )
}

export default AddServiceRate