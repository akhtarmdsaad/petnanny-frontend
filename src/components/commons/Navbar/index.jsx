import React, { useEffect, useState } from 'react'
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faSearch, faShoppingCart, faUser, faBars} from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../../interceptors/axios';

library.add(faSearch, faShoppingCart, faUser, faBars);


const Index = () => {
    let userLogin=false;
    const [isBacker, setIsBacker] = useState(false);
    useEffect(()=>{
        axiosInstance.get('is-backer/')
        .then(response => {
            console.log(response.data);
            setIsBacker(response.data.is_backer);
        })
        .catch(error => {
            console.log(error);
            setIsBacker(false);
        });
    },[]);
    if(localStorage.getItem('token'))
        userLogin = true;

  return (
    <div className="top">
        {/* 5 sections */}
        <div className='logo' onClick={()=>{
            window.location.href = '/';
        }}>
            <img src="/assets/images/petnanny_logo.jpg" alt="Petnanny" />
            <h3>Petnanny</h3>
        </div>
        <div className="location">
            <div className="icon">
                <img src="/location.png" alt="Location" />
            </div>
            <div className="text">
                <p>Delivering to 123456</p>
                <p>Update location</p>
            </div>
        </div>
        <div className="search">
            {/* TODO: for autocomplete purpose, you may use this searchbox */}
        {/* https://mui.com/material-ui/react-autocomplete/#system-FreeSolo.js */}
            <input type="text" placeholder="Search Here ..." />
            <div className="icon">
            <FontAwesomeIcon icon="search" />
            </div>
        </div>
        <div className="nav-links">
            <ul className='links'>
                <li className='link'><a href="/">Home</a></li> 
                <li className='link'><a href="#">Products</a></li>
                <li className='link'><a href="/services">Services</a></li>
                <li className='link'><a href="#">Careers</a></li>
                <li className='link'><a href="/requests">Requests</a></li>
                <li className='link'><a href="#">Contact</a></li>
                <li className='link'><a href="#">About</a></li>
                {/* this will be visible only if user not logged in */}
                {!userLogin ?
                    <li className='link'><a href="/signin">Login</a></li>
                    :
                    <li className='link'><a href="#" onClick={
                        (e)=>{
                            localStorage.removeItem('token')
                            localStorage.removeItem('refresh')
                            window.location.href = "/"
                        }
                    } >Logout</a></li>
                }

            </ul>
        </div>
        {
            userLogin ?
            <div className="icons">
                <FontAwesomeIcon icon="shopping-cart" />
                {isBacker ? <FontAwesomeIcon icon="user" onClick={()=>{
                    window.location.href = '/profile';
                }} /> : null}

            </div>
            :
            <div className="icons">
            </div>
        }
        <FontAwesomeIcon icon="bars" className="bars" onClick={()=>{
            document.querySelector('.nav-links .links').classList.toggle('active');
        }} />
    </div>
  )
}

export default Index;