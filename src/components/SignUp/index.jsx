import React, { useState } from 'react';
import './index.scss';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';
import axios from '../../interceptors/axios';

const checkUsernameAvailability = async ({username, setCanTakeUsername}) => {
    try {
      const response = await axios.get(`check-username/${username}`);
        if (response.data.exists === true) {
            setCanTakeUsername(false);
        } else {
            setCanTakeUsername('Username is available');
        }
    } catch (error) {
      console.error(error);
    }
  };
  

const SignUp = () => {
    const [canTakeUsername,setCanTakeUsername] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
     function handleUsernameChange(e) {
        setFormData({...formData, username: e.target.value})
        checkUsernameAvailability({username: e.target.value, setCanTakeUsername});
    }

    function handleSignup() {
        axios.post('user-signup/', formData)
        .then((response) => {
            if(response.data.success === true) {
                alert('User created successfully');
                window.location.href = '/signin';
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

  return (
    <>
        <Navbar />
        <div className='signup-parent'>
            <div className="signup">
                <h2>Sign Up</h2>
                <div className="input">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your Username" onChange={handleUsernameChange}/>
                    {canTakeUsername === false && <p style={{color:'red'}}>Username is already taken</p>}
                </div>
                <div className="input">
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email"  onChange={(e)=>{
                        setFormData({...formData, email: e.target.value})
                    }} />
                </div>
                <div className="input">
                    <label>Phone</label>
                    <input type="text" placeholder="Enter your phone"  onChange={(e)=>{
                        setFormData({...formData, phone: e.target.value})
                    }} />
                </div>
                <div className="input">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"  onChange={(e)=>{
                        setFormData({...formData, password: e.target.value})
                    }} />
                </div>
                <div className="input">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password"  onChange={(e)=>{
                        setFormData({...formData, confirmPassword: e.target.value})
                    }} />
                </div>
                {formData.password !== formData.confirmPassword && <p style={{color:'red'}}>Passwords do not match</p>}

                {(canTakeUsername === false || formData.password !== formData.confirmPassword) ?
                        <button className="signup-button disabled" disabled>Sign Up</button>
                    :
                        <button className="signup-button" onClick={handleSignup}>Sign Up</button>

                }
                
                <p className="signin">Already have an account? <a href="/signin">Sign In</a></p>
            </div>        
        </div>
        <Footer />
    </>
  )
}

export default SignUp;