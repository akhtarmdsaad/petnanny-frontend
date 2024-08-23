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
import RequestForm from './components/RequestForm';
import RequestDetailView from './components/RequestDetailView';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import RequestDetailViewBacker from './components/RequestDetailViewBacker';
import PetBoardingRequestDetailView from './components/PetBoardingRequestDetailView';
import PetTrainingRequestDetailView from './components/PetTrainingRequestDetailView';
import DogWalkingRequestDetailView from './components/DogWalkingRequestDetailView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="services" element={<Services />} />
          <Route path="requests" element={<Requests />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='request-detail-to-backer/:id' element={<RequestDetailViewBacker />} />
          <Route path='request-detail-to-backer/petboarding/:id' element={<PetBoardingRequestDetailView />} />
          <Route path='request-detail-to-backer/pettraining/:id' element={<PetTrainingRequestDetailView />} />
          <Route path='request-detail-to-backer/dogwalking/:id' element={<DogWalkingRequestDetailView />} />
          <Route path='requests/:id' element={<RequestDetailView />} />
          <Route path="requests/petboarding/:id" element={<PetBoardingRequestDetailView />} />
          <Route path="requests/pettraining/:id" element={<PetTrainingRequestDetailView />} />
          <Route path="requests/dogwalking/:id" element={<DogWalkingRequestDetailView />} />
          <Route path="petbacker-form" element={<PetbackerForm />} />
          <Route path="petbacker-verification" element={<Mainpage />} />
          <Route path="petbacker-verification/idverify" element={<IDverify />} />
          <Route path="petbacker-verification/petbacker-test" element={<Questions />} />
          <Route path='request-form' element={<RequestForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
