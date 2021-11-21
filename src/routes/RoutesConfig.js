import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUp from '../pages/signUp/SignUp';
import SignIn from '../pages/signIn/SignIn';
import Plans from '../pages/plans/Plans';
import SignPlan from '../pages/signPlan/SignPlan';

const RoutesConfig = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/plans" element={<Plans />} />
        <Route exact path="/sign-plan" element={<SignPlan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
