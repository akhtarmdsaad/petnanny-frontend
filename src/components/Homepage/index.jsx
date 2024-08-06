import React from 'react';
import Navbar from '../commons/Navbar';
import HeroSection from './HeroSection';
import Title from '../commons/Title';
import Footer from '../commons/Footer';
import TopProducts from './TopProducts';
import Services from './Services';
import Testimonials from './Testimonials';




const index = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <TopProducts />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default index;