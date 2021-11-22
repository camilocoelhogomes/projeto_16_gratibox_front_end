import React, { useState } from 'react';
import GlobalStyle from './assets/style/GlobalStyle';
import RoutesConfig from './routes/RoutesConfig';
import UserContext from './Context/UserContext';
import PlansConfigContext from './Context/PlansConfigContext';

const App = function () {
  const [userSign, setUserSign] = useState();
  const [userData, setUserData] = useState();
  const [plansConfig, setPlansConfig] = useState();

  const updateUserSign = ({ input, value }) => {
    const newUserSign = { ...userSign };
    newUserSign[input] = value;
    setUserSign(newUserSign);
  };

  const updatePlansConfig = ({ input, value }) => {
    const newPlansConfig = { ...plansConfig };
    newPlansConfig[input] = value;
    setPlansConfig(newPlansConfig);
  };

  return (
    <UserContext.Provider value={{
      userSign, updateUserSign, userData, setUserData,
    }}
    >
      <PlansConfigContext.Provider value={{ plansConfig, updatePlansConfig, setPlansConfig }}>
        <GlobalStyle />
        <RoutesConfig />
      </PlansConfigContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
