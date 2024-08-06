import React from 'react'

const AboutMe = () => {
  return (
    <div>
        <h4>Personal Information</h4>
        <form>
            <div className="form-group">
                <label >Introduce yourself and why you enjoy being with pets</label>
                <input type="text" className="form-control"  placeholder="e.g. I'm a pet lover and i love pets as they are absolutely adorable" />
            </div>
            <div className="form-group">
                <label >Tell us about the type of pet you have and your experience with it</label>
                <input type="text" className="form-control"  placeholder="e.g. I own a german shepherd since I was 18, its a wonserful pet and takes care of me and my family. I walk and sleep with her daily." />
            </div>
            <h4>Your Skills and Qualifications</h4>
            <div className="form-group-checkbox">
                <input type="checkbox" className="form-control" value="" />
                <label className="checkbox1">Experience in training</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" className="form-control" value="" />
                <label className="checkbox1">Behavioral modifications</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" className="form-control" value="" />
                <label className="checkbox1">Able to recognise subtle sign of a problem</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" className="form-control" value="" />
                <label className="checkbox1">Skill to administer modifications</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" className="form-control" value="" />
                <label className="checkbox1">Some veterinary experience</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" className="form-control" value="" />
                <label className="checkbox1">Basic Understanding of how to manage and care for pets</label>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" className="form-control" value="" />
                <label className="checkbox1">Grooming Certificate</label>
            </div>
            <div className="form-group">
                <label>Other special skills with pet or qualifications</label>
                <input type="text" className="form-control"  placeholder="Mention if you have any other experience in training, grooming etc" />
            </div>
        </form>
    </div>
  )
}

export default AboutMe