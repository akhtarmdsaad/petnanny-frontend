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
                
                    {info && info.details && info.details.map((detail, index) => (
                    <div className='profile-petbacker-body-left' key={index}>
                        <div className='profile-petbacker-body-left-header'>
                            <h2>{detail?.topic}</h2>
                        </div>
                        <div className='profile-petbacker-body-left-body'>
                            {Array.isArray(detail?.value) ?
                            detail?.value.map((value, index) => (
                                <div key={index}>
                                    <p>{value}</p>
                                </div>
                            ))
                            :
                            <p>{detail?.value}</p>
                            }
                        </div>
                    </div>
                    ))}

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