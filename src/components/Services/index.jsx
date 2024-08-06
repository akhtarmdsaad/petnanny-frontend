import React from 'react';
import Navbar from '../commons/Navbar';
import './index.scss';
import HeroSection from './HeroSection2';
import ServicesList from './ServicesList';
import PetSitterReviews from './PetSitterReviews';
import Testimonials from './Testimonials';
import Footer from '../commons/Footer';

const Services = () => {
  return (
    <div className='container'>
        <Navbar />
        <HeroSection />
        <ServicesList />
        <PetSitterReviews />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Services;