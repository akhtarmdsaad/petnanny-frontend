import React from 'react';
import './mainpage.scss';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';
import Title from '../commons/Title';

const Mainpage = () => {
  return (
    <>
    <Navbar />
    <div className="mainpage-parent">
        {/* 3 verifications
            1. ID verifications
            2. Testimonials 
            3. Pet backer intro test  */}
        <Title name='Petbacker Verification' />
        
        <a className='verify-id no1' href='petbacker-verification/idverify/'>
            <p>1</p>
            <div>
            <h4>ID Verification</h4>
            <small>Send us a photocopy of your government issued ID. Passport or Driving License with ID Number <span>Censored</span>. Then, send us a selfie of you with your ID Card together for verification</small>
            </div>
        </a>
        <a className='verify-id no2' href='petbacker-verification/petbacker-test'>
            <p>2</p>
            <div>
            <h4>Pet Sitter Intro Test</h4>
            <small>Get a quick crash course on what petnanny is, how to avoid potential pitfalls and how to maximise your chances of getting more jobs. Complete the test and earn yourself a badge for your listing.</small>
            </div>
        </a>
        {/* <a className='verify-id no3'>
            <p>3</p>
            <div>
            <h4>ID Verification</h4>
            <small>Send us a photocopy of your government issued ID. Passport or Driving License with ID Number <span>Censored</span>. Then, send us a selfie of you with your ID Card together for verification</small>
            </div>
        </a> */}
    </div>
    <br />
    <br />
    <br />
    <br />
    <Footer />
    </>
  )
}

export default Mainpage