import React from 'react'

const AddLocation = ({formData, setFormData}) => {
    const handleTextInputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    let answers = {
      about_me: '',
      service_name: '',
      listing_summary: '',
      price: '',
      apartment_house_number: '',
      street_name: '',
      city: '',
      zip_code: '',
      country: '',
      state: '',
      skills: '',
      other_skills: '',
      max_pets: '',
      pets_accepted: '',
      pet_size: '',
      adult_supervision: '',
      unsupervised_location: '',
      nighttime_location: '',
      potty_breaks: '',
      home_type: '',
      outdoor_area_size: '',
      transport_emergencies: '',
      last_minute_bookings: '',
      preferred_location: '',
      service_type: '',
      additional_description: '',
      profile_pic: null,
      photos: []
  }
  return (
    <div>
        <h4>Add Location</h4>
        <p>Listing Location</p>
        <small>Pet parents will only get your full address once they've booked a reservation with you.</small>
        <br />
        <input type="text" name="apartment_house_number" onChange={handleTextInputChange} placeholder="Enter Apartment, house number" /> <br />
        <input type="text" name="street_name" onChange={handleTextInputChange} placeholder="Enter Street Name" /> <br />
        <input type="text" name="city" onChange={handleTextInputChange} placeholder="Enter City" /> <br />
        <input type="text" name="state" onChange={handleTextInputChange} placeholder="Enter State" /> <br />
        <input type="text" name="zip_code" onChange={handleTextInputChange} placeholder="Enter Zip Code" /> <br />
        <input type="text" name="country" onChange={handleTextInputChange} placeholder="Enter Country" />
    </div>
  )
}

export default AddLocation;