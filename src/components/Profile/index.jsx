import React, { useEffect, useState } from 'react'
import axiosInstance from '../../interceptors/axios';
import './index.scss';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';
import {UploadedPhotos} from '../PetbackerForm/AddPhotos';
import '../PetbackerForm/addphotos.scss';

const Index = () => {
    const [info, setInfo] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        axiosInstance.get('backers/')
        .then(response => {
            console.log(response);
            setInfo(response.data[0]);
            // details: { topic: "About Me", value: "hello" }
        })
        .catch(error => {
            console.log(error);
            setInfo([]);
        }
        );
        let url = 'images/HomePics/'
        axiosInstance.get(url)
        .then(response => {
        let image_urls = response.data.images;
        setImages(image_urls);
        })
        .catch(error => {
        console.log(error);
        });
    }
    , []);

    
  return (
    <>
    <Navbar />
    <div className='profile-petbacker-parent'>
        <div className='profile-petbacker'>
            <div className='profile-petbacker-header'>
                <h1>My Profile</h1>
            </div>
            {/* please verify your account */}
            {info && info.is_verified === false && (
                <div className='profile-petbacker-verify'>
                <h2>Account Verification</h2>
                <p>Verify your account to start getting clients</p>
                <button onClick={()=>{
                    window.location.href = '/petbacker-verification';
                }}>Verify Account</button>
            </div>
            )}
            <div className='profile-petbacker-body'>
                <div className='profile-petbacker-body-left'>
                        <div className='profile-petbacker-body-left-header'>
                            <h2>About Me</h2>
                        </div>
                        <div className='profile-petbacker-body-left-body'>
                            <div className='profile-petbacker-body-left-body-item'>
                                
                                <p>{info && info.about_me}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Additional Description</h3>
                                <p>{info && info.additional_description}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Adult Supervision</h3>
                                <p>{info && info.adult_supervision}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Apartment House Number</h3>
                                <p>{info && info.apartment_house_number}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>City</h3>
                                <p>{info && info.city}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Country</h3>
                                <p>{info && info.country}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Home Type</h3>
                                <p>{info && info.home_type}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Last Minute Bookings</h3>
                                <p>{info && info.last_minute_bookings? "Yes":"No" }</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Listing Summary</h3>
                                <p>{info && info.listing_summary}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Max Pets</h3>
                                <p>{info && info.max_pets}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Nighttime Location</h3>
                                <p>{info && info.nighttime_location}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Other Skills</h3>
                                <p>{info && info.other_skills}</p>
                            </div> 
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Outdoor Area Size</h3>
                                <p>{info && info.outdoor_area_size}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Pet Experience</h3>
                                <p>{info && info.pet_experience}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Pet Size</h3>
                                <p>{info && info.pet_size}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Pets Accepted</h3>
                                <p>{info && info.pets_accepted}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Potty Breaks</h3>
                                <p>{info && info.potty_breaks}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Preferred Location</h3>
                                <p>{info && info.preferred_location}</p>
                            </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Price</h3>
                                <p>{info && info.price}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Service Name</h3>
                                <p>{info && info.service_name}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Service Type</h3>
                                <p>{info && info.service_type}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Skills</h3>
                                <p>{info && info.skills}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>State</h3>
                                <p>{info && info.state}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Street Name</h3>
                                <p>{info && info.street_name}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Transport Emergencies</h3>
                                <p>{info && info.transport_emergencies? "Yes":"No"}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Unsupervised Location</h3>
                                <p>{info && info.unsupervised_location}</p>
                                </div>
                            <div className='profile-petbacker-body-left-body-item'>
                                <h3>Zip Code</h3>
                                <p>{info && info.zip_code}</p>
                                </div>


                        </div>
                    </div>

                    {/* show photos  */}
                    <div className='profile-petbacker-body-right'>
                        <div className='profile-petbacker-body-left-header'>
                            <h2>Photos</h2>
                        </div>
                        <div className='profile-petbacker-body-left-body'>
                            {images && images.map((image, index) => (
                                <div key={index}>
                                    <img src={`http://localhost:8000/${image.image}`} alt="petbacker" />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>        
    </div>
    <Footer />
    </>
  )
}

export default Index