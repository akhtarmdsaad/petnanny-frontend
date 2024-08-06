import React from 'react'

const ServiceName = () => {
  return (
    <div>
        <h4>Give a name to your Service</h4>
        <form>
            <div className="form-group">
                <label >Service Name</label>
                <input type="text" className="form-control"  placeholder="e.g. Dog Walking" />
            </div>
        </form>
    </div>
  )
}

export default ServiceName