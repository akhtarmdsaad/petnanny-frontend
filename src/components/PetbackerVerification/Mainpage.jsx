import React from 'react';
import './mainpage.scss';

const Mainpage = () => {
  return (
    <div>
        {/* 3 verifications
            1. ID verifications
            2. Testimonials 
            3. Pet backer intro test  */}
        
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
            <h4>ID Verification</h4>
            <small>Send us a photocopy of your government issued ID. Passport or Driving License with ID Number <span>Censored</span>. Then, send us a selfie of you with your ID Card together for verification</small>
            </div>
        </a>
        <a className='verify-id no3'>
            <p>3</p>
            <div>
            <h4>ID Verification</h4>
            <small>Send us a photocopy of your government issued ID. Passport or Driving License with ID Number <span>Censored</span>. Then, send us a selfie of you with your ID Card together for verification</small>
            </div>
        </a>
    </div>
  )
}

export default Mainpage