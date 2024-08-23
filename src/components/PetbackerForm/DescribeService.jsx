import React from 'react'

const DescribeService = ({formData, setFormData}) => {
    const handleTextInputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    // need a diff approach to store topicwise checkbox values. i.e. same name checkboxes will be stored in array
    const handleCheckboxChange = (e)=>{
        // add the data if not present in formData to prevent error formData[e.target.name] is undefined
        let data;
        if(!formData[e.target.name]){
            data = [];
        }
        else{
            data = formData[e.target.name].split(", ");
        }
        if(e.target.checked){
            data.push(e.target.value);
        }else{
            let new_arr = data.filter((item)=>item!==e.target.value);
            data = new_arr;
        }
        setFormData({...formData, [e.target.name]:data.join(", ")});
    }
    

  return (
    <div>
        <h4>Describe Your Service</h4>
        <form>
            <div className="form-group">
                <p >Listing Summary</p>
                <textarea className="form-control" name="listing_summary" onChange={handleTextInputChange}  placeholder="e.g. I am a professional dog walker with 5 years of experience. I am available to walk your dog on weekdays and weekends. I can also provide dog sitting services." />
            </div>
            <div className="form-group">
                <p >How many pets can you watch at your home at one time</p>
                <input type="number" name="max_pets" onChange={handleTextInputChange} className="form-control"  placeholder="e.g. 2" />
            </div>
            <p>What pets do you accept?</p>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Dogs" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Dogs
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Cats" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Cats
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Rabbits" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Rabbits
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Guinea Pigs" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Guinea Pigs
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Ferrets" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Ferrets
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Birds" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Birds
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Reptiles" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Reptiles
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Others" name="pets_accepted" onChange={handleCheckboxChange} />
                <label >Others
                </label>
            </div>
            <p>Size of pets you accept?</p>
            <div className="form-group-checkbox">
                <input type="checkbox" value="1-5 kg" name="pet_size" onChange={handleCheckboxChange} />
                <label >1-5 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="5-10 kg" name="pet_size" onChange={handleCheckboxChange} />
                <label >5-10 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="10-20 kg" name="pet_size" onChange={handleCheckboxChange} />
                <label >10-20 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="20-40 kg" name="pet_size" onChange={handleCheckboxChange} />
                <label >20-40 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="40+ kg" name="pet_size" onChange={handleCheckboxChange} />
                <label >40+ kg
                </label>
            </div>
            <p>What level of adult supervision will you provide?</p>
            <div className="form-group-radio">
                <input type="radio" value="Pets will never be left unattended" name="adult_supervision" onChange={handleTextInputChange} />
                <label>Pets will never be left unattended
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Unsupervised for no more than one hour" name="adult_supervision" onChange={handleTextInputChange} />
                <label>Unsupervised for no more than one hour
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Unsupervised for 1-2 hours" name="adult_supervision" onChange={handleTextInputChange} />
                <label>Unsupervised for 1-2 hours
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Unsupervised for 2-4 hours" name="adult_supervision" onChange={handleTextInputChange} />
                <label>Unsupervised for 2-4 hours
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Unsupervised for more than 4 hours" name="adult_supervision" onChange={handleTextInputChange} />
                <label>Unsupervised for more than 4 hours
                </label>
            </div>
            <p>Where will pets be if they are left unsupervised at your home?</p>
            <div className="form-group-radio">
                <input type="radio" value="Free roam of the house" name="unsupervised_location" onChange={handleTextInputChange} />
                <label>Free roam of the house
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Outside in my private yard" name="unsupervised_location" onChange={handleTextInputChange} />
                <label>Outside in my private yard
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Sectioned off area of the house" name="unsupervised_location" onChange={handleTextInputChange} />
                <label>Sectioned off area of the house
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="The garage area" name="unsupervised_location" onChange={handleTextInputChange} />
                <label>The garage area
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="In separate rooms" name="unsupervised_location" onChange={handleTextInputChange} />
                <label>In separate rooms
                </label>
            </div>
            <p>Where will pets left at night</p>
            <div className="form-group-radio">
                <input type="radio" value="Wherever they want" name="nighttime_location" onChange={handleTextInputChange} />
                <label>Wherever they want
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="On my bed" name="nighttime_location" onChange={handleTextInputChange} />
                <label>On my bed
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="In a dig bed" name="nighttime_location" onChange={handleTextInputChange} />
                <label>In a dig bed
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="In a crate" name="nighttime_location" onChange={handleTextInputChange} />
                <label>In a crate
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Outside in my private yard" name="nighttime_location" onChange={handleTextInputChange} />
                <label>Outside in my private yard
                </label>
            </div>
            <p>How many potty breaks can you provide per day?</p>
            <div className="form-group">
                <input type="number" className="form-control" name="potty_breaks" onChange={handleTextInputChange}  placeholder="e.g. 2" />
            </div>
            <p>What best describes home you live in?</p>
            <div className="form-group-radio">
                <input type="radio" value="Apartment/Condo" name="home_type" onChange={handleTextInputChange} />
                <label>Apartment/Condo
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Townhouse" name="home_type" onChange={handleTextInputChange} />
                <label>Townhouse
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="House" name="home_type" onChange={handleTextInputChange} />
                <label>House
                </label>
            </div>
            <p>What is the size of your outdoor area?</p>
            <div className="form-group-radio">
                <input type="radio" value="None" name="outdoor_area_size" onChange={handleTextInputChange} />
                <label>None
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Small" name="outdoor_area_size" onChange={handleTextInputChange} />
                <label>Small
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Medium" name="outdoor_area_size" onChange={handleTextInputChange} />
                <label>Medium
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Large" name="outdoor_area_size" onChange={handleTextInputChange} />
                <label>Large
                </label>
            </div>
            <p>Do you have transport for emergencies?</p>
            <div className="form-group-radio">
                <input type="radio" value="Yes" name="transport_emergencies" onChange={(e)=>{
                    setFormData({...formData, transport_emergencies: true});
                }} />
                <label>Yes
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="No" name="transport_emergencies" onChange={(e)=>{
                    setFormData({...formData, transport_emergencies: false});
                }} />
                <label>No
                </label>
            </div>
            <p>Do you allow last minute bookings?</p>
            <div className="form-group-radio">
                <input type="radio" value="Yes" name="Do you allow last minute bookings" onChange={(e)=>{
                    setFormData({...formData, last_minute_bookings: true});
                }} />
                <label>Yes
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="No" name="Do you allow last minute bookings" onChange={(e)=>{
                    setFormData({...formData, last_minute_bookings: false});
                }} />
                <label>No
                </label>
            </div>
            <p>Search location for Service (required)</p>
            {/* <textarea className="form-control" name="Preferred Search location" onChange={handleTextInputChange}  placeholder="Enter a landmark, key location or area which you would like people who are searching for your services to find you in. This value can only be entered once e.g.: New Delhi" /> */}
            <select name='preferred_location' onChange={handleTextInputChange}>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Bangalore</option>
              <option>Gurgaon</option>
            </select>
        </form>
    </div>
  )
}

export default DescribeService