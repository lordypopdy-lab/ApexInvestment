import React from 'react';
import FaceID from './pages/profile/FaceID';
import VerifyID from './pages/profile/VerifyID';
import FaceIdDone from './pages/profile/FaceIdDone';
import Verification from './pages/profile/Verification';
import CameraScan from './pages/profile/CameraScan';
import ChooseIdentity from './pages/profile/ChooseIdentity';
import CameraSuccess from './pages/profile/CameraSuccess';
import VerificationDone from './pages/profile/VerificationDone';
import VerificationComfirm from './pages/profile/VerificationComfirm';
import VerificationAdvance from './pages/profile/VerificationAdvance';
import ChooseVerification from './pages/profile/ChooseVerification';
import IdentityVerification from './pages/profile/IdentityVerification';
import GoogleTranslate from './pages/utils/GoogleTranslate';

import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { UserContextProvider } from '../context/UserContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = 'https://bitclub-server.vercel.app';
axios.defaults.withCredentials = true;
//https://bitclubserver.vercel.app
import '../src/fonts/fonts.css';
import '../src/fonts/font-icons.css';
import '../src/css/bootstrap.min.css';
import '../src/css/styles.css';
import '../src/css/swiper-bundle.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { initializeSwiper } from "../src/js/carousel"

import {
  Preloader,
} from "../src/pages/utils/Properties"

function App() {
  useEffect(() => {
    initializeSwiper();
    Preloader();
  }, [])

  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route index element={<Verification />} />
            <Route path='/FaceID' element={<FaceID />} />
            <Route path='/FaceIdDone' element={<FaceIdDone />} />
            <Route path='/VerifyID' element={<VerifyID />} />
            <Route path='/CameraScan' element={<CameraScan />} />
            <Route path='/Verification' element={<Verification />} />
            <Route path='/CameraSuccess' element={<CameraSuccess />} />
            <Route path='/ChooseIdentity' element={<ChooseIdentity />} />
            <Route path='/VerificationDone' element={<VerificationDone />} />
            <Route path='/VerificationComfirm' element={<VerificationComfirm />} />
            <Route path='/VerificationAdvance' element={<VerificationAdvance />} />
            <Route path='/ChooseVerification' element={<ChooseVerification />} />
            <Route path='/IdentityVerification' element={<IdentityVerification />} />
          </Routes>
        </Router>
        <Toaster position='top-right' toastOptions={{ duration: 4000 }} />
        <GoogleTranslate />
      </UserContextProvider>
    </>
  )
}

export default App
