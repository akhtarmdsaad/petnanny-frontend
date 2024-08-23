import React from 'react'

const ServiceName = ({formData, setFormData}) => {
    const handleTextInputChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
  return (
    <div>
        <h4>Give a name to your Service</h4>
        <form>
            <div className="form-group">
                <label >Service Name</label>
                <input type="text" className="form-control" onChange={handleTextInputChange} name="service_name"  placeholder="e.g. Dog Walking" />
            </div>
        </form>
    </div>
  )
}

export default ServiceName