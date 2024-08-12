import React from 'react'

const AboutMe = ({formData, setFormData}) => {
    const handleTextInputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    
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
        <h4>Personal Information</h4>
        <form>
            <div className="form-group">
                <label >Introduce yourself and why you enjoy being with pets</label>
                <input type="text" className="form-control" onChange={handleTextInputChange} name="About Me"
                placeholder="e.g. I'm a pet lover and i love pets as they are absolutely adorable" />
            </div>
            <div className="form-group">
                <label >Tell us about the type of pet you have and your experience with it</label>
                <input type="text" className="form-control"  onChange={handleTextInputChange} name="Pet Experience"
                placeholder="e.g. I own a german shepherd since I was 18, its a wonserful pet and takes care of me and my family. I walk and sleep with her daily." />
            </div>
            <h4>Your Skills and Qualifications</h4>
            <div className="form-group-checkbox">
                <input onChange={handleCheckboxChange} type="checkbox" value="Experience in training" className="form-control" name="Your Skills and Qualifications"/>
                <label className="checkbox1">Experience in training</label>
            </div>
            <div className="form-group-checkbox">
                <input onChange={handleCheckboxChange} type="checkbox" value="Behavioral modifications" className="form-control" name="Your Skills and Qualifications"/>
                <label className="checkbox1">Behavioral modifications
                </label>
            </div>
            <div className="form-group-checkbox">
                <input onChange={handleCheckboxChange} type="checkbox" value="Able to recognise subtle sign of a problem" className="form-control" name="Your Skills and Qualifications"/>
                <label className="checkbox1">Able to recognise subtle sign of a problem
                </label>
            </div>
            <div className="form-group-checkbox">
                <input onChange={handleCheckboxChange} type="checkbox" value="Skill to administer modifications" className="form-control" name="Your Skills and Qualifications"/>
                <label className="checkbox1">Skill to administer modifications
                </label>
            </div>
            <div className="form-group-checkbox">
                <input onChange={handleCheckboxChange} type="checkbox" value="Some veterinary experience" className="form-control" name="Your Skills and Qualifications"/>
                <label className="checkbox1">Some veterinary experience
                </label>
            </div>
            <div className="form-group-checkbox">
                <input onChange={handleCheckboxChange} type="checkbox" value="Basic Understanding of how to manage and care for pets" className="form-control" name="Your Skills and Qualifications"/>
                <label className="checkbox1">Basic Understanding of how to manage and care for pets
                </label>
            </div>
            <div className="form-group-checkbox">
                <input onChange={handleCheckboxChange} type="checkbox" value="Grooming Certificate" className="form-control" name="Your Skills and Qualifications"/>
                <label className="checkbox1">Grooming Certificate
                </label>
            </div>
            <div className="form-group">
                <label>Other special skills with pet or qualifications</label>
                <input type="text" className="form-control"  name="Other Skills" onChange={handleTextInputChange}
                placeholder="Mention if you have any other experience in training, grooming etc" />
            </div>
        </form>
    </div>
  )
}

export default AboutMe