import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from '../../interceptors/axios';
import './addphotos.scss';

library.add(faPlusCircle, faTrash);

// component that shows photo 
const UploadedPhotos = ({images, setImages}) => {
  const handlePhotoDelete = (event) => {
    console.log("delete photo", event.target.parentElement.getAttribute('aria-label'));

    let elem = event.target.parentElement;
    let id = elem.getAttribute('aria-label');
    let max_parent = 5;
    while (!id && max_parent > 0) {
      elem = elem.parentElement;
      id = elem.getAttribute('aria-label');
      max_parent--;
    }
    axios.delete(`/imageupload/${id}/`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    // remove from images
    let new_images = images.filter(image => image.id !== parseInt(id));
    console.log("new images",new_images)
    setImages(new_images);

  }
  return (
    <div className="photos">
      {images.map((image, id) => {
        return (
          <div className="photo" aria-label={image.id} key={image.id}>
            <img src={`http://localhost:8000/${image.image}`} alt="home" key={"img"+image.id} />
            <button className='delete' onClick={handlePhotoDelete} key={"del"+image.id}>
              <FontAwesomeIcon icon={faTrash} size="1x" />
            </button>
          </div>
        );
      })}
    </div>
  );
}



const AddPhotos = () => {
  const [images,setImages] = useState([]);


  useEffect(() => {
    // fetch images
    let url = 'images/HomePics/'
    axios.get(url)
    .then(response => {
      let image_urls = response.data.images;
      // { id: 1, purpose: "HomePics", image: "/media/images/1653971382299.gif"}
      
      // save to images object
      setImages(image_urls);

    })
    .catch(error => {
      console.log(error);
    });
    }
  , []);

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    formData.append('purpose',"HomePics")

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
        image: response.data.image
      }
      setImages([...images, obj]);

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='addphotos-parent'>
        <h4>Add Photos</h4>
        <p>Upload photos of your home, yard, and pets</p>
        <UploadedPhotos images={images} setImages={setImages} />
        <div className="add-photos">
            {/* <FontAwesomeIcon icon="plus-circle" size="3x" /> */}
            
            {/* file upload */}
            <form encType='multipart/form-data'>
              <input type="file" id="file" name="file" accept="image/*" onChange={handleFileUpload} />
              <label htmlFor="file">
                <FontAwesomeIcon icon={faPlusCircle} size="3x" />
              </label>
            </form>
            {/* <p>Upload images here</p> */}
            </div>
    </div>
  )
}

export default AddPhotos