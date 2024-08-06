import React from 'react'

const AddLocation = () => {
  return (
    <div>
        <h4>Add Location</h4>
        <p>Listing Location</p>
        <small>Pet parents will only get your full address once they've booked a reservation with you.</small>
        <br />
        <input type="text" placeholder="Enter Apartment, house number" /> <br />
        <input type="text" placeholder="Enter Street Name" /> <br />
        <input type="text" placeholder="Enter City" /> <br />
        <input type="text" placeholder="Enter State" /> <br />
        <input type="text" placeholder="Enter Zip Code" /> <br />
        <input type="text" placeholder="Enter Country" />
    </div>
  )
}

export default AddLocation;