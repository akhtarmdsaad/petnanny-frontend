import React,{useState} from 'react';
import './index.scss';
import Mainpage from './Mainpage';
import IDverify from './IDverify';
import Questions from './Questions';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';


const Index = () => {
    const [index,setIndex] = useState(0);
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='petbacker-verification/' element={<Mainpage />} />
                <Route path='petbacker-verification/idverify/' element={<IDverify />} />
                <Route path='petbacker-verification/petbacker-test/' element={<Questions />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index;