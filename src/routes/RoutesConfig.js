import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUp from '../pages/signUp/SignUp';

const RoutesConfig = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
