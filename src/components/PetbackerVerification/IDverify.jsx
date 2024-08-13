import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './idverify.scss';
import axios from '../../interceptors/axios';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faPlus)



const Card = ({title,description}) => {
  const [image,setImage] = useState(null);

  useEffect(() => {
    // check if image is already present 
    axios.get('/images/Document/', {
      params: {
        purpose: "Document",
        description: title
      }
    })
    .then(response => {
      console.log(response);
      setImage(response.data.images[0]);
    })
    .catch(error => {
      console.log(error);
    });

  },[]);

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    formData.append('purpose',"Document");
    formData.append('description',title);

    try {
      const response = await axios.post('/imageupload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(response);
       
      //add to images 
      let obj = {
        id: response.data.id,
        purpose: response.data.purpose,
        image: response.data.image,
        description: response.data.description
      }
      setImage(obj);

    } catch (error) {
      console.error(error);
      alert("Error uploading image");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/imageupload/${image.id}/`);
      console.log(response);
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Error deleting image");
    }
  }
    return (
        <div className='card-parent'>
            {!image? (<>
            <input type="file" id={title} accept="image/*" onChange={handleFileUpload} />
            <label htmlFor={title}>
              <div className="card">
                <div className="container">
                <div className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <div>
                  {/* title and small text  */}
                  <h4>{title}</h4>
                  <small>{description}</small>
                </div>
                </div>
              </div>
            </label>
            </>)
            :(<div className="card">
                <div className='container'>
                  <img src={`http://localhost:8000/${image.image}`} alt="Driving License" />
                  <div>
                    {/* title and small text  */}
                    <h4>{title}</h4>
                    <small>Uploaded</small>
                  </div>
                </div>
                <div className="delete">
                  <button onClick={(e)=>{
                    e.preventDefault();
                    handleDelete();
                  }}>Delete</button>
                </div>
            </div>)}
        </div>
    )
}

const IDverify = () => {
  const handleSubmit = () => {
    // go back
    window.history.back();
  }
  return (
    <div className='id-verify-parent'>
        <div className='id-verify'>
            <h3>ID Verification</h3>
            
            <Card title="Identification Document" description="Required" />
            <Card title="Selfie with ID" description="Required" />

            <Card title="Driving License" description="Required for Taxi Services" />
            <Card title="Passport" description="If you don't have ID" />
            <Card title="Police Clearance " description="If you don't have ID" />
            <Card title="Payout ID" description="For verifying payout info" />
            <button className="submit"onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}



export default IDverify;