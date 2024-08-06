import React from 'react'

const DescribeService = () => {
  return (
    <div>
        <h4>Describe Your Service</h4>
        <form>
            <div className="form-group">
                <p >Listing Summary</p>
                <textarea className="form-control"  placeholder="e.g. I am a professional dog walker with 5 years of experience. I am available to walk your dog on weekdays and weekends. I can also provide dog sitting services." />
            </div>
            <div className="form-group">
                <p >How many pets can you watch at your home at one time</p>
                <input type="number" className="form-control"  placeholder="e.g. 2" />
            </div>
            <p>What pets do you accept?</p>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Dogs</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Cats</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Rabbits</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Guinea Pigs</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Ferrets</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Birds</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Reptiles</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >Others</label>
            </div>
            <p>Size of pets you accept?</p>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >1-5 kg</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >5-10 kg</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >10-20 kg</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >20-40 kg</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" />
                <label >40+ kg</label>
            </div>
            <p>What level of adult supervision will you provide?</p>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Pets will never be left unattended</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Unsupervised for no more than one hour</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Unsupervised for 1-2 hours</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Unsupervised for 2-4 hours</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Unsupervised for more than 4 hours</label>
            </div>
            <p>Where will pets be if they are left unsupervised at your home?</p>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Free roam of the house</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Outside in my private yard</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Sectioned off area of the house</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>The garage area</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>In separate rooms</label>
            </div>
            <p>Where will pets left at night</p>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Wherever they want</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>On my bed</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>In a dig bed</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>In a crate</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Outside in my private yard</label>
            </div>
            <p>How many potty breaks can you provide per day?</p>
            <div className="form-group">
                <input type="number" className="form-control"  placeholder="e.g. 2" />
            </div>
            <p>What best describes home you live in?</p>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Apartment/Condo</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Townhouse</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>House</label>
            </div>
            <p>What is the size of your outdoor area?</p>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>None</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Small</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Medium</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Large</label>
            </div>
            <p>Do you have transport for emergencies?</p>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Yes</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>No</label>
            </div>
            <p>Do you allow last minute bookings?</p>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>Yes</label>
            </div>
            <div className="form-group-radio">
                <input type="radio" name="adult_supervision" />
                <label>No</label>
            </div>
            <p>Preferred search location (Optional)</p>
            <textarea className="form-control"  placeholder="Enter a landmark, key location or area which you would like people who are searching for your services to find you in. This value can only be entered once e.g.: New Delhi" />
        </form>
    </div>
  )
}

export default DescribeService