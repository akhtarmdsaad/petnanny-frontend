import React,{useState} from 'react';
import './index.scss';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';



const SignIn = () => {
  const [formData,setFormData] = useState({ username: '', password: '' });

    function handleSubmit(event){
        event.preventDefault(); 
        let url = "http://127.0.0.1:8000/api/token/"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            localStorage.setItem('token', data.access);
            localStorage.setItem('refresh', data.refresh);
            window.location.href = "/";
        })
    }
  return (
    <>
    <Navbar />
    <div className='signin-parent'>
        <form className="signin" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <div className="input">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" onChange={(e)=>{
                    setFormData({...formData, username: e.target.value})
                }} />
            </div>
            <div className="input">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" onChange={
                    (e) => {
                        setFormData({...formData, password: e.target.value})
                    } 
                } />
            </div>
            <a href="" className="forgot">Forgot Password?</a>
            <button className="signin-button">Sign In</button>
            <p className="signup">Don't have an account? <a href="/signup">Sign Up</a></p>
        </form>
    </div>
    <Footer />
    </>
  )
}

export default SignIn