import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Requests from './pages/Requests';
import PetbackerVerification from './components/PetbackerVerification';
import Mainpage from './components/PetbackerVerification/Mainpage';
import IDverify from './components/PetbackerVerification/IDverify';
import Questions from './components/PetbackerVerification/Questions';
import PetbackerForm from './components/PetbackerForm';

function App() {
  return (
    // <PetbackerVerification />
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="services" element={<Services />} />
          <Route path="requests" element={<Requests />} />
          <Route path="petbacker-form" element={<PetbackerForm />} />
          <Route path="petbacker-verification" element={<Mainpage />} />
          <Route path="petbacker-verification/idverify" element={<IDverify />} />
          <Route path="petbacker-verification/petbacker-test" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
