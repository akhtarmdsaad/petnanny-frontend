import React,{useState} from 'react'
import PetBoarding from './PetBoarding';
import DogWalking from './DogWalking';
import PetTraining from './PetTraining';
import './index.scss';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';

const Index = () => {
    // form index
    const [index,setIndex] = useState(0);
    const forms = [<PetBoarding />, <DogWalking />, <PetTraining />];
  return (
    <div className='request-form-parent'>
      <Navbar />
        <div className="request-form">
            {/* back button   */}
            {index !== 0 && (
                <div className="back" onClick={() => setIndex(0)}>
                    <i className="fas fa-arrow-left"></i>
                    <p>Back</p>
                </div>
            )}
            {/* welcome screen */}
            {index === 0 ? ( 
              <div className='welcome-screen'>
                <div className="welcome">
                    <h2>Welcome to PetCare</h2>
                    <p>What service do you need today?</p>
                </div>
                <div className="service">
                    <h3>Service</h3>
                    <p>Select the service you need</p>
                    <div className="service-list">
                        <div className="service-item" onClick={() => setIndex(1)}>
                            <h4>Pet Boarding</h4>
                            <p>Board your pet at a host's home</p>
                        </div>
                        <div className="service-item" onClick={() => setIndex(2)}>
                            <h4>Dog Walking</h4>
                            <p>Get your dog walked by a professional</p>
                        </div>
                        <div className="service-item" onClick={() => setIndex(3)}>
                            <h4>Pet Training</h4>
                            <p>Train your pet with a professional</p>
                        </div>
                    </div>
                </div>
                </div>
            ):forms[index-1]}
        </div>
        <br />
        <br />
      <Footer />
    </div>
  )
}

export default Index;