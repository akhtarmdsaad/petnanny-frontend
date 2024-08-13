import React,{useState} from 'react';
import './index.scss';
import Mainpage from './Mainpage';
import IDverify from './IDverify';
import Questions from './Questions';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';


const Index = () => {
    const [index,setIndex] = useState(0);
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Navbar />
                <Route path='petbacker-verification/' element={<Mainpage />} />
                <Route path='petbacker-verification/idverify/' element={<IDverify />} />
                <Route path='petbacker-verification/petbacker-test/' element={<Questions />} />
                <Footer />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index;