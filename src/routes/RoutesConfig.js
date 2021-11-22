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
import NewSignatureForm from '../pages/signPlan/components/NewSignatureForm';
import NewAddressForm from '../pages/signPlan/components/NewAddressForm';
import PlanInfo from '../pages/planInfo/PlanInfo';

const RoutesConfig = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/plans" element={<Plans />} />
        <Route exact path="/sign-plan" element={<SignPlan />}>
          <Route exact path="/sign-plan" element={<NewSignatureForm />} />
          <Route exact path="/sign-plan/address" element={<NewAddressForm />} />
        </Route>
        <Route exact path="/plan-info" element={<PlanInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
