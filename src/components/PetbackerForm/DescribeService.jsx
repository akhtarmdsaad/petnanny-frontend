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
            data = formData[e.target.name];
        }
        if(e.target.checked){
            data.push(e.target.value);
        }else{
            let new_arr = data.filter((item)=>item!==e.target.value);
            data = new_arr;
        }
        setFormData({...formData, [e.target.name]:data});
    }

  return (
    <div>
        <h4>Describe Your Service</h4>
        <form>
            <div className="form-group">
                <p >Listing Summary</p>
                <textarea className="form-control" name="Listing Summary" onChange={handleTextInputChange}  placeholder="e.g. I am a professional dog walker with 5 years of experience. I am available to walk your dog on weekdays and weekends. I can also provide dog sitting services." />
            </div>
            <div className="form-group">
                <p >How many pets can you watch at your home at one time</p>
                <input type="number" name="How many pets can you watch at your home at one time" onChange={handleTextInputChange} className="form-control"  placeholder="e.g. 2" />
            </div>
            <p>What pets do you accept?</p>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Dogs" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Dogs
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Cats" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Cats
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Rabbits" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Rabbits
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Guinea Pigs" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Guinea Pigs
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Ferrets" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Ferrets
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Birds" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Birds
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Reptiles" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Reptiles
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="Others" name="Pets Accepted" onChange={handleCheckboxChange} />
                <label >Others
                </label>
            </div>
            <p>Size of pets you accept?</p>
            <div className="form-group-checkbox">
                <input type="checkbox" value="1-5 kg" name="Size of Pets Accepted" onChange={handleCheckboxChange} />
                <label >1-5 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="5-10 kg" name="Size of Pets Accepted" onChange={handleCheckboxChange} />
                <label >5-10 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="10-20 kg" name="Size of Pets Accepted" onChange={handleCheckboxChange} />
                <label >10-20 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="20-40 kg" name="Size of Pets Accepted" onChange={handleCheckboxChange} />
                <label >20-40 kg
                </label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" value="40+ kg" name="Size of Pets Accepted" onChange={handleCheckboxChange} />
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
                <input type="radio" value="Free roam of the house" name="where pets left unsupervised" onChange={handleTextInputChange} />
                <label>Free roam of the house
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Outside in my private yard" name="where pets left unsupervised" onChange={handleTextInputChange} />
                <label>Outside in my private yard
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Sectioned off area of the house" name="where pets left unsupervised" onChange={handleTextInputChange} />
                <label>Sectioned off area of the house
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="The garage area" name="where pets left unsupervised" onChange={handleTextInputChange} />
                <label>The garage area
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="In separate rooms" name="where pets left unsupervised" onChange={handleTextInputChange} />
                <label>In separate rooms
                </label>
            </div>
            <p>Where will pets left at night</p>
            <div className="form-group-radio">
                <input type="radio" value="Wherever they want" name="where pets left at night" onChange={handleTextInputChange} />
                <label>Wherever they want
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="On my bed" name="where pets left at night" onChange={handleTextInputChange} />
                <label>On my bed
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="In a dig bed" name="where pets left at night" onChange={handleTextInputChange} />
                <label>In a dig bed
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="In a crate" name="where pets left at night" onChange={handleTextInputChange} />
                <label>In a crate
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Outside in my private yard" name="where pets left at night" onChange={handleTextInputChange} />
                <label>Outside in my private yard
                </label>
            </div>
            <p>How many potty breaks can you provide per day?</p>
            <div className="form-group">
                <input type="number" className="form-control" name="Potty Breaks" onChange={handleTextInputChange}  placeholder="e.g. 2" />
            </div>
            <p>What best describes home you live in?</p>
            <div className="form-group-radio">
                <input type="radio" value="Apartment/Condo" name="Home you live in" onChange={handleTextInputChange} />
                <label>Apartment/Condo
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Townhouse" name="Home you live in" onChange={handleTextInputChange} />
                <label>Townhouse
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="House" name="Home you live in" onChange={handleTextInputChange} />
                <label>House
                </label>
            </div>
            <p>What is the size of your outdoor area?</p>
            <div className="form-group-radio">
                <input type="radio" value="None" name="Size of outdoor area" onChange={handleTextInputChange} />
                <label>None
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Small" name="Size of outdoor area" onChange={handleTextInputChange} />
                <label>Small
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Medium" name="Size of outdoor area" onChange={handleTextInputChange} />
                <label>Medium
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="Large" name="Size of outdoor area" onChange={handleTextInputChange} />
                <label>Large
                </label>
            </div>
            <p>Do you have transport for emergencies?</p>
            <div className="form-group-radio">
                <input type="radio" value="Yes" name="Do you have transport emergencies" onChange={handleTextInputChange} />
                <label>Yes
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="No" name="Do you have transport emergencies" onChange={handleTextInputChange} />
                <label>No
                </label>
            </div>
            <p>Do you allow last minute bookings?</p>
            <div className="form-group-radio">
                <input type="radio" value="Yes" name="Do you allow last minute bookings" onChange={handleTextInputChange} />
                <label>Yes
                </label>
            </div>
            <div className="form-group-radio">
                <input type="radio" value="No" name="Do you allow last minute bookings" onChange={handleTextInputChange} />
                <label>No
                </label>
            </div>
            <p>Search location for Service (required)</p>
            {/* <textarea className="form-control" name="Preferred Search location" onChange={handleTextInputChange}  placeholder="Enter a landmark, key location or area which you would like people who are searching for your services to find you in. This value can only be entered once e.g.: New Delhi" /> */}
            <select name='Search location for Service' onChange={handleTextInputChange}>
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